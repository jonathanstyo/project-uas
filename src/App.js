import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Selamat Datang di Papua</h1>
        <p>Temukan keindahan dan kekayaan budaya Papua di sini!</p>
        <div className="Button-container">
          <a href="#about" className="Button">Tentang Kami</a>
          <a href="#objek-wisata" className="Button">Objek Wisata</a>
          <a href="#makanan-khas" className="Button">Makanan Khas</a>
          <a href="#adat-budaya" className="Button">Adat Budaya</a>
          <a href="#lagu-daerah" className="Button">Lagu Daerah</a>
          <a href="#sejarah" className="Button">Sejarah</a>
        </div>
      </header>
    </div>
  );
}

export default App;
