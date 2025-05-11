import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Wish from "./Wish";
import Asset from "./Asset";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="wish" element={<Wish/>}/>
          <Route path="asset" element={<Asset/>}/>
        </Routes>
        
      </Router>
    </div>
    
    
  );
}

export default App;
