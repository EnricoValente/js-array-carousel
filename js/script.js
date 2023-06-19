// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.


const imagesList = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];


const imagesContainer = document.querySelector('.images-container');

for(let i = 0; i < imagesList.length; i++) {
    console.log(i, imagesList[i]);

    if (i == 0) {
        imagesContainer.innerHTML = imagesContainer.innerHTML + `
    
        <div class="image-item active">
            <img src="${imagesList[i]}" alt="">
        </div>
    
        `;
        
    }
    else {
        imagesContainer.innerHTML = imagesContainer.innerHTML + `
    
        <div class="image-item">
            <img src="${imagesList[i]}" alt="">
        </div>
    
        `;
    }


};


const arrowUp = querySelector('.up');

let counter = 0;

const allItems = querySelector()

