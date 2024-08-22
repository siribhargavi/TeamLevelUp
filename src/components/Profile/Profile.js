import React from 'react';
import './Profile.css';

function calculateRank(score) {
    // Basic example: higher score = lower rank
    if (score >= 90) return 1;
    if (score >= 80) return 100;
    if (score >= 70) return 300;
    if (score >= 60) return 500;
    if (score >= 50) return 700;
    return 1000; // Lowest rank for scores below 50
}

const ProfilePage = () => {
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        contact:8282882828,
        profilePic: "/images/testi1.jpeg",
        rank: calculateRank(85), // Example score; this should come from user's data
        coursesEnrolled: ["React Basics", "Advanced JavaScript"],
        achievements: ["Completed 100% of React Basics", "Top 10% in JavaScript Quiz"],
        quizScores: {
            "React Basics Quiz": 95,
            "JavaScript Mastery Quiz": 88,
        },
        badges: ["React Pro", "JavaScript Master"],
        socialLinks: {
            linkedIn: "https://www.linkedin.com/in/johndoe",
            github: "https://github.com/johndoe",
        },
        profileCompleteness: 85 // Out of 100
    };

    return (
        <div className="profile-page-container">
            <div className="profile-header">
                <img src={user.profilePic} alt="Profile" className="profile-picture" />
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <p>{user.contact}</p>
                <div className="rank-badge">Rank : {user.rank}</div>
                <div className="profile-completeness">
                    Profile Completeness: {user.profileCompleteness}%
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${user.profileCompleteness}%` }}></div>
                    </div>
                </div>
                <div className="social-links">
                    <a href={user.socialLinks.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href={user.socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
            <div className="profile-content">
                <div className="profile-section">
                    <h2>Courses Enrolled</h2>
                    <ul>
                        {user.coursesEnrolled.map((course, index) => (
                            <li key={index}>{course}</li>
                        ))}
                    </ul>
                </div>
                <div className="profile-section">
                    <h2>Achievements</h2>
                    <ul>
                        {user.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                        ))}
                    </ul>
                </div>
                <div className="profile-section">
                    <h2>Quiz Scores</h2>
                    <ul>
                        {Object.entries(user.quizScores).map(([quiz, score], index) => (
                            <li key={index}>{quiz}: {score}%</li>
                        ))}
                    </ul>
                </div>
                <div className="profile-section">
                    <h2>Badges</h2>
                    <div className="badges-list">
                        {user.badges.map((badge, index) => (
                            <div key={index} className="badge">{badge}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
