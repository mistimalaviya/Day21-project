let arr=[10,56,34,23]
function Evennumber(a){

    let ans=a.some((ele)=>{
        return ele%2==0
    })
    console.log(ans);
    
}

EvenNumber(arr)