/*
console.log("POO")

// objeto de js
const woopa_obj = {
    name: "Woopa",
    mission: "Node JS",
    age: "12",
    color: "pink"
}

// Crear una clase
/*
 1. Como crear una clase
 2. Como instanciar un objeto de una clase
 3. Instanciar varios objetos de una misma clase
 4. Como agregar el constructor para guardar atributos al crear un objeto
 5. Crear Métodos 
 */
/*
class Ajolonauta {
    constructor(name, mission, age, color) {
        this.name = name
        this.mission = mission
        this.age = age
        this.color = color
    }

    sayHello() {
        return `${this.name} is saying Hello!`
    }
}

class Pokemon {
    constructor(name) {
        this.name = name
    }
}
*/
class Repo{
    constructor(name,author,language,numberOfCommits,stars,forks,issues_open,issues_close){
        this.name = name;
        this.author = author;
        this.language = language;
        this.numberOfCommits = numberOfCommits;
        this.stars = stars;
        this.forks = forks;
        this.issues_open = issues_open;
        this.issues_close =issues_close;
    }

    getTotalIssues(){
        return `Issues abiertos ${this.issues_open}  Issues cerrados ${this.issues_close}`
    }

    getGeneralInfo(){
        return `Este repositorio ${this.name} fue creado por  ${this.author}`
    }
}

class PullRequest{
    constructor(title,branchName,dateCreated,status,repositoryNameAssociated){
        this.title = title;
        this.branchName = branchName;
        this.dateCreated = dateCreated;
        this.status = status;
        this.repositoryNameAssociated = repositoryNameAssociated; 
    }

    getStatus(){
        return `En la rama ${this.branchName} fue creada ${this.dateCreated} se encuentra con ${this.status}`;
    }

    getTitleAndAutor(){
        return `El repositorio ${this.title} del autor ${this.repositoryNameAssociated}`;
    }
}
/*
const pikachu = new Pokemon("Pikachu")
//console.log(pikachu.sayHello())

// Objeto de JS
const woopa_obj_js = {}
console.log(woopa_obj_js)

const woopa = new Ajolonauta("Woopa", "Node JS", 18, "Pink")// instanciar un objeto
console.log(woopa)
console.log(woopa.sayHello())

const wooper = new Ajolonauta("Wooper", "java", 10, "Blue")
console.log(wooper.sayHello())
*/
const pull = new PullRequest("Practica_4","main","15/04/22","ok","Israel Orozco");
const repo = new Repo("Practica_3","Israel","ingles",50,20,10,15,2);
console.log(repo.getGeneralInfo());
console.log(repo.getTotalIssues());
 
console.log(pull.getStatus());
console.log(pull.getTitleAndAutor());