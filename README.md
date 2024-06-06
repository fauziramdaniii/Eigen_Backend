# Backend Test Case

## This Project Use

1. Node Version 20.14
2. PHP Xampp 8.2
3. Node JS With Express

## How To Run This Project

1. Clone This Project Then Open in Code Editor Like VsCode
2. Open Terminal, Run Script "npm install"
3. create database into phpmyadmin, example of database available in direktory config
4. Open Terminal, Run Script "npx sequelize-cli db:migrate" for migrating table
5. Then run "npx sequelize-cli db:seed:all" for seed of mock data into table database
6. after that run the project with script "npm run dev"
7. Open Page Swagger Documentation API in: http://localhost:3000/api-docs/#/
8. For Run unit testing, just write in terminal "npm test" the output must be pass or failed
9. For Check Algoritm, run script the file with node, example "node .\algorithm\reverseString.js" 

## Entities

- Member
- Book

## Use Case

- Members can borrow books with conditions
    - [x]  Members may not borrow more than 2 books
    - [x]  Borrowed books are not borrowed by other members
    - [x]  Member is currently not being penalized
- Member returns the book with conditions
    - [x]  The returned book is a book that the member has borrowed
    - [x]  If the book is returned after more than 7 days, the member will be subject to a penalty. Member with penalty cannot able to borrow the book for 3 days
- Check the book
    - [x]  Shows all existing books and quantities
    - [x]  Books that are being borrowed are not counted
- Member check
    - [x]  Shows all existing members
    - [x]  The number of books being borrowed by each member

## Mock Data

- Books

```tsx
[
    {
        code: "JK-45",
        title: "Harry Potter",
        author: "J.K Rowling",
        stock: 1
    },
    {
        code: "SHR-1",
        title: "A Study in Scarlet",
        author: "Arthur Conan Doyle",
        stock: 1
    },
    {
        code: "TW-11",
        title: "Twilight",
        author: "Stephenie Meyer",
        stock: 1
    },
    {
        code: "HOB-83",
        title: "The Hobbit, or There and Back Again",
        author: "J.R.R. Tolkien",
        stock: 1
    },
    {
        code: "NRN-7",
        title: "The Lion, the Witch and the Wardrobe",
        author: "C.S. Lewis",
        stock: 1
    },
]
```

- Members

```tsx
[
    {
        code: "M001",
        name: "Angga",
    },
    {
        code: "M002",
        name: "Ferry",
    },
    {
        code: "M003",
        name: "Putri",
    },
]
```

## Requirements

- [x]  it should be use any framework, but prefered [NestJS](https://nestjs.com/) Framework Or [ExpressJS](https://expressjs.com/)
- [x]  it should be use Swagger as API Documentation
- [x]  it should be use Database (SQL/NoSQL)
- [x]  it should be open sourced on your github repo

## Extras

- [x]  Implement [DDD Pattern]([https://khalilstemmler.com/articles/categories/domain-driven-design/](https://khalilstemmler.com/articles/categories/domain-driven-design/))
- [x]  Implement Unit Testing

## Notes
- Feel free to add some structure or plugins


------

# ALGORITMA
Kerjakan dengan menggunakan bahasa pemograman yg anda kuasai, buat folder terpisah untuk soal ini

1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

Contoh:  
```
const sentence = "Saya sangat senang mengerjakan soal algoritma"

longest(sentence) 
// mengerjakan: 11 character
```
3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT

Contoh:  
```
INPUT = ['xc', 'dz', 'bbb', 'dz']  
QUERY = ['bbb', 'ac', 'dz']  

OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT
```

4. Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:

Contoh:
```
Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

diagonal pertama = 1 + 5 + 9 = 15 
diagonal kedua = 0 + 5 + 7 = 12 

maka hasilnya adalah 15 - 12 = 3
```
