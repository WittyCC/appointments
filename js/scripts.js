$(document).ready(function() {
  $('#blanks form').submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#username").val();
    var dateInput = $("input#monthDay").val();
    var timeInput = $("input#hour").val();

    $('.name').hide();
    $('.desc').hide();
    $('.date').hide();
    $('.time').hide();
    $('.btn').hide();

    $('#results').show();
    $('#name').text(nameInput);
    $('#date').text(dateInput);
    $('#time').text(timeInput);
  });
});
