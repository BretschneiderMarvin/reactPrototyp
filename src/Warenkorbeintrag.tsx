import {Produkt} from "./produkt";
import React from 'react';

export default function Warenkorbeintrag({ produkt, entfernen }: { produkt: Produkt, entfernen: Function }) {
    return (
        <tr>
            <td>{produkt.name}</td>
            <td>{produkt.anzahl}</td>
            <td>
                <button onClick={() => entfernen(produkt)}>entfernen</button>
            </td>
        </tr>
    );
}
