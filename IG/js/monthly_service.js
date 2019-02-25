/**START -  TEMPLATE OF THE MONTHLY PLAN RELATED OPTIONS **/
var reason_monthly_plan_related = $('<div class="row"><div class="col-md-3 col-lg-3" >\
                                  <label>Specify the request</label>\
                                  <select class="form-control monthly_plan_related_type">\
                                  <option>Choose option..</option>\
                                  <option value="change_plan">Change monthly plan</option>\
                                  <option value="add_addon">Add a monthly addon</option>\
                                  <option value="remove_addon">Remove a monthly addon</option>\
                                  <option value="remove_bonus">add a monthly bonus</option>\
                                  <option value="add_bonus">remove a monthly bonus</option>\
                                  </select>\
                                  </div>\
                                  <div class="col-md-3 col-lg-3">\
                                  <label>Effective date :</label>\
                                  <input type="date" class="form-control invoice_date_monthly_service" placeholder="mm/dd/yyyy">\
                                  </div>\
                                  <div class="col-lg-3 col-md-3">\
                                  <label>Phone number :</label>\
                                  <input type="tel" class="form-control monthly_service_ctn" placeholder="514-999-9999">\
                                  </div>\
                                  </div>');

/**END OF TEMPLATE  **/


/** START -  TEMPLATE OF THE MONTHLY PLAN RELATED OPTIONS |****** REMOVE ADDON ****** | ------------------------------- */

var change_plan_template = function(){
    return $('\
<div class="to_remove">\
<div class="row">\
                           <div class="col-md-3 col-lg-3">\
                           <label>Select plan</label>\
                           <select class="form-control monthly_plan_soc">\
                           <option>Choose option..</option>\
                           <option>CNPPPP2 | 55$ (unlmtd. 5GB)</option>\
                           <option>ZNPPPP2 | 100$ (unlmtd. 5GB)</option>\
                           <option>ANPPPP2 | 75$ (unlmtd. 5GB)</option>\
                           <option>XNPPPP2 | 70$ (unlmtd. 5GB)</option>\
                           <option>PNPPPP2 | 85$ (unlmtd. 5GB)</option>\
                           <option>AANPPP | 55$ (unlmtd. 5GB)</option>\
                           </select>\
                           </div>\
                           <div class="col-md-3 col-lg-3">\
                           <label>Any addon ?</label>\
                           <select class="form-control monthly_addon">\
                           <option>Choose option..</option>\
                           <option>None</option>\
                           <option>Fido Device Protection 11$|FDPRRT</option>\
                           <option>Value Pack 7$|OPRTEZ</option>\
                           <option>Premium rates LDC 5$|OLFOEZ</option>\
                           <option>Name Display 2$|LOPLFE</option>\
                           </select>\
                           </div>\
                           <div class="col-md-3 col-lg-3">\
                           <label>Any discount ?</label>\
                           <select class="form-control monthly_discount">\
                           <option>Choose option..</option>\
                           <option>None</option>\
                           <option>Retention 5$ off 6months| RSTER</option>\
                           <option>Retention 5$ off 12months| RSTRR</option>\
                           <option>Retention 10$ off 12months| RETYS</option>\
                           <option>Retention 25% off 12 months| TAG228</option>\
                           </select>\
                           </div>\
                           <div class="col-md-3 col-lg-3">\
                           <label>Any Bonus ?</label>\
                           <select class="form-control monthly_bonus">\
                           <option>Choose option..</option>\
                           <option>None</option>\
                           <option>1GB Data 12months|RTGB12</option>\
                           <option>1GB Data 24months|RTB24</option>\
<option>2GB Data 12months|RTC12</option>\
<option>2GB Data 24months|RTC24</option>\
<option>3GB Data 12months|RRT12</option>\
<option>3GB Data 24months|RRT24</option>\
<option>500minutes 12months|RMT12</option>\
<option>1000minutes 12months|RMT12</option>\
</select>\
</div>\
</div>\
<div class="row">\
<div class="col-lg-5 col-md-5">\
<p><strong>Give additional information you think important</strong></p>\
<textarea rows="10" class="form-control additional_info_change_plan"></textarea>\
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
</div> \
</div>\
')}


let change_plan =  {
    typeRequest: "Change of monthly plan",
    effectiveDate: "",
    ctn: "",
    soc: "",
    addon: "",
    discount: "",
    bonus: "",
    data: "None"
}

function getNotesChangePlan(){
    $('.invoice_date_monthly_service').on('change', function () {
        change_plan.effectiveDate = $(this).val();
    })
    $('.monthly_service_ctn').on('change', function () {
        change_plan.ctn = $(this).val();
    })
    $('.monthly_plan_soc').on('change', function () {
        change_plan.soc = $(this).val();
    })
    $('.monthly_addon').on('change', function () {
        change_plan.addon = $(this).val()
    })
    $('.monthly_discount').on('change', function () {
        change_plan.discount = $(this).val()
    })
    $('.monthly_bonus').on('change', function () {
        change_plan.bonus = $(this).val()
    })
    $('.additional_info_change_plan').on('change', function () {
        change_plan.data = $(this).val()
    })
}

function displayNotesChangePlan(){
    return $('\
    <p>Request type : '+ change_plan.typeRequest+'  || CTN : ' + change_plan.ctn + ' || effective date : ' + change_plan.effectiveDate + '</p>\
    <p>Plan : '+ change_plan.soc +'  ||  Addon : '+ change_plan.addon +' || Discount : '+ change_plan.discount +' || Bonus : '+ change_plan.bonus+'</p>\
    <p>Additional info: '+ change_plan.data +'</p>\
    ')
}








/** END -  TEMPLATE OF THE MONTHLY PLAN RELATED OPTIONS |****** REMOVE ADDON ****** | ------------------------------- */


/** START -  TEMPLATE OF THE MONTHLY PLAN RELATED OPTIONS |****** REMOVE ADDON ****** | ------------------------------- */

var remove_addon_template = $('<div class="col-md-3">\
                                          <label>Bunch of info for removing the addon</label></div>');


/** END -  TEMPLATE OF THE MONTHLY PLAN RELATED OPTIONS |****** REMOVE ADDON ****** | ------------------------------- */



/** START -  TEMPLATE OF THE MONTHLY PLAN RELATED OPTIONS |****** ADD ADDON ****** | ------------------------------- */

var add_addon_template = $('<div class="col-md-3">\
                                          <label>Bunch of info for adding the addon</label></div>');


/** END -  TEMPLATE OF THE MONTHLY PLAN RELATED OPTIONS |****** ADD ADDON ****** | ------------------------------- */


/** START -  TEMPLATE OF THE MONTHLY PLAN RELATED OPTIONS |****** ADD BONUS ****** | ------------------------------- */

var add_bonus_template = $('<div class="col-md-3">\
                                          <label>Bunch of info for adding bonus</label></div>');


/** END -  TEMPLATE OF THE MONTHLY PLAN RELATED OPTIONS |****** ADD BONUS ****** | ------------------------------- */



/** START -  TEMPLATE OF THE MONTHLY PLAN RELATED OPTIONS |****** REMOVE BONUS ****** | ------------------------------- */

var remove_bonus_template = $('<div class="col-md-3">\
                                          <label>Bunch of info for removing the bonus</label></div>');


/** END -  TEMPLATE OF THE MONTHLY PLAN RELATED OPTIONS |****** REMOVE BONUS ****** | ------------------------------- */


