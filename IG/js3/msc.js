let one_ctn_template = $('\
                          <div class="row"><div class="col-md-3 col-lg-3">\
                          <label>Enter phone number :</label>\
                          <input type="text" class="form-control phone_number1" placeholder="5149999999"></div></div>                                              \
                         ');

let two_ctn_template = $('\
                          <div class="row"><div class="col-md-3 col-lg-3">\
                          <label>Enter phone number :</label>\
                          <input type="text" class="form-control phone_number1" placeholder="5149999999"></div>\
                          <div class="col-md-3 col-lg-3">\
                          <label>Enter phone number :</label>\
                          <input type="text" class="form-control phone_number2" placeholder="5149999999"></div></div>\
                         ');

let three_ctn_template = $('\
                          <div class="row"><div class="col-md-3 col-lg-3">\
                          <label>Enter phone number :</label>\
                          <input type="text" class="form-control phone_number1" placeholder="5149999999"></div>\
                          <div class="col-md-3 col-lg-3">\
                          <label>Enter phone number :</label>\
                          <input type="text" class="form-control phone_number2" placeholder="5149999999"></div>\
                          <div class="col-md-3 col-lg-3">\
                          <label>Enter phone number :</label>\
                          <input type="text" class="form-control phone_number3" placeholder="5149999999"></div>\
                          </div>\
                         ');


let four_ctn_template = $('\
                          <div class="row"><div class="col-md-3 col-lg-3">\
                          <label>Enter phone number :</label>\
                          <input type="text" class="form-control phone_number1" placeholder="5149999999"></div>\
                          <div class="col-md-3 col-lg-3">\
                          <label>Enter phone number :</label>\
                          <input type="text" class="form-control phone_number2" placeholder="5149999999"></div>\
                          <div class="col-md-3 col-lg-3">\
                          <label>Enter phone number :</label>\
                          <input type="text" class="form-control phone_number3" placeholder="5149999999"></div>\
                          <div class="col-md-3 col-lg-3">\
                          <label>Enter phone number :</label>\
                          <input type="text" class="form-control phone_number4" placeholder="5149999999"></div>\
                          </div>\
                         ');


let five_ctn_template = $('\
                          <div class="row"><div class="col-md-3 col-lg-3">\
                          <label>Enter phone number :</label>\
                          <input type="text" class="form-control phone_number1" placeholder="5149999999"></div>\
                          <div class="col-md-3 col-lg-3">\
                          <label>Enter phone number :</label>\
                          <input type="text" class="form-control phone_number2" placeholder="5149999999"></div>\
                          <div class="col-md-3 col-lg-3">\
                          <label>Enter phone number :</label>\
                          <input type="text" class="form-control phone_number3" placeholder="5149999999"></div>\
                          <div class="col-md-3 col-lg-3">\
                          <label>Enter phone number :</label>\
                          <input type="text" class="form-control phone_number4" placeholder="5149999999"></div>\
                          <div class="col-md-3 col-lg-3">\
                          <label>Enter phone number :</label>\
                          <input type="text" class="form-control phone_number5" placeholder="5149999999"></div></div>\
                          ');



//---------------------------------------------------------//

