/* W1D1 
1) Cos'è un Algoritmo?
R: Un'algoritmo può essere definito come un insieme finito di istruzioni necessarie alla risoluzuione di problema per ottenere una soluzione, 
inoltre un algoritmo per risolvere un determinato problema o per fornire un risultato non deve essere necessariamente uguale per tutti, detto in breve ogni utente potrebbe arrivare ad una solzuone x
con istruzioni differenti, l'importante che il risultato finale sia sempre quello desiderato

ES: Se in un classe di Alunni io volessi sapere quanto hanno raggiunto la maggiore età avrei fondamentalmente 2 modi per farlo, controllare se il dato età è > 18 ogni alunno, 
o potrei controllare quanti hanno < 18 Anni per poi fare la differenza con il numero di alunni della classe, fondamentalmente entrambi gli approcci portano al medesimo scopo,
 fatto è la soluzione migliore sarà quella che richiede un minor numero di istruzioni per arrivare al risultato.

2) Cos'è una Variabile? 
R: Una Variabile può essere considerata letteralmente come un contenitore o uno spazio che deve appunto contenere un qualcosa definito Valore o dal nome Variabile poichè non è detto che quel valore resti lo stesso iniziale ma appunto può "Variare" nel Tempo.

3) Undefined e null sono la stessa cosa?
R: No, sono simili ma non sono la stessa cosa in quanto potremmo che uno è definito intenzionalalmente mentre l'altro no, nello specifico undefined è un qualcosa di non ancora definito o che comunque non ha nessun valore appunto definito,
mentre Null è una scelta intezionale da parte dell'utente di assegnare un valore nullo ad una variabile che magari servirà per scopi successivi di cui magari non si conosce nemmeno il tipo di valore.

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const Name = "Dario"; /* Name sarà una Variabile di tipo Stringa poichè contiene del Testo, per utilizzare il type stringa si usano le "" o '', 
il tipo stringra influenza anche le operazioni che possono essere effettuate su di essi, difatti la somma tra 2 strighe non restituità una somma numerica dei caratteri ma la concanetazione delle 2*/
const secondName = "Simone";
console.log(Name);
console.log(secondName);
console.log("La concatenzaione di " + Name + " e " + secondName);

const age = 29; /* age sarà una variabile di tipo number intero o reale in altri linguaggi sarebbe stato definito come int age = 29 in quanto un senza decimali caso contrario sarebbe stato di tipo float appunto reale o decimale.
esempio di operazioni sui number può essere la somma dei voti di Dario con Epicode sapendo che il primo compito è stato 0*/
let average = null;
let firstTask = 0;
let secondTask = 9;

average=(firstTask+secondTask)/2;
console.log("la media dei voti di " + Name + " è " + average);

let isEnough = true; /* isEnough sarà una variabile di tipo Booleana che può assumere 2 valori "True o False" le qualsi sono fodamentali per verificare condizioni e con gli operatori Logici AND OR e NOT,
in questo caso useremo isEnough per vedere se dario ha la Sufficienza */
if(average >=6){
    console.log("è "+ isEnough+" "+ Name + "ha la sufficienza in quanto la sua media è di " + average);
}
else{
    isEnough = false;
    console.log("è "+ isEnough+" "+ Name + " non ha la sufficienza in quanto la sua media è di " + average);
}

let votes = [0,9,10,5]; /* votes sara una "Lista" o "Array" di voti l'Array in js diversamente da altri linguaggi di programmazione può contenere un insieme non omogeneo di valori,
per non omogeneo si intende che nello stesso Array possiamo contenere numeri, stringhe, booleani, anche un'ultriore Array, o oggetti, per accedere alle posizioni dell'array solitamente si 
utilizza un indice che rappresenterà appunto le posizioni dell'Array che ricordiamo parte da 0; */
for(let i=0; i < votes.length; i++){
    console.log("i Voti di " + Name + " Sono " + votes[i]);

}

let students = {
    surname: 'Modanese',
    City: 'Napoli',
    Hobby: 'Gaming'
};

/*students è un oggetto, cioè una rappresentazione della realtà, nel dettaglio è un insieme di proprietà che destrive l'oggetto stesso o che hanno della affinità, 
nell'esempio sopra indicato avremmo potuto anche utilizzare un Array o lista mettendo in ogni posizione le varie proprietà dello studente ma ci sarebbero molte più limitazioni,
in quanto dovremmo ricordarci che alla posizione 0 c'è il surname, alla posizione 1 City, avrebbe un utilizzo poco sensato, metre con l'oggetto tutto acquista più senso avendo soprattutto la combo "key" "Value"
per accedere alle varie propietà di un oggetto si utilizza il "." conosciuta anche come  Dot notation */
console.log("il Cognome di " + Name + " è " + students.surname + " vive a " + students.City + " e tra i sui Hobbys c'è " + students.Hobby );

//Menzioniamo anche Undefined e null descritti a riga 14 

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
       Vedi riga 71 */


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let a = 10;
let b = 20;
let sum = a+b;
console.log("Esercizio 3: Somma tra 2 Numeri, La somma di " + a + " e " + b + " e' " + sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12; 

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
//Vedi riga 31

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let sub = 4 - x;
console.log("Esercizio 6: Esegui una sottrazione tra i numeri 4 e la variable x appena dichiarata (che contiene il numero 12), il risultato e'" + sub);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
const name1 = "john";
const name2 = "John";
let isEqual= (name1 === name2);

console.log("il nome " + name1+ " ed il nome " + name2 + " Sono Uguali: " + isEqual);

let lowerName = name2.toLocaleLowerCase();
isEqual = (name1 === lowerName);
console.log("il nome " + name1+ " ed il nome " + lowerName + " Sono Uguali: " + isEqual);
