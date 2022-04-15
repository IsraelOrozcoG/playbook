class Pokemon{
    constructor(name){
      this.name = name
    }
  
    sayHello(){
      console.log(`Mi pokemon ${this.name} te saluda!!!`)
    }
  
    diAlgo(mensaje){
      console.log(`Mi pokemon ${this.name} dice: ${mensaje}`)
    }
  }
  
  module.exports = Pokemon