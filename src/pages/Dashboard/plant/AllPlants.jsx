import ProductTable from "../../../components/Tables/CategoryTable";
import DashboardLayout from "../../../components/DashboardLayout";
import { useNavigate } from "react-router-dom";
import PlantTable from "../../../components/Tables/PlantTable";
import Button1 from "../../../components/Button1";
import Table from "../../../components/tableComponent/Table";
import { useSelector } from "react-redux";
import { Popover, Transition } from "@headlessui/react";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { Fragment, useState } from "react";
import { truncate } from "../../../utils";
import AddPlant from "./modals/AddPlant";
import DeletePlant from "./modals/DeletePlant";

const AllPlants = () => {
  const { allplants } = useSelector((state) => state.plants);
  const [openAdd, setOPenAdd] = useState(false);
  const [plantId, setPlantId] = useState(null);
  const navigate = useNavigate();

  const [openDelete, setOpenDelete] = useState(false);

  const handleDelete = () => {
    setOpenDelete(!openDelete);
  };

  const handleOpenAddPlant = () => {
    setOPenAdd(!openAdd);
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
            <p className=" text-[#4B4B4B]">
              {truncate(row.original.title, 20)}
            </p>
          </div>
        );
      },
      filtable: "true",
    },
    {
      Header: "Image",
      accessor: "",
      Cell: ({ row }) => {
        return (
          <div className="flex gap-4 items-center font-normal">
            <p className=" text-[#4B4B4B]">{row.original.title}</p>
          </div>
        );
      },
      filtable: "false",
    },
    {
      Header: "Common Name",
      accessor: "commonName",
      Cell: ({ row }) => {
        return (
          <div className="flex gap-4 items-center font-normal">
            <p className=" text-[#4B4B4B]">{row.original.commonName}</p>
          </div>
        );
      },
      filtable: "true",
    },
    {
      Header: "Scientific Name",
      accessor: "scientificName",
      Cell: ({ row }) => {
        return (
          <div className="flex gap-4 items-center font-normal">
            <p className=" text-[#4B4B4B]">{row?.original?.scientificName}</p>
          </div>
        );
      },
      filtable: "true",
    },
    {
      Header: "Price",
      accessor: "price",
      Cell: ({ row }) => {
        return (
          <div className="flex gap-4 items-center font-normal">
            <p className=" text-[#4B4B4B]">{row.original.price}</p>
          </div>
        );
      },
      filtable: "true",
    },
    {
      Header: "Part to use",
      accessor: "partToUse",
      Cell: ({ row }) => {
        return (
          <div className="flex gap-4 items-center font-normal">
            <p className=" text-[#4B4B4B]">
              {truncate(row.original.partToUse.join(", "), 20)}
            </p>
          </div>
        );
      },
      filtable: "false",
    },
    {
      Header: "Description",
      accessor: "description",
      filtable: "false",
      Cell: ({ row }) => {
        return (
          <div className="flex gap-4 items-center font-normal">
            <p className=" text-[#4B4B4B]">
              {truncate(row.original.description, 100)}
            </p>
          </div>
        );
      },
    },
    {
      Header: "Medecinal use",
      accessor: "medicinalUse",
      Cell: ({ row }) => {
        return (
          <div className="flex gap-4 items-center font-normal">
            <p className=" text-[#4B4B4B]">
              {truncate(row.original.medicinalUse.join(", "), 30)}
            </p>
          </div>
        );
      },
      filtable: "false",
    },
    {
      Header: "how to use",
      accessor: "howToUse",
      Cell: ({ row }) => {
        return (
          <div className="flex gap-4 items-center font-normal">
            <p className=" text-[#4B4B4B]">
              {truncate(row.original.howToUse.join(", "), 30)}
            </p>
          </div>
        );
      },
      filtable: "false",
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
              {row?.original?.createdAt?.split("T")[0]}
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
                        // setCategoryData(row.original);
                        // handleEditCategory();
                      }}
                    >
                      Edit
                    </h1>

                    <h1
                      className="px-4 py-2 hover:bg-[#D9D9D9] text-center text-error cursor-pointer text-lg"
                      onClick={() => {
                        setPlantId(row.original._id);
                        handleDelete();
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

  console.log("allplants", allplants);

  return (
    <DashboardLayout>
      <div>
        <AddPlant openModal={openAdd} handleModal={handleOpenAddPlant} />
        <DeletePlant
          handleModal={handleDelete}
          isModalOpen={openDelete}
          id={plantId}
        />
        {/* <div className="flex justify-between my-5 ">
          <h1 className="poppins text-xl font-semibold">All Plants</h1>
          <button
            className="text-white px-4 py-2 bg-[#003F13] rounded-md text-lg"
            onClick={() => navigate("/dashboard/plant/add")}
          >
            Add Plant
          </button>
        </div>
        <PlantTable /> */}
        <Table
          title={
            <div className="flex items-center space-x-5">
              <p className="text-lg font-bold">Plants</p>
              <div className="flex px-3 pt-2 text-[16px] items-center bg-lightWhite rounded-md">
                <p className="text-black/70">{allplants?.length}</p>
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
                onClick={handleOpenAddPlant}
                btnColor=""
                Style={
                  "text-white h-12 min-w-[130px] border border-fontGrey rounded-lg bg-[#01A653]"
                }
              />
            </div>
          }
          columns={columns}
          data={allplants}
        />
      </div>
    </DashboardLayout>
  );
};

export default AllPlants;
