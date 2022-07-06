function handleModal() {
  if ( $('#menu-modal').hasClass('modalShowing') ) {
    $('#menu-modal').fadeOut('fast');
    $('#menu-modal').removeClass('modalShowing');
  } else {
    $('#menu-modal').fadeIn('fast');
    $('#menu-modal').addClass('modalShowing');
  }
}