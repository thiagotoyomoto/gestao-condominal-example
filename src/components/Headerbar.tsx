import { useRouter } from 'next/router';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faBars, faBuildingColumns, faCalculator, faChartLine, faChartSimple, faCog, faGavel, faMagnifyingGlass, faMoneyBills, faWandSparkles } from '@fortawesome/free-solid-svg-icons';

import DefaultUserImage from '@/images/default-user.png';
import Link from 'next/link';

export default function Headerbar() {
  const router = useRouter()

  return (
    <nav className='main-header navbar navbar-expand navbar-white navbar-light text-purple'>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <a className='nav-link' data-bs-widget='pushmenu' href='#' role='button'>
            <FontAwesomeIcon icon={faBars} size='xl' color='#7f5ea5' />
          </a>
        </li>

        <li className='nav-item dropdown'>
          <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            <FontAwesomeIcon icon={faChartSimple} size='xl' color='#7f5ea5' />
          </a>
          <div className='dropdown-menu'>
            <a className='dropdown-item' href='#'>Painel Principal</a>
            <a className='dropdown-item' href='#'>Painel Jurídico</a>
            <a className='dropdown-item' href='#'>Painel de Produtividade</a>
          </div>
        </li>

        <li className='nav-item dropdown'>
          <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            <FontAwesomeIcon icon={faCalculator} size='xl' color='#7f5ea5' />
          </a>
          <div className='dropdown-menu'>
            <div className="dropend dropdown-item">
              <a className='nav-link dropdown-toggle' id='emissao-dropdown' href='#' role='button' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                Emissão
              </a>
              <div className="dropdown-menu" aria-labelledby='emissao-dropdown'>
                <a href="#" className="nav-link dropdown-item">Rateio</a>
                <a href="#" className="nav-link dropdown-item">Balancetes</a>
                <a href="#" className="nav-link dropdown-item">Composições Flutuantes</a>
              </div>
            </div>
            <div className="dropend dropdown-item">
              <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                Disparos
              </a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">Cartas de Cobrança</a>
                <a href="#" className="dropdown-item">Envio de Notificações</a>
                <a href="#" className="dropdown-item">Comunicados {'>'} Unidades</a>
              </div>
            </div>
            <a className='dropdown-item' href='#'>Taxas Geradas</a>
            <a className='dropdown-item' href='#'>Repasses</a>
            <a className='dropdown-item' href='#'>Acordos</a>
          </div>
        </li>

        <li className='nav-item dropdown'>
          <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            <FontAwesomeIcon icon={faChartLine} size='xl' color='#7f5ea5' />
          </a>
          <div className='dropdown-menu'>
            <a className='dropdown-item' href='#'>Antecipação & Repasses</a>
            <a className='dropdown-item' href='#'>Financeiro</a>
            <a className='dropdown-item' href='#'>Produtividade</a>
            <a className='dropdown-item' href='#'>Operacional</a>
            <a className='dropdown-item' href='#'>Empresa</a>
          </div>
        </li>

        <li className='nav-item'>
          <a href='#' className='nav-link' role='button'>
            <FontAwesomeIcon icon={faGavel} size='xl' color='#7f5ea5' />
          </a>
        </li>

        <li className='nav-item dropdown'>
          <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            <FontAwesomeIcon icon={faMoneyBills} size='xl' color='#7f5ea5' />
          </a>
          <div className='dropdown-menu'>
            <a className='dropdown-item' href='#'>Financeiro</a>
            <a className='dropdown-item' href='#'>Extrato</a>
            <a className='dropdown-item' href='#'>Composição Fiscal</a>
          </div>
        </li>

        <li className='nav-item dropdown'>
          <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            <FontAwesomeIcon icon={faCog} size='xl' color='#7f5ea5' />
          </a>
          <div className='dropdown-menu'>
            <a className='dropdown-item' href='#'>Condomínios</a>
            <a className='dropdown-item' href='#'>Usuários & Acessos</a>
            <a className='dropdown-item' href='#'>Cadastros</a>
            <a className='dropdown-item' href='#'>Configurações</a>
            <a className='dropdown-item' href='#'>Acesso Morador</a>
            <a className='dropdown-item' href='#'>Emissão de Boletos</a>
            <a className='dropdown-item' href='#'>Disparador de E-mails</a>
          </div>
        </li>

        <li className='nav-item dropdown'>
          <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            <FontAwesomeIcon icon={faBuildingColumns} size='xl' color='#7f5ea5' />
          </a>
          <div className='dropdown-menu'>
            <Link className='dropdown-item' href='/empresas/gOSVJJajL5eqSp7K/informacoes'>Empresa</Link>
            <a className='dropdown-item' href='#'>Remessas e Retornos</a>
          </div>
        </li>
      </ul>

      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <a href='#' className='nav-link d-flex' role='button'>
            <FontAwesomeIcon className='mr-2' icon={faMoneyBills} size='xl' color='#7f5ea5' />
            <span>R$ 0,00</span>
          </a>
        </li>

        <li className='nav-item'>
          <a href='#' className='nav-link' role='button'>
            <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' color='#7f5ea5' />
          </a>
        </li>

        <li className='nav-item'>
          <a href='#' className='nav-link' role='button'>
            <FontAwesomeIcon icon={faWandSparkles} size='xl' color='#7f5ea5' />
          </a>
        </li>

        <li className='nav-item'>
          <a href='#' className='nav-link' role='button'>
            <FontAwesomeIcon icon={faCalendar} size='xl' color='#7f5ea5' />
          </a>
        </li>

        <li className='nav-item dropdown'>
          <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            <div className='d-inline'>
              <FontAwesomeIcon icon={faEnvelope} size='xl' color='#7f5ea5' />
            </div>
            <span className="position-absolute top-0 start-50 badge rounded-pill navbar-badge bg-red">
              15
              <span className="visually-hidden">notifications</span>
            </span>
          </a>
          <div className='dropdown-menu dropdown-menu-lg-end'>
            <a className='dropdown-item' href='#'>Ajuda</a>
            <a className='dropdown-item' href='#'>Perfil</a>
            <a className='dropdown-item' href='#'>Suporte</a>
            <a className='dropdown-item' href='#'>Sair</a>
          </div>
        </li>

        <li className='nav-item dropdown'>
          <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
            <div className='image d-inline mr-3'>
              <Image src={DefaultUserImage} alt='User picture' className='img-circle elevation-2' width={32} height={32} />
            </div>
            <span>Jose</span>
          </a>
          <div className='dropdown-menu dropdown-menu-lg-end'>
            <a className='dropdown-item' href='#'>Ajuda</a>
            <a className='dropdown-item' href='#'>Perfil</a>
            <a className='dropdown-item' href='#'>Suporte</a>
            <a className='dropdown-item' href='#'>Sair</a>
          </div>
        </li>
      </ul>
    </nav>);
}
