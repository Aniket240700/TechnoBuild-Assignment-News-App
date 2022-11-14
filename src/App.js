import React from 'react'
import Navbar from "./components/navbar";
import News from "./components/News";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact strict path="/" element={<News key={'general'} pageSize={10} country={"in"} category={"general"} title={'Top HeadLines'}/>}></Route>
      <Route exact strict path="/business" element={<News key={'business'} pageSize={10} country={"in"} category={"business"} title={'Buisness'}/>}></Route>
      <Route exact strict path="/entertainment" element={<News key={'entertainment'} pageSize={10} country={"in"} category={"entertainment"} title={'Entertainment'}/>}></Route>
      <Route exact strict path="/sports" element={<News key={'sports'} pageSize={10} country={"in"} category={"sports"} title={'Sports'}/>}></Route>
      <Route exact strict path="/technology" element={<News key={'technology'} pageSize={10} country={"in"} category={"technology"} title={'Technology'}/>}></Route>
      <Route exact strict path="/health" element={<News key={'health'} pageSize={10} country={"in"} category={"health"} title={'Health'}/>}></Route>
      <Route exact strict path="/science" element={<News key={'science'} pageSize={10} country={"in"} category={"science"} title={'Science'}/>}></Route>
      <Route exact strict path="*" element={<NotFound/>}></Route>
    </Routes>
        </>
  )
}
export default App;
