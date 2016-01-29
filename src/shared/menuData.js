import AppHandler from './components/AppHandler';
import HomeSection from './components/sections/home';
import AboutSection from './components/sections/about';
import ServicesSection from './components/sections/services';
import BlogSection from './components/sections/blog';
import ContactSection from './components/sections/contact';


export default {
  items: {
    component: AppHandler,
    default: HomeSection,
    children: [{
      title: 'Inicio',
      url: 'inicio',
      component: HomeSection,
    }, {
      title: 'Nosotros',
      url: 'nosotros',
      component: AboutSection,
    }, {
      title: 'Servicios',
      url: 'servicios',
      component: ServicesSection,
    }, {
      title: 'Blog',
      url: 'blog',
      component: BlogSection,
    }, {
      title: 'Contacto',
      url: 'contacto',
      component: ContactSection,
    }],
  },
  icons: [{
    title: 'facebook',
    url: 'https://www.facebook.com/InterbrokersSeguros/',
  }, {
    title: 'portfolio',
    url: '#',
  }],
  addresses: [{
    id: 'TIJUANA, MÉXICO',
    address: 'Blvd. Bellas Artes 285, Fracc. Nueva Tijuana Tijuana, B.C.  22435',
    address2: '664.623.3035',
    address3: '01.800.788.04.08',
    cta: 'Llámanos en México',
    phone: '664-623-3035',
  }, {
    id: 'SAN DIEGO, CA.',
    address: '9765 Marconi Dr. Suite 200G San Diego, Ca. 92154',
    address2: '619-713-7211',
    address3: '',
    cta: 'Llámanos en USA',
    phone: '619-713-7211',
  }],
};
