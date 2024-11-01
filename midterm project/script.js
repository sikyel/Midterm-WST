function showTutorial(topic) {
    const tutorialDisplay = document.getElementById('Topics');
    const loadingScreen = document.getElementById('loadingScreen');

    loadingScreen.classList.add('active');

    setTimeout(() => {
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
                loadingScreen.classList.remove('active');
        }

        tutorialDisplay.textContent = topic;
        tutorialDisplay.style.display = 'block';
    }, 800);
}

console.log("Script loaded");

