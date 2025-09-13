import React from 'react';

export default function CategoryTabs({ categories, active, onChange, vegOnly, onVegChange }) {
  return (
    <div className="tabs-row">
      <div className="tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`tab ${cat === active ? 'active' : ''}`}
            onClick={() => onChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <label className="veg-toggle">
        <input type="checkbox" checked={vegOnly} onChange={e => onVegChange(e.target.checked)} />
        Veg Only
      </label>
    </div>
  );
}
