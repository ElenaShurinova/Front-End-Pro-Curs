import React from 'react'
import DwarfCard from '../dwarfCard/DwarfCard'

function DwarfList  ({listHeaderText='brave dwarwes',dwarwes})  {
  return (
    <div className='dwarfList' >
        <h4>{listHeaderText}</h4>
        {dwarwes && dwarwes.length > 0 ? (
        
            dwarwes.map(el =>{
                return(
                    <DwarfCard key={el.name}dwarfData={el}/>
                )})) : 
                <h4>'Empty dwarves list'!</h4>
            
           
             }
    </div>
  )
}

export default DwarfList