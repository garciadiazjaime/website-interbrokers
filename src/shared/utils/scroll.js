let scropllInProgress = false;
export default (location) => {
  const elementID = location.pathname ? location.pathname.split('/').pop() || 'inicio' : 'inicio';
  if ($('#' + elementID).length && !scropllInProgress) {
    scropllInProgress = true;
    const scrollTo = $('#' + elementID).offset().top - 43;
    const srolltime = 100;
    const rootTag = typeof document.body.scrollTop !== 'undefined' ? 'body' : 'html, body';
    $(rootTag).animate({
      scrollTop: scrollTo,
    }, srolltime, 'swing', () => {
      scropllInProgress = false;
    });
  }
};
