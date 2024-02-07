import Warenkorbeintrag from "./Warenkorbeintrag"
import {Produkt} from "./produkt";
import React from "react";
import {PRODUKTE} from "./produktDaten";

export default function Warenkorbtabelle({ produkte, entfernen }: { produkte: Produkt[] , entfernen: Function }) {
    return (
        <table className='cartTable'>
            <thead>
            <tr className='cartHeader'>
                <th className='cartArtikel'>Artikel</th>
                <th className='cartAnzahl'>Anzahl</th>
                <th className='cartBtn'></th>
            </tr>
            </thead>
            <tbody>
            {produkte.map(item => (
                <Warenkorbeintrag
                    produkt={item}
                    entfernen={entfernen}
                    key={crypto.randomUUID()}
                />
            ))}
            </tbody>
        </table>
    )
}