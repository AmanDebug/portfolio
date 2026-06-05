// Content Data with Icons
const data = {
    languages: {
        title: "Sacred Scripts",
        html: `<ul class="icon-list">
                <li><i class="devicon-c-plain colored"></i> C</li>
                <li><i class="devicon-java-plain colored"></i> Java</li>
                <li><i class="devicon-kotlin-plain colored"></i> Kotlin</li>
                <li><i class="devicon-javascript-plain colored"></i> JavaScript</li>
                <li><i class="devicon-html5-plain colored"></i> HTML</li>
                <li><i class="devicon-css3-plain colored"></i> CSS</li>
               </ul>`
    },
    tools: {
        title: "Artifacts & Hardware",
        html: `<ul class="icon-list">
                <li><i class="devicon-matlab-plain colored"></i> MATLAB</li>
                <li><i class="devicon-arduino-plain colored"></i> Arduino & Arduino IDE</li>
                <li><i class="fa-solid fa-microchip custom-cyan"></i> ESP32</li>
                <li><i class="fa-solid fa-memory custom-gold"></i> 8051 Microcontroller</li>
                <li><i class="devicon-androidstudio-plain colored"></i> Android Studio</li>
               </ul>`
    },
    education: {
        title: "Lineage",
        html: `<ul class="icon-list-detailed">
                <li><i class="fa-solid fa-building-columns"></i> <div><strong>VIT Bhopal University</strong><br>3rd Year Electronics and Communication</div></li>
                <li><i class="fa-solid fa-users-gear"></i> <div><strong>VITB Android Club</strong><br>PR Co-lead</div></li>
                <li><i class="fa-solid fa-school"></i> <div><strong>Saltlake CA School</strong><br>Classes 11 & 12</div></li>
                <li><i class="fa-solid fa-school-flag"></i> <div><strong>WWA Cossipore English School</strong><br>Up to Class 10</div></li>
               </ul>`
    },
    projects: {
        title: "Creations",
        html: `<ul class="icon-list-detailed">
                <li><i class="fa-solid fa-bolt"></i> <div><strong>EV Route Planner:</strong> A GPS-based construct that maps routes alongside battery monitoring, calculating if your EV possesses the charge to reach its destination.</div></li>
                <li><i class="fa-solid fa-plane-departure"></i> <div><strong>Sky Scanner Clone:</strong> A flight search engine replica forged during a Job Simulation at Forage.</div></li>
               </ul>`
    },
    connect: {
        title: "Establish Link",
        html: `<div class="connect-links">
                <a href="https://github.com/AmanDebug" target="_blank"><i class="devicon-github-original"></i> GitHub Nexus</a>
                <a href="https://www.linkedin.com/in/aman-prasad-9a4908327" target="_blank"><i class="devicon-linkedin-plain"></i> LinkedIn Network</a>
               </div>`
    }
};

// Chakravyu Interaction Logic
const spokes = document.querySelectorAll('.spoke-node');
const displayPanel = document.getElementById('display-panel');

spokes.forEach(spoke => {
    spoke.addEventListener('mouseenter', function() {
        const targetKey = this.getAttribute('data-target');
        const targetData = data[targetKey];
        
        displayPanel.classList.add('active');
        displayPanel.innerHTML = `
            <h3 class="info-title">${targetData.title}</h3>
            <div class="info-content">${targetData.html}</div>
        `;
    });
});

// Intersection Observer for Scroll Fade-in Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach((el) => {
    observer.observe(el);
});