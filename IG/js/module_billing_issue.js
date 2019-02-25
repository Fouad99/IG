/** BEGINING TEMPLATE OF THE REASON BILLING ISSUE SECTION ---------------------------------------*/
var reason_billing_dispute = $('<div class="row">\
                                <div class="col-md-3 col-lg-3">\
                                <label>Billing issue :</label>\
                                <select class="form-control billing_issue_type">\
                                <option value="blank">Choose option..</option>\
                                <option value="Data dispute">Data overage charge dispute</option>\
                                <option value="Roaming dispute">Roaming charge dispute</option>\
                                <option value="Long distance dispute">Long distance charge</option>\
                                <option value="Minutes dispute">Minutes overage charge dispute</option>\
                                <option value="Not applied credit">Offered credit not applied</option>\
                                <option value="Expired/removed discount">Expired/removed discount</option>\
                                <option value="Missed cancellation">Cancellation not applied</option>\
                                <option value="Other">Other</option>\
                                </select>\
                                </div>\
                                <div class="col-md-3 col-lg-3">\
                                <label>Invoice date :</label>\
                                <input type="date" class="form-control invoice_date" placeholder="mm/dd/yyyy">\
                                </div>\
                                <div class="col-lg-3 col-md-3">\
                                <label>Phone number :</label>\
                                <input type="tel" class="form-control billing_issue_ctn" placeholder="514-999-9999">\
                                </div>\
                                </div>') ;

var billingIssue = {
    typeIssue: "",
    invoiceDate: "",
    phoneNumber:""
};

function getNotesBillingIssue(){

    $('.billing_issue_type').on('change', function () {
        billingIssue.typeIssue = ""
    });
    $('.invoice_date').on('change', function () {
        billingIssue.invoiceDate = $(this).val();
    });
    $('.billing_issue_ctn').on('change', function () {
        billingIssue.phoneNumber = $(this).val();
    });
}


function displayBillingIssue(){

    return $('\
            <p>Nature of billing dispute : ' + billingIssue.type_issue + ' || CTN : ' + billingIssue.phoneNumber + ' | Invoice : ' + billingIssue.invoiceDate + '</p>');
}

/** ENDING TEMPLATE OF THE REASON BILLING ISSUE SECTION ----------------------------------*/




/** BEGINING TEMPLATE OF THE BILLING ISSUE OPTION |****** DATA OVERAGE ****** | ------------------------------- */
var data_overage_template = function(){

    return $('\
                              <div class="to_remove">\
                              <div class="row">\
                              <div class="col-md-2 col-lg-2">\
                              <p><strong>Is the Overage more than 50$ ?</strong></p>\
                              <label class="radio-inline"><input type="radio" name="over50" value="yes">Yes</label>\
                              <label class="radio-inline"><input type="radio" name="over50" value="no">No</label>\
                              </div>\
                              <div class="col-md-2 col-lg-2">\
                              <p><strong>Is SOC OVERAGE50 on memo(V21) ?</strong></p>\
                              <label class="radio-inline"><input type="radio" name="socover50" value="yes" >Yes</label>\
                              <label class="radio-inline"><input type="radio" name="socover50"value="no" >No</label>\
                              </div>\
                              <div class="col-md-2 col-lg-2">\
                              <p><strong>Is SOC ACCEPT50 on memo(V21) ?</strong></p>\
                              <label class="radio-inline"><input type="radio" name="socacc50" value="yes" >Yes</label>\
                              <label class="radio-inline"><input type="radio" name="socacc50" value="no" >No</label>\
                              </div>\
                              <div class="col-md-2 col-lg-2">\
                              <p><strong>Is the 100% notification sent (ICM) ?</strong></p>\
                              <label class="radio-inline"><input type="radio" name="notif" value="yes" >Yes</label>\
                              <label class="radio-inline"><input type="radio" name="notif" value="no" >No</label>\
                              </div>\
                              <div class="col-md-2 col-lg-2">\
                              <p><strong>FTDU ?</strong></p>\
                              <label class="radio-inline"><input type="radio" name="ftdu" value="yes" >Yes</label>\
                              <label class="radio-inline"><input type="radio" name="ftdu" value="no" >No</label>\
                              </div>\
                              </div>\
                              <div class="row"><div class="col-md-6 col-lg-6">\
                              <p><strong>Give a summary of the situation the customer has :</strong></p>\
                              <textarea rows="10" class="form-control" id="summary_data_overage"></textarea>\
                              </div>\
                              <label><a class="btn btn-default hint_trigger" style="margin-right: 6px">Nova</a><a class="btn btn-default pos_trigger" style="margin-right: 6px">positioning</a></label><label><a class="btn btn-default ptm_trigger" style="margin-right: 20px">P.T.M </a></label><label><a class="btn btn-success mts_trigger"><strong>Make The Sale</strong></a></label>\
                              <div class="col-md-5 col-lg-5 hint_section" \
                              style="display: none; font-weight: bold;background-color: yellow; border: 2px solid; padding: 10px">\
                              '+ hint_data_overage.html() + '\
                              </div>\
                              <div class="col-md-5 col-lg-5 pos_section" \
                              style="display: none; font-weight: bold;background-color: red; color: white; border: 2px solid; padding: 10px">\
                              '+ pos_data_overage.html() + '\
                              </div>\
                              <div class="col-md-5 col-lg-5 ptm_section" \
                              style="display: none; font-weight: bold;background-color: darkgreen; color: bisque; border: 2px solid white; padding: 10px">\
                              '+ ptm_data_overage.html() + '\
                              </div>\
                              <div class="col-md-5 col-lg-5 mts_section" style="display: none; font-weight: bold;background-color: darkslategrey; color: white; border: 2px solid white; padding: 10px">\
                              '+ mts_data_overage.html() + '\
                              </div>\
                              </div></div>');
};

