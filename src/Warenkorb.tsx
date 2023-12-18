import React from 'react';
import { Produkt } from "./Produkte";


    type WarenkorbProps ={
    warenkorb: Produkt[];
    entfernen: (produktId: number) => void;

};
const Warenkorb: React.FC<WarenkorbProps> = ({ warenkorb ,entfernen}) => {
    return (
        <div>
            <h2>Warenkorb:</h2>
            {warenkorb.length === 0 ? (
                <p>Der Warenkorb ist leer.</p>
            ) : (
                <ul>
                    {warenkorb.map((produkt, id) => (
                        <li key={id}>
                            {produkt.name} - {produkt.preis} €
                            <button onClick={() => entfernen(produkt.id)}>Entfernen</button>

                        </li>

                        ))}
                </ul>
            )}
        </div>
    );
};

export default Warenkorb;
