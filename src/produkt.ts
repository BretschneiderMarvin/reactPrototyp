export class Produkt {
    constructor(
        public name: string,
        public preis: number,
        public id: number,
        public details: string,
        public anzahl?: number

) {}
}