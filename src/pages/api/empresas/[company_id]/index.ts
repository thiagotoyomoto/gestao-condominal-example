import { nanoid } from 'nanoid';
import { NextApiRequest, NextApiResponse } from 'next';

import data from '@/data/companies.json';

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
    const { companies } = data;

    const { company_id } = req.query as Query;

    res.status(200).json(companies.filter(company => company.id === company_id)[0]);
}
