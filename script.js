let a=document.getElementById("userinput");
let b=document.getElementById("btn");
b.addEventListener("click",function()
{
let value=a.value;
if(value>100)
{
    errortext.innerText="Your Value Greater than 100";
    document.body.style.backgroundColor="#f54c14";
}
else
{
    giri();
}
})
var count=100;
let ct=document.getElementById("count");
ct.innerText=count;
let luckynumber=parseInt(Math.floor(Math.random ()* 100));
console.log(luckynumber);
function giri()
{       
        let value=a.value;
        ct.innerText=parseInt(ct.innerText)-1;
        if(value==luckynumber)
        {
            var count=100;
            document.body.style.background="#aff774";
            errortext.innerText="Hoorey Congrats!!!"
            document.querySelector("#count").textContent=value;
        }
        else if(value < luckynumber)
        {
            document.body.style.backgroundColor="rgba(111, 7, 7, 0.866)";
            errortext.innerText="Value is lesser";
        }
        else if(value > luckynumber)
        {
            document.body.style.backgroundColor="rgba(111, 7, 7, 0.866)";
            errortext.innerHTML=`value is greater`;
        }
}