let dataDispute = {
    typeIssue: "",
    invoiceDate: "",
    phoneNumber:"",
    overage_more_50:"N/M",
    soc_over_50:"N/M",
    soc_accept_50:"N/M",
    notification_data:"N/M",
    ftdu:"",
    info:""
};

function getNotesDataDispute(){
    $('.billing_issue_type').on('change', function () {
        billingIssue.typeIssue = "Data dispute"
    });
    $('.invoice_date').on('change', function () {
        billingIssue.invoiceDate = $(this).val();
    });
    $('.billing_issue_ctn').on('change', function () {
        billingIssue.phoneNumber = $(this).val();
    });
    $('input[name=over50]:radio').on('change',function () {
        dataDispute.overage_more_50 = $(this).val();
    });
    $('input[name=socover50]:radio').on('change',function () {
        dataDispute.soc_over_50 = $(this).val();
    });
    $('input[name=socacc50]:radio').on('change',function () {
        dataDispute.soc_accept_50 = $(this).val();
    });
    $('input[name=notif]:radio').on('change',function () {
        dataDispute.notification_data = $(this).val();
    });
    $('input[name=ftdu]:radio').on('change',function () {
        dataDispute.ftdu = $(this).val();
    });
    $('input[name=over50]:radio').on('change',function () {
        dataDispute.overage_more_50 = $(this).val();
    });
    $('#summary_data_overage').on('change',function () {
        dataDispute.info = $(this).val();
    });
}

function displayNotesDataDispute(){
    return $('\
    <p>Nature of billing dispute : Data dispute || CTN : ' + billingIssue.phoneNumber + ' | Invoice : ' + billingIssue.invoiceDate + '</p>)\
    <p>Is overage more than 50$ : '+ dataDispute.overage_more_50 + ' || Has cx received notifications : '+ dataDispute.notification_data +' || Is there SOC OVER50 in V21 : '+ dataDispute.soc_over_50 +' || Is there SOC ACCEPT50 in V21 : '+ dataDispute.soc_accept_50 +' || First time data dispute :  '+ dataDispute.ftdu + '</p>\
    <p>Additional info : '+ dataDispute.info + '</p>\
    ');
}
/** ENDING TEMPLATE OF THE BILLING ISSUE OPTION |******** DATA OVERAGE ************| ------------------------------- */




/** BEGINING TEMPLATE OF THE BILLING ISSUE OPTION |******** ROAMING CHARGES ************* | ---------------------------------------------- */
var roaming_overage_template_level_1 = function(){
   return  $('<div class="to_remove"><div class="row"><div class="col-md-3 col-lg-3">\
                                         <label>What kind of roaming :</label>\
                                         <select class="form-control roaming_lvl1">\
                                         <option value="blank">Choose option..</option> \
                                         <option value="Yes">Covered by Fido Roam</option>\
                                         <option value="No">Not covered by Fido Roam</option>\
                                         </select>\
                                         </div></div></div>');
};

