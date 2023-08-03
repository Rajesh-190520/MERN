import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route element={<Signin/>} path="/"></Route>
                <Route element={<Signup/>} path="/signup"></Route>
                <Route element={<Home/>} path="/home"></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;