import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ShowData from "./Components/ShowData";
import StudentInput from "./Components/StudentInput";

function App() {
    const [stuData, setStuData] = useState([]);
    function fetchData(data) {
        setStuData(data);
    }
    return (
        <div className="App">
            <Navbar />
            <div className="main">
                <StudentInput getData={fetchData} />
                <ShowData viewData={stuData} />
            </div>
        </div>
    );
}

export default App;