let msc_billing_dispute = $('\
                                <div class="remove"><div class="row">\
                                <div class="col-md-3 col-lg-3">\
                                <label>Billing issue :</label>\
                                <select class="form-control type_issue">\
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
                                </div></div>\
                                <div class="row">\
                                <div class="col-md-8 col-lg-8">\
                                <p><strong>Give a summary of the situation the customer has :</strong></p>\
                                <textarea rows="10" class="form-control type_issue_situation"></textarea>\
                                </div></div>\
                                <div class="row">\
                                <div class="col-md-8 col-lg-8">\
                                <p><strong>Give a summary of the solutions you offered to the customer :</strong></p>\
                                <textarea rows="10" class="form-control type_issue_solution"></textarea>\
                                 </div></div>\
                                </div>  ');

let msc_transaction_issue = $('\
                                <div class="remove"><div class="row">\
                                <div class="col-md-3 col-lg-3">\
                                <label>Transaction issue :</label>\
                                <select class="form-control transaction_issue">\
                                <option value="blank">Choose option..</option>\
                                <option value="option 1">option 1</option>\
                                <option value="option 2">option 2</option>\
                                <option value="option 3">option 3</option>\
                                </select>\
                                </div></div>\
                                <div class="row">\
                                <div class="col-md-8 col-lg-8">\
                                <p><strong>Give a summary of the situation the customer has :</strong></p>\
                                <textarea rows="10" class="form-control transaction_situaton"></textarea>\
                                </div></div>\
                                <div class="row">\
                                <div class="col-md-8 col-lg-8">\
                                <p><strong>Give a summary of the solutions you offered to the customer :</strong></p>\
                                <textarea rows="10" class="form-control transaction_solution"></textarea>\
                                 </div></div>\
                                </div>  ');

let msc_unlocking = $('\
                                 <div class="remove">\
                                 <div class="row">\
                                 <div class="col-md-2 col-lg-2">\
                                 <p>Is the device blacklisted ?</p>\
                                 <label class="radio-inline"><input type="radio" name="blk" value="Yes">Yes</label> \
                                 <label class="radio-inline"><input type="radio" name="blk" value="No">No</label> \
                                 </div>\
                                 <div class="col-md-2 col-lg-2">\
                                 <p>Is the device ?</p>\
                                 <label class="radio-inline"><input type="radio" name="and" value="Android">Android</label>\
                                 <label class="radio-inline"><input type="radio" name="and" value="Apple">Apple</label>\
                                 </div>\
                                 <div class="col-md-2 col-lg-2">\
                                 <p>Has the unlocking been escalated ?</p>\
                                 <label class="radio-inline"><input type="radio" name="esc" value="Yes">Yes</label>\
                                 <label class="radio-inline"><input type="radio" name="esc" value="No">No</label>\
                                 </div>\
                                 <div class="col-lg-3 col-md-3">\
                                 <label>Enter IMEI code : </label>\
                                 <input type="number" class="form-control imei_code" placeholder="999999999999999999999">\
                                 </div>\
                                 <div class="col-md-3 col-lg-3">\
                                 <label>Unlocking code</label>\
                                 <input type="number" class="form-control Unlocking_code" placeholder="1234567890">\
                                 </div></div>\
                                 <div class="row">\
                                 <div class="col-md-8 col-lg-8">\
                                 <p><strong>Give a summary of the situation the customer has :</strong></p>\
                                 <textarea rows="10" class="form-control" id="summary_data_overage"></textarea>\
                                 </div></div>\
                                 <div class="row">\
                                 <div class="col-md-8 col-lg-8">\
                                 <p><strong>Give a summary of the solutions you offered to the customer :</strong></p>\
                                 <textarea rows="10" class="form-control" id="summary_data_overage"></textarea>\
                                 </div></div>\
                                 </div>\
                                ');

let msc_cancellation = $('\
                                <div class="remove"><div class="row">\
                                <div class="col-md-3 col-lg-3">\
                                <label>what type of cancellation ?</label>\
                                <select class="form-control">\
                                <option value="blank">Choose option..</option>\
                                <option value="Cellphone">Cellphone line(s)</option>\
                                <option value="Home phone">Home phone line</option>\
                                <option value="Data line">Data line</option>\
                                <option value="Home internet">Home internet</option>\
                                </select>\
                                </div>\
                                <div class="col-lg-3 col-md-3">\
                                <label>Reason of cancellation : </label>\
                                <select class="form-control reason_cancellation">\
                                <option value="blank">Choose option..</option>\
                                <option value="Permanent leave">Permanent leave</option>\
                                <option value="Temporary leave">Temporary leave</option>\
                                <option value="Port out">Port out</option>\
                                <option value="No longer used">No longer used</option>\
                                </select>\
                                </div></div>\
                                <div class="row">\
                                <div class="col-md-8 col-lg-8">\
                                <p><strong>Give a summary of the situation the customer has :</strong></p>\
                                <textarea rows="10" class="form-control" id="summary_data_overage"></textarea>\
                                </div></div>\
                                <div class="row">\
                                <div class="col-md-8 col-lg-8">\
                                <p><strong>Give a summary of the solutions you offered to the customer :</strong></p>\
                                <textarea rows="10" class="form-control" id="summary_data_overage"></textarea>\
                                </div></div>\
                                </div></div>');


let msc_other = $('\
                                <div class="remove"> \
                                <div class="row">\
                                <div class="col-md-8 col-lg-8">\
                                <p><strong>Give a summary of the situation the customer has :</strong></p>\
                                <textarea rows="10" class="form-control" id="summary_data_overage"></textarea>\
                                </div></div>\
                                <div class="row">\
                                <div class="col-md-8 col-lg-8">\
                                <p><strong>Give a summary of the solutions you offered to the customer :</strong></p>\
                                <textarea rows="10" class="form-control" id="summary_data_overage"></textarea>\
                                </div></div></div>\
');


//---------------------------------------------
/*****/ Bool_ctn_0  = false ;
/*****/ Bool_ctn_1  = false ;
/*****/ Bool_ctn_2  = false ;
/*****/ Bool_ctn_3  = false ;
/*****/ Bool_ctn_4  = false ;
/*****/ Bool_ctn_5  = false ;

//--------------------------------------

/*****/ Bool_billing_dispute = false ;
/*****/ Bool_transaction_issue = false ;
/*****/ Bool_unlocking = false ;
/*****/ Bool_cancellation = false ;
/*****/ Bool_other = false ;

//-------------------------------------------


let comment_1 = {
    department : "",
    ban : "",
    ctn0: "",
    ctn1 : "",
    ctn2 : "",
    ctn3 : "",
    ctn4 : "",
    ctn5 : ""
};

let comment_2 = {
    nature_issue : ""
};

let comment_billing_dispute = {
    issue : "",
    situation : "",
    solution : ""
};

let comment_transaction_issue = {
    issue : "",
    situation : "",
    solution : ""
};

let comment_unlocking = {
    blacklisted : "",
    device : "",
    escalated : "",
    imei : "",
    unlocking_code : "",
    situation : "",
    solution : ""
};

let comment_cancellation = {

    type : "",
    reasom : "",
    situation : "",
    solution : ""
};

let comment_other = {

    situation : "",
    solution : ""
};



$(document).ready(function () {

    $('#Reset').on('click',function () {
        Bool_ctn_1 = false ;
        Bool_ctn_2 = false ;
        Bool_ctn_3 = false ;
        Bool_ctn_4 = false ;
        Bool_ctn_5 = false ;
        /*****/ Bool_billing_dispute = false ;
        /*****/ Bool_transaction_issue = false ;
        /*****/ Bool_unlocking = false ;
        /*****/ Bool_cancellation = false ;
        /*****/ Bool_other = false ;
        $('input').empty();
    });


    $(".department").on("change", function () {
        comment_1.department = $(this).val();
    });

    $(".ban").on("change", function () {
        comment_1.ban = $(this).val();
    });



$(".ctns").on("change", function () {
    $(".ctn_handler").empty();

    switch ($(this).val()) {
        case "0":
            Bool_ctn_0 = true ;
            Bool_ctn_1 = false ;
            Bool_ctn_2 = false ;
            Bool_ctn_3 = false ;
            Bool_ctn_4 = false ;
            Bool_ctn_5 = false ;

            comment_1.ctn0 = $(this).val();
            break;
        case "1" :
            $(".ctn_handler").append(one_ctn_template);
            Bool_ctn_1  = true ;
            Bool_ctn_0 = false ;
            Bool_ctn_2 = false ;
            Bool_ctn_3 = false ;
            Bool_ctn_4 = false ;
            Bool_ctn_5 = false ;

            $(".phone_number1").on("change", function () {
                comment_1.ctn1 = $(this).val();
            });
            break ;


        case "2" :
            $(".ctn_handler").append(two_ctn_template);
            Bool_ctn_2  = true ;
            Bool_ctn_0 = false ;
            Bool_ctn_1 = false ;
            Bool_ctn_3 = false ;
            Bool_ctn_4 = false ;
            Bool_ctn_5 = false ;
            $(".phone_number1").on("change", function () {
                comment_1.ctn1 = $(this).val();
            });
            $(".phone_number2").on("change", function () {
                comment_1.ctn2 = $(this).val();
            });
            break ;

        case "3" :
            $(".ctn_handler").append(three_ctn_template);
            Bool_ctn_3  = true ;
            Bool_ctn_0 = false ;
            Bool_ctn_1 = false ;
            Bool_ctn_2 = false ;
            Bool_ctn_4 = false ;
            Bool_ctn_5 = false ;
            $(".phone_number1").on("change", function () {
                comment_1.ctn1 = $(this).val();
            });
            $(".phone_number2").on("change", function () {
                comment_1.ctn2 = $(this).val();
            });
            $(".phone_number3").on("change", function () {
                comment_1.ctn3 = $(this).val();
            });
            break ;

        case "4" :
            $(".ctn_handler").append(four_ctn_template);
            Bool_ctn_4  = true ;
            Bool_ctn_0 = false ;
            Bool_ctn_1 = false ;
            Bool_ctn_2 = false ;
            Bool_ctn_3 = false ;
            Bool_ctn_5 = false ;
            $(".phone_number1").on("change", function () {
                comment_1.ctn1 = $(this).val();
            });
            $(".phone_number2").on("change", function () {
                comment_1.ctn2 = $(this).val();
            });
            $(".phone_number3").on("change", function () {
                comment_1.ctn3 = $(this).val();
            });
            $(".phone_number4").on("change", function () {
                comment_1.ctn4 = $(this).val();
            });
            break ;

        case "5" :
            $(".ctn_handler").append(five_ctn_template);
            Bool_ctn_5  = true ;
            Bool_ctn_0 = false ;
            Bool_ctn_1 = false ;
            Bool_ctn_2 = false ;
            Bool_ctn_3 = false ;
            Bool_ctn_4 = false ;

            $(".phone_number1").on("change", function () {
                comment_1.ctn1 = $(this).val();
            });
            $(".phone_number2").on("change", function () {
                comment_1.ctn2 = $(this).val();
            });
            $(".phone_number3").on("change", function () {
                comment_1.ctn3 = $(this).val();
            });
            $(".phone_number4").on("change", function () {
                comment_1.ctn4 = $(this).val();
            });
            $(".phone_number5").on("change", function () {
                comment_1.ctn5 = $(this).val();
            });
            break ;
    }
});

$(".msc_reason").on("change", function () {

    $(".remove").remove();

    switch ($(this).val()) {
        case "Billing dispute" :
            Bool_billing_dispute = true;
            /*****/ Bool_transaction_issue = false ;
            /*****/ Bool_unlocking = false ;
            /*****/ Bool_cancellation = false ;
            /*****/ Bool_other = false ;

            $(".msc_reason_handler").append(msc_billing_dispute);
            comment_2.nature_issue = $(this).val();
            $(".type_issue").on("change", function () {
                comment_billing_dispute.issue = $(this).val();
            });
            $(".type_issue_situation").on("change", function () {
                comment_billing_dispute.situation = $(this).val();
            });
            $(".type_issue_solution").on("change", function () {
                comment_billing_dispute.solution = $(this).val();
            });
            break;
        case "Transaction issue" :
            Bool_transaction_issue = true ;
            /*****/ Bool_billing_dispute = false ;
            /*****/ Bool_unlocking = false ;
            /*****/ Bool_cancellation = false ;
            /*****/ Bool_other = false ;

            $(".msc_reason_handler").append(msc_transaction_issue);
            comment_2.nature_issue = $(this).val();
            break;
        case "Unlocking device" :
            Bool_unlocking = true ;
            /*****/ Bool_billing_dispute = false ;
            /*****/ Bool_transaction_issue = false ;
            /*****/ Bool_cancellation = false ;
            /*****/ Bool_other = false ;

            $(".msc_reason_handler").append(msc_unlocking);
            comment_2.nature_issue = $(this).val();
            break;
        case "Cancellation" :
            Bool_cancellation = true ;
            /*****/ Bool_billing_dispute = false ;
            /*****/ Bool_transaction_issue = false ;
            /*****/ Bool_unlocking = false ;
            /*****/ Bool_other = false ;

            $(".msc_reason_handler").append(msc_cancellation);
            comment_2.nature_issue = $(this).val();
            break;
        case "Other" :
            Bool_other = true ;
            /*****/ Bool_billing_dispute = false ;
            /*****/ Bool_transaction_issue = false ;
            /*****/ Bool_unlocking = false ;
            /*****/ Bool_cancellation = false ;
            $(".msc_reason_handler").append(msc_other);
            comment_2.nature_issue = $(this).val();
            break;
    }
});

    $("#print_comment").on("click", function () {
        $(".final_comment").empty();

        let comment_template_1 = $('<p> *****PRINTED BY TEMPLATOR - MSC REQUEST - *****</p>\
            <p>Department : '+ comment_1.department + '</p>\
            <p>Ban number : '+ comment_1.ban + '</p>');
        $(".final_comment").append(comment_template_1);


        let comment_template_2 ;

        if (Bool_ctn_0){
            comment_template_2 = $('\
            <p>No targeted Phone number </p>');
        }
        if (Bool_ctn_1){
            comment_template_2 = $('\
            <p>Targeted phone number(s) : '+ comment_1.ctn1 + '</p>');
        }
        if (Bool_ctn_2){
            comment_template_2 = $('\
            <p>Targeted phone number(s) : '+ comment_1.ctn1 + ' || ' + comment_1.ctn2 + '</p>');
        }
        if (Bool_ctn_3){
            comment_template_2 = $('\
            <p>Targeted phone number(s) : '+ comment_1.ctn1 + ' || ' + comment_1.ctn2 + ' || ' + comment_1.ctn3 + '</p>');
        }
        if (Bool_ctn_4){
            comment_template_2 = $('\
            <p>Targeted phone number(s) : '+ comment_1.ctn1 + ' || ' + comment_1.ctn2 + ' || ' + comment_1.ctn3 + ' || ' + comment_1.ctn4 + '</p>');
        }
        if (Bool_ctn_5){
            comment_template_2 = $('\
            <p>Targeted phone number(s) : '+ comment_1.ctn1 + ' || ' + comment_1.ctn2 + ' || ' + comment_1.ctn3 + ' || ' + comment_1.ctn4 + ' || ' + comment_1.ctn5 + '</p>');
        }
        $(".final_comment").append(comment_template_2);

        let comment_template_3 = $('\
           <p>Type of issue : ' + comment_2.nature_issue + '</p>');

        $(".final_comment").append(comment_template_3);


        let comment_template_4 ;

        if (Bool_billing_dispute){
            comment_template_4 = $('\
        <p>Nature of issue : ' + comment_billing_dispute.issue + ' </p>\
        <p>Situation : ' + comment_billing_dispute.situation + '</p>\
        <P>Offered solution : ' + comment_billing_dispute.solution + '</P>');
        }
        if (Bool_transaction_issue){

        }
        if (Bool_unlocking){

        }
        if (Bool_cancellation){

        }
        if (Bool_other){

        }

        $(".final_comment").append(comment_template_4);


        $('.final_comment').css({
            "margin":"20px",
            "padding":"15px",
            "background-color":"#FFF",
            "font-size":"1.2em"
        });


    })

});