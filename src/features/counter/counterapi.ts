

export  function fetchCount(amount:number=1){
    return new Promise(async(resolve)=>{
        const response = await fetch('http://localhost:5050');
        const data = await response.json();
        resolve({data});
    })
}