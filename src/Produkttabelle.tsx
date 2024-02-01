import { Produkt } from "./produkt";
import Produkteintrag from "./Produkteintrag";
import {useState} from "react";
import Searchbar from "./Searchbar";

export default function Produkttabelle({ produkte, hinzufuegen }: { produkte: Produkt[], hinzufuegen: Function }) {
    const [searchTerm, setSearchTerm] = useState("");

    function handleFilterTextChange(text: string) {
        setSearchTerm(text);
    };

    const filteredProdukte = produkte.filter((produkt: Produkt) =>
        produkt.name.includes(searchTerm)
    );
    return (
        <>
            <Searchbar filterText={searchTerm}
                       onFilterTextChange={handleFilterTextChange}
            />
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Preis</th>
                </tr>
                </thead>
                <tbody>
                {filteredProdukte.map((produkt: Produkt) => {
                    return (
                        <Produkteintrag
                            produkt={produkt}
                            hinzufuegen={hinzufuegen}
                            key={crypto.randomUUID()}/>
                    );
                })}
                </tbody>
            </table>
        </>
    )
}