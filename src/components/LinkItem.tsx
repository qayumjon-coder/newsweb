
const LinkItem: React.FC<{ href: string, title: string, styleclass: string, isBlank: string }> = ({ href, title, styleclass, isBlank }) => {
  return (
    <a className={styleclass} href={href} target={isBlank} rel="noopener noreferrer">
      {title}
    </a>
  )
}

export default LinkItem