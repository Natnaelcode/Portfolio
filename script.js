// Function to show the content for each tab when clicked
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
  
    // Deactivate all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => button.classList.remove('active'));
  
    // Activate the clicked tab's content and button
    document.getElementById(tabName).classList.add('active');
    const activeButton = Array.from(tabButtons).find(button =>
      button.textContent.toLowerCase().includes(tabName)
    );
    activeButton.classList.add('active');
  }
  
  // Function to generate progress circles dynamically (for both .progress-circle and .circle)
  function generateProgressCircles() {
    document.querySelectorAll('.circle, .progress-circle').forEach(circle => {
      const percentage = circle.getAttribute('data-percentage');
      const radius = 40; // Inner circle radius
      const circumference = 2 * Math.PI * radius;
  
      // Create SVG dynamically for each progress circle
      const svg = `
          <svg width="100" height="100">
              <circle cx="50" cy="50" r="${radius}" stroke="#555" stroke-width="10" fill="none" />
              <circle cx="50" cy="50" r="${radius}" stroke="#00e5ff" stroke-width="10" fill="none" 
                  stroke-dasharray="${circumference}" 
                  stroke-dashoffset="${circumference - (percentage / 100) * circumference}" 
                  style="transform: rotate(-90deg); transform-origin: 50% 50%;" />
          </svg>`;
  
      // Insert the SVG into the circle element
      circle.innerHTML = svg;
    });
  }
  
  // Call the function to generate progress circles when the document is ready
  document.addEventListener('DOMContentLoaded', generateProgressCircles);
  