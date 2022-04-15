const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   /***************************Las doluciones*/
console.log(explorers)

console.log("Ejercicio 2.1")

explorers.forEach(explorer => console.log(explorer.name))

console.log("Ejercicio 2.2")
explorers.forEach(item => console.log(item.stack))

console.log("Ejercicio 2.3")
const explorers_stacks = explorers.map(my_explorer_in_list => my_explorer_in_list.stack)
console.log(explorers_stacks)

console.log("Ejercicio 2.4")
const explorer_with_js = explorers.filter(my_explorer_in_list => my_explorer_in_list.stack.includes("js"))
console.log(explorer_with_js)


console.log("Ejercicio 2.5")
const first_explorer_in_cdmx = explorers.find(my_explorer_in_list => my_explorer_in_list.city === "CDMX")
console.log(first_explorer_in_cdmx)


console.log("Ejercicio 2.6")
const all_exercises = explorers.reduce((acc, my_explorer_in_list) => acc + my_explorer_in_list.exercises_completed, 0)
console.log(all_exercises)

/*******Textualmente de la documentacion de Mozilla "The some() method tests whether at least one element 
 * in the array passes the test implemented by the provided function. It returns true if, in the array, 
 * it finds an element for which the provided function returns true; otherwise it returns false. It doesn't
 *  modify the array. " */

console.log("Ejericicio 2.7")
const ejerciciosTerminados = explorers.some(my_explorer_in_list => my_explorer_in_list.missions.exercisesFinished)
console.log(ejerciciosTerminados)
/** En mozilla The every() method tests whether all elements in the array pass the test implemented by the provided function.
 *  It returns a Boolean value.  */
console.log("Ejercicio 2.8")
const terminadosOnboarding =explorers.every(my_explorer_in_list => my_explorer_in_list.missions.onboarding.isFinished )
const terminadosFrontend  =explorers.every(my_explorer_in_list => my_explorer_in_list.missions.onboarding.isFinished )
console.log(terminadosOnboarding )
console.log(terminadosFrontend)