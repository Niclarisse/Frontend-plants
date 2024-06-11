import { space } from "postcss/lib/list";
import Modal from "./modal/Modal";
import { useNavigate } from "react-router-dom";

const AlphabeticView = ({
  openModal,
  handleModal,
  letter,
  plants,
  loading,
}) => {
  const navigate = useNavigate();
  console.log("PLANT VIEW", loading, plants);
  return (
    <Modal
      isOpen={openModal}
      onClose={() => {
        handleModal();
      }}
      Style={"w-[90%] lg:w-1/3 lg:h-[70vh]  flex m-auto py-4"}
    >
      {" "}
      <Modal.Header className={"sticky top-0 z-10 bg-white"}>
        <h1 className="font-bold text-lg">{`All "${letter}" plants`}</h1>
      </Modal.Header>
      <Modal.Body className={"h-[80%] overflow-y-auto"}>
        <div className=" h-full">
          {!loading ? (
            plants.length > 0 ? (
              <div className="flex flex-col gap-3">
                {plants.map((item, index) => (
                  <span
                    key={index}
                    className="hover:text-light cursor-pointer ml-5"
                    onClick={() => navigate(`/plant/view/${item?._id}`)}
                  >
                    {item?.title}
                  </span>
                ))}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <span className="text-lg">{`No plant available starts with ${letter}`}</span>
              </div>
            )
          ) : (
            <div className="h-full flex items-center justify-center">
              <span className="text-lg">Loading plant...</span>
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AlphabeticView;
