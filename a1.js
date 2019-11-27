$('nav a').on('click', function(e) {                       // Click on nav
  e.preventDefault();                                      // Prevent loading
  var url = this.href;                                     // Get URL to load

  $('nav a.current').removeClass('current');               // Update nav
  $(this).addClass('current');

  $('#container').remove();                                // Remove old part
  $('#content').load(url + ' #container').hide().fadeIn('slow'); // Add new
});
