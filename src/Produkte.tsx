
export type Produkt={
    name:string;
        id:number;
        preis:number;
}


interface ProdukteProps {
    produkt: Produkt[];
    hinzufuegen: (produkt: Produkt) => void;

};


export function Produkte({produkt, hinzufuegen}: ProdukteProps) {
    const handleClick = (prod: Produkt) => {
        hinzufuegen(prod);
    };
   return( <div>
        <h2>Produkte:</h2>
        <ul>
            {produkt.map((produkt)=>(
            <li key={produkt.id}>
            {produkt.name}  {produkt.preis} €
                <button onClick={() => handleClick(produkt)}>Zum Warenkorb hinzufügen</button>

            </li>
            ))}
        </ul>
    </div>
   );
}




