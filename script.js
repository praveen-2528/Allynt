// Sound Effects
const hoverSound = document.getElementById('hover-sound');
const clickSound = document.getElementById('click-sound');
const startupSound = document.getElementById('startup-sound');

// Play startup sound on load
window.addEventListener('load', () => {
  startupSound.volume = 0.9;
  startupSound.play();
  const loader = document.getElementById('loader');
  loader.style.opacity = '1';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 2500);
});

// Button hover effects
document.getElementById('cta-button').addEventListener('mouseenter', () => {
  hoverSound.currentTime = 0;
  hoverSound.play();
  gsap.to('#cta-button', {
    boxShadow: '0 0 20px #0af',
    duration: 0.3
  });
});

// Click sound for all buttons
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
});

// Dynamic Task Generator
const tasks =  [
  {
    name: "Project Setup",
    command: "setup new-project",
    steps: [
      "Initialize Git repository",
      "Install project dependencies",
      "Set up project structure",
      "Configure project settings",
      "Initialize first commit"
    ]
  },
  {
    name: "Data Analysis",
    command: "analyze sales-data",
    steps: [
      "Load data from CSV",
      "Clean missing values",
      "Calculate monthly sales trends",
      "Generate summary statistics",
      "Create data visualizations"
    ]
  },
  {
    name: "Web Scraping",
    command: "scrape blog posts",
    steps: [
      "Identify target website",
      "Scrape webpage data using BeautifulSoup",
      "Store data in a database",
      "Filter duplicate entries",
      "Export results to CSV"
    ]
  },
  {
    name: "Machine Learning Model",
    command: "train image-classifier",
    steps: [
      "Load image dataset",
      "Preprocess images (resize, normalize)",
      "Split data into training and testing sets",
      "Train model using convolutional neural networks (CNN)",
      "Evaluate model accuracy"
    ]
  },
  {
    name: "Financial Reporting",
    command: "generate quarterly report",
    steps: [
      "Collect financial data",
      "Format data into spreadsheet",
      "Analyze profit margins",
      "Create financial charts",
      "Draft summary report"
    ]
  },
  {
    name: "Code Refactoring",
    command: "refactor legacy code",
    steps: [
      "Review existing codebase",
      "Identify areas for improvement",
      "Simplify complex functions",
      "Optimize database queries",
      "Write unit tests for refactored code"
    ]
  },
  {
    name: "Software Deployment",
    command: "deploy app to production",
    steps: [
      "Pull latest code from repository",
      "Build production-ready version",
      "Configure server settings",
      "Run automated tests",
      "Deploy to cloud platform"
    ]
  },
  {
    name: "Cybersecurity Audit",
    command: "perform security audit",
    steps: [
      "Scan for open ports",
      "Identify security vulnerabilities",
      "Review user access controls",
      "Analyze server logs for suspicious activity",
      "Provide recommendations for improvement"
    ]
  },
  {
    name: "Database Migration",
    command: "migrate database schema",
    steps: [
      "Backup current database",
      "Analyze new schema design",
      "Write migration scripts",
      "Test migration on staging",
      "Execute migration on production database"
    ]
  },
  {
    name: "E-commerce Optimization",
    command: "optimize product page",
    steps: [
      "Review current product pages",
      "Optimize image sizes for faster loading",
      "Add product descriptions and reviews",
      "Improve product categorization",
      "A/B test page variations for conversions"
    ]
  },
  {
    name: "API Development",
    command: "build RESTful API",
    steps: [
      "Design API endpoints",
      "Implement CRUD operations",
      "Set up database connection",
      "Implement user authentication",
      "Write API documentation"
    ]
  },
  {
    name: "App Update",
    command: "release app version 2.0",
    steps: [
      "Review feature updates",
      "Test new features for bugs",
      "Update versioning in project files",
      "Create release notes",
      "Deploy new version to stores"
    ]
  },
  {
    name: "Cloud Backup",
    command: "backup data to cloud",
    steps: [
      "Select data to back up",
      "Choose cloud service provider",
      "Configure backup schedule",
      "Upload data to cloud storage",
      "Verify backup integrity"
    ]
  },
  {
    name: "SEO Optimization",
    command: "optimize website SEO",
    steps: [
      "Perform website audit",
      "Research target keywords",
      "Optimize page titles and meta descriptions",
      "Enhance site speed and performance",
      "Create a sitemap and submit to search engines"
    ]
  },
  {
    name: "Cloud Computing Setup",
    command: "setup cloud server",
    steps: [
      "Select cloud service provider",
      "Configure server size and specifications",
      "Set up security settings (firewall, encryption)",
      "Install required software and dependencies",
      "Deploy first application"
    ]
  },
  {
    name: "Content Creation",
    command: "write blog post",
    steps: [
      "Research topic and keywords",
      "Outline key points and structure",
      "Write draft content",
      "Edit and refine content",
      "Publish blog post and share on social media"
    ]
  },
  {
    name: "Task Automation",
    command: "automate daily tasks",
    steps: [
      "Identify tasks to automate",
      "Create automation scripts (using Python, Bash, etc.)",
      "Schedule tasks using cron jobs or task scheduler",
      "Monitor task execution",
      "Review logs and adjust as needed"
    ]
  },
  {
    name: "Customer Support",
    command: "respond to customer inquiries",
    steps: [
      "Review incoming support tickets",
      "Categorize tickets (technical, billing, etc.)",
      "Draft responses based on ticket type",
      "Send response and follow up",
      "Close resolved tickets"
    ]
  }
];


