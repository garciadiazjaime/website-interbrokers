/* eslint max-len: [2, 500, 4] */

export default {
  isRoot: true,
  title: 'Permisos',
  description: 'Permisos para Vehículos <br /> Comerciales en USA y <br /><strong>Nuevos Entrantes</strong>',
  href: 'servicios/permisos',
  className: 'clase_logo_submenu',
  children: [{
    type: 'title',
    title: 'Permisos',
    className: 'class_logo',
  }, {
    type: 'list',
    className: 'class_logo',
    title: 'Permisos <br />en USA',
    href: 'permisos-usa',
    children: [{
      title: 'Licencia sobre Impuesto Diesel',
      href: 'licencia-sobre-impuesto-diesel',
    }, {
      title: 'Diesel-Interstate User Diesel Fuel Tax Return',
      href: 'diesel-interstate-user-fuel-tax-return',
    }, {
      title: 'IFTA-International Fuel Tax Agreement',
      href: 'ifta-international-fuel-tax-agreement',
    }, {
      title: 'CA Number',
      href: 'ca-number',
    }],
  }, {
    type: 'list',
    className: 'clase_logo_truck_mx',
    title: 'Nuevo <br />entrante',
    href: 'permisos-mx',
    children: [{
      title: 'MC Enterprise',
      href: 'mc-enterprise',
    }, {
      title: 'MC',
      href: 'mc',
    }, {
      title: 'MX Op2',
      href: 'mx-op2',
    }, {
      title: 'MX Op1',
      href: 'mx-op1',
    }, {
      title: 'DOT Number',
      href: 'dot-number',
    }],
  }],
};
