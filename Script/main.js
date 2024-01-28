/**
 * Created by Asish and Fouzaan
 * student id are: 100886468 and 100857977
 * date of completion is 26-01-2023
 *
 */
let slideIndex = 0;


/**
 * This is a function which will show the slide show of the images
 */
function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Move to the next slide
    slideIndex++;

    // If at the end of the slides, start from the first slide
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 5 seconds
    setTimeout(showSlides, 3000);
}

// Portfolio Page

document.addEventListener("DOMContentLoaded", function () {
    showSlides();
});

document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.getElementById("project-list");
    const loadMoreButton = document.getElementById("load-more");
    let projectsData = [
        {
            title: "Kids Coding Camp",
            description: "Harmony Hub's Kids Coding Camp introduces young minds to the fun of coding through games and creative projects, making technology an exciting learning experience for our little ones.",
            imageSrc: "./images/kidscodingcamp.jpg"
        },

        {
            title: "Community Garden Makeover",
            description: "Join us in transforming a local community garden into a green oasis where neighbors come together to nurture plants and build a stronger sense of community. Let's cultivate connections and green thumbs!",
            imageSrc: "./images/communitygarden.jpg"
        },

        {
            title: "Neighbor Support Initiative",
            description: "Harmony Hub's Neighbor Support Initiative focuses on small acts of kindness within our community. Whether it's running errands or a friendly chat, join our neighborly network and make a positive impact.",
            imageSrc: "./images/neighborsupport.jpg"
        },

        {
            title: "Tech Basics Workshop",
            description: "Harmony Hub's Tech Basics Workshop makes technology easy for everyone in the community. From smartphones to email, let's navigate the digital world together with practical skills.",
            imageSrc: "./images/techbasicsworkshop.jpg"
        },

        {
            title: "Local Art Showcase",
            description: "Experience the vibrant talent of our community in Harmony Hub's Local Art Showcase. From paintings to sculptures, join us in celebrating the creativity that makes our neighborhood unique.",
            imageSrc: "./images/localartshowcase.jpg"
        }
    ];
    const projectsPerPage = 4;
    let projectsToShow = projectsData.slice(0, projectsPerPage);

    /**
     * this takes the project data and spits out cards
     * @param project the actual project data
     * @returns {HTMLDivElement}
     */
    function createProjectCard(project) {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
            <img src="${project.imageSrc}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        return card;
    }

    /**
     * It takes the project data and it renders it
     * @param projects the actual project data
     */
    function renderProjects(projects) {
        projects.forEach((project) => {
            const card = createProjectCard(project);
            projectList.appendChild(card);
        });
    }

    /**
     * It takes the project data and displays it when we hit load more
     */
    function loadMoreProjects() {
        const remainingProjects = projectsData.slice(projectsToShow.length, projectsToShow.length + projectsPerPage);
        projectsToShow = projectsToShow.concat(remainingProjects);

        renderProjects(remainingProjects);

        if (projectsToShow.length === projectsData.length) {
            loadMoreButton.style.display = "none";
        }
    }

    loadMoreButton.addEventListener("click", loadMoreProjects);

    // Initial rendering of projects
    renderProjects(projectsToShow);
});



document.addEventListener("DOMContentLoaded", function () {
    // Your existing JavaScript code

    // Function to show service details in the modal
    /**
     * Function to show service details in the modal
     * @param serviceNumber the index of the modal
     */
    function showServiceModal(serviceNumber) {
        // Define service details
        const services = [
            {
                title: "Art Corner",
                description: "Immerse yourself in the world of creativity at our Art Corner. Express your artistic side through painting, drawing, and crafts. Unleash your imagination in a welcoming space designed for everyone to enjoy."
            },
            {
                title: "Relaxation Sessions",
                description: "Take a break and join our Relaxation Sessions to unwind and rejuvenate. From guided meditation to calming activities, these sessions provide a peaceful retreat from daily stresses. Embrace tranquility and find your moment of serenity."
            },
            {
                title: "Green Living Workshops",
                description: "Discover sustainable living through our Green Living Workshops. Learn practical tips for an eco-friendly lifestyle, from recycling practices to energy-saving techniques. Join us in building a greener and healthier community together."
            }
        ];


        const service = services[serviceNumber - 1];

        // Populate modal content
        document.getElementById(`serviceModalLabel${serviceNumber}`).innerText = service.title;
        document.getElementById(`serviceModalContent${serviceNumber}`).innerHTML = `
            <h1>${service.title}</h1>
            <p>${service.description}</p>
        `;

        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById(`serviceModal${serviceNumber}`));
        modal.show();
    }

    /**
     *
     * @param ShowTeamModal the index of the team modal
     */
    function showTeamModal(ShowTeamModal) {
        const TeamMembers = [
            {
                title: "Fozaan",
                description: "WEBD DEVELOPER",
                Projects: {
                    ProjectAlpha: "Developed a responsive website for a client in the healthcare industry.",
                    ProjectBeta: "Implemented new features and optimizations for an e-commerce platform."
                }
            },
            {
                title: "Asish Dhakal",
                description: "Graphics designer",
                Projects: {
                    ProjectX: "Organized and conducted weekly reading sessions for children in a safe environment.",
                    ProjectY: "Collaborated with local schools to promote literacy through interactive storytelling."
                }
            },
            {
                title: "Billy Joel",
                description: "Content writer",
                Projects: {
                    ProjectM: "Hosted gaming nights and events to foster a sense of community among students.",
                    ProjectN: "Facilitated study group sessions with resources and support for academic success."
                }
            }
        ];

        const Team = TeamMembers[ShowTeamModal - 1];

        // Populate modal content
        document.getElementById(`TeamMemberModalLable${ShowTeamModal}`).innerText = Team.title;
        document.getElementById(`TeamMemberModalContent${ShowTeamModal}`).innerHTML = `
            <h1>${Team.title}</h1>
            <p>${Team.description}</p>
            <h2>Projects:</h2>
            <ul>
                ${Object.entries(Team.Projects).map(([day, timing]) => `<li>${day}: ${timing}</li>`).join('')}
            </ul>
        `;

        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById(`teamModal${ShowTeamModal}`));
        modal.show();


    }
    // Attach click event listeners to service tabs
    document.querySelectorAll('.service-tab').forEach((tab, index) => {
        tab.addEventListener('click', () => showServiceModal(index + 1));
    });
    document.querySelectorAll('.team-member').forEach((tab, index) => {
        tab.addEventListener('click', () => showTeamModal(index + 1));
    });

});

