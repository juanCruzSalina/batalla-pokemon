import React from 'react';
import './App.css'
import Header from './components/molecules/Header/Header';
import PokemonForm from './components/molecules/PokemonForm/PokemonForm';
import PokemonTable from './components/molecules/PokemonTable/PokemonTable';

function App() {
  return (
    <div className="App">
      <Header />
      <PokemonTable />
      <PokemonForm />
    </div>
  );
}

export default App;
