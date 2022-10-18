$(document).ready(function () {
    //listen for save button clicks
    $('.saveBtn').on('cliuck', function () {
        //get neareby values
        var value = $(this).siblings('.description').val();
        var time= $(this).parent().attr('id')
        console.log("this",time)
        console.log("value", value)
        //var time = $(this)
        //console.log("time", time)
        //save in localStorage
        localStorage.setItem(time, value)

        //show notification that item was saved to localStorage by adding class "show"

        //itmepout to remove 'show' class after 5 seconds

    });

    function hourUpdater() {
        //get current number of hours
        var currentHour = moment().hours();

        //loop over time blocks
        $('time-block').each(function () {
            var blockHour = parseInt($(this).attr('id').split('_')[1]);
        }
            )
    }
}
    )