function generateNewTask() {
  // Clear existing elements
  const stepsContainer = document.querySelector('.dynamic-steps');
  const taskContainer = document.getElementById('current-task');
  stepsContainer.innerHTML = '';

  // Select random task
  const task = tasks[Math.floor(Math.random() * tasks.length)];

  // Update task display
  taskContainer.textContent = task.name;

  // Create new steps
  task.steps.forEach((step, index) => {
    const stepElement = document.createElement('div');
    stepElement.className = `dynamic-step animate__animated`;
    stepElement.textContent = `${index + 1}. ${step}`;
    stepsContainer.appendChild(stepElement);
  });

  // Terminal animation with Typed.js
  const terminalStrings = [
    `> murphix --task "${task.command}"`,
    "> Accessing local knowledge base...",
    "> Parsing task requirements...",
    "> Generating action plan...",
    "> Ready for execution"
  ];

  // Reinitialize Typed.js with new strings
  if (window.typedInstance) window.typedInstance.destroy();
  window.typedInstance = new Typed('#typed-text', {
    strings: terminalStrings,
    typeSpeed:15,
    backSpeed: 40,
    loop: true
  });

  // Animate new steps with GSAP
  gsap.from(".dynamic-step", {
    opacity: 0,
    y: 50,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".task-generator",
      start: "top 80%"
    }
  });
}

// Generate first task on load
generateNewTask();

// Optionally, regenerate task when clicking the logo
document.getElementById('murphix-3d-logo').addEventListener('click', () => {
  generateNewTask();
  // Visual feedback for the logo click
  gsap.to("#murphix-3d-logo", {
    duration: 0.5,
    scale: 1.2,
    yoyo: true,
    repeat: 1
  });
});

// 3D Murphix Logo (Three.js example)
function init3DLogo() {
  const container = document.getElementById('murphix-3d-logo');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(200, 200);
  container.appendChild(renderer.domElement);

  // Lights
  const ambientLight = new THREE.AmbientLight(0x404040);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0x0af, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  // Logo Geometry (M-shaped)
  const geometry = new THREE.BufferGeometry();
  const vertices = new Float32Array([
    -1, -1, 0,  -1, 1, 0,  0, 0, 0,
    0, 0, 0,    1, 1, 0,   1, -1, 0
  ]);
  geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  const material = new THREE.MeshPhongMaterial({
    color: 0x0af,
    emissive: 0x0033aa,
    specular: 0xffffff,
    shininess: 100
  });
  const logo = new THREE.Mesh(geometry, material);
  scene.add(logo);

  camera.position.z = 3;

  // Auto-rotate + mouse control
  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 2;

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}
// Initialize 3D logo
init3DLogo();

