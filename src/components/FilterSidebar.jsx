import '../styles/FilterSidebar.css';

export default function FilterSidebar({ filters, onChange }) {
  return (
    <aside className="filters">
      <h2>Filters</h2>

      {/* Type of Dress */}
      <div className="filter-group">
        <h3>Type of Dress</h3>
        <label>
          <input
            type="radio"
            name="type"
            value=""
            checked={filters.type === ''}
            onChange={() => onChange('type', '')}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="Mini"
            checked={filters.type === 'Mini'}
            onChange={() => onChange('type', 'Mini')}
          />
          Mini
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="Midi"
            checked={filters.type === 'Midi'}
            onChange={() => onChange('type', 'Midi')}
          />
          Midi
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="Maxi"
            checked={filters.type === 'Maxi'}
            onChange={() => onChange('type', 'Maxi')}
          />
          Maxi
        </label>
      </div>

      {/* Size */}
      <div className="filter-group">
        <h3>Size</h3>
        <label>
          <input
            type="radio"
            name="size"
            value=""
            checked={filters.size === ''}
            onChange={() => onChange('size', '')}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="size"
            value="S"
            checked={filters.size === 'S'}
            onChange={() => onChange('size', 'S')}
          />
          S
        </label>
        <label>
          <input
            type="radio"
            name="size"
            value="M"
            checked={filters.size === 'M'}
            onChange={() => onChange('size', 'M')}
          />
          M
        </label>
        <label>
          <input
            type="radio"
            name="size"
            value="L"
            checked={filters.size === 'L'}
            onChange={() => onChange('size', 'L')}
          />
          L
        </label>
      </div>

      {/* Color */}
      <div className="filter-group">
        <h3>Color</h3>
        <label>
          <input
            type="radio"
            name="color"
            value=""
            checked={filters.color === ''}
            onChange={() => onChange('color', '')}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="color"
            value="Red"
            checked={filters.color === 'Red'}
            onChange={() => onChange('color', 'Red')}
          />
          Red
        </label>
        <label>
          <input
            type="radio"
            name="color"
            value="Black"
            checked={filters.color === 'Black'}
            onChange={() => onChange('color', 'Black')}
          />
          Black
        </label>
        <label>
          <input
            type="radio"
            name="color"
            value="Blue"
            checked={filters.color === 'Blue'}
            onChange={() => onChange('color', 'Blue')}
          />
          Blue
        </label>
      </div>
      {/* Material */}
      <div className="filter-group">
        <h3>Material</h3>
        <label>
          <input
            type="radio"
            name="material"
            value=""
            checked={filters.material === ''}
            onChange={() => onChange('material', '')}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="material"
            value="Cotton"
            checked={filters.material === 'Cotton'}
            onChange={() => onChange('material', 'Cotton')}
          />
          Cotton
        </label>
        <label>
          <input
            type="radio"
            name="material"
            value="Silk"
            checked={filters.material === 'Silk'}
            onChange={() => onChange('material', 'Silk')}
          />
          Silk
        </label>
        <label>
          <input
            type="radio"
            name="material"
            value="Polyester"
            checked={filters.material === 'Polyester'}
            onChange={() => onChange('material', 'Polyester')}
          />
          Polyester
        </label>
      </div>

      {/* Price */}
      <div className="filter-group">
        <h3>Price</h3>
        <label>
          <input
            type="radio"
            name="price"
            value=""
            checked={filters.price === ''}
            onChange={() => onChange('price', '')}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="price"
            value="0-50"
            checked={filters.price === '0-50'}
            onChange={() => onChange('price', '0-50')}
          />
          $0 - $50
        </label>
        <label>
          <input
            type="radio"
            name="price"
            value="51-100"
            checked={filters.price === '51-100'}
            onChange={() => onChange('price', '51-100')}
          />
          $51 - $100
        </label>
        <label>
          <input
            type="radio"
            name="price"
            value="101-200"
            checked={filters.price === '101-200'}
            onChange={() => onChange('price', '101-200')}
          />
          $101 - $200
        </label>
      </div>
    </aside>
  );
}
