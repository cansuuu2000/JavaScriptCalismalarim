//const merhaba =function(){
    //console.log("merhaba");
//}
//merhaba();
//arrow function
//const merhaba =() =>{

//console.log("merhaba");
//}

//merhaba();
//const merhaba =(firstName,lastName)=>{
   // console.log("merhaba",firstName,lastName);
//}
//merhaba("cansu","ünal");
//const cube = function(x){
   // return x*x*x;
//}
//console.log(cube(4));
//const cube = x=> x*x*x;
     

//console.log(cube(4))
//let number1,number2;
//arr=[100,200,300,400];
//number1=arr[0];
//number2=arr[1];
//console.log(number1,number2);
//destructing
//const [number1,number2]=arr;
//console.log(number1,number2);
//obje 
//const numbers = {
    // a:10,
    // b:20,
    // c:30,
    // d:40,
     //e:50

//};
//const {a:number1,c:number2,e:number3} =numbers;
//console.log(number1,number2,number3);
//const getLangs =()=>["pyhton","java","c++"];
//const [langs1,langs2,langs3]=getLangs();
//console.log(langs1,langs2,langs3);
//objeyle 
// const person={
// name :"mustafa murat ",
// year:2000,
// salary:9000,
// showInfos:()=>console.log("bilgiler gösteriliyor")




// }
// const {name:isim,year:yil,salary:maaş,showInfos:bigilergösteriliyor}=person;
// console.log(isim,yil,maaş);
// bigilergösteriliyor();
//sprad op
// const langs =["phython","c++","java","php"];
 // console.log(langs[0],langs[1],langs[2],langs[3]);
// console.log(...langs);
// langs2 =["javascript","c#",...langs];
// console.log(langs2);
// const numbers =[1,2,3,4,5,6];
// const [a,b,...langs2]=numbers;
// console.log(a,b);
// console.log(langs2);
// const addNumbers =(a,b,c)=> console.log(a+b+c);
// const numbers=[100,200,300];
// addNumbers(...numbers);

//for in for of 
// const person ={
//     name:"cansu",
//     age:23,
//     salary:20000
// };
// const langs =["pyhton","c++","java"];
// const name ="cansu";
//for in
// for(let prop in person){
//     console.log(prop,person[prop]);
// }
//array
// for (let index in langs){
//     console.log(index,langs[index]);
// }
//string
// for(let character of name){
// console.log(character);
// }
//let myMap =new Map();//oluşturma 
//console.log(myMap);
//  const key1 ="cansu";
//  const key2 ={a:10,b:20};
//  const key3= ()=>2;
// //set
//  myMap.set(key1,"string Değer");
//  myMap.set(key2,"object Literal Değer");
//  myMap.set(key3,"function Değer");
 //get
//  console.log(myMap.get(key1));
//  console.log(myMap.get(key2));
//  console.log(myMap.get(key3));
 //console.log(myMap);
 //may boyutu 
//  console.log(myMap.size);
//  const cities =new Map();
// cities.set("ankara",5);
//  cities.set("izmir",4);
//  cities.set("istanbul",15);
// //foreach
// cities.forEach(function(value,key){
//   console.log(key,value);
//})
//for of
//  for (let [key,value] of cities){
//     console.log(key,value);
// }
//map keys
// for (let key of cities.keys()){
//     console.log(key);
// }
// for(let value of cities.values()){
//     console.log(value);
// }
// arraydan map oluşturma 
// const array =[["key1","value1"],["key2","value2"],];
// const lastMap=new Map(array);
// console.log(lastMap);
//maptan array oluşturMA 
//  const cities =new Map();
//  cities.set("ankara",5);
//  cities.set("izmir",4);
//  cities.set("istanbul",15);
// const array =Array.from(cities);
// console.log(array);

// let a ="mustafa";
// let b="mustafa";
// if(a ===b){
// console.log("eşit");

// }
// let array1 =[1,2,3,4];
// let array2 =[1,2,3,4];
// if (array1===array2){
//    console.log("eşit");
// }
// else{
//    console.log("eşit değil");
// }
// const cities =new Map();
//  const key =[1,2,3];
//  cities.set("ankara",5);
//  cities.set("izmir",4);
//  console.log(cities.get("ankara"));

//  const myset =new Set();
//  myset.add(100);
//   myset.add(100);
//  myset.add(3.14);
//  myset.add("cansu");
//  myset.add(true);
//  myset.add([1,2,3]);
//   myset.add({a:1,b:2});
//  console.log(myset);
// const myset2 =new Set([100,3.15,"cansu"]);
//  console.log(myset2);
// console.log(myset2.size);

