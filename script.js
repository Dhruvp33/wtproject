function calculateBMI() {
    const height = document.getElementById("height").value;
    const heightUnit = document.getElementById("height-unit").value;
    const weight = document.getElementById("weight").value;

    let heightInMeter;
    if (heightUnit === "meter") {
        heightInMeter = height;
    } else if (heightUnit === "centimeter") {
        heightInMeter = height / 100;
    }

    const bmi = weight / (heightInMeter * heightInMeter);

    let category;
    if (bmi < 18.5) {
        category = "Underweight";
        window.location.href = "underweight.html";
    } else if (bmi < 25) {
        category = "Normal weight";
        window.location.href = "normal.html";
    } else if (bmi < 30) {
        category = "Overweight";
        window.location.href = "overweight.html";
    } else {
        category = "Obese";
        window.location.href = "obese.html";
    }

    document.getElementById("result").innerHTML = `Your BMI is ${bmi.toFixed(2)} (${category})`;
}