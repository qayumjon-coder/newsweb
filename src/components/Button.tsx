const Button: React.FC<{selector: string, name: string}> = ({selector, name})  => {
  return (
    <button className={selector}>
      {name}
    </button>
  )
}

export default Button