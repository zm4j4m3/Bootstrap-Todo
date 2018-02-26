$(document).ready(function(e) {

  $('#datetimepicker1').datetimepicker();
  $('#add-todo').button().click(function() {
    var taskName = $('#datetimepicker1').val();
    var taskName2 = $('#task').val();
    // var result = ''.concat(taskName, ' ',taskName2);

    var taskHTML = '<div class="col-sm"><div class="card  mb-3" style="max-width: 18rem;">';
    taskHTML += '<div class="card-header"></div>';
    taskHTML += '<div class="card-body"><p class="card-text"></p></div><span class="btn btn-primary align-right">x</span></div></div>';

    var $newTask = $(taskHTML);
    $newTask.find('.card-header').text(taskName);
    $newTask.find('.card-body').text(taskName2);

    $newTask.hide();

    $('#todo-list').prepend($newTask);
    $newTask.show('clip',250).effect('highlight',1000);
  }); // end click
  $('.sortlist').sortable({
    connectWith : '.sortlist',
    cursor : 'pointer',
    placeholder : 'ui-state-highlight',
    cancel : '.delete,.done'
  });
  $('.sortlist').on('click','.btn',function() {
    $(this).parent('div').effect('puff', function() {
      $(this).remove();
    }); // end effect
  }); // end on
}); // end ready
