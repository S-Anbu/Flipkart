const loginDiv=document.querySelector(".login-div")
const loginBtn=document.querySelector(".login-btn")
loginBtn.addEventListener("mouseover",()=> loginDiv.style.display="block");
loginBtn.addEventListener("mouseout",()=> loginDiv.style.display="none");
loginDiv.addEventListener("mouseover",()=> loginDiv.style.display="block");


// Keep the div visible if mouse is over it or the button
loginBtn.addEventListener('mouseout', function(event) {
    // Check if the mouse is moving to the hiddenDiv
    if (!loginDiv.contains(event.relatedTarget)) {
        loginBtn.addEventListener("mouseout",()=> loginDiv.style.display="none");
    }
});

// Hide the div if the mouse leaves the div
loginDiv.addEventListener('mouseout', function(event) {
    // Check if the mouse is moving back to the button
    if (!loginBtn.contains(event.relatedTarget)) {
         loginDiv.style.display="none";
    }
});
