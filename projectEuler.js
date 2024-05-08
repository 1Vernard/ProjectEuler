//funtion for multiples of 3 or 5
function multiplesOf3or5(number){
const arr=[];
for(let i=0;i<number.length;i++){
    arr.push(number[i])
};
const filteredArr =arr.filter(function(number){
    return number % 3===0 || number % 5 ===0
})

const sum = filteredArr.reduce((accumulator,initialVlue)=>accumulator + initialVlue, 0)


return sum;


};

// function for even valued
  function sumOfEven(n){
    let a =1;
    let b =2;
    let sum =0;
    while(b<=n){
let c =a +b;
 if(c%2===0){sum +=c;}
        a=b;
        b=c;

    }
    return sum

  }

