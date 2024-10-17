/*
const person = {
    name: 'John',
    age: 30,
    job: 'Developer'
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ': ' + person[key]);
    }
}



// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

  /*
  for (let key in recordCollection) {
    if(recordCollection_)
  }



  //Only change code below this line
function updateRecords(records, id, prop, value) {

  function updateRecords(records, id, prop, value) {

for (const property in records) {
  
  if(value == "") {
  delete recordCollection[prop]
    } else if (records.prop == records.value && records.tracks != "") {
       if(records[id].track.hasOwnProperty(track)){

       }
       records[id][prop]= value
    } 
}
  return records;
}
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

function quickCheck(arr, elem) {
    // Only change code below this line
    if(arr.indexOf(elem) != -1) {
      return true; 
    } else {
      return false;
    }
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

  

  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
     for (let i = 0; i < arr.length; i++) {
       if(arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]); 
       }        
     }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

  

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    // Only change code below this line
      return foods[scannedItem]; 
    // Only change code above this line
  }
  
  console.log(checkInventory("apples"));

  

  const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) {
    // Only change code below this line
      let count =[]; 
      for (const key in allUsers) {
        if(allUsers[key].online === true) {
             count.push(key); 
        } 
      } return count.length
    // Only change code above this line
  }
  
  console.log(countOnline(users));
  


  //sets a random number and assigns it to raceNumber
let raceNumber = Math.floor(Math.random() * 1000);
//has the user registered early or not 
let registeredEarly = false; 
//stores the runners age
let runnersAge = 19;
//check if runner is an adult and registered early
if( runnersAge > 18 && registeredEarly ) {
  raceNumber += 1000;
};

if( runnersAge > 18 && registeredEarly ) {
  console.log(`You will be racing at 9:30am and here is your race number ${raceNumber}` )
} else if(runnersAge > 18 && !registeredEarly){
  console.log(`You will be racing at 11:00am and here is your race number ${raceNumber}`)
}; 

if( runnersAge < 18 ) {
  console.log(`You will be racing at 12:30 am and here is your race number ${raceNumber}`)
} else {
  console.log('You need to go and visit the helpdesk')
};


const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};



const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard; 
while(currentCard != 'spade'){
  currentCard = cards[Math.floor(Math.random()*4)]; 
  console.log(currentCard); 
}


//how to determine the winner 
const determinWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'game was a tie';
  }else if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
        return 'computer won'; 
    }else{
      return 'user won'; 
    }else if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'computer won';
      }else if(userChoice === 'paper') {
        if(computerChoice === 'rock'){
           return 'user won';
        }
      }else if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
          return 'computer won';
        }else if(userChoice === 'scissors'){
          if(computerChoice === 'paper'){
            return 'user won';
          }
        }
      }
    }
  }
}

console.log(determinWinner('paper', 'rock'))

console.log(determinWinner('paper', 'scissors'))



const determineWinner = (userChoice,computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game was a tie';
  } 

  else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won';
    } else {
      return 'the user won';
    }
  }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
        return 'the computer won';
    } else if (computerChoice === 'rock') {
        return 'the user won';
    }
  }
}


const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 8;
    case "Tuesday":
      return 8;
    case "Wednesday":
      return 8;
    case "Thursday":
      return 8;
    case "Friday":
      return 8;
    case "Saturday":
      return 8;
    case "Sunday":
      return 8;
  }
};

const getAcutalSleepHours = () => {
  let sumHours = 0; 
  sumHours += 8
  sumHours += 8
  sumHours += 8
  sumHours += 8
  sumHours += 8
  sumHours += 8
  sumHours += 8
  return sumHours
}
console.log(getAcutalSleepHours())

const getIdealSleepHours = (num) => {
  //let idealHours = 7; 
  return num * 7; 
}
//console.log(getIdealSleepHours(9))

const calculateSleepDebt = () => {
  let actualSleepHours = getAcutalSleepHours();
  let idealSleepHours = getIdealSleepHours(9);
  let notEnoughSleep = actualSleepHours - idealSleepHours
  let tooMuchSleep = idealSleepHours - actualSleepHours 
  if (actualSleepHours === idealSleepHours){
    console.log('you had the perfect sleep')
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`you got more sleep than needed, by ${tooMuchSleep} hours`)
  } else {
    console.log(`the user should get more sleep, you need another ${notEnoughSleep} hours `)
  }
}
calculateSleepDebt()


// The scope of `random` is too loose 
//const random = Math.floor(Math.random() * 3);

// The scope of `random` is too loose 
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
let days;
const getTrainingDays = event => {
  let days
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
  return days;
};


// The scope of `name` is too tight 
const logEvent = event => {
  const name = 'Nala';
  console.log(`${name}'s event is: ${event}`);
};

const logTime = days => {
  const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(event);
logTime(days);


let input = 'Keep Swinging';
const vowels = ['a','e','i','o','u'];
let resultArray = []

for ( let i = 0; i < input.length; i++ ) {
  for (let k = 0; k < vowels.length; k++) {
    console.log(k)
  }
}

*/
/*
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop'); 
    }
  }
}
const tinCan = robotFactory('P-500', true)
console.log(tinCan.beep())

function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  });
}

withConstructor(0)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
});


*/
let name = 'test'
