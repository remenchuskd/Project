import styles from './ButtonIcon.module.css';
import Icon from '../Icon/Icon';
type Props={
  icontype:string,
  iconHover?:boolean,
}

export default function ButtonIcon({ icontype, iconHover }:Props) {
  return (
    <button className={styles.ButtonIcon}>
      <Icon type={icontype} hoverable={iconHover} />
    </button>
  );
}
