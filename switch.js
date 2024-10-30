// Design a program that calculates discounts based on product categories (Electronics, Clothing, Grocery). Each category has specific discount rates for different products:

// Electronics: Mobile - 5%, Laptop - 10%

// Clothing: Men - 15%, Women - 20%

// Grocery: Fruits - 5%, Vegetables - 10%


// Hint: Implement nested switch cases to handle products within each category and apply the discounts accordingly. Display the discount rate for the selected product.

const electronics=prompt("electronics:");
const amount=+prompt("Enter the amount:");
// const clothing=prompt(" clothing for men's and women's:")
// const grocery=prompt("grocery ")
switch(electronics){
    case "mobile":
     console.log(`${amount * 0.05} Rs discount amount on mobile`)
    break;
    case"laptop":
    console.log(`${amount * 0.10} Rs discount amount on laptop`)
    break;
}
    
    
    const clothing=prompt(" clothing for men's and women's:")
    switch(clothing){
     case"mens":
    console.log(`${amount * 0.15} Rs discount amount on men's wear`)
    break; 
    case"womens":
    console.log(`${amount * 0.20} Rs discount amount on womens's wear`)
    break;
    }
    

    const grocery=prompt("grocery: ")
    switch(grocery){
    case"fruits":
    console.log(`${amount * 0.05} Rs discount amount on fruits`)
    break; 
    case"vegitables":
    console.log(`${amount * 0.10} Rs discount amount on vegitables`)
    break; 
    default:
    console.log("ivalid input")
   }