import React, { useState } from 'react';

export default function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [lastEdited, setLastEdited] = useState(null); // 'C' или 'F'

  const convert = (value, fn) => {
    if (value === '') return '';
    const num = parseFloat(value);
    return isNaN(num) ? '' : Math.round(fn(num) * 1000) / 1000;
  };

  const handleCelsiusChange = (e) => {
    const val = e.target.value;
    setCelsius(val);
    setLastEdited('C');
    setFahrenheit(val === '' ? '' : convert(val, (c) => (c * 9) / 5 + 32));
  };

  const handleFahrenheitChange = (e) => {
    const val = e.target.value;
    setFahrenheit(val);
    setLastEdited('F');
    setCelsius(val === '' ? '' : convert(val, (f) => ((f - 32) * 5) / 9));
  };

  const reset = () => {
    setCelsius('');
    setFahrenheit('');
    setLastEdited(null);
  };

  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'Segoe UI, Arial, sans-serif',
        maxWidth: '500px',
        margin: '0 auto',
      }}
    >
      <h1>🌡️ Конвертер температур (°C ↔ °F)</h1>
      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '1.5rem',
          backgroundColor: '#f9f9f9',
        }}
      >
        <div style={{ marginBottom: '1.2rem' }}>
          <label
            htmlFor="celsius"
            style={{
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '0.3rem',
            }}
          >
            Градусы Цельсия (°C):
          </label>
          <input
            id="celsius"
            type="text"
            value={celsius}
            onChange={handleCelsiusChange}
            placeholder="Например: 0"
            style={{
              width: '100%',
              padding: '0.6rem',
              fontSize: '1rem',
              border: '1px solid #ccc',
              borderRadius: '6px',
              backgroundColor: lastEdited === 'C' ? '#e3f2fd' : 'white',
            }}
          />
        </div>

        <div style={{ marginBottom: '1.2rem' }}>
          <label
            htmlFor="fahrenheit"
            style={{
              display: 'block',
              fontWeight: 'bold',
              marginBottom: '0.3rem',
            }}
          >
            Градусы Фаренгейта (°F):
          </label>
          <input
            id="fahrenheit"
            type="text"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="Например: 32"
            style={{
              width: '100%',
              padding: '0.6rem',
              fontSize: '1rem',
              border: '1px solid #ccc',
              borderRadius: '6px',
              backgroundColor: lastEdited === 'F' ? '#e3f2fd' : 'white',
            }}
          />
        </div>

        <button
          onClick={reset}
          style={{
            width: '100%',
            padding: '0.6rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Сброс
        </button>
      </div>

      <footer
        style={{
          marginTop: '2rem',
          fontSize: '0.9rem',
          color: '#666',
          textAlign: 'center',
        }}
      >
        Контрольная работа №4 | Технологии индустриального программирования |
        ИПТИП
      </footer>
    </div>
  );
}
