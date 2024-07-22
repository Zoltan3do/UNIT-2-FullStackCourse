class Pet {
    #petName;
    #ownerName;
    #species;
    #breed;

    constructor(petName, ownerName, species, breed) {
        this.#petName = petName;
        this.#ownerName = ownerName;
        this.#species = species;
        this.#breed = breed
    }

    get getPetName() {
        return this.#petName;
    }
    /**
     * @param {any} petName
     */
    set setPetName(petName) {
        this.#petName = petName;
    }

    get getOwnerName() {
        return this.#ownerName;
    }
    /**
     * @param {any} ownerName
     */
    set setOwnerName(ownerName) {
        this.#ownerName = ownerName;
    }

    /**
 * @param {any} species
 */
    set setSpecies(species) {
        this.#species = species;
    }
    get getSpecies() {
        return this.#species;
    }

    /**
* @param {any} breed
*/
    set setBreed(breed) {
        this.#breed = breed;
    }
    get getBreed() {
        return this.#breed;
    }

    padroneUguale = function (obj) {
        if (this.#ownerName === obj.getOwnerName) {
            return "I due cani condividono lo stesso padrone";
        }
    }

}

const petsArr = [];

document.getElementsByTagName("form")[0].addEventListener("submit", function (e) {

    e.preventDefault();
    const contacts = document.getElementsByTagName("h2")[0];
    const petNameIn = document.getElementById("petName");
    const ownerNameIn = document.getElementById("ownerName");
    const speciesIn = document.getElementById("species");
    const breedIn = document.getElementById("breed");
    const listGroup = document.getElementsByClassName("list-group")[0];
    const item = document.createElement("li");

    const petName = petNameIn.value;
    const ownerName = ownerNameIn.value;
    const species = speciesIn.value;
    const breed = breedIn.value;

    let pet = new Pet(petName, ownerName, species, breed);
    petsArr.push(pet);
    contacts.classList.remove("d-none");


    item.classList.add("list-group-item");
    item.innerText = `Nome: ${pet.getPetName}, Nome del padrone: ${pet.getOwnerName}, Specie: ${pet.getSpecies}, Razza: ${pet.getBreed}`;
    listGroup.appendChild(item);
    this.reset();

});