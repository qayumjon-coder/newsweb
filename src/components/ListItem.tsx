const ListItem: React.FC<{ 
  href: string, 
  title: string, 
  isCurrent: boolean, 
  className: string }> = ({ 
    href, 
    title, 
    isCurrent, 
    className }) => {
  return (
    <li>
        <a href={href} className={`${className} ${isCurrent ? "font-bold" : ""}`}>{title}</a>
    </li>
  )
}

export default ListItem