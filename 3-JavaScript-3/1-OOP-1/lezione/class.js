// le classi in JS sono un metodo ALTERNATIVO per creare delle funzioni costruttore
// lo scopo è sempre il medesimo: costruire un metodo per creare oggetti in serie
// è semplicemente un metodo diverso per creare una funzione costruttore

class RealCharacter {
    constructor(_firstName, _lastName, _address, _email) {
      // qui dentro create le proprietà per le istanze
      // che verranno assegnati sulla base dei parametri
      this.firstName = _firstName
      this.lastName = _lastName
      this.address = _address
      this.email = _email
    }
  
    // se poi avete delle proprietà che NON dipendono dai parametri
    // potete metterle "sciolte" nella classe FUORI dal constructor
    numberOfLegs = 2
  
    greet = function () {
      const presentation =
        'Ciao, io mi chiamo ' +
        this.firstName +
        ' ' +
        this.lastName +
        ' e ho ' +
        this.numberOfLegs +
        ' gambe'
      //   `Ciao, io mi chiamo ${this.firstName} ${this.lastName}`
      return presentation
    }
  
    // noterete che al di fuori del constructor le proprietà/i metodi NON
    // necessitano di inizializzazione; questa è una caratteristica della sintassi
    // del costrutto class
  }
  
  // utilizzare una classe è IDENTICO a utilizzare una funzione costruttore
  const toad = new RealCharacter(
    'Toad',
    'Toad',
    'Mushroom Castle',
    'toad@gmail.com'
  )
  
  console.log(toad.greet())
  
  // abbiamo definito class come metodo alternativo per la creazione di funz. costruttore
  // ci sono però delle caratteristiche del costrutto class che non sono immediatamente
  // replicabili con le Function()
  
  // una di queste riguarda l'EREDITARIETÀ
  
  class Human {
    constructor(_firstName, _lastName, _age) {
      this.firstName = _firstName
      this.lastName = _lastName
      this.age = _age
    }
  
    numberOfHands = 2
  
    greet = function () {
      const presentation =
        'Ciao, io mi chiamo ' + this.firstName + ' ' + this.lastName
      return presentation
    }
  }
  
  const h1 = new Human('Pietro', 'Verdi', 20)
  console.log('H1', h1)
  
  //
  class Developer extends Human {
    constructor(_firstName, _lastName, _age, _skills) {
      // qui dentro ora INVOCO il costruttore di Human
      super(_firstName, _lastName, _age) // genererà this.firstName, this.lastName, this.age
      this.skills = _skills
      // infine mi occupo di creare la proprietà "skills" nel costruttore di developer
    }
  }
  
  const d1 = new Developer('Giovanni', 'Bianchi', 25, ['HTML', 'CSS', 'JS'])
  console.log('d1', d1)
  
  //
  class ProjectManager extends Developer {
    constructor(_firstName, _lastName, _age, _skills, _numberOfTeams) {
      // this.firstName = _firstName
      // this.lastName = _lastName
      // this.age = _age
      // this.skills = _skills
      super(_firstName, _lastName, _age, _skills)
      this.numberOfTeams = _numberOfTeams
    }
  }
  
  const p1 = new ProjectManager(
    'Gianmaria',
    'Birichini',
    35,
    ['TS', 'AWS', 'AZURE'],
    3
  )
  
  console.log('p1', p1)
  console.log(p1.numberOfHands)
  console.log(p1.greet())