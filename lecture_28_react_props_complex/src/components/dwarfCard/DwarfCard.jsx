import SimpleHeader from "../simpleHeader/SimpleHeader";

export default function DwarfCard({dwarfData}) {

const paragraphClickHandler = () =>{
    console.log(`Гном ${dwarfData.name}, владеет оружием ${dwarfData.weapon}`);
  };
  return (
    <div className="dwarfCardContainer">

      <SimpleHeader headerText={`${dwarfData.name} ${dwarfData.nickname} ${dwarfData.age} ${dwarfData.weapon}`}/>

      <p >Age: {dwarfData.age}</p>
      <p>Primary weapon: {dwarfData.weapon}</p>
      <button onClick={paragraphClickHandler}>Describe</button>
    </div>
  )
}