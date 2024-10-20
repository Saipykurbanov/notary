import Header from './frames/header/Header';
import MainSlider from './frames/main_slider/MainSlider';
import en from './languages/en';
import About from './frames/about/About';
import Services from './frames/services/Services';
import Footer from './frames/footer/Footer';
import Contacts from './frames/contacts/Contacts';
import Menu from './frames/menu/Menu';
import Loading from './components/loading/Loading';
import FeedBackBtn from './frames/feed_back_btn/FeedBackBtn';
import ru from './languages/ru';
import esp from './languages/esp';


function App() {

  const obj = {en: en, ru: ru, esp: esp}

  const data = obj[window.location.pathname.split('/')[1]] || obj[navigator.language] || en

  return (
    <main>

      <Loading />

      <Header lang={data.header}/>

      <MainSlider lang={data.home}/>

      <About lang={data.about}/>

      <Services lang={data.services}/>

      <Contacts lang={data.contacts}/>

      <Menu lang={data.header}/>
        
      <Footer lang={data.footer} services={data.services.items} links={data.header.links}/>

      <FeedBackBtn />

    </main>
  )

}

export default App
