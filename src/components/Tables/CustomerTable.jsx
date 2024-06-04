import React from 'react';
import { Divider, Table } from 'antd';
import img from "../../assets/images/pexels-photo-4036233.jpeg"
import { BsThreeDots } from "react-icons/bs";
import { DownOutlined } from '@ant-design/icons';
import { GrFormView } from "react-icons/gr";
import { Dropdown, Space } from 'antd';
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
const items = [
  {
    label:<div className='flex gap-2'><GrFormView size={23} color='green'/> <h1 className='text-[#025222]'>View</h1></div> ,
    key: '0',
  },
  {
    label: <div className='flex gap-2'><AiOutlineEdit size={23} color='black'/> <h1 className='text-black'>Edit</h1></div>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: <div className='flex gap-2'><AiOutlineDelete size={23} color='red'/> <h1 className='text-red-500'>Delete</h1></div>,
    key: '3',
  },
];
const columns = [
  {
    title: 'Picture',
    dataIndex: 'name',
    render: (text, record) => <img src={img} alt="" className='rounded-full w-10 h-10'/>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Descriptions',
    dataIndex: 'description',
  },
  {
    title: 'Categories',
    dataIndex: 'category',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (text, record) =>
      <Dropdown
    menu={{
      items,
    }}
    trigger={['click']}
  >
    <a onClick={(e) => e.preventDefault()}>
    <BsThreeDots />
    </a>
  </Dropdown>
     ,
  },
];

const data = [
  {
    key: '1',
    name: 'medicinal ',
    description: "Prodcuct descriptions",
    category: 'Vegetables',
  },
  {
    key: '2',
    name: 'medicinal ',
    description: "Prodcuct descriptions",
    category: 'Vegetables',
  },
  {
    key: '3',
    name: 'medicinal ',
    description: "Prodcuct descriptions",
    category: 'Vegetables',
  },
  {
    key: '4',
    name: 'medicinal ',
    description: "Prodcuct descriptions",
    category: 'Vegetables',
  },
  {
    key: '5',
    name: 'Medicoma',
    description: "Prodcuct descriptions",
    category: 'Vegetables',
  },
];
const ProductTable = () => (
  <>
    <Table columns={columns} dataSource={data} size="middle" />
  </>
);
export default ProductTable;