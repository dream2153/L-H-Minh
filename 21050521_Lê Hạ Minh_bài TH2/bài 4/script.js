const form = document.getElementById('bmi-form');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const height = heightInput.value;
    const weight = weightInput.value;

    const bmi = calculateBmi(height, weight);
    const bmiCategory = getBMICategory(bmi);

    resultDiv.innerHTML = `
        Chỉ số BMI của bạn là: ${bmi.toFixed(2)}<br>
        Phân loại: ${bmiCategory}
    `;
});

function calculateBmi(height, weight) {
    return weight / (height / 100) ** 2;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Dưới chuẩn';
    } else if (bmi < 24.9) {
        return 'Bình thường';
    } else if (bmi < 29.9) {
        return 'Thừa cân';
    } else if (bmi < 34.9) {
        return 'Béo phì cấp độ I';
    } else if (bmi < 39.9) {
        return 'Béo phì cấp độ II';
    } else {
        return 'Béo phì cấp độ III';}
}
