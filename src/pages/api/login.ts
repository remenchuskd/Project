import type { NextApiRequest, NextApiResponse } from "next";
import React from "react";
type Data = {
  value: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  async function login() {
    let body = JSON.parse(req.body);
    let response = await fetch("http://51.250.107.131:1337/api/auth/local/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: `${body.username}`,
        password: `${body.password}`,
      }),
    });
    let result = await response.json();
    return result;
  }
  let result = await login();

  if (result.error) {
    res.status(400).json(result);
  } else {
    res.status(200).json(result);
  }
}
