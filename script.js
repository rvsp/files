let library = [
  {
    title: "Javascript",
    price: 500,
    readers: [
      {
        name: "Person 1",
        count: 300,
      },
      {
        name: "Person 2",
        count: 400,
      },
    ],
    authorDetails: {
      name: "Raj",
      age: 40,
    },
  },
  {
    title: "Nodejs",
    price: 600,
    readers: [],
    authorDetails: {
      name: "Raj",
      age: 40,
    },
  },
];

let updateReadersArray = () => {
  library.forEach((book) => {
    book.readers.forEach((reader) => {
      if (reader.name === "Person 2") {
        reader.count = 500;
      }
    });
  });
};

let updateEmailForAuthor = () => {
  library.forEach((book, ind) => {
    book.authorDetails.email = `email${ind + 1}@gmail.com`;
  });
};

let addReaderForNode = () => {
  library.forEach((book) => {
    if (book.title === "Nodejs") {
      book.readers.push({
        name: "Person 3",
        count: 200,
      });
    }
  });
};

let addBookSQL = () => {
  library.push({
    title: "SQL",
    price: 450,
    readers: [],
    authorDetails: {
      name: "Pugazharasan C",
      age: 23,
    },
  });
};

let typeOfAuthorsAge = () => {
  let type;
  library.forEach((book) => {
    if (book.title === "Nodejs") {
      type = typeof book.authorDetails.age;
    }
  });
  return type;
};
module.exports = {
  library,
  updateReadersArray,
  updateEmailForAuthor,
  addReaderForNode,
  addBookSQL,
  typeOfAuthorsAge,
};
