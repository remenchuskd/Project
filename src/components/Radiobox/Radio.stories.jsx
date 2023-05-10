import Radio from './Radio'

export default {
    title:'Components/Radio',
    component:Radio,
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
        <Radio
        onChange={onChange}
        checked={checked||true}
        />
    )
}