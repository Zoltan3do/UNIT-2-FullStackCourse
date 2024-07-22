// CREIAMO DEI CONTATTI A PARTIRE DAL FORM

// creo la classe per gli oggetti della rubrica
class Contact {
    constructor(_firstName, _lastName, _phone) {
      this.firstName = _firstName
      this.lastName = _lastName
      this.phone = _phone
    }
  }
  
  // eseguiamo del codice alla pressione del tasto SALVA CONTATTO
  
  document
    .getElementsByTagName('form')[0]
    .addEventListener('submit', function (e) {
      // dobbiamo bloccare il comportamento di default del form, per evitare
      // che la pagina si aggiorni
  
      e.preventDefault() // <-- fondamentale
  
      // recuperiamo i riferimenti ai 3 campi input
      const firstNameInput = document.getElementById('petName')
      const lastNameInput = document.getElementById('lastName')
      const phoneInput = document.getElementById('phone')
  
      // recuperiamo i VALORI dei 3 riferimenti
      const firstNameValue = firstNameInput.value
      const lastNameValue = lastNameInput.value
      const phoneValue = phoneInput.value
  
      console.log('firstNameValue:', firstNameValue)
      console.log('lastNameValue:', lastNameValue)
      console.log('phoneValue:', phoneValue)
  
      // creiamo con una classe un oggetto di tipo "Elemento rubrica"
      const element = new Contact(firstNameValue, lastNameValue, phoneValue)
  
      console.log('creo in rubrica', element)
    })