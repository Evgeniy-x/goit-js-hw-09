import { Notify } from 'notiflix';

Notify.init({
  width: '300px',
  distance: '20px',
  opacity: 0.9,
  borderRadius: '50px',
  timeout: 3000,
  clickToClose: true,
});

const refs = {
  form: document.querySelector('form'),
  firstDalay: document.querySelector('[name="delay"]'),
  stepDalay: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]')
}

let counter = 0;


refs.form.addEventListener('submit', (e) => {
  e.preventDefault()
  let DELAY = Number(refs.firstDalay.value);
  const STEP = Number(refs.stepDalay.value);
  const amountMessage = Number(refs.form.amount.value);
  
    const timerId = setInterval(() => {
      counter++;
      if(counter > amountMessage) {
        clearInterval(timerId);
        counter = 0;
        return
      }
      startPromise(counter, DELAY); 
      DELAY += STEP;
      
    }, DELAY);
  
})

function startPromise (counter, delay) {
  createPromise(counter, delay)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
  });
}


