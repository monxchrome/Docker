import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import UsersPage from "./pages/UsersPage/UsersPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<MainPage/>}/>
          <Route path={'/users'} element={<UsersPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
