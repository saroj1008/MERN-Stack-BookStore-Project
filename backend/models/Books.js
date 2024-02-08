const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    isbn: { type: String, required: true },
    image: { type: String, required: true },
    quantity: {type: Number, required: true},
    price: {type: Number, required: true},
});

module.exports = mongoose.model("books", BookSchema);


/* 
https://embed.cdn.pais.scholastic.com/v1/channels/sso/products/identifiers/isbn/9781338797091/primary/renditions/700
  
 {
    "title": "Ijoriya",
    "category": "Story",
    "author": "Subin Bhattarai ",
    "description": "There is a multifaceted story in the novel 'Ijoriya'. Writer Bhattarai has brought out the love, hate, and conflict between the family members in the story. Bhattarai, who has written stories focusing on Kathmandu in all his previous books, this time he has reached Madhes to capture the story.
'Ijoriya' is a Maithili word. It means Juneli.",
    "isbn": "ISBN123456789",
    "image": "https://media.thuprai.com/__sized__/front_covers/Ijoriya_by_subin_bhattarai_-f-thumbnail-280x405-70.jpg",
    "quantity": 40,
    "price": 19.99
  }

 {
    "title": "Ijoriya",
    "category": "Story",
    "author": "Subin Bhattarai ",
    "description": "There is a multifaceted story in the novel 'Ijoriya'. Writer Bhattarai has brought out the love, hate, and conflict between the family members in the story. Bhattarai, who has written stories focusing on Kathmandu in all his previous books, this time he has reached Madhes to capture the story.
'Ijoriya' is a Maithili word. It means Juneli.",
    "isbn": "ISBN123456789",
    "image": "https://media.thuprai.com/__sized__/front_covers/Ijoriya_by_subin_bhattarai_-f-thumbnail-280x405-70.jpg",
    "quantity": 40,
    "price": 19.99
  }

{
  "title": "The Talking Points",
  "category": "Fantasy",
  "author": "Madhu Raman Acharya",
  "description": "A former career diplomat and civil servant of Nepal, Madhu Raman Acharya keeps speaking and writing on various topical issues in Nepal’s foreign policy and diplomacy spanning over subjects including neighbourhood relations, strategic affairs, regional cooperation, international development agenda of the least developed and landlocked countries and multilateral issues at the United Nations.",
  "isbn": "ISBN978654321",
  "image": "https://media.thuprai.com/__sized__/front_covers/front1-thumbnail-280x405-70.jpg",
  "quantity": 35,
  "price": 16.99
}

{
  "title": "Between Queens and the Cities",
  "category": "Love Story",
  "author": "Niranjan Kunwar",
  "description": "Between Queens and the Cities is the riveting tale of a 19-year-old Nepali gay man and his long journey from Kathmandu to New York and back. Set against the backdrop of contemporary Nepal, the author reveals, with elan and ease, queer spaces where friendships are fostered outside the normalcy accorded to family and marriage.",
  "isbn": "ISBN978658326",
  "image": "https://media.thuprai.com/__sized__/front_covers/Between_queens_and_thee_cities_-_Niranjan_Kunwar_-f-thumbnail-280x405-70.jpg",
  "quantity": 35,
  "price": 16.99
}


{
  "title": "Rich Dad, Poor Dad",
  "category": "Personal finance",
  "author": "Robert T. Kiyosaki",
  "description": "Robert Kiyosaki reveals how he developed his unique economic perspective from his two fathers: his real father, who was highly educated but fiscally poor; and the father of his best friend - an eighth-grade drop-out who became a self-made multi-millionaire. ",
  "isbn": "ISBN948658325",
  "image": "https://img.thriftbooks.com/api/images/m/4bef31a7c270831f55910fdc4fe5121ac6c970da.jpg",
  "quantity": 25,
  "price": 14.99
}

{
  "title": "Javascript: The Definitive Guide: ",
  "category": "Programming Book",
  "author": "David Flanagan",
  "description": "avaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You'll find illuminating and engaging example...",
  "isbn": "ISBN948656325",
  "image": "https://img.thriftbooks.com/api/images/i/m/10DF305F11180DB4436E1BC62A2BD067AA259F7E.jpg",
  "quantity": 25,
  "price": 12.99
}

{
  "title": "The Practice of Programming",
  "category": "Programming Book",
  "author": "Brian W. Kernighan",
  "description": "This book is basically all the "common sense" stuff that you learn after programming for years and years.. most proffessional programmers already know this stuff--or should! This is a perfect book for a college graduate who is good, but needs some pointers in the real world, or for those who just want to freshen up their skills, etc.",
  "isbn": "ISBN948656355",
  "image": "https://img.thriftbooks.com/api/images/m/82c50c5b69aa7212b17aa48c79ff441adb6bd6f3.jpg",
  "quantity": 25,
  "price": 22.99
}

{
  "title": "Effective Java",
  "category": "Programming Book",
  "author": "Joshua Bloch",
  "description": "Are you looking for a deeper understanding of the Java(TM) programming language so that you can write code that is clearer, more correct, more robust, and more reusable? Look no further Effective Java(TM), Second Edition, brings together seventy-eight indispensable programmer's rules of thumb: working, best-practice solutions for the programming challenges you encounter every day.",
  "isbn": "ISBN948656355",
  "image": "https://img.thriftbooks.com/api/images/m/5bfac114578424f54b8fba0341190726810e1a05.jpg",
  "quantity": 25,
  "price": 8.99
}







*/