/**
 * An IIFY function doing the modification of dom elements
 */
(function() {
    document.addEventListener("DOMContentLoaded", function () {
        // Dynamically add 'Careers' link
        const careersLink = document.createElement("li");
        careersLink.classList.add("nav-item");
        careersLink.innerHTML = '<a class="nav-link" href="./Careers.html"><i class="fa-solid fa-briefcase"></i> Careers</a>';

        const navbarLinks = document.querySelector(".navbar-nav");
        navbarLinks.appendChild(careersLink);

        // Programmatically change 'Blog' link to 'News'
        const blogLink = document.querySelector(".nav-link[href='blog.html']");
        blogLink.innerHTML = '<i class="fa-solid fa-newspaper"></i> News';

    });
})();

// main.js

// Function to create the footer element
/**
 * Function to create the footer element
 */
function createFooter() {
    // Create footer element
    const footer = document.createElement("footer");
    footer.className = "bg-dark text-white mt-5 fixed-bottom";

    // Create navbar inside the footer
    const navbar = document.createElement("nav");
    navbar.className = "navbar navbar-expand-lg bg-body-tertiary";

    // Create container inside the navbar
    const container = document.createElement("div");
    container.className = "container-fluid";

    // Create button for toggling navigation
    const button = document.createElement("button");
    button.className = "navbar-toggler";
    button.type = "button";
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("data-bs-target", "#navbarSupportedContent");
    button.setAttribute("aria-controls", "navbarSupportedContent");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Toggle navigation");

    // Create span for the toggler icon
    const span = document.createElement("span");
    span.className = "navbar-toggler-icon";

    // Appending the span to the button
    button.appendChild(span);

    // Appending the button to the container
    container.appendChild(button);

    // Create navbar content inside the container
    const navbarContent = document.createElement("div");
    navbarContent.className = "collapse navbar-collapse";
    navbarContent.id = "navbarSupportContent";

    // Create unordered list inside the navbar content
    const ul = document.createElement("ul");
    ul.className = "navbar-nav me-auto mb-2 mb-lg-0";

    // Create list items for the navbar links
    const navItems = [
        { text: "Privacy Policy", icon: "fa-shield-halved", href: "privacypolicy.html" },
        { text: "Terms of Service", icon: "fa-envelope-open-text", href: "termsofservice.html" },
        { text: "Contact", icon: "fa-inbox", href: "./contact.html" },
    ];

    // Loop through the navItems and create list items
    navItems.forEach((item) => {
        const li = document.createElement("li");
        li.className = "nav-item";

        const a = document.createElement("a");
        a.className = "nav-link";
        a.href = item.href;

        const icon = document.createElement("i");
        icon.className = `fa-solid ${item.icon}`;

        const text = document.createTextNode(` ${item.text}`);

        // Appending the icon and text to the link
        a.appendChild(icon);
        a.appendChild(text);

        // Appending the link to the list item
        li.appendChild(a);

        // Appending the list item to the unordered list
        ul.appendChild(li);
    });

    // Appending the unordered list to the navbar content
    navbarContent.appendChild(ul);

    // Appending the navbar content to the container
    container.appendChild(navbarContent);

    // Appending the container to the navbar
    navbar.appendChild(container);

    // Appending the navbar to the footer
    footer.appendChild(navbar);

    // Appending the footer to the body
    document.body.appendChild(footer);
}

// Call the createFooter function to generate and append the footer
createFooter();


/**
 * Validation for the Contact Form, and submission and redirection.
 * @returns {boolean}
 */
function validateForm() {
    // Get form inputs
    let fullName = document.getElementById('fullName').value;
    let subject = document.getElementById('subject').value;
    let emailAddress = document.getElementById('emailAddress').value;
    let message = document.getElementById('message').value;

    // Check if required fields are empty
    if (fullName === '' || subject === '' || emailAddress === '' || message === '') {
        alert('Please fill in all required fields.');
        return false;
    }

    // Check email format
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
        alert('Please enter a valid email address.');
        return false;
    } else {


        if (confirm('Thank you for your submission! You will be redirected to the Home page in 5 seconds.')) {
            setTimeout(function () {
                window.location.href = './index.html';
            }, 5000);
        }
    }
    return false
}
