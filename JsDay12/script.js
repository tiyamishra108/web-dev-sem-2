let mypromise = new Promise(()=>{
    let data = "this is my data";
    if(data){
        res(data);
    }else{
        rej("error: no data found");
    }
});
mypromise
.then((d)=>{
    console.log(d);
})
.catch((err)=>{
    console.log(err);
});
