/**START -  TEMPLATE OF THE CONTRACT RELATED OPTIONS **/
let reason_contract_related = $('<div class="row"><div class="col-md-3 col-lg-3" >\
                                  <label>Specify the request</label>\
                                  <select class="form-control contract_related_type">\
                                  <option>Choose option..</option>\
                                  <option value="HUP with no current contract">HUP with no current contract</option>\
                                  <option value="HUP with current contract">HUP with current contract</option>\
                                  <option value="Exchange or return device">Customer wants to exchange/return a device</option>\
                                  <option value="Pay off the contract">Customer wants to pay off the contract</option>\
                                  <option value="change_plan">Customer wants to change monthly plan</option>\
                                  </select></div>\
                                  <div class="col-lg-3 col-md-3">\
                                  <label>Phone number</label>\
                                  <input type="number" class="form-control ctn" placeholder="514-555-5555"></div>\
                                  <div class="col-lg-3 col-md-3">\
                                  <label>Effective date of change :</label>\
                                  <input type="date" class="form-control invoice_date" placeholder="mm/dd/yyyy"></div>\
                                  </div></div>');

/**END - TEMPLATE OF THE CONTRACT RELATED OPTIONS **/

let Bool_contract_related_hup_no_contract = false;
let Bool_contract_related_hup_with_contract = false ;
let Bool_contract_related_ex = false ;
let Bool_contract_related_pay_off = false ;
let Bool_contract_pp = false ;

function setOff_controllers_contract_lvl1(a,b,c,d,e,f){
    if (f === undefined){f = false}
    a = false ; b = false ; c = false ; d = false ; e = false ;

}

/** START -  TEMPLATE OF THE CONTRACT RELATED OPTIONS |****** HUP TO NEW PHONE ****** | ------------------------------- */

