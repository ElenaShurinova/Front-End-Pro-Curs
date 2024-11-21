import SimpleHeader from "../simpleHeader/SimpleHeader"

function DrafCardContainer({ name = "Brave Dwarf", nickname = "", age = "Unknown", primaryWeapon = "Axe" }) {
    return (
    <div className='DrafCardContainer'>

       <SimpleHeader headerText={`${name} ${nickname}`}/>
          <p>Age {age}</p>
 
          <p>primaryWeapon {primaryWeapon}</p>
    </div>
    )
  }
  
  export default DrafCardContainer;



// 3. В компоненте `DwarfCard`, добавьте значения пропсов по умолчанию. Имя по умолчанию - `Brave Dwarf`, оружие по умолчанию - топор (`Axe`).
