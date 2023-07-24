// const buttoClick = document.querySelector('.buttoClick');
// const inputt = document.querySelector('.inputt');
// const h1 = document.querySelector('h1');
// const progressbar = document.querySelector('.progressbar');


// // create click event

// let count;

// buttoClick.onclick = () => {
//     progressbar.style.width = '100%';
//     const inputValue = inputt.value;
//     h1.innerHTML = inputValue;
//     count = inputValue;

//     let init = setInterval(() => {
//         count--;
//         h1.innerHTML = count;
//         progressbar.style.width = `${ (100*count) /inputValue}%`;
       
//         if (count <= 0) {
//             clearInterval(init);
//         }
//     }, 1000);

//     inputt.value = '';
// };


const buttonC = document.querySelector ('.buttonC');
const inputt = document.querySelector ('.inputt');
const h11 = document.querySelector ('.h11');
const proggressBar = document.querySelector ('.proggressBar');

// create event 

let counter;

buttonC.onclick = () => {
    proggressBar.style.width = '100%';

    const inputValue = inputt.value;
    h11.innerHTML = inputValue;
    counter = inputValue;
    let int = setInterval(() => {

        
        counter--;
        h11.innerHTML = counter;
        proggressBar.style.width = `${(100*counter)/inputValue}%`;
        if (counter <=0) {

        clearInterval(int);
            
        }


        
    }, 1000);




inputt.value = '';

}
