// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

const firstImg = document.createElement('img');
Image.src = 'img/01.webp';

const secondImg = document.createElement('img');
Image.src = 'img/02.webp';

const thirdImg = document.createElement('img');
Image.src = 'img/03.webp';

const fourthImg = document.createElement('img');
Image.src = 'img/04.webp';

const fifthImg = document.createElement('img');
Image.src = 'img/05.webp'


const imgList = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];
console.log('imgList', imgList, typeof imgList)

let i = 0;

for(i = 0; i < imgList.length; i++) {
    console.log(imgList[i])
}


