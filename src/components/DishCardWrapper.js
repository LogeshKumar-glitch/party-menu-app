// small helper if you want a single-card component (not used in main App; App uses inline markup)
import React from 'react';

export default function DishCardWrapper({ dish, isSelected, onAdd, onRemove, onView }) {
  return (
    <div className="dish-card-wrapper">
      <div className="dish-card-left">
        <h3 className="dish-name">{dish.name}</h3>
        <div className="dish-meta-row">
          <span className={`badge ${dish.type === 'VEG' ? 'veg' : 'nonveg'}`}>{dish.type}</span>
        </div>
        <p className="dish-desc">{dish.description}</p>
        <div className="dish-actions">
          <button className="link-btn" onClick={onView}>Ingredient</button>
          {isSelected ? <button className="btn remove" onClick={onRemove}>Remove</button> : <button className="btn add" onClick={onAdd}>Add +</button>}
        </div>
      </div>
      <div className="dish-card-right">
        <img src={dish.image || 'https://placehold.co/300x200'} alt={dish.name} />
      </div>
    </div>
  );
}
