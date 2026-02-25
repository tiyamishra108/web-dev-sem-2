function first(){
    setTimeout(()=>{
        console.log("first")
        callback()
    },4000)
};

function second(){
    setTimeout(()=>{
        console.log("second")
        callback()
    },2000)
};

function third(){
    setTimeout(()=>{
        console.log("third")
        callback()
    },1000)
};

first()
second()
third()