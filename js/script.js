/*
  REGOLE
  - Le risposte vanno scritte in JavaScript sotto ogni commento.
  - Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
  - In alternativa: nel terminale, `node script.js`.
  - Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

const utenti = [
  { id: 1, nome: "Mario",  cognome: "Rossi",   eta: 28, attivo: true,  città: "Milano" },
  { id: 2, nome: "Anna",   cognome: "Bianchi", eta: 35, attivo: false, città: "Roma" },
  { id: 3, nome: "Luca",   cognome: "Verdi",   eta: 22, attivo: true,  città: "Milano" },
  { id: 4, nome: "Sara",   cognome: "Neri",    eta: 17, attivo: true,  città: "Torino" },
  { id: 5, nome: "Marco",  cognome: "Gialli",  eta: 45, attivo: false, città: "Roma" },
  { id: 6, nome: "Chiara", cognome: "Rosa",    eta: 30, attivo: true,  città: "Milano" },
];


/* ESERCIZIO 1 — Arrow function compatta
   Riscrivi questa funzione come arrow function in forma compatta:
   function quadrato(n) { return n * n; }
   Chiamala con quadrato(5) e stampa il risultato.
*/

/*Un'arrow function è un modo più corto di scrivere una funzione in JavaScript.
Invece di usare la parola chiave "function", si usa la "freccia" =>
È utile soprattutto per funzioni semplici e brevi, rende il codice più leggibile.*/


// - "n =>" → "n" è il parametro in ingresso, "=>" è la freccia che separa parametro e corpo
// - "n * n" → è il corpo della funzione: con un'unica espressione, il return è implicito
const quadrato = n => n * n;// - "const quadrato" → diamo un nome alla funzione salvandola in una variabile
// "n =>" → "n" è il parametro in ingresso, "=>" è la freccia che separa parametro e corpo
console.log(quadrato(5)); // 25 n elevato a ²
console.log(`**************************************************`);

/* ESERCIZIO 2 — Destructuring di oggetto
   Crea un oggetto "persona" con almeno 4 properties (es. nome, cognome, eta, città).
   Estrai 3 properties in 3 variabili usando destructuring.
   Stampa le 3 variabili.
*/
const persona = { nome: "Christian", cognome: "Bianchi", eta: 27, città: "Napoli" };//oggetto
 
const { nome, eta, città } = persona;// Le graffe prima di = indicano il destructuring:
console.log(nome); 
console.log(eta);
console.log(città);
console.log(`**************************************************`);
//Creiamo una costante con queste 3 proprietà prese dell'oggetto di persona. In un certo senso possiamo dire che la costante {proprietà oggetto} ha valore delle propietà di persona. Quindi se per esempio noi mettessimo cap, sarà undefined perchè cap non è in nessun ogetto di percona


/* ESERCIZIO 3 — Destructuring nei parametri
   Scrivi una arrow function "riepilogo" che riceve un utente e ritorna
   "Nome Cognome (eta anni)" usando destructuring nei parametri.
   Chiamala su utenti[0], utenti[1], utenti[2] e stampa i 3 risultati.
*/

const riepilogo = ({ nome, cognome, eta }) => `${nome} ${cognome} (${eta} anni)`;
//Normalmente dovrei scrivere utente. ogni volta per interpellare una una proprietà.
//Con il destructuring nel parametro stiamo facendo la stessa cosa dell'esercizio 2, ma con una arrow, quindi in modo "compresso". Creiamo quindi una const riepilogo che conterrà una arrow func (la sintassi prevede (parametri di una funzione{destructuring con proprietà da interpellare degli oggetti dell'array utenti}) e la arrow con ciò che verrà stampato)
console.log(riepilogo(utenti[0])); //richiamiamo gli indici
console.log(riepilogo(utenti[1])); 
console.log(riepilogo(utenti[2])); 
console.log(`**************************************************`);

/* ESERCIZIO 4 — Spread su array
   Crea numeri = [1, 2, 3].
   Crea una copia indipendente con spread, fai push(99) sulla copia.
   Stampa originale e copia per dimostrare che l'originale non è cambiato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`**************************************************`);
/* ESERCIZIO 5 — Spread per concatenare
   frutti  = ["mela", "banana"]
   verdure = ["carota", "spinaci"]
   Crea cibo che li unisca con spread. Stampalo.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`**************************************************`);
/* ESERCIZIO 6 — Spread su oggetto
   prodotto = { nome: "Cuffie", prezzo: 79.99 }
   Crea un nuovo oggetto con "disponibile: true" aggiunto, senza modificare prodotto.
   Stampa il nuovo oggetto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`**************************************************`);
/* ESERCIZIO 7 — forEach
   Stampa tutti gli utenti nel formato "- Nome Cognome (città)".
   Esempio: "- Mario Rossi (Milano)"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`**************************************************`);
/* ESERCIZIO 8 — map a stringhe
   Usa map per creare nomiCompleti = ["Mario Rossi", "Anna Bianchi", ...].
   Stampa l'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`**************************************************`);
/* ESERCIZIO 9 — map a oggetti
   Usa map per creare utentiPlus: array di oggetti dove ogni utente ha tutte
   le properties originali + una nuova property "descrizione" con valore
   "Nome Cognome, città".
   Suggerimento: usa spread per copiare le properties esistenti.
   Stampa il primo elemento di utentiPlus.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`**************************************************`);
/* ESERCIZIO 10 — filter attivi
   Usa filter per ottenere solo gli utenti con attivo: true.
   Stampa l'array risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`**************************************************`);
/* ESERCIZIO 11 — filter combinato
   Usa filter per ottenere solo gli utenti maggiorenni (eta >= 18) che vivono a Milano.
   Stampa l'array risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`**************************************************`);
/* ESERCIZIO 12 — find
   Usa find per trovare il primo utente con id === 4.
   Stampa l'oggetto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`**************************************************`);
/* ESERCIZIO 13 — reduce
   a) Usa reduce per calcolare l'età media (somma età / numero utenti). Stampa.
   b) Usa reduce per contare il numero di utenti attivi. Stampa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`**************************************************`);
/* ESERCIZIO 14 — sort
   a) Ordina gli utenti per eta crescente. Stampa l'array di nomi nell'ordine.
   b) Ordina gli utenti per nome alfabeticamente. Stampa l'array di nomi nell'ordine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(`**************************************************`);
/* ESERCIZIO 15 — Chaining
   Componi una catena di metodi che:
   - filtra gli utenti attivi
   - trasforma in array di stringhe "Nome Cognome"
   - ordina alfabeticamente
   Stampa il risultato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
