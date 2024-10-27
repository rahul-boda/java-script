// 1:Task
// 1. Income Tax Calculation Based on Income Slabs
// Problem:
// Write a program to calculate income tax based on the following slabs:

// Income <= 2,50,000: No tax

// Income > 2,50,000 and <= 5,00,000: 5% of the amount exceeding 2,50,000

// Income > 5,00,000 and <= 10,00,000: 12,500 + 20% of the amount exceeding 5,00,000

// Income > 10,00,000: 1,12,500 + 30% of the amount exceeding 10,00,000
let Income=prompt("enter the number:" )
if (Income<=250000 ){
    console.log(`${Income} no tax`)
}
else if(Income>250000 && Income<=500000 ){
  Income-=250000 
  console.log(`${Income*0.05}total tax payable`)
 }
 else if(Income>500000 && Income<=1000000){
  Income-=500000
  console.log(`${Income*0.20+12500} total tax payble`)
 }
 else if(Income>1000000 ){
  Income-=1000000
  console.log(`${Income*0.30+112500}total tax payble`)
 }
 else{ console.log("invalid text")}