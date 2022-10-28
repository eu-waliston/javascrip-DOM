

let sandwiches = [
    'tuna',
    'ham',
    'turkey',
    'pb&j',
];

//for
for (let i = 0; i < sandwiches.length; i++) {
    //console.log(i); //index
    //console.log( i + " - " + sandwiches[i]);
    setTimeout(function () {
        // This will always log "4"
        console.log(i);
    }, 1000)
}

// nasted loops 
for (var i = 0; i < sandwiches.length; i++) {
    for (var j = 0; j < drinks.length; j++) {
        // Do stuff...
    }
}


//For...in
var lunch = {
    sandwich: 'ham',
    snack: 'chips',
    drink: 'soda',
    desert: 'cookie',
    guests: 3,
    alcohol: false,
};




for(let key in lunch){
    console.log(lunch[key]);
}

// Skipping and ending for and for...in
// loopsu 

//You can skip or coninue the for or for in statment using:
//break to stop and coninue to keep on


//skipping a loop
let skippingLoop = ['turkey', 'tuna', 'ham', 'chiken salad', '&j'];

for (let index = 0; index < skippingLoop.length; index++) {
    if(skippingLoop[index] === 'ham') {
        continue;
    }
    console.log(skippingLoop[index]);
}


//breaking a loop 
const luch3 = {
    sandwich: 'ham',
    snack: 'chips',
    drink: 'soda',
    desert: 'cookie',
    guests: 3,
    alcohol: false,
};

for (const key in luch3) {
    if (luch3.hasOwnProperty.call(luch3, key)) {
        if (key === 'drink') {
            break;
        }
        console.log(luch3[key]);

    }
}


//Array.forEach()

const sandwiches2 = [
    'tuna',
    'ham',
    'turkey',
    'pb&j'
];

sandwiches2.forEach(function (sandwich, index) {
    console.log(index + " - " + sandwich);
    // console.log();
})



const lunch = {
    sandwich: 'ham',
    snack: 'chips',
    drink: 'soda',
    desert: 'cookie',
    guests: 3,
    alcohol: false,
};

Object.keys(lunch).forEach(function (item){
    console.log(`${item} - ${lunch[item]}`);
})

