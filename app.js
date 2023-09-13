console.log("barkat ulla chal rha hai ye")
const enddate="26 Jan 2024 01:30 PM"
document.getElementById("end-date").innerText=enddate;
const inputs=document.querySelectorAll("input");
// console.log(enddate);
function clock(){
    const end=new Date(enddate);
   const now=new Date();

    console.log(now);
    const dif=(end-now)/1000;
   if(dif<0){
    return
   }

    inputs[0].value=(Math.floor(dif/3600/24));
    inputs[1].value=(Math.floor(dif/3600)%24);
    inputs[2].value=(Math.floor(dif/60)%60);
    inputs[3].value=(Math.floor(dif)%60);

}
setInterval(() => {
    clock()
}, 1000);

