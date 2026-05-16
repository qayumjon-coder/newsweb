import type { JSX } from "react"
import LinkItem from "./LinkItem"
import { NavLink } from "react-router"

function Header(): JSX.Element {

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
    <header className="flex flex-col gap-2 items-center justify-between  text-white">
      <div className="w-full flex justify-between items-center py-4 px-2 gap-4 bg-gray-800">
        <h2 className="font-bold text-lg">Logo</h2>

        <LinkItem href="https://github.com/" title="GitHub" />
      </div>

      <nav className="w-xl text-center bg-blue-500/80 p-1 rounded-lg">
        <ul className="flex justify-between items-center">
          {navLinkData.map(item => {
            return <NavLink className={``} to={item.href}>{item.title}</NavLink>
          })}
          
        </ul>
      </nav>

    </header>
  )
}

export default Header