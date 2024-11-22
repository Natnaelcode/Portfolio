function showTab(tabName) {
    // Hide all tab content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
      content.classList.remove('active');
    });
  
    // Remove active class from all tab buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => {
      button.classList.remove('active');
    });
  
    // Show the clicked tab content and add active class to button
    const activeContent = document.getElementById(tabName);
    activeContent.classList.add('active');
    
    const activeButton = Array.from(buttons).find(button => button.textContent.toLowerCase() === tabName);
    activeButton.classList.add('active');
  }
  