
import { Link } from 'react-router';
import styles from './NavMenu.module.css';

export default function NavMenu() {
  return (
    <nav>
      <ul className={styles.navMenuConteiner}>
        <li className={styles.NavMenuItem}><Link to="/">Home</Link></li>
        <li className={styles.NavMenuItem}> <Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

