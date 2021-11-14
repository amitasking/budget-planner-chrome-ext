
let input = document.getElementById("amount");
let btn = document.getElementById("button");
let get = document.getElementById("get");
let totalLabel = document.getElementById("total");

// init
window.addEventListener('DOMContentLoaded',()=>{
    let total = 0;
    chrome.storage.sync.get(['total','limit'],(result)=>{
        if(result.total){
            total =  result.total;  
        }
        totalLabel.innerHTML = `Total Spend = ${total}`;

    })
})

button.addEventListener('click',()=>{
    addValue();
})

get.addEventListener('click',()=>{
    chrome.storage.sync.get('total',(res)=>{
        console.log(res)
    })
})

function addValue(){
    let newTotal = 0;
    chrome.storage.sync.get('total',(result)=>{
        if(!result.total){
            total =  0;  
        }
        else {
            newTotal += parseInt(result.total);
            console.log("added " + total);
        }
        
        if(input.value) 
            newTotal += parseInt(input.value);// parseInt(input.value);

        chrome.storage.sync.set({'total':newTotal});
        totalLabel.innerHTML = `Total Spend = ${newTotal}`;

        console.log(newTotal);
    
    });
   
}



