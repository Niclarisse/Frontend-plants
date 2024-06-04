import { useState } from "react";
import { PieChartOutlined, TeamOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom"; // Importing useNavigate
import "../pages/style.css";

import DashHeader from "./DashHeader";
import LogoIcons from "../assets/images/Logo_1.png";

import { Md18UpRating } from "react-icons/md";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children, onClick) {
  return {
    key,
    icon,
    children,
    label,
    onClick,
  };
}

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate(); // Initializing useNavigate
  const items = [
    getItem("Dashboard", "1", <PieChartOutlined />, null, () => {
      navigate("/dash"); // Navigate to dashboard route
    }),
    getItem("Plants", "sub1", <Md18UpRating size={20} />, [
      getItem("overView", "3", null, null, () => {
        navigate("/dashboard/plant/overview");
      }),
      getItem("Category", "2", null, null, () => {
        navigate("/dashboard/category");
      }),
      getItem("Plants", "4", null, null, () => {
        navigate("/dashboard/plants");
      }),
    ]),
    getItem("Users", "sub2", <TeamOutlined size={20} />, [
      getItem("OverView", "6", null, null, () => {
        navigate("/dashboard/user/overview");
      }),
      getItem("All Users", "8", null, null, () => {
        navigate("/dashboard/users");
      }),
    ]),
    // getItem('Files', '10', <FileOutlined />),
  ];
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ height: "100vh" }}
      >
        <div className="demo-logo-vertical h-20 flex justify-center items-center">
          <div className="cursor-pointer mx-4">
            <img src={LogoIcons} width={200} />
          </div>
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items.map((item) => {
            if (item.children) {
              return {
                ...item,
                children: item.children.map((child) => ({
                  ...child,
                  onClick: child.onClick || null,
                })),
              };
            } else {
              return item;
            }
          })}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "white" }}>
          <DashHeader />
        </Header>
        <Content style={{ margin: "4px 10px" }}>
          <div style={{ padding: 24, minHeight: "90vh", background: "white" }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
