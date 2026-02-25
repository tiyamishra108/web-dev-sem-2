let pro = new Promise((resolve, reject) => {
  let proposal="false";
    if(proposal=="true"){
        resolve();
    }else{
        reject("Proposal was REJECTED");
    }
});

pro.then(()=>{
    console.log("Proposal was ACCEPTED");
}).catch((error)=>{
    console.log(error);
})