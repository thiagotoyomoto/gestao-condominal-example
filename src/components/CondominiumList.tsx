import Condominium from "@/shared/models/Condominium"

type Props = {
    condominiums: Condominium[]
}

export default function CondominiumList({ condominiums }: Props) {
    return (
        <nav className='mt-2'>
          <ul className='nav nav-pills nav-sidebar flex-column' data-widget='treeview' role='menu'>
            {condominiums.map((condominium) => (
              <li className='nav-item'>
                <a key={`condominium-${condominium.id}`} href={`/empresas/${condominium.company_id}/condominios/${condominium.id}`} className='nav-link'>
                  <p>{condominium.name}</p>
                  <span className="right badge bg-purple rounded-pill px-2">0</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
    )
}