// const keys = document.querySelectorAll('.key');
// const display_input = document.querySelectorAll('.display .input');
// const display_output = document.querySelectorAll('.display .output');

// let input = "";

// for (let key of keys) {
//     const value = key.dataset.key;

//     key.addEventListener('click', () => {
//         if (value == "clear") {
//             input = ""
//             display_input.innerHTML = "";
//             display_output.innerHTML = "";
//         } else if (value == "backspace") {
//             input = input.slice(0, -1);
//             display_input.innerHTML = input;
//         } else if (value == "=") {
//             let result = eval(input);

//             display_output.innerHTML = result;
//         } else if (value == "brackets") {
//             if (
//                 input.indexOf("(") == -1 || 
//                 input.indexOf("(") != -1 && 
//                 input.indexOf(")") != -1 && 
//                 input.lastIndexOf ("(") < input.lastIndexOf(")")
//             ) {
//                 input += "(";
//             } else if (
//                 input.indexOf("(") != -1 && 
//                 input.indexOf(")") == -1 ||
//                 input.indexOf("(") != -1 &&
//                 input.indexOf(")") != -1 &&
//                 input.lastIndexOf("(") > input.lastIndexOf(")")
//             ) {
//                 input += ")";
//             }

//             display_input.innerHTML = input;
//         } else {
//             input += value;
//             display_input.innerHTML = input;
//         }
//     })
// }

// function CleanInput(input) {
//     let input_array =input.split("");
//     let input_array_length = input_array.length;

//     for (let i = 0; i < input_array_length; i++) {
//         if (input_array [i] == "*") {
//             input_array[i] = ' <span class = "operator">x</span>';
//         }
//     }
// }

document.addEventListener('DOMContentLoaded', function () {
    const keys = document.querySelector('.keys');
    const inputDisplay = document.querySelector('.input');
    const outputDisplay = document.querySelector('.output');

    let input = '';
    let output = '';

    keys.addEventListener('click', function (event) {
        const key = event.target.closest('.key');
        if (!key) return;

        const keyType = key.dataset.key;
        if (keyType === 'clear') {
            input = '';
            output = '';
        } else if (keyType === 'backspace') {
            input = input.slice(0, -1);
        } else if (keyType === '=') {
            try {
                output = eval(input);
            } catch {
                output = 'Error';
            }
        } else if (keyType === 'brackets') {
            if (input.includes('(') && !input.includes(')')) {
                input += ')';
            } else {
                input += '(';
            }
        } else {
            input += keyType;
        }

        inputDisplay.textContent = input;
        outputDisplay.textContent = output;
    });
});
