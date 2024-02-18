let laptop1 = {
    title: 'Ноутбук Lenovo IdeaPad 3 ',
    price: 23499,
    imgs: [
        'https://content.rozetka.com.ua/goods/images/big/374343935.jpg',
        'https://content.rozetka.com.ua/goods/images/big/374343936.jpg'
    ]
};

let laptop2 = {
    title: 'Ноутбук Lenovo IdeaPad 4',
    price: 23499,
    imgs: [
        'https://content.rozetka.com.ua/goods/images/big/374343937.jpg',
        'https://content.rozetka.com.ua/goods/images/big/374343938.jpg'
    ]
};


let laptops = [
    laptop1, // 0
    laptop2,  // 1
    {
        title: 'Ноутбук MacDac ',
        price: 23499,
        imgs: [
            'https://content.rozetka.com.ua/goods/images/big/374343939.jpg',
            'https://content.rozetka.com.ua/goods/images/big/374343940.jpg'
        ]
    } // 2
];


// let lps = [
//     laptop1,
//     {
//         title: 'Ноутбук MacDac ',
//         price: 23499,
//         imgs: [
//             'https://content.rozetka.com.ua/goods/images/big/374343939.jpg',
//             'https://content.rozetka.com.ua/goods/images/big/374343940.jpg'
//         ]
//     }
// ]

console.log(laptops);
console.log(laptops[0]);
console.log(laptops[1]);
console.log(laptops[2]);
console.log(laptops[2].price);
console.log(laptops[2]['price']);



