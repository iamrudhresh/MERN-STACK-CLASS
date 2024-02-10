
---

**JavaScript Fundamentals Assignment**

1. **What is JavaScript?**
   - JavaScript is a high-level, interpreted programming language, it is used to make dynamic behavior to web pages.
     
2. **Variables and Types:**
   - Declare a variable named `userAge` and assign it a numerical value representing someone's age.
   - Declare another variable named `userName` and assign it a string value representing a person's name.
   - Output both variables using `console.log()`.
  ```
let userAge = 25; 
let userName = "Alice"; 

console.log("User age:", userAge);
console.log("User name:", userName);
```

3. **Comments in JavaScript:**
   - Write a multi-line comment explaining the purpose of a function you create in the next step.
```
     /*
  This function calculates the area of a rectangle given its height and width.
*/
function calculateArea(height, width) {
  // ....
}

```

4. **Operations:**
   - Create two variables, `num1` and `num2`, and assign them numerical values.
   - Perform addition, subtraction, multiplication, and division operations on these variables.
   - Display the results using `console.log()`.
```
let num1 = 10;
let num2 = 5;

let sum = num1 + num2;
console.log("Addition:", sum);

let difference = num1 - num2;
console.log("Subtraction:", difference);

let product = num1 * num2;
console.log("Multiplication:", product);

let quotient = num1 / num2;
console.log("Division:", quotient);

```

5. **Data Types:**
   - Create variables to represent different data types: string, number, boolean, and an array.
   - Provide examples and explain each data type.
```
let text = "This is a string"; // String
let number = 3; // Number
let isTrue = true; // Boolean
let fruits = ["Rudhresh", "Darshana", "Hello"]; // Array
```

6. **Functions in JavaScript:**
   - Write a function named `greetUser` that takes a `name` parameter and returns a greeting message.
   - Call the function with a sample name and display the result using `console.log()`.
```
function greetUser(name) {
  return "Hello, " + name + "!";
}

let greeting = greetUser("Bob");
console.log(greeting); // Output: Hello, Bob!
```

7. **if Else in JavaScript:**
   - Create a variable named `temperature` and assign it a numerical value.
   - Write an `if-else` statement to check if the temperature is greater than 30. Output a message accordingly.
```
let temperature = 35;
if (temperature > 30) {
  console.log("It's hot outside! Drink plenty of water.");
} else {
  console.log("Enjoy the comfortable weather!");
}
```

8. **FOR LOOP:**
   - Use a `for` loop to print the numbers from 1 to 5 in the console.
```
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

9. **Loose vs Strict Equality:**
   - Explain the difference between loose equality (`==`) and strict equality (`===`) with examples.
   - Answer: Loose equality (==) compares values alone but Strict equality (===) strictly compares both the value and data type.

---
