db.products.insertOne({

    _id: 3,
    name: "Rubber",
    price: 1.30,
    stock: 43,
    reviews: [{
            authorName: "Sally",
            ratings: 5,
            review: "Best rubber ever"
        },
        {
            authorName: "John",
            ratings: 5,
            review: "awesomr rubber"
        }
    ]
})




db.products.insertOne({
    _id: 4,
    name: "Pencil",
    price: 0.80,
    stock: 12,
    review: [{
            authorName: "James",
            rating: 5,
            review: "Fantastic"
        },
        {
            authorName: "Jono",
            rating: 5,
            review: "The best pencil i have used in my life"
        }
    ]
})