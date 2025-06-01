import { useState } from 'react'

import EditorPanel from './components/EditorPanel'
import PreviewPanel from './components/PreviewPanel'

import { headerInitialData } from './components/headerInitialData'
import { experienceInitialData } from './components/experienceInitialData';

function App() {
  const [headerData, setHeaderData] = useState(headerInitialData);
  const [experienceData, setExperienceData] = useState(experienceInitialData);

  const handleHeaderChange = (e, idx1) => {
    setHeaderData(headerData.map((f, idx2) => 
      idx1 === idx2 ? { ...f, value: e.target.value } : f
    ));
  }

  const handleExperienceChange = () => {

  }

  return (
    <>
      <EditorPanel headerData={headerData} onHeaderChange={handleHeaderChange}/>
      <PreviewPanel headerData={headerData}/>
    </>
  )
}

export default App
