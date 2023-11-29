import './App.css';
import routes from './routes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map(({ path, exact, component }) => (
            <Route path={path} exact={exact} key={path} element={component} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
