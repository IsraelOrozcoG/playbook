//UBER
const profile = {
    user_name: "Israel Orozco",
    email: "orozco@hotmail.com",
    credit_card: "34-44-4x-xxx",
    phone_number: "56-58-xx-xx",

    getProfileData: function(){
        return   `El usuario ${this.user_name} con el correo ${this.email} su tarjeta ${this.credit_card} y su numero telefonico ${this.phone_number}`
    }

}

const travel = {
    driver_name: "Pedro Casas",
    rating: "4.5 estrellas",
    car: "Tesla 5000",
    latitude_start: 265.36,
    altitude_start: 35.63,
    latitude_end: 265.37,
    altitude_end: 35.63,
    travel_price: 200,
    getTravelDriverData: function(){
        return   `El conductor ${this.driver_name} con una calificacion de ${this.rating} y su automovil ${this.car}`
    },
    getTravelData: function (){
        return  `El viaje se tomo en ${this.latitude_start} latitud , ${this.altitude_start} altitud , y termino en
        ${this.latitude_end} latitud , ${this.altitude_end} altitud con un precio estimado de ${this.travel_price} pesos mexicanos`
    }
}


console.log(profile.getProfileData());
console.log(travel.getTravelDriverData());
console.log(travel.getTravelData());