let hup_no_contract_template = $('\
<div class="to_remove"><div class="row">\
<div class="panel panel-default">\
<div class="panel-heading">Fill info of Device part</div> \
<div class="panel-body">\
<div class="col-md-3 col-lg-3">\
<label>Device details : </label>\
<select class="form-control device_type">\
<option value="blank">Choose option..</option>\
<option value="IPHONE6 32GB GREY">APPLE|IPHONE 6 32GB|GREY</option>\
<option value="IPHONE6 32GB BLACK">APPLE|IPHONE 6 32GB|BLACK</option>\
<option value="IPHONE6S 32GB BLACK">APPLE|IPHONE 6S 32GB|GREY</option>\
<option value="IPHONE6S 64GB BLACK">APPLE|IPHONE 6S 64GB|BLACK</option>\
<option value="IPHONE7 32GB JETBLACK">APPLE|IPHONE 7 32GB|JETBLACK</option>\
<option value="IPHONE7 32GB ROSEGOLD">APPLE|IPHONE 7 32GB|ROSEGOLD</option>\
<option value="IPHONE7 128GB JETBLACK">APPLE|IPHONE 7 128GB|JETBLACK</option>\
<option value="IPHONE7 128GB ROSEGOLD">APPLE|IPHONE 7 128GB|ROSEGOLD</option>\
<option value="IPHONE7S 128GB JETBLACK">APPLE|IPHONE 7S 128G|JETBLACK</option>\
<option value="IPHONE8 64GB SPACEGREY">APPLE|IPHONE 8 64GB|SPACEGREY</option>\
<option value="IPHONE8PL 64GB SPACEGREY">APPLE|IPHONE 8PL 64GB|SPACEGREY</option>\
<option value="IPHONE X 64GB SILVER">APPLE|IPHONE X 64G|SILVER</option>\
</select>\
</div>\
<div class="col-md-2 col-lg-2">\
<label>Select V21 discount on hup</label>\
<select class="form-control promo">\
<option value="blank">Choose option..</option>\
<option value="no V21 hup discount">No discount</option>\
<option value="Sweet Deal">Sweet Deal</option>\
<option value="LOYAL HUP">Loyal Hup</option>\
</select>\
</div>\
<div class="col-lg-2 col-md-2">\
<label>Category of the Tier :</label>\
<select class="form-control tier">\
<option value="blank">Choose option..</option>\
<option value="Small">Small</option>\
<option value="Medium">Medium</option>\
<option value="Large">Large</option>\
<option value="Extra large">Extra large</option>\
<option value="Plus20">Plus20 - equivalent large - </option>\
<option value="Plus15">Plus15 - equivalent medium - </option>\
<option value="Smart">Smart - equivalent small - </option>\
</select>\
</div>\
<div class="col-lg-1 col-md-1">\
<label>Any BPO ?</label>\
<select class="form-control bpo">\
<option value="blank">Choose option..</option>\
<option value="No BPO">No BPO</option>\
<option value="BPO 50">50</option>\
<option value="BPO 75">75</option>\
<option value="BPO 100">100</option>\
<option value="BPO 150">150</option>\
</select>\
</div>\
<div class="col-lg-1 col-md-1">\
<label>Pricematch ?</label>\
<input type="text" class="form-control fcreth">\
</div>\
<div class="col-md-2 col-lg-2">\
<p><strong>Is phone Backordered ?</strong></p>\
<label class="radio-inline"><input type="radio" name="backorder" value="yes">YES</label>\
<label class="radio-inline"><input type="radio" name="backorder" value="no">NO</label>\
</div>\
</div>\
</div>\
<div class="panel panel-default">\
<div class="panel-heading">Fill info of monthly service</div> \
<div class="panel-body">\
<div class="col-md-3 col-lg-3">\
<label>Select monthly plan</label>\
<select class="form-control plan">\
<option value="blank">Choose option..</option>\
<option value="CNPPPP2 | 55$ (unlmtd. 5GB)">CNPPPP2 | 55$ (unlmtd. 5GB)</option>\
<option value="ZNPPPP2 | 100$ (unlmtd. 5GB)">ZNPPPP2 | 100$ (unlmtd. 5GB)</option>\
<option value="ANPPPP2 | 75$ (unlmtd. 5GB)">ANPPPP2 | 75$ (unlmtd. 5GB)</option>\
<option value="XNPPPP2 | 70$ (unlmtd. 5GB)">XNPPPP2 | 70$ (unlmtd. 5GB)</option>\
<option value="PNPPPP2 | 85$ (unlmtd. 5GB)">PNPPPP2 | 85$ (unlmtd. 5GB)</option>\
<option value="AANPPP | 55$ (unlmtd. 5GB)">AANPPP | 55$ (unlmtd. 5GB)</option>\
</select>\
</div>\
<div class="col-md-2 col-lg-2">\
<label>Any Addon ?</label>\
<select class="form-control addon">\
<option value="blank">Choose option..</option>\
<option value="Fido Device Protection">FDPPERT | FDP 11$</option>\
<option value="Value Pack">VPPRTR | Value pack 7$</option>\
<option value="Premium rate international calls">PROOTR | Premium rate LD 5$</option>\
<option value="Name Display">EEERTR | Name display 2$</option>\
</select>\
</div>\
<div class="col-md-2 col-lg-2">\
<label>Any Discount ?</label>\
<select class="form-control addon">\
<option value="blank">Choose option..</option>\
<option value="Retention 5$ off for 6 months">RSTRW | 5$ off 6 months</option>\
<option value="Retention 5$ off for 12 months">RSTRE | 5$ off 12 months</option>\
<option value="Retention 10$ off for 6 months">RSTRW | 10$ off 6 months</option>\
<option value="Retention 10$ off for 12 months">RSTRW | 10$ off 12 months</option>\
<option value="Retention 25% off for 12 months">RSTRW | 25% off 12 months</option>\
<option value="Retention 25% off for 24 months">RSTRW | 25% off 24 months</option>\
</select>\
</div>\
<div class="col-lg-2 col-md-2">\
<label>Any Bonus addon ?</label>\
<select class="form-control bonus">\
<option value="blank">Choose option..</option> \
<option value="1GB for 12 months">ERTFF| 1GB for 12 months</option>\
<option value="1GB for 24 months">ERTFF| 1GB for 24 months</option>\
<option value="2GB for 12 months">ERTFF| 2GB for 12 months</option>\
<option value="2GB for 24 months">ERTFF| 2GB for 24 months</option>\
<option value="3GB for 12 months">ERTFF| 3GB for 12 months</option>\
<option value="5GB for 12 months">ERTFF| 5GB for 12 months</option>\n\
</select> \
</div>\
<div class="col-md-2 col-lg-2">\
<p><strong>Are all PTM mentioned ?</strong></p>\
<label class="radio-inline"><input type="radio" name="ptm" value="Yes">Yes</label>\
<label class="radio-inline"><input type="radio" name="ptm" value="No">No</label>\
</div>\
</div>\
</div>\
</div>\
<div class="row"><div class="col-md-6 col-lg-6">\
<p><strong>Give a summary of the situation and the offers that customer refused :</strong></p>\
<textarea rows="10" class="form-control" id="summary_data_overage"></textarea>\
</div>\
<label><a class="btn btn-default hint_trigger" style="margin-right: 6px">Get indications</a><a class="btn btn-default hint_hidder">Hide indications</a></label>\
<div class="col-md-5 col-lg-5 hint_section" \
style="display: none; font-weight: bold;background-color: yellow; border: 2px solid; padding: 10px">\
'+ hint_contract_related_hup_no_contract.html() + '\
</div>\
</div>\
</div>\
');