var roaming_overage_template_level_2_fido_roam = function(){
    return $('<div class="to_remove2"><div class="row"><div class="col-md-3 col-lg-3">\
                              <p><strong>Has the Fido roam welcome text been sent to customer ?</strong></p>\
                              <label class="radio-inline"><input type="radio" name="fd_txt" value="yes" >Yes</label>\
                              <label class="radio-inline"><input type="radio" name="fd_txt" value="no" >No</label>\
                              </div>\
                              <div class="col-md-3 col-lg-3">\
                              <p><strong>Is there service usage recorded for the charge ?</strong></p>\
                              <label class="radio-inline"><input type="radio" name="fd_usg" value="yes" >Yes</label>\
                              <label class="radio-inline"><input type="radio" name="fd_usg" value="no" >No</label>\
                              </div>\
                              <div class="col-md-1 col-lg-1">\
                              <label>Charge</label>\
                              <input type="text" class="form-control charge" placeholder="$$">\
                              </div>\
                              <div class="col-md-1 col-lg-1">\
                              <label>Air time</label>\
                              <input type="text" class="form-control calls" placeholder="mins" > \
                              </div>\
                              <div class="col-md-1 col-lg-1">\
                              <label>Data</label>\
                              <input type="text" class="form-control data" placeholder="GBs" >\
                              </div>\
                              <div class="col-md-1 col-lg-1">\
                              <label>SMS|MMS</label>\
                              <input type="text" class="form-control text" placeholder="units">\
                              </div>\
                              </div>\
                              <div class="row">\
                              <div class="col-md-6 col-lg-6">\
                              <p><strong>Give a summary of the situation the customer has :</strong></p>\
                              <textarea rows="10" class="form-control" id="summary_roaming_charge"></textarea>\
                              </div>\
                              <label><a class="btn btn-default hint_trigger" style="margin-right: 6px">Nova</a><a class="btn btn-default pos_trigger" style="margin-right: 6px">positioning</a></label><label><a class="btn btn-default ptm_trigger" style="margin-right: 20px">P.T.M </a></label><label><a class="btn btn-success mts_trigger"><strong>Make The Sale</strong></a></label>\
                              <div class="col-md-5 col-lg-5 hint_section" \
                              style="display: none; font-weight: bold;background-color: yellow; border: 2px solid; padding: 10px">\
                              '+ hint_roaming_fido_roam_charge.html() + '\
                              </div>\
                              <div class="col-md-5 col-lg-5 pos_section" \
                              style="display: none; font-weight: bold;background-color: red; color: white; border: 2px solid; padding: 10px">\
                              '+ pos_roaming_fido_roam_charge.html() + '\
                              </div>\
                              <div class="col-md-5 col-lg-5 ptm_section" style="display: none; font-weight: bold;background-color: darkgreen; color: bisque; border: 2px solid white; padding: 10px">\
                              '+ ptm_roaming_fido_roam_charge.html() + '\
                              </div>\
                              <div class="col-md-5 col-lg-5 mts_section" style="display: none; font-weight: bold;background-color: darkslategrey; color: white; border: 2px solid white; padding: 10px">\
                              '+ mts_roaming_fido_roam_charge.html() + '\
                              </div>\
                              </div></div>');
};

var roaming_overage_template_level_2_not_fido_roam = function(){
    return $('<div class="to_remove2"><div class="row"><div class="col-md-3 col-lg-3">\
                              <p><strong>Has the customer received text with rates</strong></p>\
                              <label class="radio-inline"><input type="radio" name="nfd_txt" value="yes" >Yes</label>\
                              <label class="radio-inline"><input type="radio" name="nfd_txt" value="no" >No</label>\
                              </div>\
                              <div class="col-md-3 col-lg-3">\
                              <p><strong>Is there service usage recorded for the charge ?</strong></p>\
                              <label class="radio-inline"><input type="radio" name="nfd_usg" value="yes" >Yes</label>\
                              <label class="radio-inline"><input type="radio" name="nfd_usg" value="no" >No</label>\
                              </div>\
                              <div class="col-lg-1 col-md-1">\
                              <label>Charge</label>\
                              <input type="text" class="form-control charge" placeholder="$$">\
                              </div> \
                              <div class="col-md-1 col-lg-1">\
                              <label>Air time</label>\
                              <input type="text" class="form-control calls" placeholder="mins">\
                              </div>\
                              <div class="col-md-1 col-lg-1">\
                              <label>Data</label>\
                              <input type="text" class="form-control data" placeholder="GBs" >\
                              </div>\
                              <div class="col-md-1 col-lg-1">\
                              <label>SMS|MMS</label>\
                              <input type="text" class="form-control text" placeholder="units">\
                              </div></div>\
                              <div class="row">\
                              <div class="col-md-6 col-lg-6">\
                              <p><strong>Give a summary of the situation the customer has :</strong></p>\
                              <textarea rows="10" class="form-control" id="summary_roaming_charge_nfr"></textarea>\
                              </div>\
                              <label><a class="btn btn-default hint_trigger" style="margin-right: 6px">Nova</a><a class="btn btn-default pos_trigger" style="margin-right: 6px">positioning</a></label><label><a class="btn btn-default ptm_trigger" style="margin-right: 20px">P.T.M </a></label><label><a class="btn btn-success mts_trigger"><strong>Make The Sale</strong></a></label>\
                              <div class="col-md-5 col-lg-5 hint_section" \
                              style="display: none; font-weight: bold;background-color: yellow; border: 2px solid; padding: 10px">\
                              '+ hint_roaming_not_fido_roam_charge.html() + '\
                              </div>\
                              <div class="col-md-5 col-lg-5 pos_section" \
                              style="display: none; font-weight: bold;background-color: red; color: white; border: 2px solid; padding: 10px">\
                              '+ pos_roaming_not_fido_roam_charge.html() + '\
                              </div>\
                              <div class="col-md-5 col-lg-5 ptm_section" style="display: none; font-weight: bold;background-color: darkgreen; color: bisque; border: 2px solid white; padding: 10px">\
                              '+ ptm_roaming_not_fido_roam_charge.html() + '\
                              </div>\
                              <div class="col-md-5 col-lg-5 mts_section" style="display: none; font-weight: bold;background-color: darkslategrey; color: white; border: 2px solid white; padding: 10px">\
                              '+ mts_roaming_not_fido_roam_charge.html() + '\
                              </div>\
                              </div></div>');
};

