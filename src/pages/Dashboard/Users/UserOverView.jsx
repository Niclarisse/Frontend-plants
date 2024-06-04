import React from 'react'
import OverViewCard from '../../../components/OverViewCard'
import { FaUsers } from "react-icons/fa";
import UsersTable from '../../../components/Tables/usersTable';
import DashboardLayout from '../../../components/DashboardLayout';
import { useNavigate } from 'react-router-dom';
const UserOverView = () => {
  const navigate=useNavigate();
  return (
    <DashboardLayout>
    <div>
       <h1 className='poppins-bold py-3'>UserOverView</h1> 
       {/* <div className='flex gap-5 flex-wrap'>
       <OverViewCard text={"Total Users"} total={"4000"} icon={<FaUsers size={20}/>}/>
       <OverViewCard text={"Active Users"} total={"250"} icon={<FaUsers size={20}/>}/>
       <OverViewCard text={"Top Users"} total={"100"} icon={<FaUsers size={20}/>}/>
       <OverViewCard text={"Inactive Users"} total={"10"} icon={<FaUsers size={20}/>}/>

       </div> */}
       <div className='mt-5'>
        <div className='flex justify-between'> 
       <h1 className='poppins-bold py-3'>Top Users</h1> 
       <button className='text-white h-10 px-4 bg-[#003F13] rounded-md text-xl' onClick={()=>navigate("/dashboard/user/add")}>Add User</button>
       </div>
        <UsersTable/>
       </div>
        </div>
        </DashboardLayout>
  )
}

export default UserOverView