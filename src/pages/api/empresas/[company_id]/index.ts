import { NextApiRequest, NextApiResponse } from 'next';

import companies from '@/data/companies';

type Query = {
    company_id: string
};

type Return = {
    id: string,
    name: string
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Return>
) {
    const { company_id } = req.query as Query;

    res.status(200).json(companies.filter(company => company.id === company_id)[0]);
}
