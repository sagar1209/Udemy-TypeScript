// const person : {
//     name : string;
//     age:number
// } = {
//     name : 'sagar',
//     age : 21,
// }
// const person = {
//   name: "sagar",
//   age: 21,
//   hobbies: ["Sports", "Cooking"],
// };
// // console.log(person.nickname);

// let favoriteActivity: string[];
// // let favoriteActivity: (string|number)[];
// favoriteActivity = ["Sports"];

// let favoriteActivity1: any[];
// favoriteActivity1 = ["Sports", 1];

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   //   console.log(hobby.map())  ! !! ERROR  bcz this method used in array
// }

// console.log(person.name);

// const person : {
//     name :  string,
//     age : number,
//     hobbies : string[],
//     role : readonly[number ,string] // tuple  // fixed  length
//     // role : [number ,string] // tuple  // you can add element
// }=  {
//   name: "sagar",
//   age: 21,
//   hobbies: ["Sports", "Cooking"],
//   role : [2,'author']
// };

// // person.role[1] = 2;  // this give me errro
// // person.role.push(3);     // this line give me error

// console.log(person)

// enum

enum Role {
    ADMIN = "ADMIN",
    READ_ONLY = 100,
    AUTHOR = "AUTHOR",
  }
  
  const person = {
    name: "sagar",
    age: 21,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
  };
  
  if (person.role === Role.ADMIN) {
    console.log("is admin");
  }
  