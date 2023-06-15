import Checkbox from "../Checkbox/Checkbox";
import React from "react";

export default {
    title:'Components/Checkbox',
    component:Checkbox,
    argTypes: {
        checked:{ control: 'radio', options: ['checked', 'no checked'] },
    }
}

export const Default=({checked})=>{
    
  let [ischecked,setIschecked]=React.useState()
  function onChange(ev){
    setIschecked(ev)
  }
    return(
        <Checkbox
        onChange={onChange}
        checked={checked||true}
        />
    )
}

