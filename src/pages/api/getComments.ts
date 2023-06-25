import type { NextApiRequest, NextApiResponse } from "next";
import React from "react";
type Data = {
  value: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  async function getComments() {
    let body = JSON.parse(req.body)
    console.log(body)
    let response = await fetch(
      "http://51.250.107.131:1337/api/channel-comments",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
    return result
  }
  let result= await getComments();
  
  if(result.error){
    res.status(400).json(result)
  }else{
    res.status(200).json(result)
  }

}
