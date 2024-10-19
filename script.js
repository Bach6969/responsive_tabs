function openTab(event, tabId) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.style.display = 'none');

    // Remove active class from all buttons
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => link.classList.remove('active-tab'));

    // Show the selected tab content
    document.getElementById(tabId).style.display = 'block';

    // Add active class to the clicked tab button
    event.currentTarget.classList.add('active-tab');
}

// Set the default active tab when the page loads
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".tab-link").click();
});
