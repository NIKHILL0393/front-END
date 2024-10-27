function asyncTask() {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
          // const success=true; 
          let a=1
          let b=2
          let sum=a+b
          if(sum=3){
              resolve("Operation had  completed"); 
          
          } 
          else{
              reject("Operation had failed"); 
          
          }
      },1000); 
  } );

}

asyncTask()
  .then((right) => {
      console.log(right);
  })
  .catch((wrong) => {
      console.wrong(wrong);
  });