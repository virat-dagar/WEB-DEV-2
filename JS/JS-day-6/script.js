// let arr = ["name", "address",34562] // we can use different data types in an 
// array but it is not techenically right for that we use object 
let user={
    fullname: "Aprajita",
    address:{
        city:"samastipur",
        state:"bihar"
    },
    mobileno: 123456789,
    favcolor: ["white","pink","blue"],
    demo:function(){
        return "demo function "
    }

}
console.log(user)
console.log(user.fullname,user.mobileno,user.favcolor[1],
    user.demo(),user.address.city 
);

const car={
    make:"Mahindra",
    model:"Thar",
};
//we can't add a new key and value pair but we can change or update existing values
Object.seal(car);

//we can't add a new key and value pair also can't change or update existing values
Object.freeze(car);

car.model="XUV700";
car.colour="black";
console.log(car);