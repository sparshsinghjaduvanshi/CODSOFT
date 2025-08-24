// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button) => {
//     button.addEventListener('click', (e) => {

//         if (e.target.innerHTML == '=') {
//             string = eval(string);
//             document.querySelector('input').value = string;
//         }
//         else if(e.target.innerHTML == "C"){
//             string = "";
//             document.querySelector('input').value = string;
//         }
//         else {
//             console.log(e.target);
//             string = string + e.target.innerHTML;
//             document.querySelector('input').value = string;
//         }
//     })
// })


let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value == '=') {
            try {
                // Replace symbols with JavaScript operators
                string = string.replace(/X/g, '*');
                string = string.replace(/\^/g, '**'); // power operator
                string = eval(string); 
                document.querySelector('input').value = string;
            } catch {
                document.querySelector('input').value = "Error";
                string = "";
            }
        }
        else if (value == "C") {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (value == "%") {
            // percentage means divide by 100
            string = (parseFloat(string) / 100).toString();
            document.querySelector('input').value = string;
        }
        else {
            string = string + value;
            document.querySelector('input').value = string;
        }
    });
});
