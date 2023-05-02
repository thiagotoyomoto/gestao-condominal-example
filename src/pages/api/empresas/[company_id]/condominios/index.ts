import type { NextApiRequest, NextApiResponse } from 'next'

import condominiums from '@/data/condominiums';

type Query = {
  company_id: string
};

type Data = {
  id: string,
  company_id: string,
  name: string
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const { company_id } = req.query as Query;

  res.status(200).json(condominiums.filter(condominium => condominium.company_id == company_id));
}
