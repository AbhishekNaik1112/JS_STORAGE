//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.
const user1 = {
    firstName: 'Rajat',
    lastName: 'Gupta',
    age: 25,
    country: 'India',
    state: 'Delhi',
  };
  
  localStorage.setItem('userData', JSON.stringify(user1));
  console.log(localStorage);
  
  //Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.
  const userData = JSON.parse(localStorage.getItem('userData'));
  console.log(userData);
  
  //Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.
  localStorage.removeItem('userData.state');
  console.log(localStorage);
  
  //Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.
  localStorage.clear();
  console.log(localStorage);
  
  //Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
  const user2 = {
    firstName: 'Rajat',
    age: 25,
    skills: ['HTML', 'CSS', 'JS', 'React'],
  };
  
  const userString = JSON.stringify(user2);
  console.log(userString);