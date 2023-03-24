/* Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Non è necessario creare date casuali Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed. */

//array post creata da fabio
const posts = [
  {
    id: 1,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto.",
    media: "https://unsplash.it/600/300?image=171",
    author: {
      name: "Phil Mangione",
      image: "https://unsplash.it/300/300?image=15",
    },
    likes: 89920,
    created: "25-06-2021",
  },
  {
    id: 2,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=112",
    author: {
      name: "Sofia Perlari",
      image: "https://unsplash.it/300/300?image=10",
    },
    likes: 1220,
    created: "03-09-2021",
  },
  {
    id: 3,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=234",
    author: {
      name: "Chiara Passaro",
      image: "https://unsplash.it/300/300?image=20",
    },
    likes: 7834,
    created: "15-05-2021",
  },
  {
    id: 4,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=24",
    author: {
      name: "Luca Formicola",
      image: null,
    },
    likes: 1,
    created: "03-04-2021",
  },
  {
    id: 5,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/400?image=534",
    author: {
      name: "Alessandro Sainato",
      image: "https://unsplash.it/300/300?image=29",
    },
    likes: 411,
    created: "05-03-2021",
  },
];
console.log(posts);

//ciclo array e stampo   creo un ciclo "for" per creare
for (let i = 0; i < posts.length; i++) {
  let cardEl = posts[i];
  const ContainerEl = document.getElementById("container");

  if (cardEl.author.image === null) {
    cardEl.author.image = "https://unsplash.it/300/300?image=1";
  }
  console.log(posts);

  const markup = `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${cardEl.author.image}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${cardEl.author.name}</div>
                        <div class="post-meta__time">${cardEl.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${cardEl.content}</div>
            <div class="post__image">
                <img src="${cardEl.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button js-like-button" onClick = "funLike()" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${cardEl.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `;

  //aggiungo markup alla DOM
  ContainerEl.innerHTML += markup;
 
}