let hup_with_contract_template = $('\
<div class="to_remove"><div class="row">\
<div class="col-md-3 col-lg-3">\
<label>Enter the amount of Early cancellation Fee</label>\
<input type="text" class="form-control ecf" placeholder="input the amount">\
</div></div>\
<div class="row"><div class="panel panel-default">\
<div class="panel-heading">Fill info of Device part</div> \
<div class="panel-body">\
<div class="col-md-3 col-lg-3">\
<label>Device details : </label>\
<select class="form-control device_type">\
<option value="blank">Choose option..</option>\
<option value="IPHONE6 32GB GREY">APPLE|IPHONE 6 32GB|GREY</option>\
<option value="IPHONE6 32GB BLACK">APPLE|IPHONE 6 32GB|BLACK</option>\
<option value="IPHONE6S 32GB BLACK">APPLE|IPHONE 6S 32GB|GREY</option>\
<option value="IPHONE6S 64GB BLACK">APPLE|IPHONE 6S 64GB|BLACK</option>\
<option value="IPHONE7 32GB JETBLACK">APPLE|IPHONE 7 32GB|JETBLACK</option>\
<option value="IPHONE7 32GB ROSEGOLD">APPLE|IPHONE 7 32GB|ROSEGOLD</option>\
<option value="IPHONE7 128GB JETBLACK">APPLE|IPHONE 7 128GB|JETBLACK</option>\
<option value="IPHONE7 128GB ROSEGOLD">APPLE|IPHONE 7 128GB|ROSEGOLD</option>\
<option value="IPHONE7S 128GB JETBLACK">APPLE|IPHONE 7S 128G|JETBLACK</option>\
<option value="IPHONE8 64GB SPACEGREY">APPLE|IPHONE 8 64GB|SPACEGREY</option>\
<option value="IPHONE8PL 64GB SPACEGREY">APPLE|IPHONE 8PL 64GB|SPACEGREY</option>\
<option value="IPHONE X 64GB SILVER">APPLE|IPHONE X 64G|SILVER</option>\
</select>\
</div>\
<div class="col-md-2 col-lg-2">\
<label>Select V21 discount on hup</label>\
<select class="form-control promo">\
<option value="blank">Choose option..</option>\
<option value="no V21 hup discount">No discount</option>\
<option value="100$ off the ECF">100$ off the ECF</option> \
<option value="Sweet Deal">Sweet Deal</option>\
<option value="LOYAL HUP">Loyal Hup</option>\
</select>\
</div>\
<div class="col-lg-2 col-md-2">\
<label>Category of the Tier :</label>\
<select class="form-control tier">\
<option value="blank">Choose option..</option>\
<option value="Small">Small</option>\
<option value="Medium">Medium</option>\
<option value="Large">Large</option>\
<option value="Extra large">Extra large</option>\
<option value="Plus20">Plus20 - equivalent large - </option>\
<option value="Plus15">Plus15 - equivalent medium - </option>\
<option value="Smart">Smart - equivalent small - </option>\
</select>\
</div>\
<div class="col-lg-1 col-md-1">\
<label>Any BPO ?</label>\
<select class="form-control bpo">\
<option value="blank">Choose option..</option>\
<option value="No BPO">No BPO</option>\
<option value="BPO 50">50</option>\
<option value="BPO 75">75</option>\
<option value="BPO 100">100</option>\
<option value="BPO 150">150</option>\
</select>\
</div>\
<div class="col-lg-1 col-md-1">\
<label>Pricematch ?</label>\
<input type="text" class="form-control fcreth">\
</div>\
<div class="col-md-2 col-lg-2">\
<p><strong>Is phone Backordered ?</strong></p>\
<label class="radio-inline"><input type="radio" name="backorder" value="yes">YES</label>\
<label class="radio-inline"><input type="radio" name="backorder" value="no">NO</label>\
</div>\
</div>\
</div>\
<div class="panel panel-default">\
<div class="panel-heading">Fill info of monthly service</div> \
<div class="panel-body">\
<div class="col-md-3 col-lg-3">\
<label>Select monthly plan</label>\
<select class="form-control plan">\
<option value="blank">Choose option..</option>\
<option value="CNPPPP2 | 55$ (unlmtd. 5GB)">CNPPPP2 | 55$ (unlmtd. 5GB)</option>\
<option value="ZNPPPP2 | 100$ (unlmtd. 5GB)">ZNPPPP2 | 100$ (unlmtd. 5GB)</option>\
<option value="ANPPPP2 | 75$ (unlmtd. 5GB)">ANPPPP2 | 75$ (unlmtd. 5GB)</option>\
<option value="XNPPPP2 | 70$ (unlmtd. 5GB)">XNPPPP2 | 70$ (unlmtd. 5GB)</option>\
<option value="PNPPPP2 | 85$ (unlmtd. 5GB)">PNPPPP2 | 85$ (unlmtd. 5GB)</option>\
<option value="AANPPP | 55$ (unlmtd. 5GB)">AANPPP | 55$ (unlmtd. 5GB)</option>\
</select>\
</div>\
<div class="col-md-2 col-lg-2">\
<label>Any Addon ?</label>\
<select class="form-control addon">\
<option value="blank">Choose option..</option>\
<option value="Fido Device Protection">FDPPERT | FDP 11$</option>\
<option value="Value Pack">VPPRTR | Value pack 7$</option>\
<option value="Premium rate international calls">PROOTR | Premium rate LD 5$</option>\
<option value="Name Display">EEERTR | Name display 2$</option>\
</select>\
</div>\
<div class="col-md-2 col-lg-2">\
<label>Any Discount ?</label>\
<select class="form-control addon">\
<option value="blank">Choose option..</option>\
<option value="Retention 5$ off for 6 months">RSTRW | 5$ off 6 months</option>\
<option value="Retention 5$ off for 12 months">RSTRE | 5$ off 12 months</option>\
<option value="Retention 10$ off for 6 months">RSTRW | 10$ off 6 months</option>\
<option value="Retention 10$ off for 12 months">RSTRW | 10$ off 12 months</option>\
<option value="Retention 25% off for 12 months">RSTRW | 25% off 12 months</option>\
<option value="Retention 25% off for 24 months">RSTRW | 25% off 24 months</option>\
</select>\
</div>\
<div class="col-lg-2 col-md-2">\
<label>Any Bonus addon ?</label>\
<select class="form-control bonus">\
<option value="blank">Choose option..</option> \
<option value="1GB for 12 months">ERTFF| 1GB for 12 months</option>\
<option value="1GB for 24 months">ERTFF| 1GB for 24 months</option>\
<option value="2GB for 12 months">ERTFF| 2GB for 12 months</option>\
<option value="2GB for 24 months">ERTFF| 2GB for 24 months</option>\
<option value="3GB for 12 months">ERTFF| 3GB for 12 months</option>\
<option value="5GB for 12 months">ERTFF| 5GB for 12 months</option>\n\
</select> \
</div>\
<div class="col-md-2 col-lg-2">\
<p><strong>Are all PTM mentioned ?</strong></p>\
<label class="radio-inline"><input type="radio" name="ptm" value="Yes">Yes</label>\
<label class="radio-inline"><input type="radio" name="ptm" value="No">No</label>\
</div>\
</div>\
</div>\
</div>\
<div class="row"><div class="col-md-6 col-lg-6">\
<p><strong>Give a summary of the situation and the offers that customer refused :</strong></p>\
<textarea rows="10" class="form-control" id="summary_data_overage"></textarea>\
</div>\
<label><a class="btn btn-default hint_trigger" style="margin-right: 6px">Get indications</a><a class="btn btn-default hint_hidder">Hide indications</a></label>\
<div class="col-md-5 col-lg-5 hint_section" \
style="display: none; font-weight: bold;background-color: yellow; border: 2px solid; padding: 10px">\
'+ hint_contract_related_hup_no_contract.html() + '\
</div>\
</div>\
</div>\
');



