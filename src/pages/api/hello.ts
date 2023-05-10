// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
  method: string | undefined;
  cookies: any;
  query: any;
  body: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let method = req.method;
  res
    .status(200)
    .json({
      name: 'John Doe',
      method,
      cookies: req.cookies,
      query: req.query,
      body: req.body,
    });
}
