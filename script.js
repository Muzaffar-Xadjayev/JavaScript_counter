let countColor=document.querySelector('#zero');
let nol=0;
function myFunc(e){
    if(e.target.id==='increment'){
        nol++;
    }else if(e.target.id==='decrement'){
        nol--;
    }else if(e.target.id==='reset'){
        nol=0;
    }
    if(nol>0){
        countColor.style.color='green'
    }else if(nol<0){
        countColor.style.color='red'
    }else{
        countColor.style.color='black'
    }
    countColor.textContent=nol
}


