import { ChangeEventHandler } from "react"

type Props = {
  onChange: ChangeEventHandler<HTMLInputElement>
}

export default function CondominiumSearch({ onChange }: Props) {
  return (
    <form className="form-inline">
      <div className="input-group">
        <input className="form-control" type="search" placeholder="Pesquisar" aria-label="Search" onChange={onChange} />
      </div>
    </form>
  )
}