//  myset2.delete("cansu");
//  console.log(myset2);
// console.log(myset.has("cansu"));
// myset.forEach(function(value){
//    console.log(value);
// })

// const obj1 ={
//    number1:10,
//    number2:20,
// };

// const obj2 ={
//    number1 :30,
//    number2:40,
// };
// function addNumbers(number3,number4){
//    console.log(this.number1+ this.number2+ number3 +number4);
// }
// addNumbers(100,200);
// addNumbers.call(obj1,100,200);
// addNumbers.call(obj2,100,200);
//apply 
// addNumbers.apply(obj1,[100,200]);
// addNumbers.apply(obj2,[100,200]);
//bind 
// function getNumberTotal(number3,number4){
//    return this.number1+ this.number2+ number3+ number4
// }
// const copyFun1 = getNumberTotal.bind(obj1);
// const copyFun2 =getNumberTotal.bind(obj2);
// console.log(copyFun1(100,200));
// console.log(copyFun2(100,200));
// function Person (name,age){
//    this.name =name;
//    this.age=age;


// }
// Person.prototype.showInfos=function(){
//    console.log("isim:"+this.name+"yaş:"+this.age);

// }
// // const person =new Person("Mustafa",25);
// // console.log(person);
// function Employee(name,age,salary){
//    this.name =name;
//    this.age=age;
//    this.salary=salary;

// }
// Employee.prototype =Object.create(Person.prototype);
// // const emp =new Employee("Mustafa",25,4000);
// // console.log (emp);
// Employee.prototype.toString =function(){
//    console.log("Employee");
// }
// //overriding iptal etme 
// Employee.prototype.showInfos=function(){
//    console.log("isim: " +this.name +" yaş: "+this.age+" maaş: "+ this.salary);

// }

// const emp =new Employee("Mustafa",25,4000);
// // console.log(emp);
// // emp.showInfos();
// emp.toString();

// let isimler  =["enes","hakan","mert","yavuz","çilek","meltem"];
// isimler.forEach(function(isim){
//    console.log(isim);
// });
// for (let i=0; i<isimler.length; i++){
//    console.log(isimler[i]);
// }
//  let i  = 0;
//  while(i<isimler.length){
//    console.log(isimler[i]);
//    i++;
//  }
// const products=["hm","zara","polo","bershka","lcw","koton"];
// products.forEach(function(product){
//    console.log(product);
// });

//ınhertince örnek 

// class Person { //superclass-baseclass
//    constructor(name,age){
//       this.name= name;
//       this.age=age;



//    }
//    showInfos(){
//       console.log("isim:" + this.name +"yaş:"+ this.age);

//    }


// }
// class Employee extends Person{ //chilclass- derived class-subclass
//    constructor(name,age,salary){
//       super(name,age);
//       this.salary=salary;
//    }
//    showInfos(){ //overriding
//       console.log("isim:" + this.name +"yaş:"+ this.age+ "maaş:"+this.salary);
//    }
//    toString(){
//       console.log("Employee");
//    }
//    raiseSalary(amount){
//       this.salary += amount;
//    }
// }
// const emp =new Employee("cansu",24,17000);
// emp.raiseSalary(500);
// console.log(emp);
// emp.toString();
// emp.showInfos();


//destructing örnek tekrar
// const hesala =(a,b)=>{
//    const toplam =a+b
//    const çikar =a-b
//    const çarp=a*b
//    const böl =a/b
//    const dizi=[toplam,çikar,çarp,böl];
//    return dizi
// }
// [a,b,c,d]=hesala(10,2)
// console.log(a,b,c,d);
// const person= {
//    firstName :"eda",
//    lastName: "deniz",
//    salary:1000,
//    age :23
   
// }
// let {firstName,lastName,salary,age} =person
// console.log(firstName,lastName,salary,age);
// console.log(person);
//syntatic sugar 
// function Employee(name,salary,age){
//    this.name =name;
//    this.salary=salary;
//    this.age=age;
// }
// Employee.prototype.showInfos =function(){
//    console.log ("isim:" +this.name+ "maaş:"+this.salary+ "yaş :"+this.age);

// }
// const emp =new Employee("derin",4000,45);
// console.log(emp);
class Employee{
   constructor (name,salary,age){
      this.name =name;
      this.salary=salary;
      this.age=age;

   }
   showInfos(){
      console.log ("isim:" +this.name+ "maaş:"+this.salary+ "yaş :"+this.age);
   }

}
const emp =new Employee("derin",4555,26);
console.log (emp);
// class matematik {
//    cube (x){
//       console.log (x*x*x);
//    }
// }
// const math =new matematik();
// math.cube(3);
// console.log(math);
class matematik{
    static sqrt(x){
      console.log(x*x);
   }
}

matematik.sqrt(4);










