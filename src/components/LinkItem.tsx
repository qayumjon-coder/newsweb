
const LinkItem: React.FC<{ href: string, title: string }> = ({ href, title }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  )
}

export default LinkItem