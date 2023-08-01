
export default function UseCookie(name, value) {

  if (value === "") {
    document.cookie = `${name}=${value};Max-Age=0`;
  } else if(value=== undefined){
    let cookie=window.document.cookie.split(';')
    
  }else {
    document.cookie = `${name}=${value};Max-Age=360000000`;
  }

  //value===underfined { разбить по split и достать значение по ключю ID}
}
