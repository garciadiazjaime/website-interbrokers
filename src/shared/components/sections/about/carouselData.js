import _ from 'lodash';

const slideStyle = {
  backgroundSize: 'cover',
  height: '500px',
};

export default {
  meta: {
    id: 'slide-aboutus',
    style: {
      backgroundImage: 'none',
      height: '50px',
      width: '50px',
      color: '',
      textShadow: 'none',
      opacity: '1',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    arrowLeft: {
      width: '0',
      height: '0',
      borderTop: '20px solid transparent',
      borderBottom: '20px solid transparent',
      borderRight: '20px solid white',
    },
    arrowRight: {
      width: '0',
      height: '0',
      borderTop: '20px solid transparent',
      borderBottom: '20px solid transparent',
      borderLeft: '20px solid white',
    },
    indicators: {},
    showControl: true,
    showIndicators: false,
    interval: 8000,
  },
  classes: {},
  slides: [{
    wrapper: {
      style: _.merge({}, slideStyle, {
        backgroundImage: "url('images/aboutus/slider/slide_1.png')",
      }),
    },
    card: {},
  }, {
    wrapper: {
      style: _.merge({}, slideStyle, {
        backgroundImage: "url('images/aboutus/slider/slide_2.png')",
      }),
    },
    card: {},
  }],
};
