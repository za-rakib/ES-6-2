const age = [23,34,22,21,10,45];
const age2= [20,34,33,44,60];
const age3 =[20,34,45,66,77];
 const allAges = age.concat(age2).concat([6]).concat(age3);
 const allAges2 =[...age, ...age2, 5,...age3];
 console.log(allAges);
 console.log(allAges2);