import React from 'react';

export default function Filters({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  vegOnly,
  onVegOnlyChange
}) {
  const categories = ['STARTER','MAIN COURSE','DESSERT','SIDES'];
  const avatars = [
    'https://placehold.co/40x40',
    'https://placehold.co/40x40?text=A',
    'https://placehold.co/40x40?text=B'
  ];

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search dish for your party..."
        value={searchTerm}
        onChange={e=>onSearchChange(e.target.value)}
      />
      <div className="avatar-group">
        {avatars.map((src,i)=>(
          <div key={i} className="avatar">
            <img src={src} alt="avatar" width="40" height="40" />
          </div>
        ))}
      </div>
      <div className="tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={cat===activeCategory?'active':''}
            onClick={()=>onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <label>
        <input
          type="checkbox"
          checked={vegOnly}
          onChange={e=>onVegOnlyChange(e.target.checked)}
        /> Veg Only
      </label>
    </div>
  );
}
