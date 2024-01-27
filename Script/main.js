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

    // Attach click event listeners to service tabs
    document.querySelectorAll('.service-tab').forEach((tab, index) => {
        tab.addEventListener('click', () => showServiceModal(index + 1));
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class 'team-member'
    const teamMembers = document.querySelectorAll('.team-member');

    // Loop through each team member card
    teamMembers.forEach(function (member) {
        // Add a click event listener to the current team member card
        member.addEventListener('click', function () {
            // Get the modal ID from the 'data-target' attribute of the clicked card
            const modalId = this.getAttribute('data-target');

            // Create a new Bootstrap Modal instance for the modal with the retrieved ID
            const modal = new bootstrap.Modal(document.getElementById(modalId));

            // Show the modal
            modal.show();
        });
    });
});
