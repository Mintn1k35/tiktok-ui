// import classNames from 'classnames';
import styles from './Header.module.scss';

// const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}></div>
    </header>
  );
}

export default Header;
