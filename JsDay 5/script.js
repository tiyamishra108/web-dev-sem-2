//------------------------------------------------CALL STACK --------------------------------------------------
var a=10;
console.log(a)
function demo(){
    let b=20;
    console.log(b);
}
demo()
//-------------------------------------------------OBJECT METHODS--------------------------------------------------
let user1 ={
 FullName: "Tiya Mishra",
 address: "Gurugram",
 mobileno: 3456463258,
 favcolor: ["Purple", "Green", "Silver"]
 }
console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(Object.entries(user1));
//entries return key values in form of arrays

//object seal and freeze
const car ={
    make: "Mahindra",
    model: "Thar"
};

Object.freeze(car);
car.color = "Blue"; //This property is not added when freeze is used.
console.log(car);

Object.seal(car);
car.model = "XEV9E"
car.color = "Blue"; //This property addition is ignored



