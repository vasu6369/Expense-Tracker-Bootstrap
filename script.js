var flag=false;
var tb=document.querySelector("#table-container");
function income(){
    let arr=[];
    arr=getuserinput();
    if(!arr[0]||!arr[1]||!arr[2]||!arr[3]){
        document.querySelector("#error").textContent="Enter the input Fields";
        return;
    }
    table(arr,"incomevalue");
    changeIncome(arr[3]);
}

function changeIncome(amt){
    let income=document.querySelector("#total-income");
    income.textContent=Number(income.textContent)+amt;
}

function expense(){
    let arr=[];
    arr=getuserinput();
    if(!arr[0]||!arr[1]||!arr[2]||!arr[3]){
        document.querySelector("#error").textContent="Enter the input Fields";
        return;
    }
    table(arr,"expensevalue");
    changeExpense(arr[3]);
}

function changeExpense(amt){
    let expence=document.querySelector("#total-expense");
    expence.textContent=Number(expence.textContent)+amt;
}

function getuserinput(){
    let category=document.querySelector("#category").value;
    let description=document.querySelector("#description").value;
    let date=document.querySelector("#date").value;
    let amount=Number(document.querySelector("#amount").value);
    return [category,description,date,amount];
}

function table(arr,value){
    let tbl=document.querySelector(".table-body");
    let row=document.createElement("tr");
    for(let i=0;i<arr.length;i++){
        let td=document.createElement("td");
        td.textContent=arr[i];
        if(i==3){
            if(value==="incomevalue"){
                td.className="text-success fw-bold";
            }
            else{
                td.className="text-danger fw-bold"
            }
        }
        row.appendChild(td);
    }
    tbl.appendChild(row);
    resetinput();
    flag=true;
    checkflag();
}
function checkflag(){
    if(flag){
        tb.style.display="block";
    }
}
function resetinput(){
    document.querySelector("#category").value='';
    document.querySelector("#description").value='';
    document.querySelector("#date").value='';
    document.querySelector("#amount").value='';
    document.querySelector("#error").textContent=''; 
}