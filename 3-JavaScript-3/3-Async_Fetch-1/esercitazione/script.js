// Devi realizzare una pagina per una “libreria” contenenente libri derivanti da una chiamata HTTP di tipo GET. 
// Endpoint: https://striveschool-api.herokuapp.com/books 
// Requisiti della pagina: 
// ● Utilizza Bootstrap 5 per creare una pagina responsive con una sezione centrale a 3 o 4 colonne per riga 
// ● Ogni colonna avrà al suo interno un elemento Card di Bootstrap, creata a partire da un singolo libro: nella “card image” inserisci la copertina del libro, nel “card body” il suo titolo e il suo prezzo. 
// ● Sempre nel “card body” inserisci un pulsante “Scarta”. Se premuto, dovrà far scomparire la card dalla pagina. 

// ● EXTRA: crea una lista che rappresenti il carrello del negozio e inseriscila dove vuoi nella pagina. Aggiungi un altro pulsante “Compra ora” vicino a “Scarta” nelle card per aggiungere il libro al carrello. Il carrello dovrà persistere nello storage del browser. 
// ● EXTRA: aggiungi vicino ad ogni libro del carrello un pulsante per rimuoverlo dal carrello.


const ENDPOINT = "https://striveschool-api.herokuapp.com/books";