let roamingDispute = {
    "fido_roam":""
};

let roamingDispute_fidoRoam = {
    "text_sent" : "",
    "recorded_usage" : "",
    "charge" : "",
    "AirTime" : "",
    "data": "",
    "SmsMms" : "",
    "info" : ""
};

let roamingDispute_NotFidoRoam = {
    "text_sent" : "",
    "recorded_usage" : "",
    "charge" : "",
    "AirTime" : "",
    "data": "",
    "SmsMms" : "",
    "info" : ""
};

function getNotesRoaming_fidoRoam(){

    $('input[name=fd_txt]:radio').on("change", function () {
        roamingDispute_fidoRoam.text_sent = $(this).val();
    });
    $('input[name=fd_usg]:radio').on("change", function () {
        roamingDispute_fidoRoam.recorded_usage = $(this).val();
    });
    $('.charge').on("change", function () {
        roamingDispute_fidoRoam.charge = $(this).val();
    });
    $('.calls').on("change", function () {
        roamingDispute_fidoRoam.AirTime = $(this).val();
    });
    $('.data').on("change", function () {
        roamingDispute_fidoRoam.data = $(this).val();
    });
    $('.text').on("change", function () {
        roamingDispute_fidoRoam.SmsMms = $(this).val();
    });
    $('#summary_roaming_charge').on("change", function () {
        roamingDispute_fidoRoam.info = $(this).val();
    })
}

function getNotesRoaming_notFidoRoam(){
    $('input[name=nfd_txt]:radio').on("change", function () {
        roamingDispute_NotFidoRoam.text_sent = $(this).val();
    });
    $('input[name=nfd_usg]:radio').on("change", function () {
        roamingDispute_NotFidoRoam.recorded_usage = $(this).val();
    });
    $('.charge').on("change", function () {
        roamingDispute_NotFidoRoam.charge = $(this).val();
    });
    $('.calls').on("change", function () {
        roamingDispute_NotFidoRoam.AirTime = $(this).val();
    });
    $('.data').on("change", function () {
        roamingDispute_fidoRoam.data = $(this).val();
    });
    $('.text').on("change", function () {
        roamingDispute_NotFidoRoam.SmsMms = $(this).val();
    });
    $('#summary_roaming_charge_nfr').on("change", function () {
        roamingDispute_NotFidoRoam.info = $(this).val();
    });
}
/** ENDING TEMPLATE OF THE BILLING ISSUE OPTION | ******* ROAMING CHARGES ******************** | ------------------------------------------------ */





