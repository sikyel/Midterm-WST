function showTutorial(topic) {
    const tutorialDisplay = document.getElementById('Topics');

    // Define actions for each topic
    switch (topic) {
        case 'Background':
            window.location.href = "Backgrounds/BackgroundTutorial.html";
            break;
        case 'Colors':
            window.location.href = "Colors/ColorsTutorial.html";
            break;
        case 'Text':
            window.location.href = 'Text/TextTutorial.html';
            break;
        case 'Transition':
            window.location.href = 'Transitions/TransitionTutorial.html';
            break;
        default:
            topic = 'Select a valid tutorial';
    }

    // Update the display with the chosen topic
    tutorialDisplay.textContent = topic;
    tutorialDisplay.style.display = 'block';
}
console.log("Script loaded");

