import {Produkt} from "./produkt";

export default function Warenkorbeintrag({produkt, produktname,produktanzahl,entfernen}:{produkt:Produkt, produktname: string,produktanzahl:number, entfernen:Function}){

    return(
    <tr>
        <td>{produktname}</td>
        <td>{produktanzahl}</td>
            <td>
                <button onClick={() => entfernen(produkt)}>entfernen</button>
            </td>

    </tr>
    )
}