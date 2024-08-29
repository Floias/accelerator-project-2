const title = document.querySelector('.about__content h2');
const shadowValue = title.textContent;

const addsShadow = () => title?.setAttribute('data-title', shadowValue);

export { addsShadow };
