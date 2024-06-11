import { useEffect } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import OverViewCard from "../../components/OverViewCard";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import ProductChart from "./ProductChart";
import CustomPieChart from "./CustomPieChart";
import ProductOverviewTable from "../../components/Tables/ProductOverViewTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../redux/slices/category/categoryThunks";
import { fetchPlants } from "../../redux/slices/plant/plantThunks";
import { FaUsers } from "react-icons/fa6";
import { PiPlantThin } from "react-icons/pi";
import { MdCategory } from "react-icons/md";
import { TbClipboardList } from "react-icons/tb";
const Dash = () => {
  const { all_users } = useSelector((state) => state.users);
  const { allplants } = useSelector((state) => state.plants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchPlants());
  }, []);

  return (
    <DashboardLayout>
      <div className="flex gap-5">
        <OverViewCard
          total={allplants.length}
          text={"Total Plants"}
          icon={
            <div className="flex justify-center items-center h-16 w-16 rounded-full border bg-lightWhite">
              <PiPlantThin size={30} />
            </div>
          }
        />
        <OverViewCard
          total={allplants.length}
          text={"Plant Categories"}
          icon={
            <div className="flex justify-center items-center h-16 w-16 rounded-full border bg-lightWhite">
              <MdCategory size={30} />
            </div>
          }
        />
        {/* <OverViewCard
          total={"10,0000"}
          text={"Total Orders"}
          icon={<RiMoneyEuroCircleLine size={23} />}
        /> */}
        <OverViewCard
          total={"0"}
          text={"Total WishList"}
          icon={
            <div className="flex justify-center items-center h-16 w-16 rounded-full border bg-lightWhite">
              <TbClipboardList size={30} />{" "}
            </div>
          }
        />
        <OverViewCard
          total={"0"}
          text={"Today's Sales"}
          icon={
            <div className="flex justify-center items-center h-16 w-16 rounded-full border bg-lightWhite">
              <RiMoneyEuroCircleLine size={30} />{" "}
            </div>
          }
        />
        <OverViewCard
          text={"Total Users"}
          total={all_users.length}
          icon={
            <div className="flex justify-center items-center h-16 w-16 rounded-full border bg-lightWhite">
              <FaUsers size={30} />{" "}
            </div>
          }
        />
      </div>
      <div className="flex gap-5 flex-wrap w-full">
        <div className="mt-5 bg-white p-5 w-1/2 rounded-md shadow-md ">
          <h1 className="text-[#030229] text-lg font-medium py-3">
            Plant Sales
          </h1>
          <div>
            <ProductChart />
          </div>
        </div>
        <div className="mt-5 bg-white p-5 w-[40%] rounded-md shadow-md">
          <h1 className="text-[#030229] text-lg font-medium py-3">
            Monthly Sales
          </h1>
          <div>
            <CustomPieChart />
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-5 flex-wrap w-full">
          <div className="mt-5 bg-white p-5 w-3/4 rounded-md shadow-md">
            <h1 className="text-[#030229] text-lg font-medium py-3">
              Recent transactions
            </h1>
            <ProductOverviewTable />
          </div>
          <div className="mt-5 bg-white  w-1/5 rounded-md shadow-md">
            <h1 className="text-[#030229] text-lg font-medium p-3 text-center">
              Recent Activities
            </h1>
            <div className=" divide-y ">
              <div className="mt-2 p-2">
                <p>User Created </p>
                <p>
                  created By <span>Nikuze</span>
                </p>
              </div>
              <div className="mt-3 p-2">
                <p>Plant wishList </p>
                <p>
                  Done By <span>Nikuze</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dash;
