// in JS è possibile creare oggetti "dal nulla" (senza un progetto prima),
// semplicemente con la cosiddetta "notazione letterale"

const house = {
    color: 'yellow',
    numberOfFloors: 5,
    'garden-sqm': 30,
    families: ['Bianchi', 'Rossi'],
    explode: () => {
      // un metodo dell'oggetto house
      // un metodo è un valore di una coppia che ne descrive una funzionalità
      // è una funzione collegata ad un nome di proprietà all'interno dell'oggetto
      console.log('BOOM')
    },
  }
  
  // per accedere alle proprietà è possibile utilizzare la notazione letterale
  house.color // 'yellow'
  house.families[1] // 'Rossi'
  
  // se il nome della proprietà non è scritto in camelCase o se il nome
  // della proprietà deriva da una variabile è possibile anche accedere
  // alle proprietà tramite la notazione a par. quadre (square brackets notation)
  house['garden-sqm'] // 30
  
  // è possibile anche invocare i metodi degli oggetti tramite ()
  house.explode() // -> console.log di 'BOOM'
  
  const dog1 = {
    name: 'Fufy',
    breed: 'German Shepard',
    age: '5',
    bark: function () {
      return 'BAU'
    },
    convertToHumanAge: function () {
      return this.age * 7
      // ritorno l'età di dog1 (in questo caso equivale a "this") moltiplicata per 7
    },
  }
  
  dog1.bark() // 'BAU'
  console.log(
    'Il mio cane se fosse un umano avrebbe ' + dog1.convertToHumanAge() + ' anni'
  )
  
  // la notazione letterale va benissimo per creare un oggetto al volo,
  // ma se volessimo ragionare in stile OOP sarebbe opportuno creare un progetto,
  // uno "stampino" per il nostro oggetto, in modo da poter utilizzare questo stampino
  // per creare in serie tanti oggetti dello stesso tipo in modo "sicuro"
  
  // vediamo come poter creare un progetto, uno stampino, un "blueprint"
  // andiamo al file "constructor.js"