import { useState } from 'react'
import './App.css'
import Gallery from './components/Gallery'

function App() {
    const [size, setSize] = useState(4)

    return (
        <>
            <h1>Amazing cientists</h1>
            <Gallery size={size} />

            <br />

            <button onClick={() => setSize((size) => (size == 0) ? size = 0 : size - 1)}>Adicionar</button>
            <button onClick={() => setSize((size) => size + 1)}>Remover</button>
        </>
    )
}

export default App
