function login(email,pass,cb){
    setTimeout(() => {
        cb({userid:email,isloggedIN:true,message:"login successful"});
    }, 3000);
}
login("user@example.com", "password", (userdetails) => {
    console.log(userdetails);
});
function getvideolist(cb){
    setTimeout(() => {
    cb(["video1", "video2", "video3"]);
    }, 4000);
}
login("user@example.com", "password", (userdetails) => {
    console.log(userdetails);
    getvideolist((videos) => {
    console.log(videos);
})});
function getVideoList(cb) {
}

function getVideodetails(cb){
    setTimeout(() => {
        cb({ title: "video1", description: "2 mins" });
    }, 1000);    
}
login("user@example.com","password", (userdetails) => {
    console.log(userdetails);
    getVideodetails((videodetails) => {
        console.log(videodetails)
        getVideodetails((videodetails) => {
            console.log(videodetails);
        })
    })
});