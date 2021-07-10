function maths() {
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var num3 = parseFloat(document.getElementById("num3").value)

    var largest = document.getElementById("answer").value = Math.max(num1, num2, num3);
}

// Dark Mode

const sun = document.querySelector(".sun")
const body = document.querySelector("html")

sun.onclick = function() {
    body.classList.toggle("dark");

}