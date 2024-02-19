document.addEventListener('DOMContentLoaded', function () {
    // Get references to the navigation links
    let aboutUsLink = document.getElementById('section2');
    let contactUsLink = document.getElementById('section4');
    let projectsLink = document.getElementById('section3');

    // Add click event listeners to the links
    aboutUsLink.addEventListener('click', function (event) {
        event.preventDefault();
        scrollSmoothlyToSection('.section2');
    });

    contactUsLink.addEventListener('click', function (event) {
        event.preventDefault();
        scrollSmoothlyToSection('.section4');
    });
    projectsLink.addEventListener('click', function (event) {
        event.preventDefault();
        scrollSmoothlyToSection('.section3');
    });

    // Function to scroll smoothly to a given section
    function scrollSmoothlyToSection(sectionSelector) {
    let section = document.querySelector(sectionSelector);
    section.scrollIntoView({ behavior: 'smooth' });
    }
});

var Typed=new Typed(".span",{
    strings:['web developer','Dheeraj kumar'],
    typeSpeed:120,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

    


