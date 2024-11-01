function showTutorial(topic) {
    const tutorialDisplay = document.getElementById('Topics');
    const loadingScreen = document.getElementById('loadingScreen');
    const loadingGif = document.getElementById('loadingGif');

    // Array of GIF URLs for random selection
    const gifUrls = [
        'Backgrounds/Images/gif/kurumi.gif',
        'Backgrounds/Images/gif/kurumi2.gif',
        'Backgrounds/Images/gif/kurumi3.gif'
    ];

    // Select a random GIF from the array
    const randomGif = gifUrls[Math.floor(Math.random() * gifUrls.length)];
    loadingGif.src = randomGif; // Set the random GIF as the loading screen image

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
    }, 800); // Adjust delay as needed to control the duration of the loading screen
}

console.log("Script loaded");
