import styles from './Search.module.css';
import React from 'react';
import Icon from '../Icon/Icon';
type Props={
  onChange:Function,
  text:string,
}

export default function Search({ onChange, text }:Props) {
  let [isSearch, setIsSearch] = React.useState('');

  React.useEffect(() => {
    onChange(isSearch);
  }, [isSearch]);

  return (
    <div className={styles.Search}>
      <input
        className={styles.Search__input}
        type='text'
        placeholder={text}
        onChange={(e) => setIsSearch(e.target.value)}
      />
      <span className={styles.Search__icon}>
        <Icon hoverable={true} type={'search'} />
      </span>
    </div>
  );
}
