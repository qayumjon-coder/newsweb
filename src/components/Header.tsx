import LinkItem from "./LinkItem"
import { NavLink } from "react-router"

const Header: React.FC = () => {

  interface NavLinkData {
    id: number,
    title: string
    href: string
  }

  const navLinkData: NavLinkData[] = [
    {id:1, title: "Home", href: "/"},
    {id:2, title: "About", href: "/about"},
    {id:3, title: "News", href: "/news"},
    {id:4, title: "Contact", href: "/contact"},
    {id:5, title: "Blog", href: "/blog"},
  ]

  return (
    <header className="flex fixed w-full flex-col gap-2 items-center justify-between text-white z-100">
      <div className="w-full flex justify-between items-center py-4 px-10 gap-4 bg-linear-to-l from-blue-500 to-blue-700">
        <h2 className="font-bold text-2xl">LOGOLOGO</h2>

        <LinkItem href="https://github.com/" isBlank="_blank" title="GitHub" 
        styleclass="bg-blue-500 hover:bg-blue-600 
        text-white py-2 px-8 rounded-full "/>
      </div>

      <nav className="w-xl text-center bg-blue-500/80 p-1 rounded-full">
        <ul className="flex gap-1 items-center">
          {navLinkData.map(item => {
            return <NavLink key={item.id} className={`px-8.5 py-1 rounded-full ${location.pathname === item.href ? 'bg-white text-blue-500' : 'hover:bg-blue-500'}`} to={item.href}>
              {item.title}
            </NavLink>
          })}
          
        </ul>
      </nav>

    </header>
  )
}

export default Header