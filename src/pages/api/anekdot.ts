import type { NextApiRequest, NextApiResponse } from 'next';
import React from 'react';
type Data={
value:any
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


    async function getFetch(){
        console.log(1);
        let response= await fetch('https://api.chucknorris.io/jokes/random', {
            method: 'GET',
          });;
        let data= await response.json();
        return data;

    }

    
    let data1= getFetch();
res.status(200).json({value:data1});
}
