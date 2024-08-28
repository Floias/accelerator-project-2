const form = document.querySelector('.form__form');
const phoneInput = form.querySelector('[name="phone"]');
const emailInput = form.querySelector('[name="email"]');

const isValidPhone = (phone) => {
  const pattern = /^[\d\-()+]*$/;
  return pattern.test(phone);
};

const isValidEmail = (email) => {
  const pattern = /^[a-zA-Z0-9_.+-ёЁа-яА-Я]+@[a-zA-Z0-9-+-ёЁа-яА-Я]+\.[a-zA-Z0-9-.+-ёЁа-яА-Я]+$/;
  return pattern.test(email);
};

document.addEventListener('input', () => {
  const phone = phoneInput?.value;
  const email = emailInput?.value;
  if (phone === '' || isValidPhone(phone)) {
    phoneInput?.classList.remove('form__input--error');
    phoneInput.setCustomValidity('');
  }

  if (email === '' || isValidEmail(email)) {
    emailInput?.classList.remove('form__input--error');
    emailInput.setCustomValidity('');
  }
});

const onSubmitForm = (evt) => {
  evt.preventDefault();

  const phone = phoneInput?.value;
  const email = emailInput?.value;

  if (!isValidPhone(phone)) {
    phoneInput.setCustomValidity('Поле не должно содержать буквы.');
    phoneInput?.classList.add('form__input--error');
    phoneInput.reportValidity();
  }

  if (!isValidEmail(email)) {
    emailInput.setCustomValidity('Пожалуйста, введите корректный email в формате: текст123@текст123.домен');
    emailInput?.classList.add('form__input--error');
    emailInput.reportValidity();
  }

  if (isValidPhone(phone) && isValidEmail(email)) {
    form.submit();
  }
};

const validatesForm = () => {
  form?.addEventListener('submit', onSubmitForm);
};

export { validatesForm };
