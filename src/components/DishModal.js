import React from 'react';

export default function DishModal({ dish, onClose, onAdd, onRemove, isSelected }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal large" onClick={e => e.stopPropagation()}>
        <div className="modal-top">
          <img src={dish.image || 'https://placehold.co/600x360'} alt={dish.name} />
        </div>
        <div className="modal-body">
          <h3>{dish.name}</h3>
          <p className="dish-desc">{dish.description}</p>
          <h4>Ingredients</h4>
          <ul>
            {dish.ingredients?.map((ing, idx) => <li key={idx}>{ing.name} — {ing.quantity}</li>)}
          </ul>

          <div className="modal-actions">
            {isSelected ? (
              <button className="btn remove" onClick={() => onRemove(dish.id)}>Remove</button>
            ) : (
              <button className="btn add" onClick={() => onAdd(dish.id)}>Add +</button>
            )}
            <button className="btn ghost" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
