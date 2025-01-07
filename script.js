document.getElementById('homepage').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('aboutpage').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('educationpage').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior
    document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('skillpage').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior
    document.getElementById('skill').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('projectpage').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contactpage').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor click behavior
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
