//                    Assignment
// We suppose poducts array as
let products = [
  {
    id: 101,
    title: "Sony LED 40 inch",
    varations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 45000, quantity: 1 },
      { id: 3, color: "silver", price: 40000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    varations: [
      { id: 1, color: "black", price: 45000, quantity: 5 },
      { id: 2, color: "red", price: 40000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "bad Product",
        comments: "ali It is a very good product ....",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 103,
    title: "Bike",
    varations: [
      { id: 1, color: "black", price: 55000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 3.0,
        title: "Very Good Product",
        comments: "zubair It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
    ],
  },
];

// 1- For each product print the variation having minimum
// Find the variation with the minimum price for each product

let minimumPrice = products.map(m => {
  return m.varations.reduce((minimum, variation) => 
    variation.price < minimum.price ? variation : minimum); });

  console.log(minimumPrice);

// sample output
// [
//   { id: 3, color: 'silver', price: 40000, quantity: 8 },
//   { id: 2, color: 'red', price: 40000, quantity: 1 },
//   { id: 2, color: 'red', price: 50000, quantity: 1 }
// ]

// 2- Count the number of reviews on each product.

let noOfReviews = products.map(m => ({
  id: m.id,
  title: m.title,
  noOfReview: m.reviews.length
}));

console.log(noOfReviews);

// 3- Count the average rating of each product.

let productAverageRatings = products.map(m => {
  let productsTotalRating = m.reviews.reduce((sum, review) => sum + review.rating, 0);
  let productAverageRating = productsTotalRating / m.reviews.length;
  return {
    id: m.id,
    title: m.title,
    averageRating: productAverageRating.toFixed(2) 
  };
});

console.log(productAverageRatings);





// 4- In each product show reviews that need to be moderated (status = false) along with id and title only
// meanseach product will have id, title and array of unmoderated reviews.

// sample output
// [
//   {
//     id: 101,
//     title: "Sony LED 40 inch",
//     reviews: [
//       {
//         id: 2,
//         user: "Zubair",
//         rating: 4.5,
//         title: "Very Good Product",
//         comments: "zubair It is a very good product ....",
//         date: "05-02-2021",
//         status: false,
//       },
//     ],
//   },
// ];
