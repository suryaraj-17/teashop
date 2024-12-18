
    const welcomeElement = document.getElementById('welcome');
    const currentHour = new Date().getHours();


    let greeting = 'Good Morning';
    if (currentHour >= 12 && currentHour < 18) {
        greeting = 'Good Afternoon';
    } else if (currentHour >= 18) {
        greeting = 'Good Evening';
    }


    welcomeElement.textContent = `${greeting}, Welcome to Chai Mamae!`;

