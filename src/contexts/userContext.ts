import React from "react";
export type User={
    user:{
      login?:string,
      jwt?:string
    },
    setUser:Function
  }

export let UserContext=React.createContext<User>({user:{},setUser:()=>{}})