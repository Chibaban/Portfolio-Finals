document.addEventListener('DOMContentLoaded', () => {
    const achievements = [
        {
            image: 'Escuela De San Lorenzo Ruiz Graduation.png',
            description: 'Achievement 1: Successfully graduated at my first highschool: Escuela De San Lorenzo Ruiz'
        },
        {
            image: 'Senior High School - Grade 11 with Honors 2nd Quarter.png',
            description: 'Achievement 2: Achieving with Honors as a Grade 11 student in the 2nd quarter of senior high school: PATTS College of Aeronautics.'
        },
        {
            image: 'Senior High School - Grade 11 with Honors 3rd Quarter.png',
            description: 'Achievement 3: Achieving with Honors as a Grade 11 student in the 3rd quarter of senior high school: PATTS College of Aeronautics.'
        },
        {
            image: 'Senior High School - Grade 11 with Honors 4th Quarter.png',
            description: 'Achievement 4: Achieving with Honors as a Grade 11 student in the 4th quarter of senior high school: PATTS College of Aeronautics.'
        },
        {
            image: 'Senior High School - Grade 12 with Honors 1st Quarter.png',
            description: 'Achievement 5: Achieving with Honors as a Grade 12 student in the 1st quarter of senior high school: PATTS College of Aeronautics.'
        },
        {
            image: 'Senior High School - Grade 12 with Honors 2nd Quarter.png',
            description: 'Achievement 6: Achieving with Honors as a Grade 12 student in the 2nd quarter of senior high school: PATTS College of Aeronautics.'
        },
        {
            image: 'Senior High School - Grade 12 with Honors 3rd Quarter.png',
            description: 'Achievement 7: Achieving with Honors as a Grade 12 student in the 3rd quarter of senior high school: PATTS College of Aeronautics.'
        },
        {
            image: 'Patts Senior High School Graduation - 4th Quarter with Honors.png',
            description: 'Achievement 8: Graduating with Honors as a Grade 12 student in the 4th quarter of senior high school from PATTS College of Aeronautics.'
        },
        {
            image: 'Deans Lister, First Year - First Semester.png',
            description: 'Achievement 9: Achieving Deans Lister as a 1st year student in the 1st semester of college from Southville International School and Colleges.'
        },
        {
            image: 'Deans Lister, First Year - Second Semester.png',
            description: 'Achievement 10: Achieving Deans Lister as a 1st year student in the 2nd semester of college from Southville International School and Colleges.'
        },
        {
            image: 'Deans Lister, Second Year - First Semester.png',
            description: 'Achievement 11: Achieving Deans Lister as a 2nd year student in the 1st semester of college from Southville International School and Colleges.'
        },
        {
            image: 'Deans Lister, Second Year - Second Semester.png',
            description: 'Achievement 12: Achieving Deans Lister as a 2nd year student in the 2nd semester of college from Southville International School and Colleges.'
        },
        {
            image: 'Commitment to Achieve Award.png',
            description: 'Achievement 13: Achieving Commitment to Achieve Award as a 2nd year student in the 2nd semester of college from Southville International School and Colleges.'
        },
        {
            image: 'Certificate of Participation.png',
            description: 'Achievement 14: Achieving Certification of Participation Award as a 3rd year student in the 1st semester of college from Southville International School and Colleges.'
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
