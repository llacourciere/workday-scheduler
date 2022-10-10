var store = [];

var saveAppt = function () {
    localStorage.setItem("store", JSON.stringify(store))
};

var loadAppt = function () {
    store = JSON.parse(localStorage.getItem("store"));

    // if nothing in localStorage, create a new object to track all task status arrays
    if (!store) {
        return false;
    }
    console.log('No appts found');
    // loop over object properties
    $.each(store, function (list, arr) {
        console.log(list, arr);
        // then loop over sub-array
        arr.forEach((ms, i) => {
            $('textarea').eq(i).val(ms);

        });
    });
};
//show date and time at top of page

var date = document.querySelector('#currentDay')
var currentDay = moment();

date.textContent = currentDay.format('MMMM Do YYYY, h:mm a')

const hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
let cHour = moment().format('H');

hours.forEach((hour, i) => {
    let rHour = i + 9;
    document.querySelector('.container').innerHTML += `
        <div class='row'>
            <div class='col-md-1 hour'>
                ${hour}
            </div>
            <textarea class='col-md-10 ${rHour < cHour ? "past" : rHour > cHour ? "future" : "present"}'></textarea>
            <div class='col-md-1 saveBtn'>
            <i class="far fa-save"></i>
            </div>
        </div>
    
    `;
});

const handleClick = () => {

    for (let i = 0; i < $("textarea").length; i++) {
        store.push($('textarea').eq(i).val())
        saveAppt();
    };
};

document.querySelector('.saveBtn').addEventListener('click', handleClick);
loadAppt();