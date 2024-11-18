import SimpleHeader from "../simpleHeader/SimpleHeader"

function DrafCardContainer(props) {
    return (
    <div className='DrafCardContainer'>

       <SimpleHeader headerText={`${props.name} ${props.nickname}`}/>
          <p>Age {props.age}</p>
 
          <p>primaryWeapon {props.primaryWeapon}</p>
    </div>
    )
  }
  
  export default DrafCardContainer;