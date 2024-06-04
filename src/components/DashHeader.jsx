import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { IoMdLogOut, IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { Avatar, Badge } from "antd";
import { BsCart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../utils/constant";
import { api, setAuthHeaders } from "../utils/helpers";
import axios from "axios";
import { errorHandler, toastMessage } from "../utils/toast";
import { useDispatch, useSelector } from "react-redux";
const DashHeader = () => {
  const { loggeduser, token } = useSelector((state) => state.loggedIn);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      api
        .get("/user/logout", {})
        .then((res) => {
          toastMessage("success", "Logged out successfull");
          console.log("res for logout", res);
          navigate("/");
        })
        .catch((err) => {
          navigate("/");
          errorHandler(err);
        });
      // dispatch();
    } catch (error) {
      errorHandler(error);
      setIsLoading(false);
    }
  };
  const items = [
    {
      label: (
        <div className="flex gap-3 mr-5 py-3" onClick={handleLogout}>
          <IoMdLogOut size={20} color="red" />
          <p>Logout</p>
        </div>
      ),
      key: "0",
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-lg font-medium pt-3 pl-10">Medicinal Plants</h1>
        <div className="mr-10">
          <Space size={24} className="mr-10 ">
            <Badge count={1}>
              <Avatar shape="circle" icon={<BsCart />} />
            </Badge>
            <Badge count={1}>
              <Avatar
                shape="circle"
                icon={<IoMdNotificationsOutline size={22} />}
              />
            </Badge>
          </Space>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <FaRegUserCircle size={25} />
                <p>Aliane Marie</p>
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
