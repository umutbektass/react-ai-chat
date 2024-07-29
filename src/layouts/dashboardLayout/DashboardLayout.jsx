import { Outlet, useNavigate } from "react-router-dom";
import "./dashboardLayout.css";
import { useAuth } from '@clerk/clerk-react'
import { useEffect } from "react";
const DashboardLayout = () => {

  const {userId,isLoaded} = useAuth()
  const navigate = useNavigate()
 useEffect(()=>{
  if(isLoaded && !userId) {
    return navigate("/sign-in")
  }
 },[userId,isLoaded,navigate])
  if(!isLoaded) return "Loading..."
  return (
    <div className="dashboardLayout">
      <div className="menu">MENU</div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
