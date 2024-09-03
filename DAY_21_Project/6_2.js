let arr=['HEER','MADHAV','DHARMIKA','JIGNESH']
function areAllStringsLong(a){

    let ans=a.every((ele)=>{
        return ele.length>5
    })
    console.log(ans);
    
}

areAllStringsLong(arr)