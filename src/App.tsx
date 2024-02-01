import React, {useState} from 'react';
import './App.css';
import { PRODUKTE } from './produktDaten';
import { Produkt } from './produkt';
import Warenkorb from "./Warenkorb";
import Warenkorbtabelle from "./Warenkorbtabelle";
import Produkttabelle from "./Produkttabelle";


function App() {
    const produkte: Produkt[] = PRODUKTE
    const [selectedProducts, setSelectedProducts] = useState<{[key: string]: number}>({})


    function entfernen(productToRemove: Produkt) {
        const updatedProducts = { ...selectedProducts };
        if (productToRemove.name in updatedProducts) {
            updatedProducts[productToRemove.name]--;

            if (updatedProducts[productToRemove.name] === 0) {
                delete updatedProducts[productToRemove.name];
            }

            setSelectedProducts(updatedProducts);
        }
    }

    function hinzufuegen(produktToAdd:Produkt) {

        const isNewProdut = !(produktToAdd.name in selectedProducts)
        setSelectedProducts(
            {
                ...selectedProducts, [produktToAdd.name]: isNewProdut ? 1 :
                    selectedProducts[produktToAdd.name] + 1
            }
        )


    }

    return (
        <>
            <h1>SHOP</h1>
                <Produkttabelle produkte={produkte}
                                hinzufuegen={hinzufuegen}
            />
                <Warenkorb
                    ausgewählteProdukte={selectedProducts}
                    entfernen={entfernen}
                />
        </>
    )
    }

export default App;
