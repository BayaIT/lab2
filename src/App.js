import './App.css';
import MainPage from './pages/MainPage';
import UsersPage from './pages/UsersPage';
import CalculatorPage from './pages/CalculatorPage';

function App() {
  return (
    <div className="App">
      <hr style={{margin: '20px 0'}} />
        <CalculatorPage/>
      <hr style={{margin: '20px 0'}} />
    </div>
  );
}

export default App;
