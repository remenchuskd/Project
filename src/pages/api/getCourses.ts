import qs from 'qs';
import type { NextApiRequest, NextApiResponse } from 'next';
type Data = {
  value: any;
};
type Params = {
  populate?: string;
  'filters[categories][id][$eq]'?: string;
  'filters[id][$eq]'?: string;
  'pagination[pageSize]'?: string;
  'pagination[page]'?: any;
  sort?: any;
  'filters[channels][id][$eq]'?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  async function getCourses() {
    const query = qs.stringify({
      populate: req.query.populate,
      filters: {
        channels: {
          id: {
            $in: req.query.instructorId,
          },
        },
        id: {
          $eq: req.query.id,
        },
        categories: {
          id: {
            $eq: req.query.categoryId,
          },
        },
      },
      pagination: {
        page: req.query.page,
        pageSize: req.query.pageSize,
      },
      sort: [`name_ru:${req.query.sort||'asc'}`],
      encodeValuesOnly: true,
    });

    let response = await fetch(
      `https://courseapi.plza.ru/api/courses?${query}`,
      {
        headers: {
          Authorization:
            'Bearer f1caba0823234da2f7c799d4627090579a65d633211acd0c81a12996105a5b2cbbcbd562d3fb74e603b93e3588689df2b6f95a297219c9652bde09a442705adcfdec1860afb3f524bf2e253cea15a20581ae1c9b078cf19044d1bf9388d183cb1af4a972a2a81624da35a26a78069e6e1f256f46697283b6b9dd973cbc6e2524',
        },
      }
    );
    let data = await response.json();
    return data;
  }

  let courses = await getCourses();

  res.status(200).json(courses);
}
