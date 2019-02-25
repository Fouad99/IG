

/**  functions to fire when buttons are presse BEGINING ---------------**/

var add_reason = function(index){
    return $('\
       <div id="reason_container'+index+'" class="rx">\
       <div class="row reason_field">\
        <div class="col-md-3 col-lg-3">\
        <label>Reason: </label>\
        <select id="additional_reason" class="form-control">\
        <option value="blank" >Choose option.. </option>\
        <option value="Billing dispute">Billing dispute</option>\
        <option value="Contract related">Contract related</option>\
        <option value="Monthly plan related">Monthly plan related</option>\
        <option value="Unlocking device">Unlocking device</option>\
        <option value="Cancel">Cancellation</option>\
        <option value="Other">Other</option>\
        </select>\
        </div>\
        </div>\
    ');
};


var add_offer = function() {
    return $('\
        <div class="row">\
                  <div class="col-md-3 col-lg-3">\
                       <label>Solution : </label>\
                       <select class="form-control">\
                          <option value="credit">Credit</option>\
                          <option value="adjustment">Adjustment</option>\
                          <option value="pp">Plan Change</option>\
                          <option value="addon">Free/Loyalty Add ons</option>\
                          <option value="escalation">SUP Escalation</option>\
                       </select>\
                  </div>\
                  <div class="col-md-2 col-lg-2">\
                    <label>ACC Amount</label>\
                    <input type="number" class="form-control" id="credit_amount" placeholder="Amount">\
                    </div>\
                  <div class="col-md-2 col-lg-2">\
                      <label>ACC Code</label>\
                      <input type="text" class="form-control" placeholder="Soc code" id="soc_code">\
                  </div>\
                  <div class="col-md-2 col-lg-2">\
                       <label>Status</label>\
                       <select id="status" class="form-control">\
                       <option value="blank">Choose option..</option>\
                       <option value="Accepted">Accepted</option>\
                       <option value="Refused">Refused</option>\
                       </select>\
                       </div>\
                  </div>');
};


/**  functions to fire when buttons are pressed
 ENDING ---------------**/




