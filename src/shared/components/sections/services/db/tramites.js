/* eslint max-len: [2, 500, 4] */

export default {
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
      href: 'pnp-pull-notice-programa',
    }, {
      title: 'SCAC- Standard Carrier Alpha Code',
      href: 'pnp-pull-notice-programa',
    }, {
      title: 'Forma 2290UCR -Unified Carrier Registration',
      href: 'pnp-pull-notice-programa',
    }, {
      title: 'Decal (User Fee) -US Customs',
      href: 'pnp-pull-notice-programa',
    }, {
      title: 'FASTID Badge US CBP- (Gafete USA)',
      href: 'pnp-pull-notice-programa',
    }, {
      title: 'Pago de TicketsARB- Air Resources Board',
      href: 'pnp-pull-notice-programa',
    }, {
      title: 'Permisos temporales para otros Estados',
      href: 'pnp-pull-notice-programa',
    }, {
      title: 'Hazardous Material (Hazmat)',
      href: 'pnp-pull-notice-programa',
    }, {
      title: 'Cumplimiento para DOT',
      href: 'pnp-pull-notice-programa',
    }],
  }, {
    type: 'list',
    className: 'clase_logo_truck_mx',
    title: 'Trámites en México',
    href: 'tramites-mx',
    children: [{
      title: 'CAAT- Código Alfanumerico Armonizado para <br />Transportista',
      href: 'caat-codigo-alfanumerico-armonizado-transportista',
    }, {
      title: 'Gafete para Transportista Aduana',
      href: 'gafete-transportista-aduana',
    }],
  }, {
    type: 'subtitle',
    title: 'Placas',
  }, {
    type: 'list',
    className: 'clase_logo_dmv',
    title: 'DMV',
    subtitle: '(Commercial Registrations)',
    href: 'placas/dmv',
    children: [{
      title: 'California',
      href: 'california',
    }, {
      title: 'Interstate Registration (IRP) (Apportioned)',
      href: 'intersate-registration-irp-apportioned',
    }, {
      title: 'Titles',
      href: 'titles',
    }],
  }, {
    type: 'list',
    className: 'clase_logo_sct',
    title: 'SCT',
    subtitle: '(Transfers, Estatales, Federales)',
    href: 'placas/sct',
    children: [{
      title: 'Registro Nuevo',
      href: 'registro-nuevo',
    }, {
      title: '(Transfers,Estatales y Federales)',
      href: 'transfers-estatales-federales',
    }, {
      title: 'Registro Nuevo Transfronterizo',
      href: 'registro-nuevo-transfronterizo',
    }, {
      title: 'Renovaciones',
      href: 'renovaciones',
    }, {
      title: 'Altas de Unidad',
      href: 'altas-unidad',
    }, {
      title: 'Bajas de Unidad',
      href: 'bajas-unidad',
    }],
  }],
};
