$(function () {
  var includes = $('[data-include]');
  $.each(includes, function () {
    var file = 'components/main/' + $(this).data('include') + '.html';
    $(this).load(file);
  });
});