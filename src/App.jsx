import { useState } from 'react';
import Header from './frames/header/Header';
import MainSlider from './frames/main_slider/MainSlider';
import en from './languages/en';
import About from './frames/about/About';
import Services from './frames/services/Services';
import Footer from './frames/footer/Footer';

function App() {

  const [lang, setLang] = useState(en)

  return (
    <main>

      <Header lang={lang.header}/>

      <MainSlider lang={lang.slider}/>

      <About lang={lang.about}/>

      <Services lang={lang.services}/>

      <Footer lang={lang.footer}/>

    </main>
  )
}

export default App
