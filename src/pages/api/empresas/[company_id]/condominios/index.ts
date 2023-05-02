import type { NextApiRequest, NextApiResponse } from 'next'

import data from '@/data/condominiums.json';

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
  const { condominiuns } = data

  const { company_id } = req.query as Query;

  res.status(200).json(condominiuns.filter(condominium => condominium.company_id == company_id));
}
