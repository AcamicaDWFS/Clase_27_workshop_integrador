let cards = [],
    image = '',
    title = '',
    description = '',
    main = document.getElementById('card-container');

class Card {
    constructor(img, title, description) {
        this.img = img;
        this.title = title;
        this.description = description;
    }
};

let catBaby = new Card('https://i.pinimg.com/564x/63/a1/e8/63a1e82490841a1022595197bd7ac835.jpg', 'Baby cat', 'Adorable kitty!'),
    catBrothers = new Card('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkCXo2uxPsk5aswJ_hZyd89IlJ0gdyOi8-8A&usqp=CAU', 'Baby brothers', 'Adorable brothers!'),
    catSad = new Card('https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAFvf2p.img?h=0&w=720&m=6&q=60&u=t&o=f&l=f', 'Sad cat', 'Adopt him!');

cards.push(catBaby);
cards.push(catBrothers);
cards.push(catSad);

for (card of cards) {
    image = document.createElement('img');
    image.src = card.img;
    image.classList.add('card');
    title = document.createElement('h3');
    title.innerHTML = card.title;
    description = document.createElement('p');
    innerDescription = document.createTextNode(card.description);
    description.appendChild(innerDescription);

    main.appendChild(image);
    main.appendChild(title);
    main.appendChild(description);
}