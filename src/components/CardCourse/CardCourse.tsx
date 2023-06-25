import React from "react";
import style from "./CardCourse.module.css";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import Icon from "../Icon/Icon";
import Star from "../Stars/Stars";
import Review from "../Review/Review";
type Props = {
  image?: string;
  id: number;
  text: string;
  lesson?: string;
  time?: string;
  level?: string;
  price?: number;
  author: string;
  rating?: number;
  qnty?: number;
  tag?: string[];
  size?: string;
};

export const CARD_WIDTH = 330;

export default function CardCourse({
  id,
  image,
  text,
  lesson,
  time,
  level,
  price,
  author,
  rating,
  qnty,
  tag,
  size,
}: Props) {
  //   let cardImage = data[id].image ? data[id].image : "";

  if (tag && tag.length > 2) {
    tag.splice(2);
  }

  let rate = Math.round(rating);

  let CardWidth;

  switch (size) {
    case "large":
      CardWidth = style['large'];
      break;
    case "small":
      CardWidth = style['small'];
      break;
    default:
      CardWidth = style['small'];
      break;
  }

  return (
    <div className={`${style.Card} ${CardWidth}`}>
      <div
        className={`${style.Card__img} ${CardWidth}`}
        style={image ? { backgroundImage: `url(${image})` } : {}}
      >
        {tag ? (
          <div className={style.Card__tag}>
            {new Array(tag.length).fill("tag").map((tags, key) => {
              return <Tag key={key} type={tag[key]} />;
            })}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={style.Card__descr}>
        {/* <div className={style.Card__rating}>
          <span className={style.Card__ratingElem}>
            <Rating rating={rating} size={"standart"} />
          </span>
          <span className={style.Card__ratingElem}>
            <Star size={"small"} qnty={rate} />
          </span>
          <span className={style.Card__ratingElem}>
            <Review review={qnty} />
          </span>
        </div> */}
        <div className={`${style.Card__text} ${CardWidth}`}>{text}</div>
        {/* <div className= {`${style.Card__info} ${CardWidth}`}>
          <div className={style.Card__infoItem}>
            <span className={style.Card__icon}>
              <Icon type={"lesson"} />
            </span>
            {lesson}
          </div>
          <div className={style.Card__infoItem}>
            <span className={style.Card__icon}>
              <Icon type={"clock"} />
            </span>{" "}
            {time}
          </div>
          <div className={style.Card__infoItem}>
            <span className={style.Card__icon}>
              <Icon type={"level"} />
            </span>{" "}
            {level}
          </div>
        </div> */}
        <div className={`${style.Card__commerce} ${CardWidth}`}>
          <div className={style.Card__author}>{author}</div>
          <div className={style.Card__price}>${price}</div>
        </div>
      </div>
    </div>
  );
}
