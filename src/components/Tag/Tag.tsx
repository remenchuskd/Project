import styles from './Tag.module.css';
import React from 'react';
type Props={
  type:string,
}

export default function Tag({ type }:Props) {
    let tagColorClass;
  switch (type) {
    case 'popular':
        tagColorClass = styles['Tag_color_blue'];
      break;
    case 'bestseller':
      tagColorClass = styles['Tag_color_green'];
      break;
    case 'new':
        tagColorClass = styles['Tag_color_red'];
      break;
    default:
        tagColorClass = styles['Tag'];
  }

  return (
    <div
      className={`${styles.Tag} ${tagColorClass} `}
    >
      {type}
    </div>
  );
}