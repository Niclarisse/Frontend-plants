import React from 'react';
import { Divider, Table } from 'antd';
import DashboardLayout from '../../../components/DashboardLayout';
import { useNavigate } from 'react-router-dom';
const columns = [
  {
    title: 'First Name',
    dataIndex: 'first',
  },
  {
    title: 'Last Name',
    dataIndex: 'last',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'address',
    dataIndex: 'address',
  },
  {
    title: 'City',
    dataIndex: 'city',
  },
  {
    title: 'Country',
    dataIndex: 'country',
  },
];
const data = [
  {
    key: '1',
    first: 'John Brown',
    last: "Sandrine",
    email: 's@gmail.com',
    address: 'kicukiro',
    city: 'Kigali',
    country: 'Rwanda',
  },
  {
    key: '2',
    first: 'Brown',
    last: "Sandrine",
    email: 's@gmail.com',
    address: 'kicukiro',
    city: 'Kigali',
    country: 'Rwanda',
  },
  {
    key: '3',
    first: 'Alle',
    last: "Sandrine",
    email: 's@gmail.com',
    address: 'kicukiro',
    city: 'Kigali',
    country: 'Rwanda',
  },
  
];
const AllUsers = () => {
  const navigate=useNavigate();
  return(
 
  <>
  <DashboardLayout>
  <div className='flex justify-between my-5'> 
       <h1 className='poppins-bold py-3'>Users</h1> 
       <button className='text-white h-10 px-4 bg-[#003F13] rounded-md text-xl' onClick={()=>navigate("/dashboard/user/add")}>Add User</button></div>
    <Table columns={columns} dataSource={data} size="middle" />
    </DashboardLayout>
  </>
)};
export default AllUsers;