/** BEGINING TEMPLATE OF THE BILLING ISSUE OPTION | ******* LONG DISTANCE **********| ------------------------------------------------ */
var long_distance_template_level_1 = function(){
    return  $('\
                                        <div class="to_remove">\
                                        <div class="row">\
                                        <div class="col-md-3 col-lg-3">\
                                        <p><strong>are the calls from scam/fraudulent activity ?</strong></p>\
                                        <label class="radio-inline"><input type="radio" name="ldc_scam" value="Yes" >Yes</label>\
                                        <label class="radio-inline"><input type="radio" name="ldc_scam" value="No" >No</label>\
                                        </div>\
                                        <div class="col-md-3 col-lg-3">\
                                        <p><strong>Is the phone number has been called before ?</strong></p>\
                                        <label class="radio-inline"><input type="radio" name="ldc_call" value="Yes" >Yes</label>\
                                        <label class="radio-inline"><input type="radio" name="ldc_call" value="No" >No</label>\
                                        </div>\
                                        <div class="col-md-3 col-lg-3">\
                                        <p><strong>Has the customer family in destination calls ?</strong></p>\
                                        <label class="radio-inline"><input type="radio" name="ldc_dest" value="Yes" >Yes</label>\
                                        <label class="radio-inline"><input type="radio" name="ldc_dest" value="No" >No</label>\
                                        </div>\
                                        <div class="col-md-1 col-lg-1">\
                                        <label>Charge</label>\
                                        <input type="text" class="form-control ld_charge" placeholder="$$">\
                                        </div>\
                                        <div class="col-md-1 col-lg-1">\
                                        <label>Air time</label>\
                                        <input type="text" class="form-control ld_calls" placeholder="mins" >\
                                        </div>\
                                        </div>\
                                        <div class="row">\
                                        <div class="col-md-6 col-lg-6">\
                                        <p><strong>Give a summary of the situation the customer has :</strong></p>\
                                        <textarea rows="10" class="form-control" id="summary_longdistance_charge"></textarea>\
                                        </div>\
                                        <label><a class="btn btn-default hint_trigger" style="margin-right: 6px">Nova</a><a class="btn btn-default pos_trigger">Positioning</a></label>\
                                        <div class="col-md-5 col-lg-5 hint_section" style="display: none; font-weight: bold;background-color: yellow; border: 2px solid; padding: 10px">\
                                        '+ hint_long_distance_charge.html() + '\
                                        </div>\
                                        <div class="col-md-5 col-lg-5 pos_section" \
                                        style="display: none; font-weight: bold;background-color: red; color: white; border: 2px solid; padding: 10px">\
                                        '+ pos_long_distance_charge.html() + '\
                                        </div>\
                                        <div class="col-md-5 col-lg-5 ptm_section" style="display: none; font-weight: bold;background-color: darkgreen; color: bisque; border: 2px solid white; padding: 10px">\
                              '+ ptm_long_distance_charge.html() + '\
                              </div>\
                              <div class="col-md-5 col-lg-5 mts_section" style="display: none; font-weight: bold;background-color: darkslategrey; color: white; border: 2px solid white; padding: 10px">\
                              '+ mts_long_distance_charge.html() + '\
                              </div>\
                              </div></div>');
};



let longDistanceDispute = {
    "scam":"",
    "call_before":"",
    "family":"",
    "charge":"",
    "AirTime":"",
    "info":""
};
function getNotesLongDistance(){

    $('input[name=ldc_scam]:radio').on("change",function () {
        longDistanceDispute.scam =  $(this).val()
    });
    $('input[name=ldc_call]:radio').on("change",function () {
        longDistanceDispute.call_before =  $(this).val()
    });
    $('input[name=ldc_dest]:radio').on("change",function () {
        longDistanceDispute.family =  $(this).val()
    });
    $('.ld_charge').on("change",function () {
        longDistanceDispute.charge =  $(this).val()
    });
    $('.ld_calls').on("change",function () {
        longDistanceDispute.AirTime =  $(this).val()
    });
    $('#summary_longdistance_charge').on("change",function () {
        longDistanceDispute.info =  $(this).val()
    });
}

/** ENDING TEMPLATE OF THE BILLING ISSUE OPTION | ********** LONG DISTANCE *************| ------------------------------------------------ */





