let total = 0;

document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);

    let subtracted1 = num1 - 5;
    let subtracted2 = num2 - 5;
    let subtracted3 = num3 - 5;

    let result = subtracted1 * subtracted2 * subtracted3;

    let formattedResult;
    if (result >= 2000000) {
        formattedResult = (result / 1000000).toFixed(2);
    } else if (result >= 1000000) {
        formattedResult = (result / 1000000).toFixed(3);
    } else {
        formattedResult = (result / Math.pow(10, Math.floor(result).toString().length)).toFixed(5);
    }

    total += parseFloat(formattedResult);
    document.getElementById('results').innerText += `Result: ${formattedResult}\n`;
    document.getElementById('total').innerText = `Total: ${total.toFixed(5)}`;

    document.getElementById('numberForm').reset();
});

document.getElementById('refreshButton').addEventListener('click', function() {
    document.getElementById('numberForm').reset();
    document.getElementById('results').innerText = '';
    document.getElementById('result').innerText = '';
    total = 0;
    document.getElementById('total').innerText = '';
});
