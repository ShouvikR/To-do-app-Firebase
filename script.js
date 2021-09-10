
  //   Web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBZRIpJTgsunAqTLORqTZ-NKeLpQTy1m_w",
    authDomain: "practise-todoapp.firebaseapp.com",
    projectId: "practise-todoapp",
    storageBucket: "practise-todoapp.appspot.com",
    messagingSenderId: "776021623475",
    appId: "1:776021623475:web:ffb39fc3fc92484ecb26c6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  // Create a ref to our DATABASE:
  const dbRef = firebase.database().ref();


  const form = document.querySelector('form');

  form.addEventListener('submit', function(e) {

    e.preventDefault();

    const input = document.querySelector('input');

    const task = input.value;

    if (task) {

        const anyObj = {
            description: task
        }

        dbRef.push(anyObj);

        input.value = '';

    }

  });

  dbRef.on('value', (data) => {

    const todoData = data.val();

    const array = [];

    for(item in todoData) {
      const list = document.createElement("li");

      list.innerHTML = `<i class="far fa-square"></i>`;

      list.appendChild(document.createTextNode(todoData[item].description));

      array.unshift(list.outerHTML);

      // unshift include item in the top.
      // push include item in the bottom.

      const ul = document.querySelector("ul");

      ul.innerHTML = array.join("");
    }

  })

  document.querySelector('ul').addEventListener('click', function(event) {

    if (event.target.tagName === 'I') {
        changeDisplay(event.target);
    }

  })

  const changeDisplay = (element) => {

    element.classList.toggle('fa-square');

    element.classList.toggle('fa-check-square');

    element.parentElement.classList.toggle('text-muted');

  }


