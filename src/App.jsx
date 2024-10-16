import { useState } from 'react';
import Header from './frames/header/Header';
import MainSlider from './frames/main_slider/MainSlider';
import en from './languages/en';
import About from './frames/about/About';
import Services from './frames/services/Services';
import Contacts from './frames/contacts/Contacts';

function App() {

  const [lang, setLang] = useState(en)

  return (
    <main>

      <Header lang={lang.header}/>

      <MainSlider lang={lang.home}/>

      <About lang={lang.about}/>

      <Services lang={lang.services}/>

      <Contacts lang={lang.contacts}/>

    </main>
  )
}

export default App
