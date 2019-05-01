// Types

//string
let myname1="test";
let myname:string="debasish"; // let - Es6 feature
// myname=10; //not supported in typescript as typescript infers name to be string implicitly,
             // this was possible in js due to dynamic typing

             //---number---
let num=10.5; //number accepts both integers and floating point numbers

//---boolean(present in js also)---
let angularisClientside:boolean = true;
//angularisClientside=0;

//---any---
let age; // when we dont assign any value it takes type as any 
age="debasish";
age=10;

//assign types
let myage:number;
//myage="xxx";

 //----any ---
 let car:any ="BMW" ;
  car={brand:"BMW",series:3}
  console.log(car);


//========================================== Array types ====================================

let myhobbies =["cook","play",1]; // typescript infers it as any myhobbies:any[]
myhobbies=[1]; // so we can assign number ,string etc
myhobbies=["Hello"];

let myhobbies1 =["cook","play"]; // typescript infers it as string myhobbies:string[]
//myhobbies1=[1]; // so we cannot assign number
myhobbies1=["Hello"];


//Mentioning the types explicitly for Array
    
let myhobbies2:string[] =["cook","play"]; //
//myhobbies1=[1]; // so we cannot assign number
myhobbies1=["Hello"];


//----Tuples--- - when we want an array to contain more then 1 types we can do it explicit using tuple
// values must be in order
let myAddress:[string,number]=["Sydney",10] ;
//let myAddress1:[string,number]=[1,"xxx"] ; //error as order imp 


/*====================================================================================
                               ENUMS
======================================================================================*/

// Enums allow us to define a set of named constants

// string Enums
 // behind the scenes integer values are assigned for these enums sequentially
enum color {
    blue, //0
    yellow,//1
    red//2
 }



 let mycolor:color=color.yellow
 console.log(mycolor);

//Numeric Enums,

enum color1 {
    blue=100, 
    yellow=22,
    red
 }
 let mycolor1:color1=color1.red  
 console.log(mycolor1);//23 as it continues incrementing with the latest number

/*====================================================================================
                          F U N C T I O N S
======================================================================================*/
function returnName():string{
  return myname;
}

function sayHello():void{
  console.log("Hello world");
}

// function with arguments
function add(num1:number, num2:number):number{

  return num1 +num2;
}
console.log("---------Function with Args---------");
console.log(add(3,2));

//function types

// function sayHello():void{
//   console.log("Hello world");
// }
// function add(num1:number, num2:number):number{

//   return num1 +num2;
// }
let addNum;
addNum=sayHello; addNum();
addNum=add; 
console.log("---------WithOut Function Types---------")
console.log(addNum(1,2));

//-Problem with the above approach
/*
addNum is accepting any type of function i.e with any type of signature
 */

let addNum1:(val1:number,val2:number)=>number;//order is imp not arg names
// let addNum2:(val1:number,val2:number)=>number;
// let addNum10:(val1:number,val2:number)=>number;
//addNum1=sayHello;
addNum1=add; 
console.log("---------With Function Types---------")
console.log(addNum1(1,2));

/*====================================================================================
                             O B J E C T S
======================================================================================*/
let myData={

  name:"deb",
  age:28,
  gender:'M'
};

//Behind the scenes typescript infers this to be of type object having name (string type)
//and age(number) property 

//This gives error as names of the property names does notmatch
// myData = {
//     name:"xxx",
//     b:9
// }

let myData1:{name:string,age:number}=
{

  name:"deb",
  age:28
};

/*====================================================================================
                   Creating Custom Type with type aliases
======================================================================================*/

type myDatatype={name:string,age:number};
type myFunType=(val1:number,val2:number)=>number;
//so above example can be changed like

let myData2:myDatatype=
{

    name:"deb",
    age:28
};

let addNum3:(val1:number,val2:number)=>number;//order is imp not arg names
console.log(addNum3(1,2));

//changed to 

let addNum4:myFunType;//order is imp not arg names
console.log(addNum4(1,2));


/*====================================================================================
                            UNION TYPE
======================================================================================*/

let myRealAge:number | string | boolean;
myRealAge="xxx";
myRealAge=2;
//myRealAge=true; cant be assigned

/*====================================================================================
                            NEVER TYPE
======================================================================================*/

function neverReturns():never{

  throw new Error('Error');
}

/*====================================================================================
                              INTERFACES
======================================================================================*/
interface ICustomer {
  firstName: string,
  lastName: string,
  fullname: () => string

}

var customer1: ICustomer = {
  firstName:"Jane",
  lastName:"Doe",
  fullname: (): string => { return customer1.firstName + "" + customer1.lastName}
}

console.log(customer1.firstName);

// Multiple inheritance using Interfaces

interface IFname {
  firstName : string;
}

interface ILname {
  lastName : string;
}

interface IFullName extends IFname,ILname{ }
  var fullName : IFullName = {firstName:"deb",lastName:"k" };
console.log(fullName.firstName + " " + fullName.lastName);


/*====================================================================================
                       TYPESCRIPT CONSTRUCTOR ASSIGNMENT  
======================================================================================*/
 

class TestClass {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
}

 
class TestClassDemo {
 

  constructor(private name: string, public address: string,  public city: string) { 
    
  }

  testMethod() {
   // console.log(this.name) // Compiler error: Property 'name' does not exist on type 'TestClass'.
    console.log(this.address);
    console.log(this.city);
  }
}

const testClass = new TestClassDemo('Jane Doe', '123 Main St.', 'Cityville');

testClass.testMethod();

//console.log(testClass.name);    // Compiler error: Property 'name' does not exist on type 'TestClass'.
//console.log(testClass.address); // Compiler error: 'address' is private and only accessible within class 'TestClass'.
console.log(testClass.city);

//------------ checking for types during runtime -------------------

let finalValue="debasish";
if(typeof finalValue == "string"){
    console.log("Tested");
}
