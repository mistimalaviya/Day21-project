let arr=[2,3,5,8]

function heer(a){
    return a.filter((el)=>{
            return el%2==0;
    })
}
console.log(heer(arr));
