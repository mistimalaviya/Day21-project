let arr=[1, 2, 3, 4, 5, 6]

function EvenNumbers(a){
    let ans=a.filter((ele)=>{
        return ele%2==0
    })
    console.log(ans);
    

}

EvenNumbers(arr)