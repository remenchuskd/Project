import type { NextApiRequest, NextApiResponse } from 'next';
import React from 'react';
type Data = {
  value: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  async function registration() {
    let body=JSON.parse(req.body);
    let response = await fetch(
      'https://courseapi.plza.ru/api/auth/local/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: `${body.username}`,
          email: `${body.email}`,
          password: `${body.password}`,
        }),
      }
    );
    let result = await response.json();
    return result;
  }
  let result= await registration();
  
  if(result.error){
    res.status(400).json(result);
  }else{
    res.status(200).json(result);
  }

  
}
