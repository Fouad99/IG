var reason_account_management = $('<div class="row">\
                                <div class="col-md-3 col-lg-3">\
                                <label>Operation to proceed</label>\
                                <select class="form-control management_type">\
                                <option value="blank">Choose option..</option>\
                                <option value="port in">Port in phone number</option>\
                                <option value="tor">Transfer of responsibility</option>\
                                <option value="prepaid migration">Prepaid migration</option>\
                                <option value="cancellation">Cancellation</option>\
                                <option value="auto payment">Enrollement in auto payment</option>\
                                <option value="Other">Other</option>\
                                </select>\
                                </div>\
                                <div class="col-md-3 col-lg-3">\
                                <label>Effective date :</label>\
                                <input type="date" class="form-control management_date" placeholder="mm/dd/yyyy">\
                                </div>\
                                <div class="col-lg-3 col-md-3">\
                                <label>Phone number :</label>\
                                <input type="tel" class="form-control management_ctn" placeholder="514-999-9999">\
                                </div>\
                                </div>') ;


var portIn = function(){
    return $('\
    <div class="to remove"><div class="row">\
    \
    <div class="col-lg-3 col-md-3">\
    <label>Ctn to port in</label>\
    <input type="text" class="form-control port_ctn" placeholder="414-444-3333">\
    </div>\
    <div class="col-lg-3 col-md-3"> \
    <label>BAN of old account</label>\
    <input type="text" class="form-control ban_ctn" placeholder="111222333">\
    </div>\
    <div class="col-lg-3 col-md-3"> \
    <label>Is the ctn available in V21 ?</label>\
    <select class="form-control ctn_available">\
    <option>Choose option..</option>\
    <option>No</option>\
    <option>Yes</option>\
    </select>\
    </div>\
    </div>\
    <div class="row">\
<div class="col-lg-5 col-md-5">\
<p><strong>Give additional information you think important</strong></p>\
<textarea rows="10" class="form-control additional_info_port_in"></textarea>\
</div>\
<label><a class="btn btn-default hint_trigger" style="margin-right: 6px">Nova</a><a class="btn btn-default pos_trigger" style="margin-right: 6px">positioning</a></label><label><a class="btn btn-default ptm_trigger" style="margin-right: 20px">P.T.M </a></label><label><a class="btn btn-success mts_trigger"><strong>Make The Sale</strong></a></label>\
<div class="col-md-5 col-lg-5 hint_section" style="display: none; font-weight: bold;background-color: yellow; border: 2px solid; padding: 10px">\
'+ hint_plan_change.html() + '\
 </div>\
<div class="col-md-5 col-lg-5 pos_section"style="display: none; font-weight: bold;background-color: red; color: white; border: 2px solid; padding: 10px">\
'+ pos_plan_change.html() + '\
</div>\
<div class="col-md-5 col-lg-5 ptm_section"style="display: none; font-weight: bold;background-color: darkgreen; color: bisque; border: 2px solid white; padding: 10px">\
'+ ptm_plan_change.html() + '\
</div>\
<div class="col-md-5 col-lg-5 mts_section" style="display: none; font-weight: bold;background-color: darkslategrey; color: white; border: 2px solid white; padding: 10px">\
'+ mts_plan_change.html() + '\
</div>\
</div>\
</div>\
    ')};

let port_in = {
    typeRequest: "Port in phone number",
    effectiveDate: "",
    ctn: "",
    ctnToPort: "",
    ban: "",
    available: "",
    data:"None"
};

function getNotesPortIn(){
    $('.management_date').on('change', function () {
        port_in.effectiveDate = $(this).val();
    })
    $('.management_ctn').on('change', function () {
        port_in.ctn = $(this).val();
    })
    $('.port_ctn').on('change', function () {
        port_in.ctnToPort = $(this).val();
    })
    $('.ban_ctn').on('change', function () {
        port_in.ban = $(this).val()
    })
    $('.ctn_available').on('change', function () {
        port_in.available = $(this).val()
    })
    $('.additional_info_port_in').on('change', function () {
        port_in.data = $(this).val();
    })
}

function displayNotesPortIn(){
    return $('\
    <p>Request type : '+ port_in.typeRequest+'  || CTN : ' + port_in.ctn + ' || effective date : ' + port_in.effectiveDate + '</p>\
    <p>Phone number to port : '+ port_in.ctnToPort +'  ||  Availability on v21 : '+ port_in.available +' || BAN old account : '+ port_in.ban +'</p>\
    <p>Additional info: '+ port_in.data +'</p>\
    ');
}
