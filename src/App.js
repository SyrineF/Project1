import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDo/ToDoList';
import Carousel from './components/ToDo/Carousel';

function App() {
  return (
    <div className="App">
       <ToDoList/>
       <Carousel/>
    </div>
  );
}

export default App;
