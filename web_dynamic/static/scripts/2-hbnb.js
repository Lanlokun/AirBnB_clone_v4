$('document').ready(function () {
  let amenities = {};
  $('input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    $('.amenities h4').text(Object.values(amenities).join(', '));
  });

  $.get('http://0.0.0.0:5000/api/v1/status/', function (data, status) {
    if (status === 'success') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  }
  );
  
});
