// 1:Task
// 1. Income Tax Calculation Based on Income Slabs
// Problem:
// Write a program to calculate income tax based on the following slabs:

// Income <= 2,50,000: No tax

// Income > 2,50,000 and <= 5,00,000: 5% of the amount exceeding 2,50,000

// Income > 5,00,000 and <= 10,00,000: 12,500 + 20% of the amount exceeding 5,00,000

// Income > 10,00,000: 1,12,500 + 30% of the amount exceeding 10,00,000
let Income = prompt("enter the number:")
if (Income <= 250000) {
  console.log(`${Income} no tax`)
}
else if (Income > 250000 && Income <= 500000) {
  Income -= 250000
  console.log(`${Income * 0.05}total tax payable`)
}
else if (Income > 500000 && Income <= 1000000) {
  Income -= 500000
  console.log(`${Income * 0.20 + 12500} total tax payble`)
}
else if (Income > 1000000) {
  Income -= 1000000
  console.log(`${Income * 0.30 + 112500}total tax payble`)
}
else { console.log("invalid text") }

//  2. Shipping Cost Based on Weight and Destination
// Problem:
// Write a program that calculates the shipping cost for a parcel based on its weight and destination:
// Weight <= 1kg:
// Local: $5
// National: $8
// International: $15
// Weight > 1kg and <= 5kg:
// Local: $10
// National: $15
// International: $30
// Weight > 5kg and <= 10kg:
let weight = +prompt('enter your weight:');
if (weight <= 0) {
  console.log("Please enter the wieght greater than zero")
  return;
}
let destination = prompt('enter your Destination:');

if (weight <= 1) {
  if (destination == 'local') {
    cost = 5;
  }
  else if (destination == 'national') {
    cost = 8;
  }
  else if (destination == 'international') {
    cost = 15;
  }
}
else if (weight > 1 && weight <= 5) {
  if (destination == 'local') {
    cost = 10;
  }
  else if (destination == 'national') {
    cost = 15;
  }
  else if (destination == 'international') {
    cost = 30;
  }
}
else if (weight > 5 && weight <= 10) {
  if (destination == 'local') {
    cost = 20;
  }
  else if (destination == "national") {
    cost = 25;
  }
  else if (destination == "international") {
    cost = 50;
  }
}
else if (weight > 10) {
  if (destination == 'local') {
    cost = 30
  }
  else if (destination == 'national') {
    cost = 35
  }
  else if (destination == 'international') {
    cost = 70
  }
}
else {
  console.log('in valid number')
}
console.log(cost)

// 3. Electricity Bill Calculation Based on Usage
// Problem:
// Write a program to calculate the electricity bill based on the number of units consumed:
// Units <= 100: $1 per unit
// Units > 100 and <= 300: $1 per unit for the first 100 units + $1.5 per unit for the next 200 units
// Units > 300: $1 per unit for the first 100 units + $1.5 per unit for the next 200 units + $2 per unit beyond 300
// Requirements:
// Input: A variable representing the number of units consumed
// Output: Total electricity bill amount


let units=+prompt("Enter units:")
if (units <= 100 ){
  bill=units*1
  console.log(`${bill}rs bill amount`)
}

else if(units>100 && units<=300){
    bill= (100*1) + ((units - 100) * 1.5);
    console.log(`${bill}rs bill amount`)
}
else if (units > 100 && units <= 300) {
    bill = (100 * 1) + ((units - 100) * 1.5);
    console.log(`${bill}rs bill amount`)
}
else if( units > 300){
    bill=(100 * 1) + (200 * 1.5) + ((units - 300) * 2);
    console.log(`${bill}rs bill amount`)
}
else{
    console.log(`invalid input`);
}
