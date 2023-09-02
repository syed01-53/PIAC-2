
//  - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
let calculateEven=(arr:number[]):number=>{
let sum:number=0;
    for (let index = 0; index < arr.length; index++) {
       
        if(arr[index]%2==0){
           sum+=arr[index];
        }
    }
    return sum ;
}
let arr:number[]=[1,1, 34, 323, 4, 6];
let result=calculateEven(arr)
console.log(result);
//  - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let calculateEven1=(arr1:number[]):number=>{
    let sum:number=0;
        for (let index = 0; index < arr1.length; index++) {
           
            if(arr1[index]%2==0){
              console.log(arr[index]);
                
            }
        }
        return sum ;
    }
    let arr1:number[]=[1,1, 34, 323, 4, 6];
    let result1=calculateEven1(arr1)
    console.log(result1);
//  - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones

//  - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
//  - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
//  - Write a program that uses a function to find the largest element in an array of numbers.