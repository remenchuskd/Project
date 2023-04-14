import styles from "./ButtonIcon.module.css";
import Icon from "../Icon/Icon";

export default function ButtonIcon({ icontype, iconHover }) {
  return (
    <button className={styles.ButtonIcon}>
      <Icon type={icontype} hoverable={iconHover} />
    </button>
  );
}
