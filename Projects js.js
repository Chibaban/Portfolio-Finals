document.addEventListener('DOMContentLoaded', () => {
    const achievements = [
        {
            image: 'Address Book.png',
            description: 'Project 1: This project is simple with an objective of making an Address Book that would consists Name, Address, Phone Number, and Email Address that has an option to delete, add, and update.'
        },
        {
            image: '8 Bit Binary.png',
            description: 'Project 2: The purpose of this game is if you did not guess the right calculation for that number, you will be meet with a pop message that says it is wrong. But if you are right, you will be moving on to the next round until the timer is over.'
        },
        {
            image: 'Claudio.png',
            description: 'Project 3: There is a project where our professor decides to make an activity of a character we like and it is not easy to copy. So I picked Claudio and this is the span of 1 week making him.'
        },
        {
            image: 'Website Prelim.png',
            description: 'Project 4: I plan on referencing the Netflix template here but the time would be costly, so I made it more simpler with a brief synopsis for every movie.'
        }
    ];

    let currentIndex = 0;

    const achievementImage = document.getElementById('achievement-image');
    const achievementDescription = document.getElementById('achievement-description');
    const nextButton = document.getElementById('next-button');
    const backButton = document.getElementById('back-button');

    // Function to update the content
    const updateAchievement = () => {
        achievementImage.src = achievements[currentIndex].image;
        achievementDescription.textContent = achievements[currentIndex].description;
    };

    // Event listener for the Next button
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % achievements.length; // Loop back to the first achievement
        updateAchievement();
    });

    // Event listener for the Back button
    backButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + achievements.length) % achievements.length; // Loop back to the last achievement
        updateAchievement();
    });

    // Initialize the first achievement
    updateAchievement();
});
