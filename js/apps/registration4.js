$(function(){

  if(user == 'unselected'){
    /*
    * hidden input value
    */
    $('#user_option_type').attr('value', 'technician');

    /*
    * form to display and hide
    */
    $('div.techinician').show();
    $('div.residential').hide();
    $('div.commercial').hide();

    /*
    * input to disabled and enabled event
    */
    $.each(residential_index, function(index, value){
      $('input#residential-input'+value).prop('disabled', 'true');
    });
    $.each(commercial_index, function(index, value){
      $('input#commercial-input'+value).prop('disabled', 'true');
    });
    $.each(technician_index, function(index, value){
      $('#technician-input'+value).removeAttr('disabled');
    });
  }


  /*
  * when form option clicked what display... technician option
  */
  $('span#technician-option').click(function(){
    /*
    * hidden input value
    */
    $('#user_option_type').attr('value', 'technician');

    /*
    * dispaly
    */
    $('div.techinician').show();
    $('div.residential').hide();
    $('div.commercial').hide();

    /*
    * disable and enable event
    */
    $.each(residential_index, function(index, value){
      $('input#residential-input'+value).prop('disabled', 'true');
    });
    $.each(technician_index, function(index, value){
      $('#technician-input'+value).removeAttr('disabled');
    });
    $.each(commercial_index, function(index, value){
      $('#commercial-input'+value).prop('disabled', 'true');
    });

  });

  /*
  * when form option clicked what display... residential option
  */
  $('span#residential-option').click(function(){
    /*
    * hidden input value
    */
    $('#user_option_type').attr('value', 'residential');

    /*
    * dispaly
    */
    $('div.techinician').hide();
    $('div.residential').show();
    $('div.commercial').hide();

    /*
    * disable and enable event
    */
    $.each(residential_index, function(index, value){
      $('input#residential-input'+value).removeAttr('disabled');
    });
    $.each(technician_index, function(index, value){
      $('#technician-input'+value).prop('disabled', 'true');
    });
    $.each(commercial_index, function(index, value){
      $('#commercial-input'+value).prop('disabled', 'true');
    });

  });

  /*
  * when form option clicked what display... commercial option
  */
  $('span#commercial-option').click(function(){
    /*
    * hidden input value
    */
    $('#user_option_type').attr('value', 'commercial');

    /*
    * dispaly
    */
    $('div.techinician').hide();
    $('div.residential').hide();
    $('div.commercial').show();

    /*
    * disable and enable event
    */
    $.each(commercial_index, function(index, value){
      $('input#commercial-input'+value).removeAttr('disabled');
    });
    $.each(technician_index, function(index, value){
      $('#technician-input'+value).prop('disabled', 'true');
    });
    $.each(residential_index, function(index, value){
      $('#residential-input'+value).prop('disabled', 'true');
    });

  });

});
