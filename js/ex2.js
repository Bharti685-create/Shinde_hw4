/* Shinde_hw4
 Example 2 JavaScript code
*/
console.log("Bharti's Output from Shinde_hw4 Example 2");

const r =  Number(prompt("Enter the circle radius:"));

function circle(r)
{
    this.radius = r;
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
    this.circumference = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
let c = new circle(3);

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`)