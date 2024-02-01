import Warenkorbeintrag from "./Warenkorbeintrag"
import {Produkt} from "./produkt";
import React from "react";

export default function Warenkorbtabelle ({produkte,entfernen}:{produkte:{[key:string]:number},entfernen:Function}){

    const warenkorbEinträge:any[]=[]
    for(let produkt in produkte){
        warenkorbEinträge.push(
            <Warenkorbeintrag
                produkt={produkt}
                produktname={produkt}
                produktanzahl={produkte[produkt]}
                entfernen={entfernen}
                key={crypto.randomUUID()}

            />
        )
            }



    return(
        <table>
            <thead>
            <tr>
                <th>Artikel</th>
                <th>Anzahl</th>
            </tr>
            </thead>
            <tbody>
            {warenkorbEinträge}
            </tbody>
        </table>
    )
}
