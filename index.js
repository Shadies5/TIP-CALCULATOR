let solve = document.getElementById("solve");
solve.addEventListener("click", calculate)

function calculate() {
    let tip = document.getElementById("tip").value;
    let totalPerTip = document.getElementById("totalPerTip");
    let totalPeople = document.getElementById("totalPeople");
    let amountNum = document.getElementById("amountNum");
    let holdPrice = document.getElementById("price").value;
    let price = parseInt(document.getElementById("price").value);
    let holdService = document.getElementById("service").value;
    let service = parseInt(document.getElementById("service").value);
    let holdNumb = document.getElementById("numbofpeople").value;
    let numbofpeople = parseInt(document.getElementById("numbofpeople").value);


    let bill = (price * tip) / 100

    tip.innerHTML = Math.round(bill);

    tipNum.innerHTML = bill;
    totalPerTip.innerHTML = Math.round(bill / numbofpeople);
    totalPeople.innerHTML = Math.round((bill + price) / numbofpeople);
    amountNum.innerHTML = Math.round(price + bill);


    if (holdPrice === "" || holdService === "" || holdNumb === "How do you rate our service?") {
        tip.innerHTML = "input the values"
        amountNum.innerHTML = "input the values"
        totalPerTip.innerHTML = "input the values"
        totalPeople.innerHTML = "input the values"
    }
}

function func(sete) {
    sete.innerHTML = "Clear";
    var reward = document.getElementById("price");
    reward.value = ""
    var digit = document.getElementById("numbofpeople");
    digit.value = ""
    var item = document.getElementById("service");
    item.value = ""
    var tips = document.getElementById("tip");
    tips.value = ""
}
