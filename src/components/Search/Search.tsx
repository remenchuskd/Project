import styles from "./Search.module.css";
import React from "react";
import Icon from "../Icon/icon";

export default function Search({ onChange, text }) {
  let [isSearch, setIsSearch] = React.useState("");

  React.useEffect(() => {
    onChange(isSearch);
  }, [isSearch]);

  return (
    <div className={styles.Search}>
      <input
        className={styles.Search__input}
        type="text"
        placeholder={text}
        // "What do you want to learn?"
        onChange={(e) => setIsSearch(e.target.value)}
      />
      <span className={styles.Search__icon}>
        <Icon type={'search'}/>
      </span>
    </div>
  );
}
