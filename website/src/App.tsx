import { useEffect, type ReactElement } from 'react';
import SiteGrid from './components/SiteGrid/SiteGrid';
// import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

const title : string = "Matthew Wong"

function App() : ReactElement {
    useEffect(() => {
        document.title = title;
    });

    return (
        <SiteGrid/>
    );
}

export default App
