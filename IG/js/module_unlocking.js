var unlocking_template = $('\
                                 <div class="col-md-3 col-lg-3">\
                                 <p>Is the device blacklisted ?</p>\
                                 <label class="radio-inline"><input type="radio" name="blk">Yes</label> \
                                 <label class="radio-inline"><input type="radio" name="blk">No</label> \
                                 </div>\
                                 <div class="col-md-3 col-lg-3">\
                                 <p>Is the device ?</p>\
                                 <label class="radio-inline"><input type="radio" name="and">Android</label>\
                                 <label class="radio-inline"><input type="radio" name="and">Apple</label>\
                                 </div>\
                                 <div class="col-lg-3 col-md-3">\
                                 <label>Enter IMEI code : </label>\
                                 <input type="number" class="form-control" name="imei">\
                                 </div>\
                                 <div class="col-md-3 col-lg-3">\
                                 <label>Unlocking code</label>\
                                 <input type="number" class="form-control" name="unlok">\
                                 </div>\
                                ');