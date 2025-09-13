import React, { useState } from 'react';

export default function DishCard({dish,onAddDish,onRemoveDish,isSelected,onViewIngredients}) {
  const [expanded, setExpanded] = useState(false);
  const shortDesc = dish.description.slice(0, 60);

  return (
    <div className="dish-card">
      <img src={dish.image || 'https://placehold.co/300x200'} alt={dish.name} />
      <h3>
        {dish.name}
        <span className={`badge ${dish.type === 'VEG' ? 'veg' : 'nonveg'}`}>
          {dish.type}
        </span>
      </h3>
      <p>{expanded ? dish.description : shortDesc + (dish.description.length > 60 ? '...' : '')}</p>
      {dish.description.length > 60 && (
        <span className="read-more" onClick={()=>setExpanded(!expanded)}>
          {expanded ? 'Show less' : 'Read more'}
        </span>
      )}
      <button onClick={()=>onViewIngredients(dish)}>Ingredient</button>
      {isSelected ? (
        <button onClick={()=>onRemoveDish(dish.id)}>Remove</button>
      ) : (
        <button onClick={()=>onAddDish(dish.id)}>Add +</button>
      )}
    </div>
  );
}
