

function addToDisplay(val){
    document.getElementById("display").value+=val;
}

function getAnswer(){
    let input = document.getElementById("display").value;
    let answer = eval(input);
    console.log(answer)
    document.getElementById("display").value = answer
}

function clearAll(){
    document.getElementById("display").value = '';
}

function deleteOne(){
    let num = document.getElementById("display").value;
    let ans = num.substring(0,num.length-1);
    document.getElementById("display").value = ans;
}