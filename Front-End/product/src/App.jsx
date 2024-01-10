import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
//pages & components
import Home from './pages/home';
import Product from './pages/Product.jsx';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

function AppContent() {
  

  return (
    <>
    
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/api/products/:productId/" element={<Product />} />





        </Routes>
       
      </div>
    </>
  );
}

export default App;
