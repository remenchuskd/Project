import type { NextApiRequest, NextApiResponse } from "next";
import React from "react";
type Data = {
  value: any;
};

type Params = {
  "pagination[pageSize]"?: string;
  "pagination[page]"?: any;
  sort?: any;
  "filters[name_ru][$containsi]"?: any;
  "filters[id][$eq]"?: any;
  populate?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  async function getInstructors() {
    let params: Params = {};
    if (req.query.pageSize) {
      if (typeof req.query.pageSize === "string") {
        params["pagination[pageSize]"] = req.query.pageSize;
      } else {
        params["pagination[pageSize]"] = req.query.pageSize[0];
      }
    }
    if (req.query.page) {
      params["pagination[page]"] = req.query.page;
    }
    if (req.query.sort) {
      params["sort"] = `name_ru:${req.query.sort}`;
    }
    if (req.query.search) {
      params["filters[name_ru][$containsi]"] = req.query.search;
    }
    if (req.query.id) {
      params["filters[id][$eq]"] = req.query.id;
    }
    if (req.query.populate) {
      params["populate"] = req.query.populate;
    }

    let queryParams = Object.entries(params).map((item) => {
      return item.join("=");
    });
    let result = queryParams.join("&");
    let response = await fetch(
      `https://courseapi.plza.ru/api/channels?${result}`,
      {
        headers: {
          Authorization:
            "Bearer f1caba0823234da2f7c799d4627090579a65d633211acd0c81a12996105a5b2cbbcbd562d3fb74e603b93e3588689df2b6f95a297219c9652bde09a442705adcfdec1860afb3f524bf2e253cea15a20581ae1c9b078cf19044d1bf9388d183cb1af4a972a2a81624da35a26a78069e6e1f256f46697283b6b9dd973cbc6e2524",
        },
      }
    );
    console.log(response)
    let data = await response.json();
    return data;
  }
  
  let instructors = await getInstructors();

  res.status(200).json(instructors);
}
