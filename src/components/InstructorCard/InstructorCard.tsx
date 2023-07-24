import React from "react";
import style from "./InstructorCard.module.css";
import Link from "next/link";
import Icon from "../Icon/Icon";
import Rating from "../Rating/Rating";
import Star from "../Stars/Stars";
type Props = {
  id: number;
  instructor: string;
  position?: string;
  image: any;
  rate?: number;
  students?: number;
  course?: number;
  outlined?: boolean;
};

export default function InstructorCard({
  id,
  instructor,
  image,
  course,
  outlined,
}: Props) {
  let InstructorOutlinedClass = outlined ? style.Instructor_outlined : "";

  return (
    <div className={`${style.Instructor} ${InstructorOutlinedClass} `}>
      <Link className={style.Instructor__link} href={`/instructors/${id}`}/>
      <div
        className={`${style.Instructor__img} ${InstructorOutlinedClass} `}
        style={image ? { backgroundImage: `url(${image})` } : {}}
      >
        
        <div className={style.Instructor__wrap}>
          <div className={style.Instructor__social}>
            <Link className={style.Instructor__icon} href="">
              <Icon type={"facebook"} />
            </Link>
            <Link className={style.Instructor__icon} href="">
              <Icon type={"insta"} />
            </Link>
            <Link className={style.Instructor__icon} href="">
              <Icon type={"linkedin"} />
            </Link>
          </div>
        </div>
      </div>
      <div className={style.Instructor__name}>{instructor}</div>
      <div className={style.Instructor__info}>
        {/* <div className={style.Instructor__elem}>
          <Rating rating={rate} />
        </div>

        <div className={style.Instructor__elem}>
          <div className={style.Instructor__rate}>
            <div className={style.Instructor__like} >
              <Icon type={"like"} />
            </div>
            <div className={style.Instructor__like}>
              <Icon type={"dislike"} />
            </div>
          </div>
        </div>*/}

        <div className={style.Instructor__elem}>
          <span className={style.Instructor__svg}>
            <Icon type={"course"} />
          </span>
          {course} Курсы
        </div>
      </div>
    </div>
  );
}
