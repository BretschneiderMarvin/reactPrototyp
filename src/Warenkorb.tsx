import Warenkorbtabelle from"./Warenkorbtabelle"
import {Produkt} from "./produkt";


export default function Warenkorb({ ausgewählteProdukte,entfernen}: { ausgewählteProdukte: {[key: string]: number},entfernen:Function}) {

    return (<>
            <h1>Warenkorb:</h1>
            <Warenkorbtabelle
             produkte={ausgewählteProdukte}
             entfernen={entfernen}
            />

        </>
    )
}
