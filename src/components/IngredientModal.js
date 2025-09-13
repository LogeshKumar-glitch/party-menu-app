import React from 'react';

export default function IngredientModal({dish,onClose}) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>
        <ul>
          {dish.ingredients.map((ing,idx)=>(
            <li key={idx}>{ing.name}: {ing.quantity}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
