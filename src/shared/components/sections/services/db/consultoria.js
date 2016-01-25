/* eslint max-len: [2, 500, 4] */

export default {
  title: 'Consultoría',
  description: 'Programa de Servicio de Auditorias<br /> (México y USA)',
  href: 'servicios/consultoria',
  className: 'clase_logo_submenu',
  children: [{
    type: 'title',
    title: 'Consultoría',
    className: 'class_logo',
  }, {
    type: 'list',
    className: 'class_logo',
    title: 'Consultoría y <br /> Servicio de <br />Auditorías <br /> (México y USA)',
    href: 'consultoria',
    children: [{
      title: 'Apoyo para pre-auditorias',
      href: 'apoyo-preaudotirias',
    }, {
      title: 'Apoyo durante la Auditoria',
      href: 'apoyo-durante-auditoria',
    }, {
      title: 'Apoyo posterior a la Auditoria',
      href: 'apoyo-posterior-auditoria',
    }],
  }],
};
