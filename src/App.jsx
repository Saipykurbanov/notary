import { useState } from 'react';
import Header from './frames/header/Header';
import MainSlider from './frames/main_slider/MainSlider';
import en from './languages/en';

function App() {

  const [lang, setLang] = useState(en)

  return (
    <main>

      <Header lang={lang.header}/>

      <MainSlider lang={lang.slider}/>

    </main>
  )
}

export default App
