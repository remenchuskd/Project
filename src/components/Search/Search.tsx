import styles from './Search.module.css';
import React from 'react';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
type Props = {
  onChange: Function;
  placeholder: string;
};

export default function Search({onChange, placeholder,}: Props) {
  let [isSearch, setIsSearch] = React.useState('');

  React.useEffect(() => {
    onChange(isSearch);
  }, [isSearch]);

  return (
    <div className={styles.Search}>
      <input
        className={styles.Search__input}
        type="text"
        placeholder={placeholder}
        onChange={(e) => setIsSearch(e.target.value)}
      />
      <span className={styles.Search__icon}>
      <Icon hoverable={true} type={'search'} />
      </span>
    </div>
  );
}
