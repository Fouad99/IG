var reason_packer = $('<div class="row reason_handler" style="padding-left: 15px">\
                      </div>\
                      <div class="row solution_handler" style="padding-left: 15px">\
                      </div>\
                      ');


var additional_reason_packer = function (){
    return $('<div class="row reason_handler2" style="padding-left: 15px">\
<div class="col-md-3 "> \
    <label>Reason  : </label>\
<select class="form-control additional_main_reason">\
    <option value="blank" >Choose option.. </option>\
<option value="Second line">Add second line</option>\
<option value="Billing dispute">Billing dispute</option>\
<!--<option value="Cancellation">Cancellation</option> -->\
<option value="Contract related">Contract related</option>\
<option value="Monthly plan related">Monthly plan related</option>\
<option value="transaction">General Transactions</option>\
<!--<option value="Tor">TOR</option> -->\
<!--<option value="Temp">Temporary suspension</option> -->\
<!--<option value="prepaid">Prepaid migration</option> -->\
<option value="Unlocking device">Unlocking device</option>\
<option value="Other">Other</option>\
</select>\
</div>\
<div class="col-lg-3 col-md-3">\
<label>Phone number :</label>\
<input type="tel" class="form-control ctn" placeholder="514-999-9999">\
</div>\
<div class="col-md-offset-4 col-md-2"><label>Remove this reason :</label><a href="javascript:void(0);" class="btn btn-danger remove_reason">X Remove</a></div>\
</div>\
<div class="row solution_handler2" style="padding-left: 15px">\
</div>\
 ');
};

var additional_reason = function(){
    return $('\
<div class="col-md-3 reason_container"> \
<label>Reason  : </label>\
<select class="form-control additional_main_reason">\
<option value="blank" >Choose option.. </option>\
<option value="Second line">Add second line</option>\
<option value="Billing dispute">Billing dispute</option>\
<!--<option value="Cancellation">Cancellation</option> -->\
<option value="Contract related">Contract related</option>\
<option value="Monthly plan related">Monthly plan related</option>\
<option value="transaction">General Transactions</option>\
<!--<option value="Tor">TOR</option> -->\
<!--<option value="Temp">Temporary suspension</option> -->\
<!--<option value="prepaid">Prepaid migration</option> -->\
<option value="Unlocking device">Unlocking device</option>\
<option value="Other">Other</option>\
</select>\
</div>\
<div class="col-lg-3 col-md-3"> \
<label>Phone number :</label>\
<input type="tel" class="form-control ctn" placeholder="514-999-9999">\
</div>\
')}








function getNotesHeader(){

    $('#department').on('change', function () {
        header_final.departement = $('#department').val();
    });

    $('#who').on('change', function () {
        header_final.caller = $('#who').val();
        if ($(this).val() == "Other") {

            $('#who_specify').attr("disabled", false);

            $('#who_specify').on('change',function () {
                bool_caller_specification = true ;
                header_final.caller_specification = $(this).val()
            })
        }
        else if ($(this).val() !== "Other") {
            bool_caller_specification = false ;
            $('#who_specify').attr("disabled", true);
        }
    });

    $('#authentication').on('change',function () {
        header_final.authenticated = $('#authentication').val();
    });
}

function displayHeader1(){
    // for header when caller is registred
    return $('<p>***PRINTED BY IG****</p>\
            <p>Department : ' + header_final.departement + '</p>\
            <p>Caller : ' + header_final.caller + '</p>\
            <p>Identified by : ' + header_final.authenticated  + '</p>\
            ');
}

function displayHeader2() {
    // for header when caller isn t registred
    return $('<p>***PRINTED BY IG****</p>\
            <p>Department : ' + header_final.departement + '</p>\
            <p>Caller : ' + header_final.caller_specification + ' - NOT REGISTRED IN ACCOUNT - </p>\
            <p>Identified by : ' + header_final.authenticated  + '</p>\
            ');
}