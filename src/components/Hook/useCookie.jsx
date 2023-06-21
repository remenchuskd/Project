
export default function useCookie(name,value){
   console.log(value)
    if(value===''){
        document.cookie=`${name}=${value};Max-Age=0`
    }else{
        document.cookie=`${name}=${value};Max-Age=360000000`;
    }

}