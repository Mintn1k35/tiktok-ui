// import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';
// const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.inner}>
        <img src={images.logo} alt="Tiktok" />
        <div className={styles.search}>
          <input placeholder="Search accounts or videos" spellCheck={false} />
          <button className={styles.clear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={styles.loading} icon={faSpinner} />
          <button className={styles.searchButton}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={styles.action}></div>
      </div>
    </header>
  );
}

export default Header;
