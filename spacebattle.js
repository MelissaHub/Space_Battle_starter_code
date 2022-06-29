
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

const UssAssembly = new Ship(20, 5, .7)





class AlienInvaders{

    constructor(hull, firepower, accuracy){
        this.hull = hull,
        this.firepower = firepower,
        this.accuracy = accuracy,
        this.running =true


     }
    //hull = between 3-6
    //firepower = between 2 - 4
    //accuracy = between .6 and .8
    //NEED RANDOMIZER

    attack(){ 
        //attack action here
        console.log(' ^#YSDF^@JSAJ!!!!')
        //attack action here
        UssAssembly.hull =  UssAssembly.hull - (this.firepower / this.accuracy)
    
        //decriment hull witht the amount of fire power availible
    }

    explode(){ 
        if ( this.hull <= 0){
            console.log('Enemy Ship Destroyed')
           return this.running = false
        }
        else { 
            return attack()
        }    
    }
    

}

const alien1 = new AlienInvaders(3, 2, .6)
//your ships current health, alien attck power and accuracy




let ask = document.querySelector('.ask')
//debating to assign ask/ how to when respnding
let response = document.querySelector('.response')
const btn = document.querySelector('button')
//assigning submit button

btn.addEventListener('click',shipfight)
//event of submiting button activating shipfight



console.log(shipfight())

//class is empty so needed project
//needed to call function

function shipfight(){

while( UssAssembly.hull > 0){


 console.log(ask)
//let userInput = prompt("Do you wish to attack?")  
//find out how to refresh page
const userInput = document.querySelector('input') 

if (userInput == 'yes'){

    UssAssembly.attack()
    //should attack enemy once
    alien1.explode()
    // if hull is below zero it should explode else attack once
    console.log(response.('Our ship health = ' + UssAssembly.hull +<br>'Alien ship health = ' +  alien1.hull</br>))
    //should shoot back up to ask
  }
else if (userInput == 'no'){
    UssAssembly.retreat()  
    //should log retreat and then stop

  }  
else { 
    console.log('yes or no captain.')
  }



}

UssAssembly.explode()
//outside while if hull below zero it explode
}



// UssAssembly.attack()
// UssAssembly.retreat()   
// alien1.explode()
// UssAssembly.explode()


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