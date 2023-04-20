import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

form.addEventListener('input', throttle(inputing, 500));
form.addEventListener('submit', submiting);
populateTexts();

function inputing(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function submiting(evt) {
  evt.preventDefault();
  console.log(formData);

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
function populateTexts() {
  let savedText = localStorage.getItem(STORAGE_KEY);
  let parsedText = JSON.parse(savedText);
  // Object.assign(formData, parsedText);
  if (savedText) {
    form.email.value = parsedText.email;
    form.message.value = parsedText.message;
  }
}
