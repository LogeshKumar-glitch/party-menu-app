
import React from 'react';
import DishCardWrapper from './DishCardWrapper';

export default function DishList({ dishes, selectedDishes = [], onAdd, onRemove, onViewIngredients }) {
  return (
    <div className="dish-list">
      {dishes.map(d => (
        <DishCardWrapper
          key={d.id}
          dish={d}
          isSelected={selectedDishes.includes(d.id)}
          onAdd={() => onAdd(d.id)}
          onRemove={() => onRemove(d.id)}
          onView={() => onViewIngredients(d)}
        />
      ))}
    </div>
  );
}

