// Index page

let slideIndex = 0;

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
        { title: "Charity Basketball Event", description: "Harmony Hub focuses on bringing the community together " +
                "through sports and activities. The following image depicts a group of children playing " +
                "basketball with fellow community members. The event encouraged both physical exercise and " +
                "collecting money for charity!", imageSrc: "./images/basketballevent.jpg" },

        { title: "Community BBQ", description: "Harmony Hub's sizzling BBQ extravaganza united our " +
                "community in a feast of flavor, forging bonds over smoky delights and sun-soaked " +
                "camaraderie. The event focused on encouraging community " +
                "engagement!", imageSrc: "./images/bbqevent.jpg" },

        { title: "Back-to-School Bash", description: "Harmony Hub's Back-to-School Bash focused on unleashing " +
                "knowledge with smiles, free supplies, and community cheer. Empowering futures, " +
                "one backpack at a time. The event provided free activities and snacks for all students and parents" +
                "along with lots of games and giveaways!", imageSrc: "./images/backtoschoolevent.jpg" },

        { title: "Student Lounge", description: "Harmony Hub's recent initiative included a student lounge for " +
                "all teens!. This project encourages students from different schools to unite and interact" +
                " with each other in a positive way. Board, table and card games along" +
                "with other interactive activities are provided.", imageSrc: "./images/studentlounge.jpg" },

        { title: "Play-area & Library", description: "A library is also provided here at Harmony Hub, not only " +
                "for children but also for adults and parents. This will allow parents to read to their " +
                "children or alone while their children play in a safe and kid friendly " +
                "environment supervised by a professional.", imageSrc: "./images/playlibrary.jpg" },

        { title: "Free Therapy Sessions", description: "Harmony Hub focuses on both the physical and mental " +
                "health of all youth in the community, therefore providing free therapy for all " +
                "teens between 12-19. This allows one-on-one consoling in a safe confidential environment " +
                "to ensure healthy stress-free youth in the community.", imageSrc: "./images/teentherapy.jpg" },

    ];
    const projectsPerPage = 4;
    let projectsToShow = projectsData.slice(0, projectsPerPage);

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

    function renderProjects(projects) {
        projects.forEach((project) => {
            const card = createProjectCard(project);
            projectList.appendChild(card);
        });
    }

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

// Services Page
function showService(serviceNumber) {
    // Hide all service details
    const allServiceDetails = document.querySelectorAll('.service-details');
    allServiceDetails.forEach((serviceDetail) => {
        serviceDetail.style.display = 'none';
    });

    // Show the selected service detail
    const selectedServiceDetail = document.getElementById(`service-details-${serviceNumber}`);
    if (selectedServiceDetail) {
        selectedServiceDetail.style.display = 'block';
    }
}

/**
 *
 */
document.addEventListener("DOMContentLoaded", function () {
    // Your existing JavaScript code

    // Function to show service details in the modal
    function showServiceModal(serviceNumber) {
        // Define service details
        const services = [
            {
                title: "Free Therapy",
                description: "At the Harmony Hub, we provide free therapy sessions...",
                timings: {
                    Sunday: "Closed",
                    Monday: "3:00 PM - 10:00 PM",
                    Tuesday: "3:00 PM - 10:00 PM",
                    Wednesday: "3:00 PM - 10:00 PM",
                    Thursday: "3:00 PM - 10:00 PM",
                    Friday: "3:00 PM - 10:00 PM",
                    Saturday: "Closed",
                }
            },
            {
                title: "Child-Free Reading",
                description: "At the Harmony Hub within our library, we offer specialized supervision services...",
                timings: {
                    Sunday: "9:00 AM - 9:00 PM",
                    Monday: "5:00 PM - 10:00 PM",
                    Tuesday: "5:00 PM - 10:00 PM",
                    Wednesday: "5:00 PM - 10:00 PM",
                    Thursday: "5:00 PM - 10:00 PM",
                    Friday: "5:00 PM - 10:00 PM",
                    Saturday: "9:00 AM - 9:00 PM",
                }
            },
            {
                title: "Student Lounge",
                description: "At the Harmony Hub, we provide a lively student lounge that acts as a gathering place for students...",
                timings: {
                    Sunday: "4:00 PM - 6:00 PM",
                    Monday: "3:00 PM - 7:00 PM",
                    Tuesday: "3:00 PM - 7:00 PM",
                    Wednesday: "5:00 PM - 7:00 PM",
                    Thursday: "3:00 PM - 7:00 PM",
                    Friday: "3:00 PM - 7:00 PM",
                    Saturday: "4:00 PM - 6:00 PM",
                }
            }
        ];

        const service = services[serviceNumber - 1];

        // Populate modal content
        document.getElementById(`serviceModalLabel${serviceNumber}`).innerText = service.title;
        document.getElementById(`serviceModalContent${serviceNumber}`).innerHTML = `
            <h1>${service.title}</h1>
            <p>${service.description}</p>
            <h2>Timings:</h2>
            <ul>
                ${Object.entries(service.timings).map(([day, timing]) => `<li>${day}: ${timing}</li>`).join('')}
            </ul>
        `;

        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById(`serviceModal${serviceNumber}`));
        modal.show();
    }
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
                title: "Child-Free Reading",
                description: "At the Harmony Hub within our library, we offer specialized supervision services...",
                Projects: {
                    ProjectX: "Organized and conducted weekly reading sessions for children in a safe environment.",
                    ProjectY: "Collaborated with local schools to promote literacy through interactive storytelling."
                }
            },
            {
                title: "Student Lounge",
                description: "At the Harmony Hub, we provide a lively student lounge that acts as a gathering place for students...",
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


(function() {
    document.addEventListener("DOMContentLoaded", function () {
        // Dynamically add 'Careers' link
        const careersLink = document.createElement("li");
        careersLink.classList.add("nav-item");
        careersLink.innerHTML = '<a class="nav-link" href="careers.html"><i class="fa-solid fa-briefcase"></i> Careers</a>';

        const navbarLinks = document.querySelector(".navbar-nav");
        navbarLinks.appendChild(careersLink);

        // Programmatically change 'Blog' link to 'News'
        const blogLink = document.querySelector(".nav-link[href='blog.html']");
        blogLink.innerHTML = '<i class="fa-solid fa-newspaper"></i> News';

    });
})();

// main.js

// Function to create the footer element
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
        { text: "Contact", icon: "fa-inbox", href: "contact.html" },
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
