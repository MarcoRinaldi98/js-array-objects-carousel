/*
    JAVASCRIPT
*/

//array
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

//variabile dove verranno inserite le immagini del carousel
const imageListDom = document.querySelector('.image-list'); 
const imageSequence = document.querySelector('.image-sequence'); 

let sliderContent = "";
let sequenceContent = "";

let images = imagesArray.forEach((elemento) => {
    const newImageWrapper = `<div class="image-wrapper position-relative">
                                <img class="image" src="${elemento.image}" />
                                <div class="position-absolute bottom-0 start-0 text-white text-end pe-2">               
                                    <h5 >${elemento.title}</h5>
                                    <p>${elemento.text}</p>
                                </div>
                             </div>`;
    
    sliderContent += newImageWrapper;

    const newImageSequence =    `<div class="box">
                                    <img class="image" src="${elemento.image}" alt="Prima immagine">
                                </div>`

    sequenceContent += newImageSequence;
});

//trasferisco la lista di tutti i div prodotti nel container nell'html
imageListDom.innerHTML = sliderContent;
console.log(imageListDom);

imageSequence.innerHTML = sequenceContent;
console.log(imageSequence);

const imagesWrapperDom = document.getElementsByClassName('image-wrapper');
const imagesSequenceDom = document.getElementsByClassName('box');

//assegno il valore 0 per indicare la prima immagine della lista
let activeImage = 0;

//rendo solo la prima immagine della lista visibile
imagesWrapperDom[activeImage].classList.add('show');
//rendo l'overlay visibile solo sulla prima immagine della sequenza
imagesSequenceDom[activeImage].classList.add('overlay');

//variabile pulsante avanti
const nextDom = document.querySelector('#next');
//variabile pulsante indietro
const prevDom = document.querySelector('#prev');

//evento per il click del pulsante avanti
nextDom.addEventListener('click',
    function() {
        //rimuovo l'immagine corrente
        imagesWrapperDom[activeImage].classList.remove('show');
        //levo l'overlay dall'immagine corrente
        imagesSequenceDom[activeImage].classList.remove('overlay');

        if (activeImage < imagesWrapperDom.length - 1) {
            //assegno un valore in piu all'immagine attuale per cambiarla con l'immagine successiva
            activeImage++;

        } else if (activeImage == imagesWrapperDom.length - 1) {
            //assegno il vaore minimo della lista per farla ricominciare dall'inizio
            activeImage = 0;
        }

        
        //mostro l'immagine successiva
        imagesWrapperDom[activeImage].classList.add('show');
        //attivo l'overlay sulla nuova immagine
        imagesSequenceDom[activeImage].classList.add('overlay');
    }
);

//evento per il click del pulsante indietro
prevDom.addEventListener('click',
    function() {
        //rimuovo l'immagine corrente
        imagesWrapperDom[activeImage].classList.remove('show');
        //levo l'overlay dall'immagine corrente
        imagesSequenceDom[activeImage].classList.remove('overlay');

        if (activeImage > 0) {
            //assegno un valore in meno all'immagine attuale per cambiarla con l'immagine precedente
            activeImage--;

        } else if (activeImage == 0) {
            //assegno il vaore massimo della lista per farla ricominciare della fine
            activeImage = (imagesWrapperDom.length - 1);
        }

         //mostro l'immagine precedente
         imagesWrapperDom[activeImage].classList.add('show');
         //attivo l'overlay sulla nuova immagine
         imagesSequenceDom[activeImage].classList.add('overlay');
    }
);
