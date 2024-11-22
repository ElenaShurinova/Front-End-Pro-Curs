
import TextField from './TextField'; 
import Button from './Button'; 
import styles from './SimpleForm.module.css'; 



export default function SimpleForm() {
    const handleSubmit = () => {
      console.log('Форма отправлена!');
    };
  
    return (
      <div className={styles.SimpleForm}>
        <TextField
          placeholder="Имя"
          helpText="Не пугайтесь, мы никому не расскажем"
          label="Пожалуйста, укажите имя"
        />
        <TextField
          placeholder="Введите должность"
          label="Укажите Вашу должность"
        />
        <Button buttonText="Отправить" clickHandler={handleSubmit} />
      </div>
    );
  }
  
  