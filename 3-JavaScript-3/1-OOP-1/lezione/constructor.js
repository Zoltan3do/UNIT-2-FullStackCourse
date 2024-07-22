console.log('LA FUNZIONE CONSTRUCTOR')

// la funzione constructor permette la facile creazione in serie di oggetti
// dotati tutti delle stesse caratteristiche!

const mario = {
  firstName: 'Mario',
  lastName: 'Bros',
  address: 'Via Roma 1',
  email: 'mario.bros@gmail.com',
  greet: function () {
    const presentation =
      'Ciao, io mi chiamo ' + this.firstName + ' ' + this.lastName
    //   `Ciao, io mi chiamo ${this.firstName} ${this.lastName}`
    return presentation
  },
}

console.log(mario.greet())

// se mi trovassi a dover però "generalizzare" la struttura dell'oggetto mario
// al fine di creare altri oggetti dotati della stessa forma, la soluzione ideale
// NON SAREBBE fare un copia-incolla (romperei il principio del D R Y)

const Character = function () {
  // questa è una funzione SPECIALE, e comincia con l'iniziale MAIUSCOLA
  // questa è una FUNZIONE COSTRUTTORE
  // una funzione costruttore COSTRUISCE OGGETTI
  // per convenzione le funzione costruttore cominciano con l'iniziale MAIUSCOLA
  this.firstName = ''
  this.lastName = ''
  this.address = ''
  this.email = ''
  this.greet = function () {
    const presentation =
      'Ciao, io mi chiamo ' + this.firstName + ' ' + this.lastName
    //   `Ciao, io mi chiamo ${this.firstName} ${this.lastName}`
    return presentation
  }
}

// ho creato lo stampino Character!
const luigi = new Character()
// new è la direttiva con cui creerete "istanze" della funzione costruttore Character

// luigi è un oggetto che è stato creato a partire dallo "stampino" Character
// un'ISTANZA è l'oggetto che viene fabbricato dalla FUNZIONE COSTRUTTORE

console.log('OGGETTO LUIGI', luigi)
// dobbiamo ora riempire l'oggetto luigi con i giusti valori per la sua istanza
luigi.firstName = 'Luigi'
luigi.lastName = 'Bros'
luigi.address = 'Via Roma 1'
luigi.email = 'luigi.bros@gmail.com'

console.log('OGGETTO LUIGI DOPO AVER RIEMPITO I SUOI VALORI', luigi)

// però che noia dovermi ora descrivere il valore di ognuna delle proprietà
// dell'oggetto generato con la funzione costruttore!
// non posso creare un costruttore "più furbo"?
// eccolo qua:

const RealCharacter = function (_firstName, _lastName, _address, _email) {
  this.firstName = _firstName
  this.lastName = _lastName
  this.address = _address
  this.email = _email
  this.greet = function () {
    const presentation =
      'Ciao, io mi chiamo ' + this.firstName + ' ' + this.lastName
    //   `Ciao, io mi chiamo ${this.firstName} ${this.lastName}`
    return presentation
  }
}

// fatto!
const wario = new RealCharacter(
  'Wario',
  'Bros',
  'Via Milano 1',
  'wario.bros@gmail.com'
)

console.log('WARIO', wario)
// RealCharacter ora è una funzione costruttore che NON CREA un guscio vuoto,
// ma permette grazie ai suoi parametri di creare in un colpo solo l'oggetto
// con la struttura definita una volta sola in RealCharacter e ci assegna
// anche contemporanemente i valori passati come parametri
console.log(wario.greet())

const peach = new RealCharacter(
  'Principessa Peach',
  'Toadstool',
  'Mushroom Castle',
  'peach@gmail.com'
)

peach.hairColor = 'Blonde' // per aggiungere una proprietà ad un oggetto creato
delete peach.hairColor // per eliminare una proprietà da un oggetto

console.log('PEACH', peach)

// al fine di attrarre un maggior numero di sviluppatore provenienti da altri linguaggi,
// nel corso degli anni JS ha introdotto delle nuove direttive e delle nuove
// funzionalità per accogliere e "far sentire più a casa" questo developers abituati
// a linguaggi più fortemente orientati agli oggetti

// JS ha introdotto la keyword "class"