import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import { CitiesProvider } from './context/CitiesContext';

function App() {
  return (
    <CitiesProvider>
     <Container/> 
    </CitiesProvider>
  );
}

export default App;
