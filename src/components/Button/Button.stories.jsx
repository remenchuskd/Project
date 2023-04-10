import Button from './Button';
import React from "react";

export default{
    title:'Components/Button',
    component:Button,
    argTypes: {
        color:{control:'text'},
        text:{control:'text'},
        outlined:{ control: 'boolean' },

    }

};

export const Default =({text,transparent,color})=>{
    return (<Button
    text={'текст'|| text}
    outlined={true || transparent }
    color={'blue'||color}
    />) 
}
