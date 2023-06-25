import React from "react";
import Header from "../Header/Header";
import ColorBlock from "../ColorBlock/ColorBlock";
import Footer from "../Footer/Footer";
import { UserContext,type User } from "@/contexts/userContext";

export default function Layout(props: any) {
  let [user, setUser] = React.useState<User>({} as User);
  let[cookie,setCookie]=React.useState(isBrowser()?window.document.cookie:'');

  function isBrowser(){
    if(typeof(window)!=='undefined'){
      return true
    }else {
      return false
    }
      
  }
  
  React.useEffect(()=>{
    let objCookie={};
     // @ts-ignore
    cookie.split(';').map(item=>{return item.split('=')}).forEach(arr=>objCookie[arr[0]]=arr[1])
     // @ts-ignore
    setUser(objCookie)
  },[cookie])

  return (
    // @ts-ignore
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      {props.children}
      <ColorBlock color={"blue"}>
        <Footer />
      </ColorBlock>
    </UserContext.Provider>
  );
}
