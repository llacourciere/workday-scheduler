var appt = {};

//show date and time at top of page

var date = document.querySelector('#currentDay')
var currentDay = moment();

date.textContent = currentDay.format('MMMM Do YYYY, h:mm a')

var createAppt = function (apptText, apptList) {
    //create elements that will make up the appt slot
    var apptLi = $('<li>').addClass('list-group-item');
    var apptP = $('<p>').addClass('m-1').text(apptText);

    apptLi.append(apptP);

    $("#list-" + apptList).append(apptLi);
}

//appt time was clicked
$('.list-group').on('click', function () {

    var text = $(this)
        .text()
        .trim();
    var textInput = $('<textarea>').addClass('form-control').val(text);
    $(this).replaceWith(textInput);
    textInput.trigger('focus');
});

//save button clicked
$('.save').click(function () {
    var apptText = $('.task').val();

    if (apptText) {
        createAppt(apptList);

        appt.push({
            text: apptText
        });
        saveAppts();
    }

})


//save appts to local storage
var saveAppts = function () {
    localStorage.setItem("appts", JSON.stringify(appt));
};