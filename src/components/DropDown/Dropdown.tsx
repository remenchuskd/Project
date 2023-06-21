import React from "react";
import style from "./Dropdown.module.css";
import Icon from "../Icon/Icon";
import Link from "next/link";
type Props = {
  vertical?: boolean;
  data: any[];
};

export default function Dropdown({ vertical, data }: Props) {
  let Vertical = vertical ? style.vertical : "";
  let [id, setId] = React.useState();

  return (
    <div className={`${style.Dropdown} ${Vertical}`}>
      {data.map((column, key) => {
        return (
          <div key={key} className={`${style.Dropdown__column} ${Vertical}`}>
            <div
              onMouseEnter={() => {
                setId(column.id);
              }}
              className={`${style.Dropdown__name} ${Vertical}`}
            >
              {column.attributes.name_ru}
            </div>
            <span className={`${style.Dropdown__column_svg} ${Vertical}`}>
              <Icon type={"tick-right"} hoverable={true} />
            </span>
            <div className={`${style.Dropdown__allLinks} ${Vertical}`}>
              {id &&
                data
                  .filter((column, key) => {
                    return column.id === id;
                  })[0]
                  .attributes.childrens.data.map(
                    (
                      link: { id:string, attributes: { name_ru: string } },
                      key: number
                    ) => {
                      return (
                        <Link
                          key={key}
                          className={style.Dropdown__link}
                          href={`/categories/${link.id}`}
                        >
                          {link.attributes.name_ru}
                        </Link>
                      );
                    }
                  )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
