
function ListItem({ href, title, isCurrent, className } : { href: string, title: string, isCurrent: boolean, className: string }) {
  return (
    <li>
        <a href={href} className={`${className} ${isCurrent ? "font-bold" : ""}`}>{title}</a>
    </li>
  )
}

export default ListItem