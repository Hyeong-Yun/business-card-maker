import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login.jsx";
import styles from "./app.module.css";
import Maker from "./components/maker/maker.jsx";

function App({ authService, FileInput }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route
            path="/maker"
            element={<Maker FileInput={FileInput} authService={authService} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
