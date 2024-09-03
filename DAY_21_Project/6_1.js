
let arr=[10,43,23,67]
function areAllPositive(a){

    let ans=a.every((ele)=>{
        return ele>0
    })
    console.log(ans);
    
}

areAllPositive(arr)