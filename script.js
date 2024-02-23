const everything = document.querySelectorAll('.all'), sun = document.querySelector('.outer-sun');
sun.addEventListener('click', () => {everything.forEach(item => item.classList.toggle('dark'));});
