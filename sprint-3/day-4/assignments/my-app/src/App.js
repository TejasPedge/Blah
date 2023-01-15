import logo from './logo.svg';
import './App.css';
import Meals from './Components/Meals';

function App() {
  return (
    <div className="App">
    
              <h1>Search for Meal</h1>

              <input type = "search"></input>

              <Meals />
              
    </div>
  );
}

export default App;
