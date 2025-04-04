function numberOfSteps() {
    const number = document.getElementById("mySubmit()").Checked;
    if (number > 100){
        message = "Good Job!!";
    } else {
        message = "Keep trying";
    }
    document.getElementById("message").textContent = message;
}
