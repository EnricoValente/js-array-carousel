// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

const firstImg = document.createElement('img');
firstImg.setAttribute('src', 'img/01.webp');

const secondImg = document.createElement('img');
firstImg.setAttribute('src', 'img/02.webp');

const thirdImg = document.createElement('img');
firstImg.setAttribute('src', 'img/03.webp');

const fourthImg = document.createElement('img');
firstImg.setAttribute('src', 'img/04.webp');

const fifthImg = document.createElement('img');
firstImg.setAttribute('src', 'img/05.webp');


const imgList = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];
console.log('imgList', imgList, typeof imgList)



let i = 1;

for(i = 1; i < imgList.length; i++) {

    imgList[i] = 'img/01.webp' + i

    if (i == 1) {
        document.querySelector('.container').innerHTML += `<img src="img/0${i}.webp"  class = "active">`
    }
    
}

const firstIcon = document.querySelector('.first-icon');
const secondIcon = document.querySelector('.second-icon');

let count = 1

firstIcon.addEventListener('click', function (e) {
    e.preventDefault();

    if(count < imgList.lenght) {
        count++
    }
    else {
        count = 0 
        
    }
})


