import { ChangeEventHandler, useState } from 'react';

import Company from '@/shared/models/Company';
import Condominium from '@/shared/models/Condominium';

import CompanySelector from './CompanySelector';
import CondominiumSearch from './CondominiumSearch';
import CondominiumList from './CondominiumList';
import WelcomeMessage from './WelcomeMessage';

type Props = {
  companies: Company[],
  condominiums: Condominium[]
  onSelectCompany: ChangeEventHandler<HTMLSelectElement>
}

export default function Sidebar({ companies, condominiums, onSelectCompany }: Props) {
  const [search, setSearch] = useState<string>('');

  return (
    <aside className='main-sidebar sidebar-dark-primary elevation-4'>
      <a href='#' className='brand-link'>
        <span className='brand-text font-weight-light'>Confidence Solution</span>
      </a>
      <div className='sidebar'>
        <WelcomeMessage name={'Jose'} />
        <CompanySelector companies={companies} onSelect={onSelectCompany} />
        <CondominiumSearch onChange={(event) => {
          setSearch(event.currentTarget.value)
        }} />
        <CondominiumList condominiums={search === '' ? condominiums : condominiums.filter(condominium => condominium.name.includes(search))} />
      </div>
    </aside>
  );
};
