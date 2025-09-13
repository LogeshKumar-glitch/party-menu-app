import React from 'react';
import { FiSearch } from 'react-icons/fi'; // Using react-icons for search icon

export default function SearchBar({ searchTerm, onSearchChange, avatars = [] }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', marginBottom: 12 }}>
      <div style={{ position: 'relative', flex: 1 }}>
        <input
          className="search-input"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search dish for your party..."
          style={{ paddingLeft: 32 }} // space for icon
        />
        <FiSearch 
          style={{
            position: 'absolute',
            top: '50%',
            left: 8,
            transform: 'translateY(-50%)',
            color: '#888'
          }}
        />
      </div>

      <div className="avatar-group">
        {avatars.map((src, i) => (
          <div key={i} className="avatar">
            <img src={src} alt={`avatar-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
