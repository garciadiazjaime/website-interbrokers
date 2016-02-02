
export default (elementID) => {
  $('.navbar-nav li.active').removeClass('active');
  $('.navbar-nav a#' + elementID).parent().addClass('active');

  if ($('#mainmenu_trigger').is(':visible')) {
    $('#mainmenu_trigger').click();
  }
};
