import Switch from './Switch';
import React from 'react';

export default {
    title:'Components/Switch',
    component:Switch,
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
          <Switch
          onChange={onChange}
          checked={checked||true}
          />
      )
  }