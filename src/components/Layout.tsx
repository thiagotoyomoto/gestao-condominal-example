import React, { ChangeEventHandler, SyntheticEvent, useEffect, useState } from 'react';
import Headerbar from '@/components/Headerbar';
import Sidebar from '@/components/Sidebar';

import Condominium from '@/shared/models/Condominium';
import Company from '@/shared/models/Company';
type Props = React.PropsWithChildren

export default function Layout({ children }: Props) {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [condominiums, setCondominiums] = useState<Condominium[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/api/empresas')
            .then(value => value.json() as unknown as Company[])
            .then(companies => { setCompanies(companies); return companies; })
            .then(companies => fetch(`http://localhost:3000/api/empresas/${companies[0].id}/condominios`))
            .then(value => value.json() as unknown as Condominium[])
            .then(condominiums => setCondominiums(condominiums))
            .catch(error => console.error);

            console.log(companies)
            console.log(condominiums)
    }, []);

    const onSelectCompany: ChangeEventHandler<HTMLSelectElement> = async (event) => {
        const id = event.target.selectedOptions[0].getAttribute('data-company-id')
        const res = await fetch(`http://localhost:3000/api/empresas/${id}/condominios`)
        const value = await res.json() as unknown as Condominium[]

        setCondominiums(value)
    }

    return (
        <div className='wrapper'>
            <Headerbar />
            <Sidebar companies={companies} condominiums={condominiums} onSelectCompany={onSelectCompany} />
            <div className='content-wrapper'>
                {children}
            </div>
        </div>
    );
}