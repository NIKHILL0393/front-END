let a = 1
let b = 2
let c= 3
const sum=(b,c)=>{
    console.log(b+c)
    }
    setTimeout(()=>{
    b=a+5
    sum(b,c)       
},1000)