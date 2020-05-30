let fruits = [
    { id: 1, title: 'Apples',  price: 23, image: "https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg" },
    { id: 2, title: 'Pears',   price: 25, image: "https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"  },
    { id: 3, title: 'Peaches', price: 30, image: "https://www.lokeshdhakar.com/projects/lightbox2/images/image-3.jpg"  }
];

const toHtml = fruit => `
    <div class="col">
    <div class="card" style="width: 300px; float: left;">
        <img class="card-img-top" src="${fruit.image}" alt="${fruit.title  }">
        <div class="card-body">
        <h5 class="card-title">${fruit.title}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}"> More info </a>
        <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}"> Delete </a>
        </div>
    </div>
    </div>
`;

function render() {
    // const html = fruits.map(fruit => toHtml(fruit)).join('');
    const html = fruits.map(toHtml).join('');
    document.querySelector('#fruits').innerHTML = html;
}

render();

const myModal = $.modal({
    title: 'Price tag',
    closable: true,
    width: '400px',
    footerButtons: [
        { text: 'Close', type: 'primary', handler() {
                myModal.close();
            } 
        }
    ]
});

const confirmModal = $.modal({
    title: 'Are you sure?',
    closable: true,
    width: '400px',
    footerButtons: [
        { text: 'Cancel', type: 'secondary', handler() {
            confirmModal.close();
            } 
        },
        { text: 'Delete', type: 'danger', handler() {
            confirmModal.close();
            } 
        }
    ]
});

document.addEventListener('click', event => {
    event.preventDefault;

    const id = +event.target.dataset.id;
    const fruit = fruits.find(f => f.id === id);

    if (event.target.dataset.btn === 'price') {

        myModal.setContent(`
            <p> Price for ${fruit.title}: <strong>${fruit.price}$ </strong></p>
        `);
        myModal.open(); 
    } else if (event.target.dataset.btn === 'remove') {
        $.confirm({
            title: 'Are you sure',
            content: `<p> You are about to delete ${fruit.title}</p>`
        }).then(() => {
            fruits = fruits.filter(f => f.id !== id);
            render();
        }).catch(() => {
            console.log('Cancel');
        });
    }   
});
