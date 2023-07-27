const baseUrl = 'https://jsonplaceholder.typicode.com/users';

const name = document.querySelector('.name');
const userName = document.querySelector('.username');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');
const website = document.querySelector('.website');
const street = document.querySelector('#street');
const city = document.querySelector('.city');
const catchPhrase = document.querySelector('.phrase');
const companyName = document.querySelector('.company-name');

const container = document.querySelector('.container');

function fetchOneUser(id = 1) {
	fetch(`${baseUrl}/${id}`)
		.then((res) => res.json())
		.then((data) => {
			name.innerText = data.name;
			userName.innerText = data.username;
			email.innerText = data.email;
			phone.innerText = data.phone;
			website.innerText = data.website;
			street.innerText = data.address.street;
			city.innerText = data.address.city;
			catchPhrase.innerText = data.company.catchPhrase;
			companyName.innerText = data.company.name;
		});
}

function fetchAllUsers() {
	fetch(baseUrl)
		.then((res) => res.json())
		.then((data) => {
			data.map((user) => {
				const card = `<div class="user-card">
    <div class="general">
      <h1 class="name">${user.name}</h1>
      <p class="username">${user.username}</p>
      <p class="email">${user.email}</p>

      <p class="phone">${user.phone}</p>
      <p class="website">${user.website}</p>
    </div>
    <div class="address">
      <h3>Address Info</h3>
      <p id="street">${user.address.street}</p>
      <p class="city">${user.address.city}</p>
    </div>

    <div class="company">
      <h3>Company Info</h3>
      <p class="company-name">${user.company.name}</p>
      <p class="phrase">${user.company.catchPhrase}</p>
    </div>
  </div>`;

				container.insertAdjacentHTML('beforeend', card);
			});
		});
}

fetchAllUsers();

fetchOneUser(8);