/** BEGINING TEMPLATE OF THE BILLING ISSUE OPTION | ******* MINUTES OVERAGE **********| ------------------------------------------------ */
var minutes_overage_template_level_1 = function() {
    return $('<div class="to_remove"><div class="row">\
                                        <div class="col-md-3 col-lg-3">\
                                        <p><strong>Is it the first time ?</strong></p>\
                                        <label class="radio-inline"><input type="radio" name="overMN" value="yes">Yes</label>\
                                        <label class="radio-inline"><input type="radio" name="overMN" value="no">No</label>\
                                        </div>\
                                        <div class="col-md-3 col-lg-3">\
                                        <p><strong>Has a notification been sent to customer ?</strong></p>\
                                        <label class="radio-inline"><input type="radio" name="notifMN" value="yes">Yes</label>\
                                        <label class="radio-inline"><input type="radio" name="notifMN" value="no">No</label>\
                                        </div>\
                                        <div class="col-md-3 col-lg-3">\
                                        <p><strong>Is the customer aware of incoming/outgoing ?</strong></p>\
                                        <label class="radio-inline"><input type="radio" name="inout" value="yes">Yes</label>\
                                        <label class="radio-inline"><input type="radio" name="inout" value="no">No</label>\
                                        </div>\
                                        <div class="col-lg-1 col-md-1">\
                                        <label>Charge</label>\
                                        <input type="text" class="form-control charge_overage" placeholder="$$">\
                                        </div>\
                                        <div class="col-md-1 col-lg-1">\
                                        <label>Air time</label>\
                                        <input type="text" class="form-control calls_overage" placeholder="mins">\
                                        </div>\
                                        </div>\
                                        <div class="row">\
                                        <div class="col-md-6 col-lg-6">\
                                        <p><strong>Give a summary of the situation the customer has :</strong></p>\
                                        <textarea rows="10" class="form-control" id="summary_overminutes"></textarea>\
                                        </div>\
                                        <label><a class="btn btn-default hint_trigger" style="margin-right: 6px">Nova</a><a class="btn btn-default pos_trigger">Positioning</a></label>\
                                        <div class="col-md-5 col-lg-5 hint_section" style="display: none; font-weight: bold;background-color: yellow; border: 2px solid; padding: 10px">\
                                        ' + hint_min_overage_charge.html() + '\
                                        </div>\
                                        <div class="col-md-5 col-lg-5 pos_section" \
                                        style="display: none; font-weight: bold;background-color: red; color: white; border: 2px solid; padding: 10px">\
                                        ' + pos_min_overage_charge.html() + '\
                                        </div>\
                                        <div class="col-md-5 col-lg-5 ptm_section" style="display: none; font-weight: bold;background-color: darkgreen; color: bisque; border: 2px solid white; padding: 10px">\
                                        ' + ptm_min_overage_charge.html() + '\
                                        </div>\
                                        <div class="col-md-5 col-lg-5 mts_section" style="display: none; font-weight: bold;background-color: darkslategrey; color: white; border: 2px solid white; padding: 10px">\
                                        ' + mts_min_overage_charge.html() + '\
                                        </div>\
                                        </div></div>');
};

let minutesDispute =  {
    first : "",
    notif : "",
    incomingOutgoing : "",
    charge : "",
    airtime : "",
    info : ""
};

function getNotesMinutes(){
    $('input[name=overMN]:radio').on("change",function () {
        minutesDispute.first =  $(this).val()
    });
    $('input[name=notifMN]:radio').on("change",function () {
        minutesDispute.notif =  $(this).val()
    });
    $('input[name=inout]:radio').on("change",function () {
        minutesDispute.incomingOutgoing =  $(this).val()
    });
    $('.charge_overage').on('change', function () {
        minutesDispute.charge = $(this).val()
    });
    $('.calls_overage').on('change', function () {
        minutesDispute.airtime = $(this).val()
    });
    $('#summary_overminutes').on('change', function () {
        minutesDispute.info = $(this).val()
    });
}
/** ENDING TEMPLATE OF THE BILLING ISSUE OPTION | ********** MINUTES OVERAGE *************| ------------------------------------------------ */


/** BEGINING TEMPLATE OF THE BILLING ISSUE OPTION | ******* OFFERED CREDIT NOT APPLIED **********| ------------------------------------------------ */
var credit_not_applied_template_level_1 = function(){
    return $('<div class="to_remove">\
                              <div class="row">\
                              <div class="col-md-3 col-lg-3">\
                              <p><strong>What is the credit for ?</strong></p>\
                              <select class="form-control credit_reason>">\
                              <option value="blank">Choose option..</option>\
                              <option value="BPO">BPO for a HUP</option>\
                              <option value="FCRETH">Price match for a HUP</option>\
                              <option value="GW">Good Will credit</option>\
                              <option value="Adjustment">Any adjustment for billing error</option>\
                              </select>\
                              </div>\
                              <div class="col-md-3 col-lg-3">\
                              <p><strong>Provide Interaction ID of the credit</strong></p>\
                              <input type="text" class="form-control interaction_id" placeholder="I1222222222"></div>\
                              <div class="col-md-3 col-lg-3">\
                              <p><strong>Effective date of the credit</strong></p>\
                              <input type="date" class="form-control effective_date" placeholder="12/31/2018"></div></div>\
                              <div class="row"><div class="col-md-6 col-lg-6">\
                              <p><strong>Give more details about the credit  :</strong></p>\
                              <textarea rows="10" class="form-control summary_missed_credit"></textarea>\
                              </div>\
                              <label><a class="btn btn-default hint_trigger" style="margin-right: 6px">Nova</a><a class="btn btn-default pos_trigger">Positioning</a></label>\
                              <div class="col-md-5 col-lg-5 hint_section" \
                              style="display: none; font-weight: bold;background-color: yellow; border: 2px solid; padding: 10px">\
                              '+ hint_credit_not_applied.html() + '\
                              </div>\
                              <div class="col-md-5 col-lg-5 pos_section" \
                              style="display: none; font-weight: bold;background-color: red; color: white; border: 2px solid; padding: 10px">\
                              '+ pos_credit_not_applied.html() + '\
                              </div>\
                              <div class="col-md-5 col-lg-5 ptm_section" style="display: none; font-weight: bold;background-color: darkgreen; color: bisque; border: 2px solid white; padding: 10px">\
                              ' + ptm_credit_not_applied.html() + '\
                              </div>\
                              <div class="col-md-5 col-lg-5 mts_section" style="display: none; font-weight: bold;background-color: darkslategrey; color: white; border: 2px solid white; padding: 10px">\
                              ' + mts_credit_not_applied.html() + '\
                              </div>\
                              </div></div>');
}

