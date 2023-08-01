import type { NextApiRequest, NextApiResponse } from 'next';
import qs from 'qs';
import React from 'react';
type Data = {
  value: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  async function getComments() {
    const query = qs.stringify({
      filters: {
          channel: {
              id: {
                $eq: req.query.id,
              },
          },
      },
      populate: req.query.populate,
      encodeValuesOnly: true,
    });
    let response = await fetch(
      `https://courseapi.plza.ru/api/channel-comments?${query}`,
      {
        headers: {
          Authorization:
            'Bearer f1caba0823234da2f7c799d4627090579a65d633211acd0c81a12996105a5b2cbbcbd562d3fb74e603b93e3588689df2b6f95a297219c9652bde09a442705adcfdec1860afb3f524bf2e253cea15a20581ae1c9b078cf19044d1bf9388d183cb1af4a972a2a81624da35a26a78069e6e1f256f46697283b6b9dd973cbc6e2524',
        },
      }
    );
    let result = await response.json();
    return result;
  }
  let result = await getComments();

  if (result.error) {
    res.status(400).json(result);
  } else {
    res.status(200).json(result);
  }
}
