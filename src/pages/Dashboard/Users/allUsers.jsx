import React, { Fragment, useEffect } from "react";

import DashboardLayout from "../../../components/DashboardLayout";
import { useNavigate } from "react-router-dom";
import Button1 from "../../../components/Button1";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../components/tableComponent/Table";
import { fetchAllUsers } from "../../../redux/slices/usersSlice/usersThunks";
import { Popover, Transition } from "@headlessui/react";
import { MdOutlineMoreHoriz } from "react-icons/md";
import EditUser from "./modals/EditUser";

const AllUsers = () => {
  const { all_users } = useSelector((state) => state.users);
  console.log("all_users", all_users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  const [openEditUser, setOpenEditUser] = React.useState(false);
  const [userId, setUserId] = React.useState("");
  const handleEditUser = () => {
    setOpenEditUser(!openEditUser);
  };

  const columns = [
    {
      Header: "No",
      accessor: "id",
      filtable: "false",
      Cell: ({ row }) => {
        return <div className="flex gap-4 items-center">{row.index + 1}</div>;
      },
    },
    {
      Header: "Names",
      accessor: "name",
      Cell: ({ row }) => {
        return (
          <div className="flex gap-4 items-center">
            <img
              src={row.original.avatar}
              alt=""
              className="h-[40px] w-[40px] rounded-full"
            />
            <p className=" text-[#4B4B4B] font-normal">
              {`${row.original.firstname} ${row.original.lastname}`}
            </p>
          </div>
        );
      },
      filtable: "true",
    },
    {
      Header: "Phone Number",
      accessor: "phone",
      filtable: "false",
      Cell: ({ row }) => {
        return <div className="font-normal">{`${row.original.phone}`}</div>;
      },
    },
    {
      Header: "Email",
      accessor: "email",
      filtable: "false",
    },
    {
      Header: "Role",
      accessor: "role",
      Cell: ({ row }) => {
        return (
          <div className=" font-normal capitalize">
            {row.original.role ? row.original.role : "Null"}
          </div>
        );
      },
      filtable: "true",
    },

    {
      Header: "Joined Date",
      accessor: "date",
      filtable: "false",
      Cell: ({ row }) => {
        return (
          <div className="text-rubik ">
            {`${row.original.createdAt.split("T")[0]}`}
          </div>
        );
      },
    },
    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => {
        return (
          <div className="flex flex-row ">
            <Popover className="relative">
              <Popover.Button>
                <MdOutlineMoreHoriz size={25} className="cursor-pointer" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10">
                  <div
                    className="flex flex-col bg-white shadow-md border border-black/10  rounded-sm text-xs "
                    onClick={() => {}}
                  >
                    <h1
                      className="px-4 py-2 w-full hover:bg-[#D9D9D9] text-center cursor-pointer text-[16px]"
                      onClick={() => {
                        setUserId(row.original._id);
                        handleEditUser();
                      }}
                    >
                      Edit
                    </h1>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <DashboardLayout>
        <div className="flex justify-between my-5">
          <EditUser
            openModal={openEditUser}
            handleModal={handleEditUser}
            userId={userId}
            setUserId={setUserId}
          />
          <Table
            title={
              <div className="flex items-center space-x-5">
                <p className="text-lg font-bold">Users</p>
                <div className="flex px-3 pt-2 text-[16px] items-center bg-lightWhite rounded-md">
                  <p className="text-black/70">{all_users?.length}</p>
                </div>
              </div>
            }
            action={<div className="w-full"></div>}
            columns={columns}
            data={all_users}
          />
        </div>
      </DashboardLayout>
    </>
  );
};
export default AllUsers;
