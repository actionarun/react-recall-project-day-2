import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Tasks from "./pages/Tasks"
import TaskDetails from "./pages/TaskDetails"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar";

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
     <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/tasks/:id" element={<TaskDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
      
    </>
  )
}

export default App
