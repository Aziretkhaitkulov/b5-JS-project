const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const result = document.getElementById("result")

const plus = e => {
    num1Value = Number(num1.value)
    num2Value = Number(num2.value)
    resultValue = num1Value + num2Value
    result.textContent = resultValue
};

const mines = e => {
    num1Value = Number(num1.value)
    num2Value = Number(num2.value)
    resultValue = num1Value - num2Value
    result.textContent = resultValue
};

const division = e => {
    num1Value = Number(num1.value)
    num2Value = Number(num2.value)
    resultValue = num1Value / num2Value
    result.textContent = resultValue
};
const multiplication = e => {
    num1Value = Number(num1.value)
    num2Value = Number(num2.value)
    resultValue = num1Value * num2Value
    result.textContent = resultValue
};

const plusBtn = document.getElementById("plus")
plusBtn.addEventListener("click", plus)

const minesBtn = document.getElementById("mines")
minesBtn.addEventListener("click", mines)

const divisionBtn = document.getElementById("division")
divisionBtn.addEventListener("click", division)

const multiplicationBtn = document.getElementById("multiplication")
multiplicationBtn.addEventListener("click", multiplication)
