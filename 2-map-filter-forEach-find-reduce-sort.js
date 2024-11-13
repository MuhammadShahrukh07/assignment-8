
//                    Assignment
// We suppose marks array as  
let marks = [90, 80, 65, 40, 75, 30, 25, 15];

// 1- Print all the numbers greater then 40 in asc order using map

marks.filter(m => m > 40).sort((a, b) => a - b).map(m => console.log(m));

// 2- Find all the students having number equal to 70. 
let marksEqual = marks.filter(m => m === 70);
console.log(marksEqual);

// 3- Find all the numbers less then 40 using filter function.

let marksLess = marks.filter(m => m < 40);
console.log(marksLess);

// 4- Using forEach function display only fail students.

marks.forEach(m => {
    if (m < 40) {
      console.log(`Fail Students: ${m}`);
    }
  });
  


