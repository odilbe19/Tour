const loginForm = document.querySelector('.login-form-container');
const formClose = document.querySelector('#form-close');
const submitBtn = document.querySelector('.btn');

// Функция для создания объекта с данными из полей ввода
function createDataObject() {
    const emailInput = document.querySelector('.box[type="email"]');
    const passwordInput = document.querySelector('.box[type="password"]');

    const dataObject = {
        email: emailInput.value,
        password: passwordInput.value,
    };

    return dataObject;
}

// Функция для обработки отправки формы
function handleSubmit(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы (перезагрузка страницы)

    const formData = createDataObject();
    console.log(formData);

    // Добавьте здесь код для отправки данных на сервер или их обработки
    // Например, вы можете использовать fetch для отправки данных на сервер
}

// Обработчик события для закрытия формы
formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

// Обработчик события для отправки формы
submitBtn.addEventListener('click', handleSubmit);
