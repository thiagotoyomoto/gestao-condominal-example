import type { NextApiRequest, NextApiResponse } from 'next'

import companies from '@/data/companies';

type Data = {
  id: string,
  name: string
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(companies);
}
