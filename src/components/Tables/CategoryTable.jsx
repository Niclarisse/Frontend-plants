import { useState } from "react";
import { Drawer, Table } from "antd";
import { BsThreeDots } from "react-icons/bs";
import { GrFormView } from "react-icons/gr";
import { Dropdown } from "antd";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { useSelector } from "react-redux";
import DeleteCategory from "../../pages/Dashboard/plantCategory/modal/DeleteCategory";

const CategoryTable = () => {
  const { categories } = useSelector((state) => state.category);
  const [open, setOpen] = useState(false);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [categoryId, setCategoryId] = useState(""); // to store the id of the category

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleDeleteModal = () => {
    setOpenDeleteModal(!openDeleteModal);
  };
  const handleDelete = (key) => {
    setCategoryId(key);
    handleDeleteModal();
  };

  const items = [
    {
      label: (
        <div className="flex gap-2 " onClick={showDrawer}>
          <GrFormView size={23} color="green" />{" "}
          <h1 className="text-[#025222] text-sm">View</h1>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="flex gap-2">
          <AiOutlineEdit size={23} color="black" />{" "}
          <h1 className="text-black text-sm">Edit</h1>
        </div>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div className="flex gap-2">
          <AiOutlineDelete size={23} color="red" />{" "}
          <h1 className="text-red-500 text-sm">Delete</h1>
        </div>
      ),
      key: "3",
    },
  ];
  const columns = [
    {
      title: "#",
      dataIndex: "",
      render: (text, record, index) => <div>{index + 1}</div>,
    },
    {
      title: "Name",
      dataIndex: "title",
      // width:40
    },
    // {
    //   title: 'Descriptions',
    //   dataIndex: 'description',
    //   width:400
    // },
    {
      title: "Description",
      dataIndex: "description",
      // width:40
    },

    {
      title: "Status",
      dataIndex: "status",
      render: (data, record) => {
        return <div>{"Active"}</div>;
      },
      // width:40
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (data, record) => {
        return <div>{data.split("T")[0]}</div>;
      },
    },
    // {
    //   title: 'Preparations',
    //   dataIndex: 'prepation',
    // },
    // {
    //   title: 'Side Effect',
    //   dataIndex: 'effect',
    // },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <Dropdown
          className="text-sm"
          menu={{
            items: items.map((item) => ({
              ...item,
              onClick:
                item.key === "3"
                  ? () => handleDelete(record._id)
                  : item.onClick,
            })),
          }}
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            <BsThreeDots />
          </a>
        </Dropdown>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "medicinal ",
      description:
        "Dried leaves are boiled in water and drunk to treat liver disease.Bark is used for snake bite. Root and bark are used for East Coast fever in cattle,root is used for dysentery,diarrhea, impotence, sterility, spleen enlargement andcough.",
      medicinalUse:
        "Dried leaves are boiled in water and drunk to treat liver disease.Bark is used for snake bite. Root and bark are used for East Coast fever in cattle,root is used for dysentery, diarrhea, impotence, sterility, spleen enlargement andcough.",
      prepation:
        "To orally administer the macerated fresh leaves or the filtrateof dry and crushed stems: 2 spoons three times per day (morning, midday, and evening)for 5 days",
      effect:
        "Urtica massaica, may cause skin irritation upon contact due to its stinginghairs, and in some cases, ingestion may lead to gastrointestinal discomfort or allergicreactions.",
      kinyarwanda: "Igisura",
      scientific: "Urtica massaica",
      common: "stinging nettle ",
      familly: "Urticaceae",
      part: "Leaves and stem",
      status: "Sold",
    },
    {
      key: "2",
      name: "Rubia cordifolia ",
      description: "Prodcuct descriptions",
      medicinalUse:
        "Amenorrhea; Bacteria; Biliousness; Bite; Bleeding;Complexion; Constipation; Cystosis,Dermatosis; Diabetes, Dysentery;Dysmenorrhea; Dysuria; Edema; Enterosis; Epistaxis; Erysipelas; Hemoptysis;Hemorrhoid; Hepatosis ,Infection; Inflammation; Leukoderma; Leukorrhea;Menorrhagia; Nephrosis, Diarrheal",
      prepation:
        "To orally administer the macerated fresh leaves or the filtrateof dry and crushed stems: 2 spoons three times per day (morning, midday, and evening)for 5 days",
      kinyarwanda: "Umukarambwe",
      scientific: "Rubiaceae Cordifolio",
      common: "Indian madder or Manjistha",
      familly: "Rubiaceae",
      part: "",
      preparation: "1–2 g powdered plant; 48–96 ml plant decoction",
      effect:
        "Gastrointestinal Issues: Some people may experiencegastrointestinal discomfort such as nausea, vomiting, ordiarrhea, especially when consumed in large amounts.",
      status: "added to cart",
    },
    {
      key: "3",
      name: "Urtica massaica",
      kinyarwanda: "Umubilizi",
      scientific: "Rubiaceae Cordifolio",
      common: "Indian madder or Manjistha",
      familly: "Rubiaceae",
      part: "",
      description:
        "Fresh roots are crushed, boiled and strained, and the liquid is used to treat gonorrhoea and syphilis. Fresh leaf juice, sometimes with Erythrina sacleuxiiHua, is used for the treatment of leprosy. Leaf and roots are used for pleurisy,inflammatory conditions of chest and for oxytocic activity. Is extensively useinmany skin disease medicine",
      medicinalUse:
        " Fresh roots are ground, cooked in banana beer and drunk to treatgonorrhoea. Treatment of Arthritis and Joint Pain, Blood Purification and Detoxification;Treatment of Urinary Disorders, Bacteria; Biliousness; Bite; Bleeding; Complexion;Constipation;Diabetes, Dysentery; Hemoptysis; Hemorrhoid; Hepatosis ,Infection;Inflammation, Diarrheal.",
      prepation:
        "To orally administer the macerated fresh leaves or the filtrateof dry and crushed stems: 2 spoons three times per day (morning, midday, and evening)for 5 days",
      status: "wishListed",
    },
    {
      key: "4",
      name: "medicinal ",
      kinyarwanda: "Umubilizi",
      scientific: "Rubiaceae Cordifolio",
      common: "Indian madder or Manjistha",
      familly: "Rubiaceae",
      part: "",
      description: "Prodcuct descriptions",
      medicinalUse: "Vegetables",
      prepation:
        "To orally administer the macerated fresh leaves or the filtrateof dry and crushed stems: 2 spoons three times per day (morning, midday, and evening)for 5 days",
      status: "Sold",
    },
    {
      key: "5",
      name: "Vernonia amygdalina",
      kinyarwanda: "Umubilizi",
      scientific: "Vernonia amygdalina",
      common: "Indian madder or Manjistha",
      familly: "Rubiaceae",
      part: "Leaves and fruits",
      description: "Prodcuct descriptions",
      medicinalUse: "Vegetables",
      prepation:
        "To orally administer the macerated fresh leaves or the filtrateof dry and crushed stems: 2 spoons three times per day (morning, midday, and evening)for 5 days",
      status: "Sold",
    },
  ];
  return (
    <>
      <DeleteCategory
        handleModal={handleDeleteModal}
        isModalOpen={openDeleteModal}
        id={categoryId}
      />
      <Table columns={columns} dataSource={categories} size="middle" />
      <Drawer
        title="Medicoma Details"
        onClose={onClose}
        open={open}
        width={1000}
      >
        <div className="flex gap-3">
          <h1 className="py-3 poppins-bold w-[38rem]  text-lg">
            Product Description
          </h1>
          <p>
            Fresh roots are crushed, boiled and strained, and the liquid is used
            to treat gonorrhoea and syphilis. Fresh leaf juice, sometimes with
            Erythrina sacleuxiiHua, is used for the treatment of leprosy. Leaf
            and roots are used for pleurisy,inflammatory conditions of chest and
            for oxytocic activity. Is extensively useinmany skin disease
            medicine
          </p>
        </div>
        <div className="flex gap-3 mt-3">
          <h1 className="py-3 poppins-bold w-[18rem] text-lg">
            Product Preparation
          </h1>
          <p>
            To orally administer the macerated fresh leaves or the filtrateof
            dry and crushed stems: 2 spoons three times per day (morning,
            midday, and evening)for 5 days
          </p>
        </div>
        <div className="flex gap-3 mt-3">
          <h1 className="py-3 poppins-bold w-[26rem] text-lg">medicinal Use</h1>
          <p>
            Dried leaves are boiled in water and drunk to treat liver
            disease.Bark is used for snake bite. Root and bark are used for East
            Coast fever in cattle,root is used for dysentery, diarrhea,
            impotence, sterility, spleen enlargement andcough.
          </p>
        </div>
        <div className="flex gap-3 mt-3">
          <h1 className="py-3 poppins-bold w-[18rem] text-lg">Side Effect</h1>
          <p>
            Gastrointestinal Issues: Some people may experiencegastrointestinal
            discomfort such as nausea, vomiting, ordiarrhea, especially when
            consumed in large amounts.
          </p>
        </div>
      </Drawer>
    </>
  );
};
export default CategoryTable;
