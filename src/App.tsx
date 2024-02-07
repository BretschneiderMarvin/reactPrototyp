import React, {useState} from 'react';
import './App.css';
import { PRODUKTE } from './produktDaten';
import { Produkt } from './produkt';
import Warenkorb from "./Warenkorb";
import Produkttabelle from "./Produkttabelle";
import {Link} from "react-router-dom";


function App() {
    const produkte: Produkt[] = PRODUKTE
    const [selectedProducts, setSelectedProducts] = useState<Produkt[]>([])
    const [summe, setSumme] = useState<number>(0)

    function Navigation() {
        return (
            <nav style={{ position: 'absolute', top: 0, right: 8 }}>
                        <Link to="/impressum">Impressum</Link>
            </nav>
        );
    }
    function sum(id: number, change: number) {
        const updateSum = selectedProducts.reduce((acc, produkt) => {
                const anzahl=produkt.anzahl||0;
                return acc + produkt.preis * (anzahl + change);
            },
            0);
        setSumme(updateSum)
    }


    function entfernen(productToRemove: Produkt) {
        let newProduct = selectedProducts.map(item => item.id === productToRemove.id && item.anzahl
            ? {...item, anzahl: item.anzahl - 1} : item)
            .filter(item => item.anzahl !== 0);
        setSelectedProducts(newProduct)
        sum(productToRemove.id, - 1)

    }

    function hinzufuegen(produktToAdd: Produkt) {
        let isNewProduct = selectedProducts.find(({id}) => id === produktToAdd.id);
        if (!isNewProduct) { // wenn es kein Produkt mit anderer ID ist ohne ! z.B. Produkt Milch wird mehrfach angezeigt
            let newProduct = {...produktToAdd, anzahl: 1} //neues Produkt zu bestehendem hinzufügen
            setSelectedProducts([...selectedProducts, newProduct])
        } else {
            let newProduct = selectedProducts.map((item) => item.id === produktToAdd.id && item.anzahl ? {
                ...item,
                anzahl: item.anzahl + 1
            } : item);
            setSelectedProducts(newProduct)
        }
        sum(produktToAdd.id,+1)
    }

    return (<>
            <h1>SHOP</h1>
            <Navigation/>
            <Produkttabelle produkte={produkte} hinzufuegen={hinzufuegen} />
            <Warenkorb ausgewählteProdukte={selectedProducts} entfernen={entfernen} summe={summe} />
        </>
    )
}

export default App;
