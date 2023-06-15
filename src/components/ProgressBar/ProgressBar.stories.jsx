import { Default } from '../Checkbox/Checkbox.stories';
import Progressbar from './ProgressBar';
import React from 'react';

export default{
    title:'Components/Progressbar',
    component:Progressbar,
    argTypes:{
        procent:{control:'number'},
    }
}

const Default=({procent})=>{

    return(
        <Progressbar procent={procent||70}/>
    )
}