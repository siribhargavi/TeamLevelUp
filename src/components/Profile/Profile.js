import React from 'react';
import './Profile.css';

function calculateRank(score) {
    if (score >= 90) return 1;
    if (score >= 80) return 100;
    if (score >= 70) return 300;
    if (score >= 60) return 500;
    if (score >= 50) return 700;
    return 1000; // Lowest rank for scores below 50
}

const ProfilePage = () => {
    const user = {
        name: "Siri",
        email: "siri.bhargavi5@example.com",
        contact: 8282882828,
        profilePic: "/images/testi1.jpeg",
        rank: calculateRank(85),
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
        profileCompleteness: 85,
    };

    return (
        <div className="custom-profile-container">
            <div className="custom-profile-header">
                <img src={user.profilePic} alt="Profile" className="custom-profile-picture" />
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <p>{user.contact}</p>
                <div className="custom-rank-badge">Rank : {user.rank}</div>
                <div className="custom-profile-completeness">
                    Profile Completeness: {user.profileCompleteness}%
                    <div className="custom-progress-bar">
                        <div className="custom-progress" style={{ width: `${user.profileCompleteness}%` }}></div>
                    </div>
                </div>
                <div className="custom-social-links">
                    <a href={user.socialLinks.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href={user.socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
            <div className="custom-profile-content">
                <div className="custom-profile-section">
                    <h2>Courses Enrolled</h2>
                    <ul>
                        {user.coursesEnrolled.map((course, index) => (
                            <li key={index}>{course}</li>
                        ))}
                    </ul>
                </div>
                <div className="custom-profile-section">
                    <h2>Achievements</h2>
                    <ul>
                        {user.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                        ))}
                    </ul>
                </div>
                <div className="custom-profile-section">
                    <h2>Quiz Scores</h2>
                    <ul>
                        {Object.entries(user.quizScores).map(([quiz, score], index) => (
                            <li key={index}>{quiz}: {score}%</li>
                        ))}
                    </ul>
                </div>
                <div className="custom-profile-section">
                    <h2>Badges</h2>
                    <div className="custom-badges-list">
                        {user.badges.map((badge, index) => (
                            <div key={index} className="custom-badge">{badge}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
