import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Course from "./course/course";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Course/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
