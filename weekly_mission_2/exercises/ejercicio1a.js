//Twitter

const user_twitter= {
    user:"Israel",
    username:"isog88",
    bio:"lorem ipsum..",
    age:25,
    getUserData: function(){
        return `El usuario ${this.user} con nombre de usuario ${this.username} su biografia ${this.bio} , edad : ${this.age}`
    }
}

const trending_topic={
    user:"Fulanito",
    repost: 200,
    likes: 500,
    comments: 148,
    getTrendingData: function(){
    return `El usuario ${this.user} tiene ${this.repost} repost , ${this.likes} likes, y  ${this.comments} comentarios`
    }
}

const hashtag = {
    hastag_name : "3 per 3",
    local_place: 2,
    global_place: 90,
    getHashtagData: function(){
        return `El hastag ${this.hastag_name} esta en el lugar ${this.local_place} a nivel local y a nivel mundial esta en ${this.global_place} `
    }
}

console.log(user_twitter.getUserData());
console.log(trending_topic.getTrendingData());
console.log(hashtag.getHashtagData());