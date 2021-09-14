const prompt = require("prompt-sync")();

const chalk = require("chalk");

class Calculate {
    constructor (x,y) {
        this.x = x;
        this.y = y;
    }
    get pi() {
        return Math.PI;
    }
    get e() {
        return Math.exp(1);
    }
    percentage() {
     	return ((+this.x / +this.y) * 100).toFixed(2);
	}
    add() {
		return +this.x + +this.y;
	}
    subtract() {
		return +this.x - +this.y;
	}
    multiply() {
		return +this.x * +this.y;
	}

    divide() {
	 	return +this.x / +this.y;
	}

    modulate() {
	 	return +this.x % +this.y;
	}
	elevate() {
     	return this.x ** +this.y;
	}
}

let num1 = prompt((chalk.yellowBright`enter number1: `));

while (isNaN(num1)) {
    console.log(chalk.bgRed('----invalid not-a-number!----'));
    num1 = prompt((chalk.yellowBright`{bold enter number1:} `));
}   

let num2 = prompt((chalk.yellowBright`enter number2: `));

while (isNaN(num2)) {
    console.log(chalk.bgRed('----invalid not-a-number!----'));
    num2 = prompt((chalk.yellowBright`{bold enter number2:} `));
};

let array = ['add', 'a', 'subtract', 's', 'multiply', 'm', 'divide', 'd', 'percentage', 'p', 'modulate', 'mo', 'elevate', 'e'];

function conCalculate (x,y) {
    const compute = new Calculate (x, y);
    console.log((chalk.blue `would you like to:`));
    console.log((chalk.blue `({bold a})dd  `));
    console.log((chalk.blue `({bold s})ubtract  `));
    console.log((chalk.blue `({bold m})ultiply  `));
    console.log((chalk.blue `({bold d})ivide  `));
    console.log((chalk.blue `({bold p})ercentage  `));
    console.log((chalk.blue `({bold mo})dulate  `));
    console.log((chalk.blue `({bold e})elevate  `));
    let operator = prompt(chalk.blue `which {bold operation: }`).toLowerCase().trim(' ');

    if (operator == 'a') {
        operator = 'add';
    }
    else if (operator == 's') {
        operator = 'subtract';
    }
    else if (operator == 'm') {
        operator = 'multiply';
    }
    else if (operator == 'd') {
        operator = 'divide';
    }
    else if (operator == 'p') {
        operator = 'percentage';
    }
    else if (operator == 'mo') {
        operator = 'modulate';
    }
    else if (operator == 'e') {
        operator = 'elevate';
    } else {
        // console.log(chalk.bgGreen('please input correctly'));

    while (!array.includes(operator)) {

    console.log(chalk.bgRed('----please input correctly----'));
    console.log((chalk.blue `would you like to:`));
    console.log((chalk.blue `({bold a})dd  `));
    console.log((chalk.blue `({bold s})ubtract  `));
    console.log((chalk.blue `({bold m})ultiply  `));
    console.log((chalk.blue `({bold d})ivide  `));
    console.log((chalk.blue `({bold p})ercentage  `));
    console.log((chalk.blue `({bold mo})dulate  `));
    console.log((chalk.blue `({bold e})elevate  `));
    operator = prompt(chalk.blue `which {bold operation: }`).toLowerCase().trim(' ');
    }
    if (operator == 'a') {
        operator = 'add';
    }
    else if (operator == 's') {
        operator = 'subtract';
    }
    else if (operator == 'm') {
        operator = 'multiply';
    }
    else if (operator == 'd') {
        operator = 'divide';
    }
    else if (operator == 'p') {
        operator = 'percentage';
    }
    else if (operator == 'mo') {
        operator = 'modulate';
    }
    else if (operator == 'e') {
        operator = 'elevate';
    }

    }

let result = compute[operator] ()
    console.log((chalk.magenta`${num1}, ${num2}, {bold result:}  ${result}  `));

    return result;
}
let output = conCalculate(num1,num2);



array2 = ['c', 'x', 'r'];
let decision = prompt ((chalk.green`would you like to: ({bold c})ontinue, e({bold x})it, ({bold r})eset: `));


while (decision !== 'x') {

    if (decision === 'r'){
    
        num1 = prompt((chalk.yellowBright`enter number1: `));

        while (isNaN(num1)) {
        console.log(chalk.bgRed('----invalid not-a-number!----'));
        num1 = prompt((chalk.yellowBright`enter number1: `));
        };

        num2 = prompt((chalk.yellowBright`enter number2: `));

        while (isNaN(num2)) {
        console.log(chalk.bgRed('----invalid not-a-number!----'));
        num2 = prompt((chalk.yellowBright`enter number2: `));
        };

        output = conCalculate(num1, num2);
    } 

    else if (decision === 'c') {
        
        num1= output; 
        num2 = prompt((chalk.yellowBright`enter another number: `));

        while (isNaN(num2)) {
            console.log(chalk.bgRed('----invalid not-a-number!----'));
            num2 = prompt((chalk.yellowBright`enter another number: `));
        };
        
        output = conCalculate(num1, num2);
        }
    else {
        console.log(chalk.bgRed('--invalid entry--')); 
        }

decision = prompt ((chalk.green`would you like to: ({bold c})ontinue, e({bold x})it, ({bold r})eset: `));

}

console.log(chalk.bgYellow(`goodbye`));

