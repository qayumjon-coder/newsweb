
function LinkItem({ href, title } : { href: string, title: string }) {
  return (
    <a href={href} target="blank">{title}</a>
  )
}

export default LinkItem