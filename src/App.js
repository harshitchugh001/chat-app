import './App.css';
import Home from './components/Home';
import Chat from './components/Chat';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
 

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <ProtectedRoute> */}
          
          <Route path="/chat" element={<Chat />} />

          {/* </ProtectedRoute> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
