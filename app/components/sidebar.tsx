'use client'; // 👈 Add this at the top!

import { Button, message } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // ✅ import useRouter
import { useState } from "react";
import Loader from "./loader";
import { logout } from "../services/clientSide/logout";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../redux/userSlice";
import { setLoading } from "../redux/loader";
// ❌ Remove: redirect is not needed here
// import { redirect } from "next/navigation"; ← DELETE THIS LINE

const Sidebar = ({ userInfo }: any) => {
  const [isSidebarShown, setIsSidebarShown] = useState(true);
  const pathname = usePathname();
  const router = useRouter(); // ✅ Get client-side router
  const dispatch = useDispatch();

  const menuItems = [
    { name: "Home", path: '/', icon: 'ri-home-7-line' },
    { name: "Profile", path: '/profile', icon: 'ri-shield-user-line' },
    { name: "Application", path: '/applications', icon: 'ri-file-list-2-line' },
    { name: "Settings", path: '/settings', icon: 'ri-settings-2-line' },
    { name: "Saved", path: '/saved', icon: 'ri-save-line' }
  ];

  async function logoutHandler() {
    try {
      dispatch(setLoading(true));
      await logout(); 
      dispatch(setCurrentUser(null));

      router.push('/login');
      router.refresh(); 
      message.success("user logged out successfuly")
    } catch (error) {
      console.log("Something went wrong");
      message.error("logout failed")

    } finally {
      dispatch(setLoading(false));
    }
  }

  return (
    <div className='sidebar'>
      <div className="logo">
        {isSidebarShown && <h1>Job Portal</h1>}
        <i 
          className={isSidebarShown ? "ri-close-line" : "ri-menu-2-line"} 
          onClick={() => setIsSidebarShown(!isSidebarShown)}
        ></i>
      </div>

      {/* Menu Items */}
      <div className="menu-items">
        {menuItems.map((Item) => {
          const isActive = pathname === Item.path;
          return (
            <Link 
              href={Item.path} 
              className={`menu-item ${isActive ? "active-menu-item" : ""}`}
              key={Item.name}
            >
              <i className={Item.icon}></i>
              {isSidebarShown && <span>{Item.name}</span>}
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <div className="sidebar-footer">
        {isSidebarShown && (
          <div className="user-info">
            {userInfo ? (
              <div className="flex flex-col">
                <span>{userInfo?.name}</span>
                <span>{userInfo?.email}</span>
              </div>
            ) : (
              <Loader size="sm" />
            )}
          </div>
        )}
        <Button onClick={logoutHandler}>
          <i className="ri-logout-box-r-line"></i>
          {isSidebarShown && <span>Log out</span>}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;