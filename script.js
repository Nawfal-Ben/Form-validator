// Variables
const userName = document.getElementById("user-name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passConfirm = document.getElementById("confirm-password")
const confirmBtn = document.querySelector("button")
const form = document.querySelector("form")

// Check required
function checkRequired(inputArr) {

    inputArr.forEach(input => {
        if (input.value.trim() === "") warning(`${input.name} is required`, input)
    });

}

// Check the minmum characters wanted
function checkLength(input, min, max) {

    if (input.value.trim().length < min) {
        warning(`${input.name} must be at least ${min}`, input)
    } else if (input.value.trim().length > max) {
        warning(`${input.name} must be less than ${max}`, input)
    } else {
        validInput(input)
    }

}

// Check email pattern
function checkEmail(email) {

    let emailRegExp = /\w+@\w+\.\w{2,}/
    emailRegExp.test(email.value.trim()) ? validInput(email) : warning(`${email.name} is not valid`, email)

}

// Check matchs
function checkMatchs(input1, input2) {
    input1.value.trim() === input2.value.trim() ? validInput(input2) : warning(`${input2.name} do not match`, input2)
}

// Create warning message
function warning(msg, input) {

    if (input.nextElementSibling.nodeName === "SPAN") input.nextElementSibling.remove()
    let span = document.createElement("span")
    span.innerHTML = msg
    span.className = "warning"
    input.parentNode.insertBefore(span, input.nextSibling)
    input.className = "not-valid"

}

// make valid input
function validInput(input) {

    input.className = "valid"
    if (input.nextElementSibling.nodeName === "SPAN") input.nextElementSibling.remove()

}

// Add event listener
form.addEventListener("submit", function(event) {

    // Cancel the defaut behavior of submit event
    event.preventDefault()

    // Check Username
    checkLength(userName, 3, 15)
    
    // Check the email
    checkEmail(email)
    
    // Check password
    checkLength(password, 6, 25)
    
    // Confirm password
    checkMatchs(password, passConfirm)

    // Check Required
    checkRequired([userName, email, password, passConfirm])
})