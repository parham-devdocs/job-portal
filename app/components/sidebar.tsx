import { Button } from "antd"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Sidebar = () => {
  const pathname=usePathname()
    const menuItems=[{name:"Home",path:'/',icon:'ri-home-7-line'},
        {name:"Profile",path:'/profile',icon:'ri-shield-user-line'},
        {name:"Application",path:'/applications',icon:'ri-file-list-2-line'},
        {name:"Settings",path:'/settings',icon:'ri-settings-2-line'},
        {name:"Saved",path:'/saved',icon:'ri-save-line'}
      ]
  return (
<div className='sidebar'>
<div>
    <h1 className=" font-bold text-xl text-white">Job Portal</h1>
</div>
<div className=" menu-items">{menuItems.map((Item,index)=>{
  const isActive=pathname===Item.path
return <Link href={Item.path} className={`menu-item ${isActive ? "active-menu-item" : ""}`}key={Item.name}>
  <i className={Item.icon}></i>
    <span >{Item.name}</span>
</Link>
})}</div>
<div className="sidebar-footer"><div>user name</div><Button>Log out</Button></div>
    </div>
  )
}

export default Sidebar