import React from 'react';
import './sidebar.css';

const matches = ['Bjorn', 'Chrysa', 'Connor', 'Dominica', 'Franck', 'Juliana', 'Laco', 'Matt', 'Max'];

function sidebar() {
  return (
    <div className="sidebar">
      <div className="matches">
        <h2>Recent Matches</h2>
        <ul>
          {matches.map((match, index) => (
            <li key={index}>
              <div className="match-item">
                <img
                  src={`https://via.placeholder.com/30?text=${match[0]}`}
                  alt={match}
                  className="match-avatar"
                />
                {match}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default sidebar;
