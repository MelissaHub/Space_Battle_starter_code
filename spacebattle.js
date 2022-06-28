
// Goals Attack first alienship
//if ship survives it attacks you
// if you survive attack alien ship ect
// if you destroy alien ship you have option to attack next alien ship or retreat
// if you retreat game is over open to dev
// you win if you destroy all alien ships
// loose game if you are destroyed




//ship properties
class Ship {

    constructor(hull, firepower, accuracy){
        this.hill = hull,
        this.firepower = firepower,
        this.accuracy = accuracy,


     },

//hull = hitpoints if reaches 0 or less ship is destroyed

//firepower = damage done to hull of target with successful hit

//accuracy = chance between 0 and 1 ship will hit target


attack(){ 
    //if yes attack Emery in the front shuld we attack?")
    console.log('Attacking enemy in front')
    //attack action here
    AlienInvaders.hull - this.firepower / this.accuracy

}
damage(){ 
    if (Math.random() < alien[0].accuracy) {
        console.log('You have been hit!')
    }
}

retreat(){
    //if btn is retreat
    console.log('Retreating from enemy, RUNN!~')
    //stop attack in here
}

explode(){ 
    if ( this.hull < 0){
    console.log(' G A M E  O V E R ')}
        
}
}
//hull = 20

//firepower = 5

// accuracy = .7

const UssAssembly = new Ship(20, 5, .7)





class AlienInvaders{

    constructor(hull, firepower, accuracy){
        this.hill = hull,
        this.firepower = firepower,
        this.accuracy = accuracy,


     }


    //hull = between 3-6
    //firepower = between 2 - 4
    //accuracy = between .6 and .8
    //NEED RANDOMIZER

    attack(){ 
        //attack action here
        console.log(' ^#YSDF^@JSAJ!!!!')
        //attack action here
        Ship.hull - this.firepower / this.accuracy
    
        //decriment hull witht the amount of fire power availible
    }

    explode(){ 
        if ( this.hull < 0){
            console.log(' G A M E  O V E R ')}
    }

}

//battleing up to six ships

//accuracy for hit
if (Math.random() < alien[0].accuracy) {
	console.log('You have been hit!')
}

else{ 
    return attack()
    //if not hit attack back
}





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