let creditNotApplied = {
    creditType : "",
    interactionId : "",
    date : "",
    details : ""
};


function getNotesCreditNotApplied(){

    $(".credit_reason").on("change",function () {
        creditNotApplied.creditType = $(this).val();
    });
    $(".interaction_id").on("change",function () {
        creditNotApplied.interactionId = $(this).val();
    });
    $(".effective_date").on("change",function () {
        creditNotApplied.date = $(this).val();
    });
    $(".summary_missed_credit").on("change",function () {
        creditNotApplied.details = $(this).val();
    });



}

/** ENDING TEMPLATE OF THE BILLING ISSUE OPTION | ********** OFFERED CREDIT NOT APPLIED *************| ------------------------------------------------ */


/** BEGINING TEMPLATE OF THE BILLING ISSUE OPTION | ******* EXPIRED DISCOUNT **********| ------------------------------------------------ */
var expired_discount_template_level_1 = function(){
    return $('<div class="to_remove">\
                              <div class="row">\
                              <div class="col-md-3 col-lg-3">\
                              <p><strong>What is the expired discount ?</strong></p>\
                              <select class="form-control discount_reason>">\
                              <option value="blank">Choose option..</option>\
                              <option value="addline">10% off additional line</option>\
                              <option value="retention25">25% off retention</option>\
                              <option value="winback25">25% off winback</option>\
                              <option value="retention50-12">50% off for Dataline 12 months</option>\
                              <option value="retention50-24">50% off for Dataline 24 months</option>\
                              <option value="retention100">100% off for Homeline 12 months</option>\
                              <option value="retention5-6">5$ off for 6 months</option>\
                              <option value="retention5-12">5$ off for 12 months</option>\
                              <option value="retention10-12">10$ off for 12 months</option>\
                              </select>\
                              </div>\
                              <div class="col-md-3 col-lg-3">\
                              <p><strong>Provide Interaction ID of the discount appliance</strong></p>\
                              <input type="text" class="form-control discount_interaction_id" placeholder="I1222222222"></div>\
                              <div class="col-md-3 col-lg-3">\
                              <p><strong>Is the discount expired ?</strong></p>\
                              <label class="radio-inline"><input type="radio" name="expired" value="yes">Yes</label>\
                              <label class="radio-inline"><input type="radio" name="expired" value="no">No</label>\
                              </div>\
                              <div class="col-md-3 col-lg-3">\
                              <p><strong>has the discount been removed ?</strong></p>\
                              <label class="radio-inline"><input type="radio" name="removed" value="yes">Yes</label>\
                              <label class="radio-inline"><input type="radio" name="removed" value="no">No</label>\
                              </div></div>\
                              <div class="row"><div class="col-md-6 col-lg-6">\
                              <p><strong>Give more details about the discount  :</strong></p>\
                              <textarea rows="10" class="form-control summary_discount"></textarea>\
                              </div>\
                              <label><a class="btn btn-default hint_trigger" style="margin-right: 6px">Nova</a><a class="btn btn-default pos_trigger">Positioning</a></label>\
                              <div class="col-md-5 col-lg-5 hint_section" \
                              style="display: none; font-weight: bold;background-color: yellow; border: 2px solid; padding: 10px">\
                              '+ hint_expired_discount.html() + '\
                              </div>\
                              <div class="col-md-5 col-lg-5 pos_section" \
                              style="display: none; font-weight: bold;background-color: red; color: white; border: 2px solid; padding: 10px">\
                              '+ pos_expired_discount.html() + '\
                              </div>\
                              <div class="col-md-5 col-lg-5 ptm_section" style="display: none; font-weight: bold;background-color: darkgreen; color: bisque; border: 2px solid white; padding: 10px">\
                              ' + ptm_expired_discount.html() + '\
                              </div>\
                              <div class="col-md-5 col-lg-5 mts_section" style="display: none; font-weight: bold;background-color: darkslategrey; color: white; border: 2px solid white; padding: 10px">\
                              ' + mts_expired_discount.html() + '\
                              </div>\
                              </div></div>');
}

