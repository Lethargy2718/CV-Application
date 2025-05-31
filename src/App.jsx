import { useState } from 'react'

import EditorPanel from './components/EditorPanel'
import PreviewPanel from './components/PreviewPanel'

import { headerInitialFields } from './components/formConfig'

function App() {
  const [headerFields, setHeaderFields] = useState(headerInitialFields);

  const handleHeaderChange = (e, idx1) => {
    setHeaderFields(headerFields.map((f, idx2) => 
      idx1 === idx2 ? { ...f, value: e.target.value } : f
    ));
  }

  return (
    <>
      <EditorPanel headerFields={headerFields} onHeaderChange={handleHeaderChange}/>
      <PreviewPanel headerFields={headerFields}/>
    </>
  )
}

export default App
