import { Button } from "antd"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const Sidebar = ({userInfo}:any) => {
  const [isSidebarShown,setIsSidebarShown]=useState(true)
  const pathname=usePathname()
    const menuItems=[{name:"Home",path:'/',icon:'ri-home-7-line'},
        {name:"Profile",path:'/profile',icon:'ri-shield-user-line'},
        {name:"Application",path:'/applications',icon:'ri-file-list-2-line'},
        {name:"Settings",path:'/settings',icon:'ri-settings-2-line'},
        {name:"Saved",path:'/saved',icon:'ri-save-line'}
      ]
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
        <span>{userInfo?.name}</span>
        <span>{userInfo?.email}</span>
      </div>
    )}
    <Button>
      <i className="ri-logout-box-r-line"></i>
      {isSidebarShown && <span>Log out</span>}
    </Button>
  </div>
</div>
  )
}

export default Sidebar