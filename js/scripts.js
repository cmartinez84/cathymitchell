// *****************************
// Business End/Back-End
// *****************************
var decigrams = function(input){
  result = input/10;
  return result;
}
var centigrams = function(input){
  result = input/100;
  return result;
}
var milligrams = function(input){
  result = input*1000;
  return result;
}
var kilograms = function(input){
  result = input/1000;
  return result;
}

var removeSurvey = function(){
  $("#results").removeClass("hidden");
  $("#surveyId").addClass("hidden");
}

// *****************************
// User Interface/Front-End
// *****************************
  $(function() {
  $('#submitOrder').click(function(event) {
    removeSurvey();
    var name = $('#nameInput').val();
    var address = $('#addressInput').val();
    var result = "Thank you " + name + " for your purchase! Your item will be delivered shortly to " + address; + ".";
    console.log(result);
    $("#results").text(result);
    event.preventDefault();
  });
  // *****booking appointments******
  $('#submitAppointment').click(function(event) {
    removeSurvey();
    var date = $('#appointmentDate').val();
    var name = $('#appointmentName').val();
    var start = $('#appointmentStart').val();
    var end = $('#appointmentEnd').val();
    var result = "Congratulations " + name + " your reservation on " + date + " was succesful. Your appointment will start at " + start + " and end at " + end + ".";
    console.log(result);
    $("#results").text(result);

    event.preventDefault();
  });
  // *****conversion******
    $('#decigrams').click(function(event) {
      removeSurvey();
      var grams = parseFloat($('#gramInput').val());
      var grams = decigrams(grams);
      $("#results").text(grams);
      event.preventDefault();
      console.log(grams);

  });
  $('#centigrams').click(function(event) {
    removeSurvey();
    var grams = parseFloat($('#gramInput').val());
    var grams = centigrams(grams);
    $("#results").text(grams);
    console.log(grams);
    event.preventDefault();
  });
  $('#milligrams').click(function(event) {
    removeSurvey();
    var grams = parseFloat($('#gramInput').val());
    var grams = milligrams(grams);
    $("#results").text(grams);
    console.log(grams);
    event.preventDefault();
  });
  $('#kilograms').click(function(event) {
    removeSurvey();
    var grams = parseFloat($('#gramInput').val());
    var grams = kilograms(grams);
    $("#results").text(grams);
    console.log(grams);
    event.preventDefault();
  });
  $('#hellagrams').click(function(event) {
    removeSurvey();
    var grams = "hella lot";
    $("#results").text(grams);
    console.log(grams);
    event.preventDefault();
});
  $('#surveyButton').click(function() {
    $("#surveyId").removeClass("hidden");
    $("#results").addClass("hidden");
  });
});
