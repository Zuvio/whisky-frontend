export class Whisky {
    id: number; 
    whiskyname: string;
    type: string;
    content: string;
    age: string;
    prize: string;
    rating: string;
    brewery: {}; // deze wordt alleen gebruikt als je addWhisky() als object meegeeft, doet verder niets
    //breweryid: string;  //omdat de relatie via @onetomany gaat is hier geen breweryid meer nodig
}