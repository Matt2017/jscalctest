let FV;
let IR;
let N;
let PV;

document.getElementById("submitButton").onclick = function(){

    FV = document.getElementById("FVTextBox").value;
    FV = Number(FV);

    IR = document.getElementById("IRTextBox").value;
    IR = Number(IR);
    IR = IR * 0.01;

    N = document.getElementById("YearTextBox").value;
    N = Number(N);

    PV = FV/((1+IR)**N);

    document.getElementById("PVLabel").innerHTML = "Present Value: $" + PV;
}