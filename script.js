let total = 0;

document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let length = parseFloat(document.getElementById('length').value);
    let breadth = parseFloat(document.getElementById('breadth').value);
    let height = parseFloat(document.getElementById('height').value);

    // Clear previous results
    document.getElementById('results').innerText = '';

    let subtracted1 = length - 5;
    let subtracted2 = breadth - 5;
    let subtracted3 = height - 5;

    let result = subtracted1 * subtracted2 * subtracted3;

    let formattedResult;
    if (result >= 2000000) {
        formattedResult = (result / 1000000).toFixed(2);
    } else if (result >= 1000000) {
        formattedResult = (result / 1000000).toFixed(3);
    } else {
        formattedResult = (result / 1000000).toFixed(6);
    }

    // Round to 3 decimal places based on the 4th decimal place
    formattedResult = parseFloat(formattedResult).toFixed(4);
    formattedResult = parseFloat(formattedResult).toFixed(3);

    total += parseFloat(formattedResult);

    let resultItem = document.createElement('div');
    resultItem.classList.add('result-item');
    resultItem.innerText = `${formattedResult}`;

    document.getElementById('results').appendChild(resultItem);
    document.getElementById('total').innerText = `Total: ${total.toFixed(6)}`;

    document.getElementById('numberForm').reset();
    document.getElementById('length').focus();  // Move cursor to the first input field
});

document.getElementById('refreshButton').addEventListener('click', function() {
    document.getElementById('numberForm').reset();
    document.getElementById('results').innerText = '';
    total = 0;
    document.getElementById('total').innerText = '';
    document.getElementById('length').focus();  // Move cursor to the first input field
});
