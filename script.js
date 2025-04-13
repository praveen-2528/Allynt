// Sound Effects
const hoverSound = document.getElementById('hover-sound');
const clickSound = document.getElementById('click-sound');
const startupSound = document.getElementById('startup-sound');

// Play startup sound on load
window.addEventListener('load', () => {
  startupSound.volume = 0.9;
  startupSound.play();
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

// Typed.js Terminal Effect
new Typed('#typed-text', {
  strings: [
    "> murphix --task 'Do my WhatsApp assignment'",
    "> Scanning offline WhatsApp backup...",
    "> Assignment extracted: 'History Essay.docx'",
    "> Generating answers... (100% offline)",
    "> Submitted to teacher@school.edu"
  ],
  typeSpeed: 40,
  backSpeed: 20,
  loop: true
});

// GSAP Flowchart Animation
gsap.from(".step", {
  opacity: 0,
  y: 50,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".flowchart",
    start: "top 80%"
  }
});

// 3D Murphix Logo
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
// script.js
// Add these at the bottom of the file

// Dynamic Task Generator
const tasks = [
    {
      name: "Email Report Compilation",
      command: "compile weekly report",
      steps: [
        "Gather data sources",
        "Analyze metrics",
        "Generate PDF",
        "Email to manager"
      ]
    },
    {
      name: "Research Paper",
      command: "research quantum computing",
      steps: [
        "Scan academic databases",
        "Summarize key papers",
        "Format citations",
        "Generate bibliography"
      ]
    },
    {
      name: "Code Project",
      command: "build neural network",
      steps: [
        "Initialize repository",
        "Import libraries",
        "Train model",
        "Optimize parameters",
        "Generate documentation"
      ]
    },
    {
      name: "Financial Analysis",
      command: "analyze market trends",
      steps: [
        "Collect stock data",
        "Calculate metrics",
        "Generate charts",
        "Predict trends",
        "Export report"
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
  
    // Update terminal animation
    const terminalStrings = [
      `> murphix --task "${task.command}"`,
      "> Accessing local knowledge base...",
      "> Parsing task requirements...",
      "> Generating action plan...",
      "> Ready for execution"
    ];
  
    // Reinitialize Typed.js with new strings
    if(window.typedInstance) window.typedInstance.destroy();
    window.typedInstance = new Typed('#typed-text', {
      strings: terminalStrings,
      typeSpeed: 40,
      backSpeed: 20,
      loop: true
    });
  
    // Animate new steps
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
  
  // Generate new task when clicking the logo
  document.getElementById('murphix-3d-logo').addEventListener('click', () => {
    generateNewTask();
    // Add visual feedback
    gsap.to("#murphix-3d-logo", {
      duration: 0.5,
      scale: 1.2,
      yoyo: true,
      repeat: 1
    });
  });
// Initialize 3D logo
init3DLogo();