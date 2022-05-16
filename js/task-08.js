const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const {
    elements: { email, password },
  } = event.currentTarget;

  const dataBase = {};

  if (email.value === '' || password.value === '') {
    window.alert('please, fill all form fields');
  } else (dataBase.email = email.value), (dataBase.password = password.value);
  console.log(dataBase);

  event.currentTarget.reset();
}

//  formData.forEach((value, name) => {
//    //   console.log('name', name);
//    //   console.log('value', value);
//    event.currentTarget.reset();

//    return (dataBase.name = name), (dataBase.value = value);
//  });
