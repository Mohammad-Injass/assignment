//typescript Task(Task 4 & 5)
//mohammad injass
//mohinjass18@gmail.com

//start task 4
//define interface
interface Product {
    name: string;
    price: number;
}

//calculate price of all products
function calculatePrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}

//example_1_t4
console.log("example 1 for Task 4");
const products: Product[] = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 1 },
    { name: "Orange", price: 2 }
];

const totalPrice = calculatePrice(products);
console.log("Total Price:", totalPrice); // Output: Total Price: 3.6
//end task 4

// *************************************************************************
// *************************************************************************
// *************************************************************************

//start task 5
function isValidEmail(email: string): boolean {
    //regular expression
    const emailRegularExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegularExpression.test(email);
}

//example_1_t5
console.log("example 1 for Task 5");
const email1 = "example1@domain.com";
console.log(`result for ${email1} is :`, isValidEmail(email1));

//example_2_t5
console.log("example 2 for Task 5");
const email2 = "example2-email@domain";
console.log(`result for ${email2} is :`, isValidEmail(email2));

//end task 5