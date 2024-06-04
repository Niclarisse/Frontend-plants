import DashboardLayout from "../../../components/DashboardLayout";
import { useNavigate } from "react-router-dom";

import CategoryTable from "../../../components/Tables/CategoryTable";
import { Fragment, useState } from "react";
import Table from "../../../components/tableComponent/Table";
import { Popover, Transition } from "@headlessui/react";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { useSelector } from "react-redux";
import Button1 from "../../../components/Button1";
import AddCategory from "./modal/AddCategory";
import DeleteCategory from "./modal/DeleteCategory";
import EditCategory from "./modal/EditCategory";

const AllCategories = () => {
  const { categories } = useSelector((state) => state.category);
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [categoryId, setCategoryId] = useState(""); // to store the id of the category
  const [openEditCategory, setOpenEditCategory] = useState(false);
  const [categoryData, setCategoryData] = useState({});

  const navigate = useNavigate();

  const handleOpenAddCategory = () => {
    setOpen(!open);
  };

  const handleDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };
  const handleDelete = (key) => {
    setCategoryId(key);
    handleDeleteModal();
  };

  const handleEditCategory = () => {
    setOpenEditCategory(!openEditCategory);
  };

  const columns = [
    {
      Header: "Id",
      accessor: "id",
      filtable: "false",
      Cell: ({ row }) => {
        return (
          <div className="flex gap-4 items-center">
            <p className=" text-[#4B4B4B]">{row.index + 1}</p>
          </div>
        );
      },
    },
    {
      Header: "Names",
      accessor: "title",
      Cell: ({ row }) => {
        return (
          <div className="flex gap-4 items-center font-normal">
            <p className=" text-[#4B4B4B]">{row.original.title}</p>
          </div>
        );
      },
      filtable: "true",
    },
    {
      Header: "Description",
      accessor: "description",
      filtable: "false",
      Cell: ({ row }) => {
        return (
          <div className="flex gap-4 items-center font-normal">
            <p className=" text-[#4B4B4B]">{row.original.description}</p>
          </div>
        );
      },
    },
    {
      Header: "Status",
      accessor: "status",
      filtable: "true",
      Cell: ({ row }) => {
        return (
          <div className="flex gap-4 items-center font-normal">
            <p className=" text-[#4B4B4B] capitalize">{row.original.status}</p>
          </div>
        );
      },
    },
    {
      Header: "Created At",
      accessor: "created_at",
      filtable: "false",
      Cell: ({ row }) => {
        return (
          <div className="flex gap-4 items-center">
            <p className="text-[#4B4B4B] font-normal">
              {row.original.createdAt.split("T")[0]}
            </p>
          </div>
        );
      },
    },

    {
      Header: "Action",
      accessor: "",
      Cell: ({ row }) => {
        return (
          <div className="flex flex-row  font-bold text-lg">
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
                      className="px-4 py-2 w-full hover:bg-[#D9D9D9] text-center cursor-pointer text-lg"
                      onClick={() => {
                        setCategoryData(row.original);
                        handleEditCategory();
                      }}
                    >
                      Edit
                    </h1>

                    <h1
                      className="px-4 py-2 hover:bg-[#D9D9D9] text-center text-error cursor-pointer text-lg"
                      onClick={() => {
                        handleDelete(row.original._id);
                      }}
                    >
                      Delete
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
    <DashboardLayout>
      <AddCategory openModal={open} handleModal={handleOpenAddCategory} />
      <DeleteCategory
        handleModal={handleDeleteModal}
        isModalOpen={openDeleteModal}
        id={categoryId}
      />
      <EditCategory
        data={categoryData}
        handleModal={handleEditCategory}
        openModal={openEditCategory}
        setData={setCategoryData}
      />
      <Table
        title={
          <div className="flex items-center space-x-5">
            <p className="text-lg font-bold">Categories</p>
            <div className="flex px-3 pt-2 text-[16px] items-center bg-lightWhite rounded-md">
              <p className="text-black/70">{categories?.length}</p>
            </div>
          </div>
        }
        action={
          <div className="w-full">
            <Button1
              type="button"
              content={
                <div className="flex  items-center gap-2 justify-center">
                  <p className="text-white text-lg">Add new</p>
                </div>
              }
              loading={false}
              onClick={handleOpenAddCategory}
              btnColor=""
              Style={
                "text-white h-12 min-w-[130px] border border-fontGrey rounded-lg bg-[#01A653]"
              }
            />
          </div>
        }
        columns={columns}
        data={categories}
      />
    </DashboardLayout>
  );
};

export default AllCategories;
