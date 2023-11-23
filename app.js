const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');



hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});




const express = require('express');
const helmet = require('helmet');
const app = express();

// Use Helmet middleware for security headers
app.use(helmet());

const bcrypt = require('bcrypt');
const saltRounds = 10;

const plaintextPassword = 'user_password';

bcrypt.hash(plaintextPassword, saltRounds, (err, hash) => {
  if (err) throw err;

  // Store the hash in the database
  console.log('Hashed Password:', hash);
});






