import HomeSection from './components/sections/home';
import AboutSection from './components/sections/about';
import ServicesSection from './components/sections/services';
import BlogSection from './components/sections/blog';
import ContactSection from './components/sections/contact';


export default {
  items: [{
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
  icons: [{
    title: 'facebook',
    url: '#',
  }],
  addresses: [{
    id: 'google',
    title: 'Mountain View',
    location: '1600 Amphitheatre Parkway Mountain View, CA 94043',
    gmaps: '#',
    tels: '1 650-253-0000',
  }],
};
