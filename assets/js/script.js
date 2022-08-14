var appt = {};

// var createAppt = function(taskList) {
//     //create elements that will make up the appt slot
//     var apptLi = $('<li>').addClass('list-group-item');
//     var apptP = $('<p>').addClass('m-1').text(apptText);

//     apptLi.append(apptP);

//     $("#list-" + taskList).append(apptLi);
// }

//appt time was clicked
$('.list-group').on('click', function () {

    var text = $(this)
        .text()
        .trim();
    var textInput = $('<textarea>').addClass('form-control').val(text);
    $(this).replaceWith(textInput);
    textInput.trigger('focus');
});

('.list-group').on('blur', 'textarea', function () {

    console.log('blur');
    var text = $(this).val();

    //recreate p element
    var apptP = $('<p>')
        .addClass('m-1')
        .text(text);
    //replacce text area with p element
    $(this).replaceWith(apptP);
});

//save button clicked
