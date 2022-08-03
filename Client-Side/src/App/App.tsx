import { Box } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../Components/UI/Loader";
import { lazy, Suspense , useContext } from "react";
import { RoutingContext  } from "../Context/RoutingContext";


// implementing dynamic importing for less initial load time and better performance.
const Welcoming = lazy(() => import("../Pages/Welcoming"));
const Test = lazy(() => import("../Pages/Home"));
const Results = lazy(() => import("../Pages/Result"));
const NotFound = lazy(() => import("../Pages/NotFound"));
       
function App() {
    const { hasUserName , FinishedTest } = useContext(RoutingContext)
  return (

    <Box>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcoming />} />
            <Route path="/home" element={<Welcoming />} />
          {hasUserName && <Route  path="/test"  element={<Test />} />} 
          {FinishedTest && <Route path="/result" element={<Results />}/>}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Box>

  );
}

export default App;
