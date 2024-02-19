import {Produkt} from "./produkt"
import {useState} from "react";

export default function Produkteintrag({produkt, hinzufuegen}: { produkt: Produkt, hinzufuegen: Function }) {
    const [visible, setVisible] = useState(false);

    return (
        <>

            <tr>
                <td>{produkt.id}</td>
                <td> {produkt.name}</td>
                <td>{produkt.preis} €</td>

                <td>
                    <button onClick={() => hinzufuegen(produkt)}>Zum Warenkorb hinzufügen</button>
                </td>
            </tr>
    {visible && (
        <tr>
            <td colSpan={4}>
                <p>Details zum Produkt: {produkt.details}</p>
            </td>
        </tr>
    )}
    <tr>
        <td colSpan={4}>
            <button onClick={() => setVisible(!visible)}>
                {visible ? "Ausblenden" : "Anzeigen"}
            </button>
        </td>
    </tr>
</>
);
}




