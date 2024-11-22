
import Styles from './TextField.module.css'
export default function TextField({ placeholder,helpText,errorText,label,size='medium' }) {
    return (
      <div className={`${Styles.textFieldContainer} ${Styles[size]}`}>
        <input className={Styles.textField} placeholder={placeholder} />

        <input className={`${Styles.textField} ${Styles[size]}`}/>

        {label && <p className={Styles.textFieldLabel}>{label}</p>
        }
       {errorText && <span className={Styles.errorField}>{errorText}</span>
}
       {helpText && <p className={Styles.helpText}>{helpText}</p>

       }
       
      </div>
    );
}
  

//component/////////////////////////////////////////////////////////////
// import styles from './FlexContainer.module.css';

// export default function FlexContainer( props ) {

//   return (
//     <div className={styles.flexContainer}>
//       {props.children}
//     </div>
//   )
// }

//css/////////////////////////////////////////////////////////////
// .flexContainer {
//     display: flex;
//     gap: 10px;
//   }

//APPP////////////////////////////////////////////////////////////////////////
//   <FlexContainer>
//           <p>SimpleParagrpahText</p>
//           <button>Click me!</button>
//           <input placeholder='bububu'/>
//         </FlexContainer>