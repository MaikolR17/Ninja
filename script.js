class ninja {
  constructor(nombre, salud, velocidad, fuerza) {
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = 3;
    this.fuerza = 3;
  }
  //Agrega un método: sayName() - Esto deberia registrar el nombre de Ninja en la consola.
  sayName() {
    console.log(`El nombre del ninja es: ${this.nombre}`);
  }
  showStats() {
    //esto deberia mostrar el nombre, la fuerza, la velocidad y la salud del ninja.
    console.log(`El nombre del ninja es: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
  }
  drinkSake() {
    //esto deberia agregar +10 de salud al ninja.
    this.salud += 10;
    console.log(`Salud Aumentada: ${this.salud}`);
  }
}

const myNinja = new ninja("Totti", 50, 3, 3);

myNinja.sayName();
myNinja.showStats();
myNinja.drinkSake();