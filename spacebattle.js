
// Goals Attack first alienship
//if ship survives it attacks you
// if you survive attack alien ship ect
// if you destroy alien ship you have option to attack next alien ship or retreat
// if you retreat game is over open to dev
// you win if you destroy all alien ships
// loose game if you are destroyed

// let userInput = prompt("Do you wish to attack?")
// // CANNOT do prompts in VSC

// while(userInput != 7){
//     //if they did not put in 7
//     userInput = prompt("Try again")
// }
// //otherwise
// console.log("YOU GOT IT! Thats a 7 alright!")




// CANNOT do prompts in VSC
            //ship is attacking, ask first


//ship properties

//hull = hitpoints if reaches 0 or less ship is destroyed

//firepower = damage done to hull of target with successful hit

//accuracy = chance between 0 and 1 ship will hit target
const UssAssembly = new Ship(20, 5, .7)

class Ship {

    constructor(hull, firepower, accuracy){
        this.hull = hull,
        this.firepower = firepower,
        this.accuracy = accuracy,
        this.running = true


     }

attack(){ 
    //if yes attack Enemy in the front should we attack?")
    console.log('Attacking enemy in front')
    //attack action here
    alien1.hull = alien1.hull - (this.firepower / this.accuracy)

}
// damage(){ 
//     if (Math.random() < alien[0].accuracy) {
//         console.log('You have been hit!')
//     }
// }

retreat(){
    //if btn is retreat
    console.log('Retreating from enemy, RUNN!~')
    return this.running = false
    //stop attack in here
}

explode(){ 
    if ( this.hull <= 0){
    console.log(' G A M E  O V E R ')
    return this.running = false
    }
    else { 
        return attack()
    }    
}
        
}
//hull = 20

//firepower = 5

// accuracy = .7





//your ships current health, alien attck power and accuracy
UssAssembly.attack()
UssAssembly.retreat()   
alien1.explode()
UssAssembly.explode()

//class is empty so needed project
//needed to call function
            
function shipfight (){

while( UssAssembly.hull > 0){
let userInput = prompt("Do you wish to attack?")  

//find out how to refresh page

console.log(UssAssembly.hull)       

if (userInput == 'yes'){
    UssAssembly.attack()
  }
else if (userInput == 'no'){
    UssAssembly.retreat()   
  }  
else { 
    console.log('yes or no captain.')
  }

//alien is attacting
alien1.explode()

console.log('Alien ship health = ' +  alien1.hull)
console.log('Our ship health = ' + UssAssembly.hull)

}

UssAssembly.explode()
}

shipfight()




//battleing up to six ships

//accuracy for hit
// if (Math.random() < alien[0].accuracy) {
// 	console.log('You have been hit!')
// }

// else{ 
//     return attack()
//     //if not hit attack back
// }





// use cd (folder path name) to get in your project folder

// type :
// git init 

// go to git hub create a new repository, copy that 
// 2nd set of code and paste in your git


// then when ever you want to update your code

// use 
// git add (file name)
// to stage your file

// use 
// git commit -m (a message) 
// to commit your file