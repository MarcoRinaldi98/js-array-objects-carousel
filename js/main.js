/*
    JAVASCRIPT
*/

// Array di ogetti
const imagesArray = [
    {
        image: "img/01.webp",
        title: "Marvel\'s Spiderman Miles Morale",
        text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man."
    }, 
    {
        image: "img/02.webp",
        title: "Ratchet & Clank: Rift Apart",
        text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality."
    }, 
    {
        image: "img/03.webp",
        title: "Fortnite",
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
    }, 
    {
        image: "img/04.webp",
        title: "Stray",
        text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city"
    }, 
    {
        image: "img/05.webp",
        title: "Marvel's Avengers",
        text: "Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay."
    }
];


// Dichiaro i miei contenitori di immagini del DOM
const imageListDom = document.querySelector('.image-list'); 
const imageSequence = document.querySelector('.image-sequence'); 

// Dichiaro le variabili che conterranno gli elementi da inserire nei contenitori nel DOM
let sliderContent = "";
let sequenceContent = "";

// CICLO per creare gli elementi di sliderContent e sequenceContent
imagesArray.forEach((elemento, indice) => {
    const newImageWrapper = `<div class="image-wrapper position-relative">
                                <img class="image" src="${elemento.image}" />
                                <div class="position-absolute bottom-0 end-0 text-white text-end pe-2">               
                                    <h5 class="ms_text_shadow">${elemento.title}</h5>
                                    <p class="ms_text_shadow">${elemento.text}</p>
                                </div>
                             </div>`;
    
    sliderContent += newImageWrapper;

    const newImageSequence = document.createElement('div');
    newImageSequence.classList.add('box');
    newImageSequence.innerHTML = `<img class="image" src="${elemento.image}">`;

    //aggiungo un evento per gestire il cambio immagine sul click della miniatura
    newImageSequence.addEventListener('click', function() {
        imagesWrapperDom[activeImage].classList.remove('show');
        imagesSequenceDom[activeImage].classList.remove('overlay');

        activeImage = indice;
        
        imagesWrapperDom[activeImage].classList.add('show');
        imagesSequenceDom[activeImage].classList.add('overlay');
    })

    imageSequence.append(newImageSequence);
});

imageListDom.innerHTML = sliderContent;


const imagesWrapperDom = document.getElementsByClassName('image-wrapper');
const imagesSequenceDom = document.getElementsByClassName('box');
console.log(imagesSequenceDom);


let activeImage = 0;

imagesWrapperDom[activeImage].classList.add('show');
imagesSequenceDom[activeImage].classList.add('overlay');

// Dichiaro le veriabili per i pulsanti di avanti e indietro del DOM
const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

//evento per il click del pulsante avanti
nextDom.addEventListener('click', handleNext);

//evento per il click del pulsante indietro
prevDom.addEventListener('click', handlePrev);


let direction = 'next';

//Gestione direzione autoplay
const reverseDom = document.getElementById('reverse');
reverseDom.addEventListener('click', function() {
    if (direction == 'next') {
        direction = 'prev';
    } else {
        direction = 'next';
    }
});

//scorrimento automatico in avanti o indietro del carousel ogni 3 secondi
let clock = setInterval(handleInterval, 3000);

//Gestione start/stop 
const startStopDom = document.getElementById('startStop');
startStopDom.addEventListener('click', function() {
    if (clock == null) {
        clock = setInterval(handleInterval, 3000);
    } else {
        clearInterval(clock);
        clock = null;
    }
});


/*
    FUNZIONI
*/

//FUNZIONE per la gestione della sequenza in avanti
function handleNext() {
    imagesWrapperDom[activeImage].classList.remove('show');
    imagesSequenceDom[activeImage].classList.remove('overlay');

        if (activeImage < imagesWrapperDom.length - 1) {
            activeImage++;

        } else if (activeImage == imagesWrapperDom.length - 1) {
            activeImage = 0;
        }

        
    imagesWrapperDom[activeImage].classList.add('show');
    imagesSequenceDom[activeImage].classList.add('overlay');
}

//FUNZIONE per la gestione della sequenza all'indietro
function handlePrev() {
    imagesWrapperDom[activeImage].classList.remove('show');
    imagesSequenceDom[activeImage].classList.remove('overlay');

        if (activeImage > 0) {
            activeImage--;

        } else if (activeImage == 0) {
            activeImage = (imagesWrapperDom.length - 1);
        }

    imagesWrapperDom[activeImage].classList.add('show');
    imagesSequenceDom[activeImage].classList.add('overlay');
}

//FUNZIONE per gestire il setInterval
function handleInterval() {
    if (direction == 'next') {
        handleNext();
    } else {
        handlePrev();
    }
}