import styles from './Button.module.css';

export default function Button({ buttonText, clickHandler }) {
  return (
    <button className={styles.button} onClick={clickHandler}>
      {buttonText}
    </button>
  );
}

