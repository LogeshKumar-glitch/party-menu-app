import React from 'react';

export default function IngredientSummary({ selectedDishes = [], onBack }) {
  // Build aggregated ingredient list (simple aggregation by name)
  const totals = {};
  selectedDishes.forEach(d => {
    d.ingredients?.forEach(i => {
      const key = i.name;
      if (!totals[key]) totals[key] = [];
      totals[key].push(i.quantity);
    });
  });

  return (
    <div className="summary-screen">
      <div className="summary-header">
        <button className="link-btn" onClick={onBack}>← Back</button>
        <h2>Ingredient list</h2>
      </div>

      <div className="summary-content">
        <aside className="summary-dishes">
          <h3>Selected dishes</h3>
          <ul>
            {selectedDishes.map(d => <li key={d.id}>{d.name}</li>)}
          </ul>
        </aside>

        <section className="summary-ingredients">
          <h3>Ingredients (raw list)</h3>
          <ul>
            {Object.entries(totals).map(([name, arr], idx) => (
              <li key={idx}>
                <strong>{name}</strong>: {arr.join(' + ')}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
