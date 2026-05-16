
const LinkItem: React.FC<{ href: string, title: string, styleclass: string }> = ({ href, title, styleclass }) => {
  return (
    <a className={styleclass} href={href} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  )
}

export default LinkItem