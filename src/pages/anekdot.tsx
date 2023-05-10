import React from 'react';

export default function Anekdot(){

    let data={};
    async function getFetch(){
        let response= await fetch('https://api.chucknorris.io/jokes/random');
        let data= await response.json();
        return data;
    }
    data= getFetch();

    return(
        <div>

        </div>
    );
}