let exchange_return_device_template = $('\
<div class="to_remove">\
<div class="row"><div class="col-md-3 col-lg-3">\
<p><strong>Within 15 days of satisfaction guarantee ?</strong></p>\
<label class="radio-inline"><input type="radio" name="guarantee" value="Yes">Yes</label>\
<label class="radio-inline"><input type="radio" name="guarantee" value="No">No</label>\
</div>\
<div class="col-md-3 col-lg-3">\
<p><strong>Has the phone been broken ?</strong></p>\
<label class="radio-inline"><input type="radio" name="broken" value="Yes">Yes</label>\
<label class="radio-inline"><input type="radio" name="broken" value="No">No</label>\
</div>\
<div class="col-md-3 col-lg-3">\
<p><strong>Has the way bill been sent yet ?</strong></p>\
<label class="radio-inline"><input type="radio" name="FidoTrade" value="Yes">Yes</label>\
<label class="radio-inline"><input type="radio" name="FidoTrade" value="No">No</label> \
</div>\
</div>\
<div class="row"><div class="col-md-6 col-lg-6">\
<p><strong>Give a summary of the situation and the offers that customer refused :</strong></p>\
<textarea rows="10" class="form-control" id="summary_data_overage"></textarea>\
</div>\
<label><a class="btn btn-default hint_trigger" style="margin-right: 6px">Get indications</a><a class="btn btn-default hint_hidder">Hide indications</a></label>\
<div class="col-md-5 col-lg-5 hint_section" \
style="display: none; font-weight: bold;background-color: yellow; border: 2px solid; padding: 10px">\
'+ hint_contract_related_ex.html() + '\
</div>\
</div>\
</div> \
</div>\
');


