import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import EditBook from "./pages/EditBook"
import DeleteBook from "./pages/DeleteBook"
import CreateBooks from "./pages/CreateBooks"
import ShowBook from "./pages/ShowBook"


const App = () => {
  return <Routes>
    <Route path="/" element={<Home/>}/> 
    <Route path="/books/edit/:id" element={<EditBook />}/> 
    <Route path="/books/delete/:id" element={<DeleteBook />}/> 
    <Route path="/books/create" element={<CreateBooks />}/> 
    <Route path="/books/details/:id" element={<ShowBook />}/> 
  </Routes>
}


export default App
