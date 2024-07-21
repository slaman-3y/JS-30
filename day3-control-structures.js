function checkNumber(number) {
  if (number > 0) {
    console.log("The number is positive.");
  } else if (number < 0) {
    console.log("The number is negative.");
  } else {
    console.log("The number is zero.");
  }
}

// Example usage:
checkNumber(5);   // Output: The number is positive.
checkNumber(-3);  // Output: The number is negative.
checkNumber(0);   // Output: The number is zero.

function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log("The person is eligible to vote.");
  } else {
    console.log("The person is not eligible to vote.");
  }
}

// Example usage:
checkVotingEligibility(20);  // Output: The person is eligible to vote.
checkVotingEligibility(16);  // Output: The person is not eligible to vote.


function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    console.log(a + " is the largest.");
  } else if (b >= a && b >= c) {
    console.log(b + " is the largest.");
  } else {
    console.log(c + " is the largest.");
  }
}

// Example usage:
findLargest(5, 10, 3);  // Output: 10 is the largest.
findLargest(7, 2, 7);   // Output: 7 is the largest.


function getDayOfWeek(dayNumber) {
  switch(dayNumber) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Invalid day number.");
  }
}

// Example usage:
getDayOfWeek(1);  // Output: Sunday
getDayOfWeek(5);  // Output: Thursday



function getGrade(score) {
  let grade;
  switch(true) {
    case (score >= 90):
      grade = 'A';
      break;
    case (score >= 80):
      grade = 'B';
      break;
    case (score >= 70):
      grade = 'C';
      break;
    case (score >= 60):
      grade = 'D';
      break;
    default:
      grade = 'F';
  }
  console.log("Grade: " + grade);
}

// Example usage:
getGrade(95);  // Output: Grade: A
getGrade(77);  // Output: Grade: C



function checkEvenOdd(number) {
  const result = (number % 2 === 0) ? "The number is even." : "The number is odd.";
  console.log(result);
}

// Example usage:
checkEvenOdd(4);  // Output: The number is even.
checkEvenOdd(7);  // Output: The number is odd.


function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }
}

// Example usage:
checkLeapYear(2020);  // Output: 2020 is a leap year.
checkLeapYear(1900);  // Output: 1900 is not a leap year.
