import _ from 'lodash';

const slideStyle = {
  backgroundSize: 'cover',
  height: '500px',
};

export default {
  meta: {
    id: 'slide-aboutus',
    style: {
      height: '50px',
      width: '50px',
      color: '',
      textShadow: 'none',
      opacity: '1',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    arrowLeft: {
      backgroundImage: 'url(/images/aboutus/carousel_arrow_left.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundColor: '#4f7584',
      width: '50px',
      height: '50px',
    },
    arrowRight: {
      backgroundImage: 'url(/images/aboutus/carousel_arrow_right.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundColor: '#4f7584',
      width: '50px',
      height: '50px',
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
