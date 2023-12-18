import React, {useState} from 'react';
import './App.css';
import {Produkt, Produkte} from "./Produkte";
import Warenkorb from "./Warenkorb";


const ProduktDaten: Produkt[] = [
    { name: 'Milch', id: 1, preis: 1.50 },
    { name: 'Brot', id: 2, preis: 3.50 },
    { name: 'Tomaten', id: 3, preis: 3.0 },
];

function App() {
    const [produkte, setProdukte] = useState<Produkt[]>([]);

    const hinzufuegen = (produkt: Produkt) => {
        setProdukte(prevProdukte => [...prevProdukte, produkt]);
    };
    const entfernen = (produktId: number) => {
        const update = produkte.filter(produkt => produkt.id !== produktId);
        setProdukte(update);
    };

    return (
        <div className="App">
            <h1>SHOP</h1>
            <Produkte produkt={ProduktDaten} hinzufuegen={hinzufuegen} />
            <Warenkorb warenkorb={produkte} entfernen={entfernen} />
        </div>
    );
}

export default App;
