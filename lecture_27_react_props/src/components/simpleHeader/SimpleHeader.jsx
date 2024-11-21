
import styles from './SimpleHeader.module.css';

// Компонент SimpleHeader с пропсами по умолчанию
function SimpleHeader({ headerText = "Default header text", type = "info" }) {
  // Используем h1 для типа 'alert' и h2 для остальных
  const HeaderTag = type === 'alert' ? 'h1' : 'h2';
  
 
  return <HeaderTag className={styles[type]}>{headerText}</HeaderTag>;
}

export default SimpleHeader;

// 1. В компоненте `SimpleHeader`, добавьте значение по умолчанию для текста заголовка. 
// По умолчанию - текст `Default header text`.
// 2. В компоненте `SimpleHeader`, добавьте новый проп, `type`. Он будет принимать строку с типом заголовка. Может быть 3 типа: info, warning, alert. 
// Значение по умолчанию - info. Этот проп нужно использовать как имя класса для заголовка.

