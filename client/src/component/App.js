import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import LandingPage from './view/LandingPage/LandingPage';
import Footer from './view/Footer/Footer';
import NavBar from './view/NavBar/NavBar';
import Login from './view/Content/Login'
import Detail from "./view/Content/Detail/Detail";
import SideBar from "./view/Sider/SideBar";

function App() {
  return (
    <div className="App" style={{ width: '90%', margin: '0 auto'}}>
      <NavBar />
      <SideBar />
      <div style={{ minHeight: '80vh' }}>
        <Router>
          <Routes>
            <Route
              path="/" element={<LandingPage />}
            />
            <Route path="/login" element={<Login />}/>
            <Route path="/products/:productId" element={<Detail  />}/>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
