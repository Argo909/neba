document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById('submit');
    const inputForm = document.querySelector('.input-form');
    const receipt = document.querySelector('.receipt');

    submitButton.addEventListener('click', function() {
        const nameInput = document.getElementById('name').value.trim();
        const numberInput = document.getElementById('number').value.trim();
        const priceInput = document.getElementById('price').value.trim();

        if (!nameInput || !numberInput || !priceInput) {
            alert('Пожалуйста, заполните все поля!');
            return;
        }

        if (!/^\d+$/.test(numberInput)) {
            alert('Номер телефона должен содержать только цифры!');
            return;
        }

        if (isNaN(priceInput) || Number(priceInput) <= 0) {
            alert('Введите корректную сумму!');
            return;
        }

        const fullPhone = '996' + numberInput;
        const recipientNameElement = document.getElementById('recipient-name');
        if (recipientNameElement) {
            recipientNameElement.innerHTML = `<strong>Имя получателя:</strong> ${nameInput}`;
        }

        const transferInfoElement = document.querySelector('.transfer-info');
        if (transferInfoElement) {
            const formattedPrice = Number(priceInput).toFixed(2);
            transferInfoElement.innerHTML = `Перевод по номеру телефона: ${fullPhone} /<br />${nameInput} / Сумма ${formattedPrice} KGS`;
        }

        const amountElement = document.querySelector('.amount');
        if (amountElement) {
            const formattedPrice = Number(priceInput).toFixed(2);
            amountElement.textContent = `-${formattedPrice} С`;
        }

        inputForm.style.display = 'none';
        receipt.style.display = 'block';
    });
});