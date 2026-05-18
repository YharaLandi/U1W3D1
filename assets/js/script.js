/*
  REGOLE
  - Le risposte vanno scritte in JavaScript sotto ogni commento.
  - Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
  - In alternativa: nel terminale, `node script.js`.
  - Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/*memo personale 
destructuring:
 oggetto → graffe
 array → parentesi quadre
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

//Con lo spread (sintassi= [...nomeArrayDaCopiare]) copiamo i valori di un array in uno nuovo e indipendente.

const numeri = [1, 2, 3]; //abbiamo creto l'array
const copia = [...numeri];//I tre puntini "copiano" l'array numeri
copia.push(99);// push aggiunge alla fine dell'array copia ciò che gli indichiamo (appunto un array NUOVO creato copiando quello precedente)
 
console.log(numeri); // [1, 2, 3]  come possiamo vedere, come già detto al commento precedente, l'array con subisce cambiamenti nè viene copiato in sè, ne vengono solo copiati i valori 
console.log(copia);  // [1, 2, 3, 99]
console.log(`**************************************************`);

/* ESERCIZIO 5 — Spread per concatenare
   frutti  = ["mela", "banana"]
   verdure = ["carota", "spinaci"]
   Crea cibo che li unisca con spread. Stampalo.
*/
//come prima
const frutti = ['mela', 'banana']; //abbiamo creto gli array
const verdure = ["carota", "spinaci"];
const cibo = [...frutti, ...verdure];//I tre puntini "copiano" gli array 
 
console.log(frutti); 
console.log(verdure);  
console.log(cibo);

console.log(`**************************************************`);


/* ESERCIZIO 6 — Spread su oggetto
   prodotto = { nome: "Cuffie", prezzo: 79.99 }
   Crea un nuovo oggetto con "disponibile: true" aggiunto, senza modificare prodotto.
   Stampa il nuovo oggetto.
*/
const prodotto = { nome: "Cuffie", prezzo: 79.99 }; // creo oggetto
 // uso spread su prodotto = {...prodotto} copia tutte le propietà di prodotto nel nuovo oggetto,
// poi aggiungiamo disponibile: true così oggetto prodotto rimane intatto
const prodottoDisponibile = { ...prodotto, disponibile: true };
console.log(prodottoDisponibile); // { nome: "Cuffie", prezzo: 79.99, disponibile: true }
console.log(`**************************************************`); //se si fosse trattato di un array comunque non avremmo potuto usare push, perchè in quel caso avrei modificato l'array originale 



/* ESERCIZIO 7 — forEach
   Stampa tutti gli utenti nel formato "- Nome Cognome (città)".
   Esempio: "- Mario Rossi (Milano)"
*/
//forEach è un metodo degli array. Prende una funzione e la esegue una volta per ogni elemento dell'array, passandogli l'elemento come parametro. È come un for ma prende direttamente OGNI elemento di, in questo caso, utenti. Cosa che dovremmo fare ad uno ad uno con il for.
utenti.forEach(({ nome, cognome, città }) => {
  console.log(`${nome} ${cognome} vive a ${città}`);
});//Poi ci aggiungiamo il destructuring che ci permette appunto di "pescare" i valori delle proprietà come ci serve
console.log(`**************************************************`);



/* ESERCIZIO 8 — map a stringhe
   Usa map per creare nomiCompleti = ["Mario Rossi", "Anna Bianchi", ...].
   Stampa l'array.
*/

/*map è simile a forEach, ovvero itera su ogni elemento dell'array. La differenza chiave è:
forEach: ESEGUE qualcosa per ogni elemento, ma non restituisce niente di nuovo. (in un certo senso come un puzzle di informazioni che usa alcuni pezzi)
map= esegue qualcosa per ogni elemento e restituisce un array nuovo con i risultati (prende quelle proprietà, le copia e crea un array nuovo con quelle proprietà) ma non modifica l'array originario*/
const nomiCompleti = utenti.map(({ nome, cognome }) => `${nome} ${cognome}`);
console.log(nomiCompleti);
console.log(`**************************************************`);




/* ESERCIZIO 9 — map a oggetti
   Usa map per creare utentiPlus: array di oggetti dove ogni utente ha tutte
   le properties originali + una nuova property "descrizione" con valore
   "Nome Cognome, città".
   Suggerimento: usa spread per copiare le properties esistenti.
   Stampa il primo elemento di utentiPlus.
*/


const utentiPlus = utenti.map(utente => ({
   // "utente" è il parametro della funzione di map. Possiamo dire che map passa automaticamente ogni oggetto di utenti alla funzione, e noi lo chiamiamo "utente". Ce ne restituisce uno alla volta perchè gli richiediamo un indice specifico dell'array sul console.log ma "dentro di sè" li ha "letti" tutti e "modificati" tutti 

  ...utente,// ...utente copia tutte le properties originali, poi aggiungiamo descrizione

  descrizione: `${utente.nome} ${utente.cognome}, ${utente.città}`
}));//stampiamo il nuovo l'oggetto con il valore della nuova proprietà crata tramite la arrow function nel nuovo array creato da map
console.log(utentiPlus[0]);
console.log(utentiPlus[5]);
console.log(utentiPlus[3]);
console.log(utentiPlus[4]);
// { id: 1, nome: "Mario", cognome: "Rossi", ..., descrizione: "Mario Rossi, Milano" }
console.log(`**************************************************`);


 /* ESERCIZIO 10 — filter attivi
   Usa filter per ottenere solo gli utenti con attivo: true.
   Stampa l'array risultante.
*/

// similmente ai metodi precedenti filter itera sull'array tutti gli elementi ma restituisce solo quelli i quali soddisfano una certa condizione che gli diamo
const attivi = utenti.filter(u => u.attivo===true);
//gli sitamo dicendo, entra dentro utenti, crea un parametro u e dagli la proprietà attivo. se questa proprietà corrisponde a true, allora inseriscino nell'array attivi.
console.log(attivi);
console.log(`**************************************************`);


/* ESERCIZIO 11 — filter combinato
   Usa filter per ottenere solo gli utenti maggiorenni (eta >= 18) che vivono a Milano.
   Stampa l'array risultante.
*/

//identico al precedente ma devono essere rispettate entrambe le condizioni 
const milanoAdulti = utenti.filter(u => u.eta >= 18 && u.città === "Milano");
console.log(milanoAdulti);
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
