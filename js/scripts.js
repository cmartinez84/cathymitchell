// *****************************
// Business End/Back-End
// *****************************


// *****************************
// User Interface/Front-End
// *****************************

$(function() {
  $('#submitOrder').click(function(event) {
    var name = $('#nameInput').val();
    var address = $('#addressInput').val();
    var result = name + address; //concatinate later//
    console.log(result);
    event.preventDefault();
  });
    $('#submitAppointment').click(function(event) {
      var date = $('#appointmentDate').val();
      var name = $('#appointmentName').val();
      var start = $('#appointmentStart').val();
      var end = $('#appointmentEnd').val();
      var result = date + name + start + end;
      console.log(result);
      event.preventDefault();
  });
    $('#decigrams').click(function(event) {
      var grams = $('#gramInput').val();
      console.log(grams);
  });
});