let erDiscount = {
    discountReason: "",
    discount_interaction_id: "",
    expiry: "",
    removal: "",
    details: ""
}

function getNotesERDiscount(){
    $(".discount_reason").on("change", function () {
        erDiscount.discountReason = $(this).val();
    });
    $("input[name=expired]:radio").on("change", function () {
        erDiscount.expiry = $(this).val();
    })
    $("input[name=removed]:radio").on("change", function(){
        erDiscount.removal = $(this).val();
    })
    $(".summary_discount").on("change", function () {
        erDiscount.details = $(this).val();
    })



}

/** ENDING TEMPLATE OF THE BILLING ISSUE OPTION | ********** EXPIRED DISCOUNT *************| ------------------------------------------------ */


/** BEGINING TEMPLATE OF THE BILLING ISSUE OPTION | ******* MISSED CANCELLATION **********| ------------------------------------------------ */
var missed_cancellation_template = function(){
    return $('<div class="to_remove">\
                              <div class="row">\
                              <div class="col-md-3 col-lg-3">\
                              <p><strong>What was the reason of cancellation ?</strong></p>\
                              <select class="form-control cancellation_reason>">\
                              <option value="blank">Choose option..</option>\
                              <option value="temporary leave">Temp. leave</option>\
                              <option value="permanent leave">Permanent leave</option>\
                              <option value="other company">Move to another company</option>\
                              <option value="not used">No longer used</option>\
                              <option value="not specified">Not specified</option>\
                              </select>\
                              </div>\
                              <div class="col-md-3 col-lg-3">\
                              <p><strong>Provide Interaction ID of the cancellation request</strong></p>\
                              <input type="text" class="form-control cancellation_interaction_id" placeholder="I1222222222"></div>\
                              </div>\
                              <div class="row"><div class="col-md-6 col-lg-6">\
                              <p><strong>Give more details about the situation  :</strong></p>\
                              <textarea rows="10" class="form-control summary_missed_cancellation"></textarea>\
                              </div>\
                              <label><a class="btn btn-default hint_trigger" style="margin-right: 6px">Get help</a><a class="btn btn-default pos_trigger">Positioning</a></label>\
                              <div class="col-md-5 col-lg-5 hint_section" \
                              style="display: none; font-weight: bold;background-color: yellow; border: 2px solid; padding: 10px">\
                              '+ hint_missed_cancellation.html() + '\
                              </div>\
                              <div class="col-md-5 col-lg-5 pos_section" \
                              style="display: none; font-weight: bold;background-color: red; color: white; border: 2px solid; padding: 10px">\
                              '+ pos_missed_cancellation.html() + '\
                              </div>\
                              <div class="col-md-5 col-lg-5 ptm_section" style="display: none; font-weight: bold;background-color: darkgreen; color: bisque; border: 2px solid white; padding: 10px">\
                              ' + ptm_missed_cancellation.html() + '\
                              </div>\
                              <div class="col-md-5 col-lg-5 mts_section" style="display: none; font-weight: bold;background-color: darkslategrey; color: white; border: 2px solid white; padding: 10px">\
                              ' + mts_missed_cancellation.html() + '\
                              </div>\
                              </div></div>');
}
let missedCancellation = {
    cancellationReason : "",
    cancellationInteractionId : "",
    details : ""
}

function getNotesMissedCancellation(){
    $(".cancellation_reason").on("change", function () {
        missedCancellation.cancellationReason = $(this).val();
    });
    $(".cancellation_interaction_id").on("change", function () {
        missedCancellation.cancellationInteractionId = $(this).val();
    });
    $(".summary_missed_cancellation").on("change", function () {
        missedCancellation.details = $(this).val();
    });
}

/** ENDING TEMPLATE OF THE BILLING ISSUE OPTION | ********** MISSED CANCELLATION *************| ------------------------------------------------ */





/** BEGINING TEMPLATE OF THE BILLING ISSUE OPTION | ******* OTHER **********| ------------------------------------------------ */
var reason_specification_template = function(){
    return $('<div class="to_remove"><div class="row"><div class="col-md-8 col-lg-8 other_sub_container">\
    <label>Please specify the reason and give the solutions following the template :</label>\
<textarea id="reason_specify" class="form-control summary_other_reason"rows="15" placeholder="Describe the reason and give the solutions"></textarea>\
    </div></div></div>');
}

let otherReason = {
details : ""
}


function getNotesOther(){
    $(".summary_other_reason").on("change", function () {
        otherReason.details = $(this).val();
    })
}

/** ENDING TEMPLATE OF THE BILLING ISSUE OPTION | ********** OTHER *************| ------------------------------------------------ */




