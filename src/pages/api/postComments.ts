import type { NextApiRequest, NextApiResponse } from 'next';
import React from 'react';
type Data = {
  value: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  async function postComments() {
    let body = JSON.parse(req.body);
    let response = await fetch(
      'https://courseapi.plza.ru/api/channel-comments?populate=*',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer f1caba0823234da2f7c799d4627090579a65d633211acd0c81a12996105a5b2cbbcbd562d3fb74e603b93e3588689df2b6f95a297219c9652bde09a442705adcfdec1860afb3f524bf2e253cea15a20581ae1c9b078cf19044d1bf9388d183cb1af4a972a2a81624da35a26a78069e6e1f256f46697283b6b9dd973cbc6e2524',
        
        },
        body: JSON.stringify(
          {  data:{
            user: `${body.user}`,
            text: `${body.text}`,
            channel: `${body.channel}`,
          }}),
      }
    );
    let result = await response.json();
    return result;
  }
  let result= await postComments();
  
  if(result.error){
    res.status(400).json(result);
  }else{
    res.status(200).json(result);
  }

}
