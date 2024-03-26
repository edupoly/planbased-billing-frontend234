import logo from './logo.svg';
import './App.css';
import Header from './shareed/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header></Header>
      <h1>Hello</h1>
      <div className='container'>
      <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
