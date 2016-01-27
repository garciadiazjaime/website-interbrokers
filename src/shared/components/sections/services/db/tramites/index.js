/* eslint max-len: [2, 500, 4] */

export default {
  isRoot: true,
  title: 'Trámites',
  description: 'Trámites en USA y México, <br />Placas DMV y SCT en México.',
  href: 'servicios/tramites',
  className: 'clase_logo_submenu',
  children: [{
    type: 'title',
    title: 'Trámites',
    className: 'class_logo',
  }, {
    type: 'list',
    className: 'class_logo',
    title: 'Trámites en USA',
    href: 'tramites-usa',
    children: [{
      title: 'PNP- Pull Notice Programa',
      href: 'pnp-pull-notice-programa',
    }, {
      title: 'BIT- Biennial Inspection of Terminals',
      href: 'bit-biennial-inspection-terminals',
    }, {
      title: 'SCAC- Standard Carrier Alpha Code',
      href: 'scac-standard-carrier-alpha-code',
    }, {
      title: 'Forma 2290UCR -Unified Carrier Registration',
      href: 'forma-2290ucr-unified-carrier-registration',
    }, {
      title: 'Decal (User Fee) -US Customs',
      href: 'decal-user-fee-us-customs',
    }, {
      title: 'FASTID Badge US CBP- (Gafete USA)',
      href: 'fastid-badge-us-cbp',
    }, {
      title: 'Pago de TicketsARB- Air Resources Board',
      href: 'pago-ticketsarb-air-resources-board',
    }, {
      title: 'Permisos temporales para otros Estados',
      href: 'permisos-temporales-otros-estados',
    }, {
      title: 'Hazardous Material (Hazmat)',
      href: 'hazardous-material-hazmat',
    }, {
      title: 'Cumplimiento para DOT',
      href: 'cumplimiento-dot',
    }],
  }, {
    type: 'list',
    className: 'clase_logo_truck_mx',
    title: 'Trámites en México',
    href: 'tramites-mx',
    children: [{
      title: 'CAAT- Código Alfanumerico Armonizado para Transportista',
      href: 'caat-codigo-alfanumerico-armonizado-transportista',
    }, {
      title: 'Gafete para Transportista Aduana',
      href: 'gafete-transportista-aduana',
    }],
  }],
};
