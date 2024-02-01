import {Produkt} from "./produkt"

export default function Produkteintrag({produkt, hinzufuegen}: { produkt: Produkt, hinzufuegen: Function }) {

    return (
            <tr>
                <td>{produkt.id}</td>
                <td> {produkt.name}</td>
                <td>{produkt.preis} €</td>

<td>
            <button onClick={() => hinzufuegen(produkt)}>Zum Warenkorb hinzufügen</button>
</td>
            </tr>
            )
}