/** END -  TEMPLATE OF THE CONTRACT RELATED OPTIONS |****** EXCHANGE/RETURN ****** | ------------------------------- */






/** START -  TEMPLATE OF THE CONTRACT RELATED OPTIONS |****** PAY OFF THE CONTRACT ****** | ------------------------------- */

let pay_off_template = $('\
<div class="to_remove">\
<div class="row"><div class="col-md-3 col-lg-3">\
<p><strong>Within 15 days of satisfaction guarantee ?</strong></p>\
<label class="radio-inline"><input type="radio" name="guarantee" value="Yes">Yes</label>\
<label class="radio-inline"><input type="radio" name="guarantee" value="No">No</label>\
</div>\
<div class="col-md-3 col-lg-3">\
<p><strong>Has the phone been broken ?</strong></p>\
<label class="radio-inline"><input type="radio" name="broken" value="Yes">Yes</label>\
<label class="radio-inline"><input type="radio" name="broken" value="No">No</label>\
</div>\
<div class="col-md-3 col-lg-3">\
<p><strong>Has the way bill been sent yet ?</strong></p>\
<label class="radio-inline"><input type="radio" name="FidoTrade" value="Yes">Yes</label>\
<label class="radio-inline"><input type="radio" name="FidoTrade" value="No">No</label> \
</div>\
</div>\
<div class="row"><div class="col-md-6 col-lg-6">\
<p><strong>Give a summary of the situation and the offers that customer refused :</strong></p>\
<textarea rows="10" class="form-control" id="summary_data_overage"></textarea>\
</div>\
<label><a class="btn btn-default hint_trigger" style="margin-right: 6px">Get indications</a><a class="btn btn-default hint_hidder">Hide indications</a></label>\
<div class="col-md-5 col-lg-5 hint_section" \
style="display: none; font-weight: bold;background-color: yellow; border: 2px solid; padding: 10px">\
'+ hint_contract_related_ex.html() + '\
</div>\
</div>\
</div> \
</div>\
');

/** END -  TEMPLATE OF THE CONTRACT RELATED OPTIONS |****** PAY OFF THE CONTRACT ****** | ------------------------------- */



/** START -  TEMPLATE OF THE CONTRACT RELATED OPTIONS |****** CHANGE THE PLAN ****** | ------------------------------- */

var change_the_plan_template = $('<div class="row to_remove"><div class="col-md-3">\
                                          <label>Bunch of info for change the plan</label></div></div>');


/** END -  TEMPLATE OF THE CONTRACT RELATED OPTIONS |****** CHANGE THE PLAN ****** | ------------------------------- */














