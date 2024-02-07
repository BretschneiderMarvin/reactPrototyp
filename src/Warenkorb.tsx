import Warenkorbtabelle from"./Warenkorbtabelle"
import {Produkt} from "./produkt";


export default function Warenkorb({ ausgewählteProdukte,entfernen,summe}: { ausgewählteProdukte:Produkt[],entfernen:Function,summe:number}) {

    return (<>
            <h1>Warenkorb:</h1>
            <Warenkorbtabelle
             produkte={ausgewählteProdukte}
             entfernen={entfernen}
            />
            Gesamtsumme: {summe} Euro
            <br/>
        </>
    )
}
