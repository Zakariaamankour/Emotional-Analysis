import React from 'react';
import './StatsCard.css';

const StatsCard = ({ date, followers, likes, posts, postFreq, growth, isLocked }) => {
  return (
    <div className="stats-card">
      <div className="stats-card-header">
        <span>{date}</span>
        <div className="profile-picture"></div>
      </div>
      {isLocked ? (
        <div className="locked-content">
          <div className="lock-icon"></div>
        </div>
      ) : (
        <div className="stats-card-body">
          <div className="stat-item">
            <span>Followers</span>
            <span>{followers}</span>
          </div>
          <div className="stat-item">
            <span>Likes</span>
            <span>{likes}</span>
          </div>
          <div className="stat-item">
            <span>Posts</span>
            <span>{posts}</span>
          </div>
          <div className="stat-item">
            <span>Post Freq.</span>
            <span>{postFreq}</span>
          </div>
          <div className="stat-item">
            <span>Growth</span>
            <span>{growth}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsCard;
