//Facebook

const user_facebook = {
    user_name : "Israel",
    email : "israel@gmail.com",
    user_account_creation : "25/10/2020",
    getUserData : function (){
        return `Informacion basica del usuario ${this.user_name} : correo ${this.email} creacion de la cuenta ${this.user_account_creation}`
    }
}

const post = {
    user_post : "The famous one",
    num_likes : 20000,
    num_reposts: 600,
    comments : 6000,
    getPostData: function (){
        return `El usuario ${this.user_post} tiene ${this.num_likes} likes, ${this.num_reposts} repost y ${this.comments} comentarios`
    }
}

const biography ={
    birth_date: "25/06/2000",
    movies_liked:["Shark","Piranha","Below the sea"],
    books_liked:["1 2 3 Libro","The little Prince"],

}

console.log(user_facebook.getUserData());
console.log(post.getPostData());

console.log("Fecha de nacimiento"+biography.birth_date);
console.log("Una pelicula vista "+biography.movies_liked[0]);
console.log("Un libro que me gusta"+biography.books_liked[0]);