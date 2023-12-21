import React, {useEffect, useState} from 'react';
import { Produkt } from "./Produkte";


    type WarenkorbProps ={
    warenkorb: Produkt[];
    entfernen: (produktId: number) => void;

};
const Warenkorb: React.FC<WarenkorbProps> = ({ warenkorb ,entfernen}) => {
    const[menge, setMenge]=useState<number>(0);

    useEffect(()=>{
        setMenge(warenkorb.length);

    },[warenkorb]);
    return (
        <div>
            <h2>Warenkorb:</h2>
            {warenkorb.length === 0 ? (
                <p>Der Warenkorb ist leer.</p>
            ) : (

                <ul>
                    <p>Anzahl: {menge}</p>
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
