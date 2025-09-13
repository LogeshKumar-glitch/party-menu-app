import React, { useMemo, useState } from 'react';
import SearchBar from './components/SearchBar';
import CategoryTabs from './components/CategoryTabs';
import DishList from './components/DishList';
import DishModal from './components/DishModal';
import IngredientSummary from './components/IngredientSummary';
import mockDishes from './data/mockDishes';

const CATEGORIES = ['STARTER', 'MAIN COURSE', 'DESSERT', 'SIDES'];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('MAIN COURSE');
  const [searchTerm, setSearchTerm] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [selectedDishes, setSelectedDishes] = useState([]); // store dish ids
  const [modalDish, setModalDish] = useState(null);
  const [viewSummary, setViewSummary] = useState(false); // show ingredient summary screen

  // Filtered list for the grid
  const filteredDishes = useMemo(() => {
    return mockDishes.filter(d => {
      if (d.mealType !== activeCategory) return false;
      if (vegOnly && d.type !== 'VEG') return false;
      if (searchTerm && !d.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      return true;
    });
  }, [activeCategory, vegOnly, searchTerm]);

  // Group by cuisine/category.name to show headings like "North Indian"
  const groupedByCuisine = useMemo(() => {
    const map = {};
    filteredDishes.forEach(d => {
      const group = (d.category && d.category.name) || 'Other';
      if (!map[group]) map[group] = [];
      map[group].push(d);
    });
    return map;
  }, [filteredDishes]);

  const handleAdd = (id) => {
    setSelectedDishes(prev => (prev.includes(id) ? prev : [...prev, id]));
  };
  const handleRemove = (id) => {
    setSelectedDishes(prev => prev.filter(x => x !== id));
  };

  const openModal = (dish) => setModalDish(dish);
  const closeModal = () => setModalDish(null);

  const openSummary = () => setViewSummary(true);
  const closeSummary = () => setViewSummary(false);

  // prepare selected dishes data for summary
  const selectedDishesData = mockDishes.filter(d => selectedDishes.includes(d.id));

  return (
    <div className="app-container">
      {!viewSummary ? (
        <>
          <header className="header-row">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              avatars={['https://placehold.co/40x40?text=A','https://placehold.co/40x40?text=B','https://placehold.co/40x40?text+C']}
            />
            <CategoryTabs
              categories={CATEGORIES}
              active={activeCategory}
              onChange={setActiveCategory}
              vegOnly={vegOnly}
              onVegChange={setVegOnly}
            />
          </header>

          <main>
            {Object.entries(groupedByCuisine).map(([cuisine, items]) => (
              <section key={cuisine} className="cuisine-section">
                <div className="cuisine-header">
                  <h2>{cuisine}</h2>
                  <div className="cuisine-meta">({items.length})</div>
                </div>
                <DishList
                    dishes={items}
                    selectedDishes={selectedDishes}
                    onAdd={handleAdd}
                    onRemove={handleRemove}
                    onViewIngredients={openModal}
                  />

              </section>
            ))}
          </main>

          <footer className="sticky-footer">
            <div className="footer-left">Total Dish Selected <strong>{selectedDishes.length}</strong></div>
            <div className="footer-right">
              <button className="btn ghost" onClick={() => { setSelectedDishes([]); }}>Clear</button>
              <button className="btn primary" onClick={openSummary}>Continue</button>
            </div>
          </footer>

          {modalDish && (
            <DishModal dish={modalDish} onClose={closeModal} onRemove={handleRemove} onAdd={handleAdd} isSelected={selectedDishes.includes(modalDish.id)} />
          )}
        </>
      ) : (
        <IngredientSummary
          selectedDishes={selectedDishesData}
          onBack={() => setViewSummary(false)}
          onCloseSummary={closeSummary}
        />
      )}
    </div>
  );
}
