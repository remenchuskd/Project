import React from "react";
import style from "./Dropdown.module.css";
type Props = {
  vertical?: boolean;
};

export default function Dropdown({ vertical }: Props) {
  let Vertical = vertical ? style.vertical : "";

  return (
    <div className={`${style.Dropdown} ${Vertical}`}>
      {new Array(4).fill("colums").map((column, key) => {
        return (
          <div key={key} className={`${style.Dropdown__column} ${Vertical}`}>
            <div className={`${style.Dropdown__wrap} ${Vertical}`}>
              <div className={`${style.Dropdown__name} ${Vertical}`}> Column Name</div>
              <span className={`${style.Dropdown__column_svg} ${Vertical}`}>
                <svg
                  width="5"
                  height="9"
                  viewBox="0 0 5 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.86424 3.92329L1.07685 0.135964C0.989247 0.0482965 0.872312 0 0.747627 0C0.622941 0 0.506006 0.0482965 0.418408 0.135964L0.139492 0.41481C-0.0419999 0.59651 -0.0419999 0.891824 0.139492 1.07325L3.31986 4.25362L0.135964 7.43752C0.0483657 7.52518 0 7.64205 0 7.76667C0 7.89142 0.0483657 8.00829 0.135964 8.09602L0.414879 8.3748C0.502546 8.46247 0.619413 8.51077 0.744098 8.51077C0.868783 8.51077 0.985719 8.46247 1.07332 8.3748L4.86424 4.58401C4.95205 4.49607 5.00028 4.37865 5 4.25383C5.00028 4.12852 4.95205 4.01117 4.86424 3.92329Z"
                    fill="#140342"
                  />
                </svg>
              </span>
              <div className={`${style.Dropdown__allLinks} ${Vertical}`}>
              {new Array(6).fill("link").map((link, key) => {
                return (
                  <div key={key} className={style.Dropdown__link}>
                    link{" "}
                  </div>
                );
              })}
            </div>
            </div>


          </div>
        );
      })}
    </div>
  );
}
