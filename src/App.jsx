import React from 'react'
import Navbar from './Components/Navbar'
import Part1 from './Components/Part1'
import ResourcesSection from './Components/ResourceSection'
import MagazineSection from './Components/MagIssue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
   <Navbar/>
   <Part1/>
   <ResourcesSection/>
   <MagazineSection/>
   </>
  )
}

export default App