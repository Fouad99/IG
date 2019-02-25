var final_note = {
    header: "",
    reason: "",
    details: "",
    solution: ""
};


var sol_lvl_deep = {
    content_lvl2: "",
    content_lvl3: "",
    content_lvl4: "",
    content_lvl5: ""
};



var header_final = {
    "departement":"",
    "caller":"",
    "caller_specification":"",
    "authenticated":""
};

// comments main reason

var reason_final = {
    "reason":""
};


// comment reason type billing issue


// comment reason type --- contract related + each template details

var hupNewDevice = {
    "request":"",
    "phone_number":"",
    "previous_plan":"",
    "previous_discount":"",
    "previous_bonus":"",
    "previous_addon":"",
    "selected_plan":"",
    "selected_addon":"",
    "selected_discount":"",
    "selected_bonus":"",
    "selected_device":"",
    "selected_deal":"",
    "selected_bpo":"",
    "selected_pricematch":"",
    "info":""
};

var returnExchangeDevice = {
    "request":"",
    "info":""
};

var payOff = {
    "request":"",
    "phone_number":"",
    "months_remaining":"",
    "ecf":"",
    "info":""
};

// comment reason type --- monthly plan related + each template details


var changePP = {
    "request":"",
    "phone_number":"",
    "previous_plan":"",
    "previous_discount":"",
    "previous_bonus":"",
    "previous_addon":"",
    "selected_plan":"",
    "selected_addon":"",
    "selected_discount":"",
    "selected_bonus":"",
    "info":""
};

var removeAddon = {
    "request":"",
    "phone_number":"",
    "addon_to_remove":"",
    "info":""
};
var addAddon = {
    "request":"",
    "phone_number":"",
    "addon_to_add":"",
    "info":""
};

var removeBonus = {
    "request":"",
    "phone_number":"",
    "bonus_to_remove":"",
    "info":""
};
var addBonus = {
    "request":"",
    "phone_number":"",
    "bonus_to_add":"",
    "info":""
};

// comment reason type --- Unlocking device

var unlocking = {
    "blacklisted":"",
    "device_type":"",
    "imei":"",
    "unlocking_code":""
};

// comment reason type --- Cancellation

var cancellationCellPhone = {
    "request":"",
    "phone_number":""
};

// comment reason type --- Cancellation
var other = {
    "request":"",
    "info":""
};



//----------------- BOOLEAN CONTROLLERS --------------//

//Boolean controllers Level 1

var bool_caller_specification = false ;

//Boolean controllers Level 2

let bool_reason_billing_dispute = false ;
let bool_reason_contract_related = false ;
let bool_reason_monthly_service = false ;
let bool_account_management = false ;
let bool_reason_unlocking_device = false ;
let bool_reason_other = false ;




//bool controllers Level 3 - billing issues types -


let bool_billing_dispute_data_dispute = false;
let bool_billing_dispute_roaming_dispute = false;
let bool_billing_dispute_longdistance_dispute = false;
let bool_billing_dispute_minutes_dispute = false;
let bool_billing_dispute_credit_not_applied = false ;
let bool_billing_dispute_expired_discount = false ;
let bool_billing_dispute_cancellation_not_applied = false ;
let bool_billing_dispute_other = false ;

function set_billing_dispute_bool_off(){
    bool_billing_dispute_data_dispute = false ;
    bool_billing_dispute_roaming_dispute = false;
    bool_billing_dispute_longdistance_dispute = false;
    bool_billing_dispute_minutes_dispute = false ;
    bool_billing_dispute_credit_not_applied = false ;
    bool_billing_dispute_expired_discount = false;
    bool_billing_dispute_cancellation_not_applied = false ;
    //bool_billing_dispute_other ;
}

// Bool controllers LVL 3 - Monthly service

let bool_monthly_service_change_plan = false ;
let bool_monthly_service_add_addon = false ;
let bool_monthly_service_remove_addon = false ;


// Bool controllers LVL 3 - account management

let bool_port_in = false ;


//Bool controllers Level 4 - roaming charges type -

/************/ let bool_billing_dispute_roaming_fido_roam = false ;
/************/ let bool_billing_dispute_roaming_not_fido_roam = false ;

function set_roaming_dispute_bool_off(){
    bool_billing_dispute_roaming_not_fido_roam = false ;
    bool_billing_dispute_roaming_fido_roam = false ;
}

//Bool controllers for solutions Level 1 -

/***********/ let bool_solution_adj_topup = false ;
/***********/ let bool_solution_adj_pp = false ;
/***********/ let bool_solution_gw = false ;
/***********/ let bool_solution_monthly_discount = false ;
/***********/ let bool_solution_bonus_data = false ;
/***********/ let bool_solution_bonus_minutes = false ;
/***********/ let bool_solution_plan_change = false ;
/***********/ let bool_solution_escalation = false ;
/***********/ let bool_solution_education = false ;


function set_solution_bool_off(){
    bool_solution_education = false ;
    bool_solution_adj_topup = false ;
    bool_solution_adj_pp = false ;
    bool_solution_gw = false ;
    bool_solution_monthly_discount = false ;
    bool_solution_bonus_data = false ;
    bool_solution_bonus_minutes = false ;
    bool_solution_plan_change = false ;
    bool_solution_escalation = false ;
}


let bool_another_reason = false ;

function helpers(){
    $('.hint_section').fadeIn();
    $('.pos_section').hide();
    $('.ptm_section').hide();
    $('.mts_section').hide();


    $('.hint_trigger').on('click', function () {
        $('.hint_section').fadeIn();
        $('.pos_section').hide();
        $('.ptm_section').hide();
        $('.mts_section').hide();

    });
    $('.pos_trigger').on('click', function () {
        $('.hint_section').hide();
        $('.ptm_section').hide();
        $('.mts_section').hide();
        $('.pos_section').fadeIn();
    });
    $('.ptm_trigger').on('click', function () {
        $('.hint_section').hide();
        $('.pos_section').hide();
        $('.mts_section').hide();
        $('.ptm_section').fadeIn();
    });
    $('.mts_trigger').on('click', function () {
        $('.hint_section').hide();
        $('.pos_section').hide();
        $('.ptm_section').hide();
        $('.mts_section').fadeIn();
    });


}


function loadTemplate(template){
    $(".reason_handler").empty();
    $(".reason_handler").append(template);
}


function anotherReason(){

        var B = additional_reason_packer();

        B.find(".remove_reason").on("click", function () {
            $(this).closest(".reason_handler2").remove();
            $(this).closest(".solution_handler2").remove();
        });

        $("#reason_handler_id_2").append(B);

        $(".additional_main_reason").on('change', function () {

            if ($(this).val() == "Billing dispute") {

                var RS2 = data_overage_template();
                $(this).closest('.reason_handler2').append(RS2);
                helpers();
            }

            $('.solution_handler2').append(generic_solution);
        })
}


function addSolution4(){

    $('.addSolution4').on('click', function (e6) {

        e6.preventDefault();
        $('.removeSolution3').attr('disabled', true);
        $(this).attr('disabled', true);
        $('.solution_type_lvl_4').attr('disabled', true);

        var NS = generic_solution_lvl_5();

        NS.find('.removeSolution4').on('click', function (e7) {
            e7.preventDefault();
            $(this).closest('.sol_to_remove_lvl_5').remove();
            $('.addSolution4').attr('disabled', false);
            $('.removeSolution3').attr('disabled', false);
            $('.solution_type_lvl_4').attr('disabled', false);


        });

        $('.solution_handler').append(NS);


        $('.solution_type_lvl_5').on('change',function () {

            if ($(this).val() == "Education"){
                var EDC = solution_education();
                $('.solution_container_lvl_5').empty();
                $('.solution_container_lvl_5').append(EDC);
                getNotesEducation5();
                sol_lvl_deep.content_lvl5 = "Education" ;
            }
            if ($(this).val() == "Adjustment + data topup"){
                var ADT = solution_adjustment_topup();
                $('.solution_container_lvl_5').empty();
                $('.solution_container_lvl_5').append(ADT);
                getNotesAdjTopUp5();
                sol_lvl_deep.content_lvl5 = "Adjustment + data topup" ;


            }
            if ($(this).val() == "Adjustment + Plan change") {
                var APP = solution_adjustment_pp();
                $('.solution_container_lvl_5').empty();
                $('.solution_container_lvl_5').append(APP);
                getNotesAdjPP5();
                sol_lvl_deep.content_lvl5 = "Adjustment + Plan change" ;
            }
            if ($(this).val() == "Good will credit"){
                var GW = solution_goodwill_credit();
                $('.solution_container_lvl_5').empty();
                $('.solution_container_lvl_5').append(GW);
                getNotesGW5();
                sol_lvl_deep.content_lvl5 = "Good will credit" ;
            }
            if($(this).val() == "Monthly discount"){
                var MD = solution_monthly_discount();
                $('.solution_container_lvl_5').empty();
                $('.solution_container_lvl_5').append(MD);
                getNotesMonthlyDiscount5();
                sol_lvl_deep.content_lvl5 = "Monthly discount" ;
            }
            if($(this).val() == "Bonus data addon"){
                var BD = solution_free_addon_data();
                $('.solution_container_lvl_5').empty();
                $('.solution_container_lvl_5').append(BD);
                getNotesBonusData5();
                sol_lvl_deep.content_lvl5 = "Bonus data addon" ;
            }
            if($(this).val() == "Bonus minutes addon"){
                var BM = solution_free_addon_minutes();
                $('.solution_container_lvl_5').empty();
                $('.solution_container_lvl_5').append(BM);
                getNotesMinutesBonus5();
                sol_lvl_deep.content_lvl5 = "Bonus minutes addon" ;
            }

            if($(this).val() == "Plan change"){
                var PC = solution_plan_change();
                $('.solution_container_lvl_5').empty();
                $('.solution_container_lvl_5').append(PC);
                getNotesPlanChange5();
                sol_lvl_deep.content_lvl5 = "Plan change" ;
            }
            if($(this).val() == "Escalation"){
                var ESC = solution_escalation();
                $('.solution_container_lvl_5').empty();
                $('.solution_container_lvl_5').append(ESC);
                getNotesEscalation5();
                sol_lvl_deep.content_lvl5 = "Escalation" ;
            }
        });
    });
}

function addSolution3(){

    //$(this).attr('disabled', false);
    $('.addSolution3').on('click', function (e3) {

        $('.removeSolution2').attr('disabled', true);
        $('.addSolution3').attr('disabled', true);
        $('.solution_type_lvl_3').attr('disabled', true);

        e3.preventDefault();
        var NS = generic_solution_lvl_4();

        NS.find(".removeSolution3").on('click', function (e5) {
            e5.preventDefault();
            $(this).closest('.sol_to_remove_lvl_4').remove();
            $('.addSolution3').attr('disabled', false);
            $('.removeSolution2').attr('disabled', false);
            $('.solution_type_lvl_3').attr('disabled', false);


        });

        $('.solution_handler').append(NS);


        $('.solution_type_lvl_4').on('change',function () {


            if ($(this).val() == "Education"){
                var EDC = solution_education();
                $('.solution_container_lvl_4').empty();
                $('.solution_container_lvl_4').append(EDC);
                getNotesEducation4();
                sol_lvl_deep.content_lvl4 = "Education" ;
            }
            if ($(this).val() == "Adjustment + data topup"){
                var ADT = solution_adjustment_topup();
                $('.solution_container_lvl_4').empty();
                $('.solution_container_lvl_4').append(ADT);
                getNotesAdjTopUp4();
                sol_lvl_deep.content_lvl4 = "Adjustment + data topup" ;
            }
            if ($(this).val() == "Adjustment + Plan change") {
                var APP = solution_adjustment_pp();
                $('.solution_container_lvl_4').empty();
                $('.solution_container_lvl_4').append(APP);
                getNotesAdjPP4();
                sol_lvl_deep.content_lvl4 = "Adjustment + Plan change" ;
            }
            if ($(this).val() == "Good will credit"){
                var GW = solution_goodwill_credit();
                $('.solution_container_lvl_4').empty();
                $('.solution_container_lvl_4').append(GW);
                getNotesGW4();
                sol_lvl_deep.content_lvl4 = "Good will credit" ;
            }
            if($(this).val() == "Monthly discount"){
                var MD = solution_monthly_discount();
                $('.solution_container_lvl_4').empty();
                $('.solution_container_lvl_4').append(MD);
                getNotesMonthlyDiscount4();
                sol_lvl_deep.content_lvl4 = "Monthly discount" ;
            }
            if($(this).val() == "Bonus data addon"){
                var BD = solution_free_addon_data();
                $('.solution_container_lvl_4').empty();
                $('.solution_container_lvl_4').append(BD);
                getNotesBonusData4();
                sol_lvl_deep.content_lvl4 = "Bonus data addon" ;
            }
            if($(this).val() == "Bonus minutes addon"){
                var BM = solution_free_addon_minutes();
                $('.solution_container_lvl_4').empty();
                $('.solution_container_lvl_4').append(BM);
                getNotesMinutesBonus4();
                sol_lvl_deep.content_lvl4 = "Bonus minutes addon" ;
            }
            if($(this).val() == "Plan change"){
                var PC = solution_plan_change();
                $('.solution_container_lvl_4').empty();
                $('.solution_container_lvl_4').append(PC);
                getNotesPlanChange4();
                sol_lvl_deep.content_lvl4 = "Plan change" ;
            }
            if($(this).val() == "Escalation"){
                var ESC = solution_escalation();
                $('.solution_container_lvl_4').empty();
                $('.solution_container_lvl_4').append(ESC);
                getNotesEscalation4();
                sol_lvl_deep.content_lvl4 = "Escalation" ;
            }
        });
        addSolution4();
    });
}

function addSolution2(){

    $('.addSolution2').on('click', function (e2) {

        e2.preventDefault();
        $('.removeSolution').attr('disabled', true);
        $(this).attr('disabled', true);
        $('.solution_type_lvl_2').attr('disabled', true);
        var NS = generic_solution_lvl_3();

        NS.find(".removeSolution2").on('click', function (e4) {
            e4.preventDefault();
            $(this).closest('.sol_to_remove_lvl_3').remove();
            $('.addSolution2').attr('disabled', false);
            $('.removeSolution').attr('disabled', false);
            $('.solution_type_lvl_2').attr('disabled', false);

        });

        $('.solution_handler').append(NS);

        $('.solution_type_lvl_3').on('change',function () {

            //$('.addSolution2').attr('disabled', false);

            $('.addSolution3').attr('disabled', false);

            if ($(this).val() == "Education"){
                var EDC = solution_education();
                $('.solution_container_lvl_3').empty();
                $('.solution_container_lvl_3').append(EDC);
                getNotesEducation3();
                sol_lvl_deep.content_lvl3 = "Education" ;
            }
            if ($(this).val() == "Adjustment + data topup"){
                var ADT = solution_adjustment_topup();
                $('.solution_container_lvl_3').empty();
                $('.solution_container_lvl_3').append(ADT);
                getNotesAdjTopUp3();
                sol_lvl_deep.content_lvl3 = "Adjustment + data topup" ;
            }
            if ($(this).val() == "Adjustment + Plan change") {
                var APP = solution_adjustment_pp();
                $('.solution_container_lvl_3').empty();
                $('.solution_container_lvl_3').append(APP);
                getNotesAdjPP3();
                sol_lvl_deep.content_lvl3 = "Adjustment + Plan change" ;
            }
            if ($(this).val() == "Good will credit"){
                var GW = solution_goodwill_credit();
                $('.solution_container_lvl_3').empty();
                $('.solution_container_lvl_3').append(GW);
                getNotesGW3();
                sol_lvl_deep.content_lvl3 = "Good will credit" ;
            }
            if($(this).val() == "Monthly discount"){
                var MD = solution_monthly_discount();
                $('.solution_container_lvl_3').empty();
                $('.solution_container_lvl_3').append(MD);
                getNotesMonthlyDiscount3();
                sol_lvl_deep.content_lvl3 = "Monthly discount" ;
            }
            if($(this).val() == "Bonus data addon"){
                var BD = solution_free_addon_data();
                $('.solution_container_lvl_3').empty();
                $('.solution_container_lvl_3').append(BD);
                getNotesBonusData3();
                sol_lvl_deep.content_lvl3 = "Bonus data addon" ;
            }
            if($(this).val() == "Bonus minutes addon"){
                var BM = solution_free_addon_minutes();
                $('.solution_container_lvl_3').empty();
                $('.solution_container_lvl_3').append(BM);
                getNotesMinutesBonus3();
                sol_lvl_deep.content_lvl3 = "Bonus minutes addon" ;
            }
            if($(this).val() == "Plan change"){
                var PC = solution_plan_change();
                $('.solution_container_lvl_3').empty();
                $('.solution_container_lvl_3').append(PC);
                getNotesPlanChange3();
                sol_lvl_deep.content_lvl3 = "Plan change"
            }
            if($(this).val() == "Escalation"){
                var ESC = solution_escalation();
                $('.solution_container_lvl_3').empty();
                $('.solution_container_lvl_3').append(ESC);
                getNotesEscalation3();
                sol_lvl_deep.content_lvl3 = "Escalation" ;
            }
        });
        addSolution3();
    });
}

function addSolution(){

    $('.newSolution').on('click', function (e) {

        e.preventDefault();
        $(this).attr('disabled', true);
        $('.solution_type').attr('disabled', true);

        var NS = generic_solution_lvl_2();

        NS.find(".removeSolution").on('click', function (e3) {
            e3.preventDefault();
            $(this).closest('.sol_to_remove_lvl_2').remove();
            $('.newSolution').attr('disabled', false);
            $('.solution_type').attr('disabled', false);
        });

        $('.solution_handler').append(NS);


    $('.solution_type_lvl_2').on('change',function () {

        $('.addSolution2').attr('disabled', false);

        if ($(this).val() == "Education"){
            var EDC = solution_education();
            $('.solution_container_lvl_2').empty();
            $('.solution_container_lvl_2').append(EDC);
            getNotesEducation2();
            sol_lvl_deep.content_lvl2 = "Education";
        }
        if ($(this).val() == "Adjustment + data topup"){
            var ADT = solution_adjustment_topup();
            $('.solution_container_lvl_2').empty();
            $('.solution_container_lvl_2').append(ADT);
            getNotesAdjTopUp2();
            sol_lvl_deep.content_lvl2 = "Adjustment + data topup" ;
        }
        if ($(this).val() == "Adjustment + Plan change") {
            var APP = solution_adjustment_pp();
            $('.solution_container_lvl_2').empty();
            $('.solution_container_lvl_2').append(APP);
            getNotesAdjPP2();
            sol_lvl_deep.content_lvl2 = "Adjustment + Plan change";
        }
        if ($(this).val() == "Good will credit"){
            var GW = solution_goodwill_credit();
            $('.solution_container_lvl_2').empty();
            $('.solution_container_lvl_2').append(GW);
            getNotesGW2();
            sol_lvl_deep.content_lvl2 = "Good will credit" ;
        }
        if($(this).val() == "Monthly discount"){
            var MD = solution_monthly_discount();
            $('.solution_container_lvl_2').empty();
            $('.solution_container_lvl_2').append(MD);
            getNotesMonthlyDiscount2();
            sol_lvl_deep.content_lvl2 = "Monthly discount";
        }
        if($(this).val() == "Bonus data addon"){
            var BD = solution_free_addon_data();
            $('.solution_container_lvl_2').empty();
            $('.solution_container_lvl_2').append(BD);
            getNotesBonusData2();
            sol_lvl_deep.content_lvl2 = "Bonus data addon" ;
        }
        if($(this).val() == "Bonus minutes addon"){
            var BM = solution_free_addon_minutes();
            $('.solution_container_lvl_2').empty();
            $('.solution_container_lvl_2').append(BM);
            getNotesMinutesBonus2();
            sol_lvl_deep.content_lvl2 = "Bonus minutes addon" ;
        }
        if($(this).val() == "Plan change"){
            var PC = solution_plan_change();
            $('.solution_container_lvl_2').empty();
            $('.solution_container_lvl_2').append(PC);
            getNotesPlanChange2();
            sol_lvl_deep.content_lvl2 = "Plan change" ;
        }
        if($(this).val() == "Escalation"){
            var ESC = solution_escalation();
            $('.solution_container_lvl_2').empty();
            $('.solution_container_lvl_2').append(ESC);
            getNotesEscalation();
            sol_lvl_deep.content_lvl2 = "Escalation" ;

        }
    });

    addSolution2();
    });
}


function solution_module(){

    $('.solution_type').on('change',function () {

        $('.newSolution').attr('disabled', false);

        if ($(this).val() == "Education"){
            set_solution_bool_off();
            bool_solution_education = true ;
            var EDC = solution_education();
            $('.solution_container').empty();
            $('.solution_container').append(EDC);
            getNotesEducation();
            //addSolution();


        }
        if ($(this).val() == "Adjustment + data topup"){
            set_solution_bool_off();
            bool_solution_adj_topup = true ;
            var ADT = solution_adjustment_topup();
            $('.solution_container').empty();
            $('.solution_container').append(ADT);
            getNotesAdjTopUp();
            //addSolution();

        }
        if ($(this).val() == "Adjustment + Plan change") {
            set_solution_bool_off();
            bool_solution_adj_pp = true ;
            var APP = solution_adjustment_pp();
            $('.solution_container').empty();
            $('.solution_container').append(APP);
            getNotesAdjPP();
            //addSolution();

        }
        if ($(this).val() == "Good will credit"){
            set_solution_bool_off();
            bool_solution_gw = true ;
            var GW = solution_goodwill_credit();
            $('.solution_container').empty();
            $('.solution_container').append(GW);
            getNotesGW();
            //addSolution();
        }
        if($(this).val() == "Monthly discount"){
            set_solution_bool_off();
            bool_solution_monthly_discount = true ;
            var MD = solution_monthly_discount();
            $('.solution_container').empty();
            $('.solution_container').append(MD);
            getNotesMonthlyDiscount();
            //addSolution();
        }
        if($(this).val() == "Bonus data addon"){
            set_solution_bool_off();
            bool_solution_bonus_data = true ;
            var BD = solution_free_addon_data();
            $('.solution_container').empty();
            $('.solution_container').append(BD);
            getNotesBonusData();
            //addSolution();
        }
        if($(this).val() == "Bonus minutes addon"){
            set_solution_bool_off();
            bool_solution_bonus_minutes = true ;
            var BM = solution_free_addon_minutes();
            $('.solution_container').empty();
            $('.solution_container').append(BM);
            getNotesMinutesBonus();
            //addSolution();
        }

        if($(this).val() == "Plan change"){
            set_solution_bool_off();
            bool_solution_plan_change = true;
            var PC = solution_plan_change();
            $('.solution_container').empty();
            $('.solution_container').append(PC);
            getNotesPlanChange();
            //addSolution();
        }

        if($(this).val() == "Escalation"){
            set_solution_bool_off();
            bool_solution_escalation = true;
            var ESC = solution_escalation();
            $('.solution_container').empty();
            $('.solution_container').append(ESC);
            getNotesEscalation();
            //addSolution();
        }
    });
    addSolution();
}

function starterTemplateRoamingDisputeLvl2(choice2){

    if(choice2 == "Yes"){
        set_roaming_dispute_bool_off();
        bool_billing_dispute_roaming_fido_roam = true ;
        $('.to_remove2').remove();
        $('.sol_to_remove').remove();

        var RDFR = roaming_overage_template_level_2_fido_roam();
        $('.reason_handler').append(RDFR);

        helpers();
        getNotesBillingIssue();
        getNotesRoaming_fidoRoam();

        var SDD = generic_solution();
        $('.solution_handler').append(SDD);
        //solution_module();
    }
    if(choice2 == "No"){
        set_roaming_dispute_bool_off();
        bool_billing_dispute_roaming_not_fido_roam = true ;
        $('.to_remove2').remove();
        $('.sol_to_remove').remove();
        var RDNFR = roaming_overage_template_level_2_not_fido_roam();
        $('.reason_handler').append(RDNFR);

        helpers();
        getNotesBillingIssue();
        getNotesRoaming_notFidoRoam();

        var SDD = generic_solution();
        $('.solution_handler').append(SDD);
        //solution_module();
    }
    solution_module();
}

function starterTemplateBillingDispute(choice){

    if(choice == "Data dispute"){
        set_billing_dispute_bool_off();
        set_roaming_dispute_bool_off();
        bool_billing_dispute_data_dispute = true ;
        $('.to_remove').remove();
        $('.to_remove2').remove();
        $('.sol_to_remove').remove();
        var DD = data_overage_template();
        $('.reason_handler').append(DD);
        helpers();
        getNotesBillingIssue();
        getNotesDataDispute();


        var SDD = generic_solution();
        $('.solution_handler').append(SDD);
        //solution_module();


    }
    else if(choice == "Roaming dispute"){
        set_billing_dispute_bool_off();
        set_roaming_dispute_bool_off();
        bool_billing_dispute_roaming_dispute = true ;
        $('.to_remove').remove();
        $('.to_remove2').remove();
        $('.sol_to_remove').remove();
        var RD = roaming_overage_template_level_1();
        $('.reason_handler').append(RD);

        $('.roaming_lvl1').on('change', function (){


            starterTemplateRoamingDisputeLvl2($(this).val());

        });

    }
    else if(choice == "Long distance dispute"){

        set_billing_dispute_bool_off();
        set_roaming_dispute_bool_off();
        bool_billing_dispute_longdistance_dispute = true ;
        $('.to_remove').remove();
        $('.to_remove2').remove();
        $('.sol_to_remove').remove();
        var LDD = long_distance_template_level_1();
        $('.reason_handler').append(LDD);

        helpers();
        getNotesBillingIssue();
        getNotesLongDistance();

        var SDD = generic_solution();
        $('.solution_handler').append(SDD);
        //solution_module();


    }
    else if(choice == "Minutes dispute"){

        set_billing_dispute_bool_off();
        set_roaming_dispute_bool_off();
        bool_billing_dispute_minutes_dispute = true ;
        $('.to_remove').remove();
        $('.to_remove2').remove();
        $('.sol_to_remove').remove();
        var MD = minutes_overage_template_level_1();
        $(".reason_handler").append(MD);

        helpers();
        getNotesBillingIssue();
        getNotesMinutes();

        var SDD = generic_solution();
        $('.solution_handler').append(SDD);
        //solution_module();
    }
    else if(choice == "Not applied credit"){
        set_billing_dispute_bool_off();
        set_roaming_dispute_bool_off();
        bool_billing_dispute_credit_not_applied = true ;
        $('.to_remove').remove();
        $('.to_remove2').remove();
        $('.sol_to_remove').remove();

        var NAC = credit_not_applied_template_level_1();
        $(".reason_handler").append(NAC);
        helpers();
        getNotesBillingIssue();
        getNotesCreditNotApplied();

        var SDD = generic_solution();
        $('.solution_handler').append(SDD);
        //solution_module();
    }
    else if(choice == "Expired/removed discount"){
        set_billing_dispute_bool_off();
        set_roaming_dispute_bool_off();
        bool_billing_dispute_expired_discount = true;
        $('.to_remove').remove();
        $('.to_remove2').remove();
        $('.sol_to_remove').remove();

        var ERD = expired_discount_template_level_1();
        $(".reason_handler").append(ERD);
        helpers();
        getNotesBillingIssue();
        getNotesERDiscount();

        var SDD = generic_solution();
        $('.solution_handler').append(SDD);
        //solution_module();

    }
    else if(choice == "Missed cancellation"){
        set_billing_dispute_bool_off();
        set_roaming_dispute_bool_off();
        bool_billing_dispute_cancellation_not_applied = true ;
        billingIssue_final.type_issue = "Missed cancellation";
        $('.to_remove').remove();
        $('.to_remove2').remove();
        $('.sol_to_remove').remove();

        var MC = missed_cancellation_template();
        $(".reason_handler").append(MC);
        helpers();
        getNotesBillingIssue();
        getNotesMissedCancellation();

        var SDD = generic_solution();
        $('.solution_handler').append(SDD);
        //solution_module();
    }
    else if(choice == "Other"){
        set_billing_dispute_bool_off();
        set_roaming_dispute_bool_off();
        bool_billing_dispute_other = true ;
        billingIssue_final.type_issue = "Other specified below";

        $('.to_remove').remove();
        $('.to_remove2').remove();
        $('.sol_to_remove').remove();

        var OR = reason_specification_template();
        $(".reason_handler").append(OR);
        getNotesBillingIssue()
        getNotesOther();

        var SDD = generic_solution();
        $('.solution_handler').append(SDD);
        //solution_module();
    }

    solution_module();
}


function starterTemplateMonthlyService(choice){
    if(choice == "change_plan"){
        set_billing_dispute_bool_off();
        set_roaming_dispute_bool_off();
        bool_monthly_service_change_plan = true ;
        $('.to_remove').remove();
        $('.to_remove2').remove();
        $('.sol_to_remove').remove();
        var CP = change_plan_template();
        $('.reason_handler').append(CP);
        helpers();

        getNotesChangePlan();
    }
}

function starterTemplateAccountManagement(choice){
    if(choice == "port in"){
        set_billing_dispute_bool_off();
        set_roaming_dispute_bool_off();
        bool_port_in = true ;
        $('.to_remove').remove();
        $('.to_remove2').remove();
        $('.sol_to_remove').remove();

        var pi = portIn() ;
        $('.reason_handler').append(pi);
        helpers();

        getNotesPortIn();
    }
}

$(document).ready(function() {

    getNotesHeader(); // function situated in reason_packer.js

    $('#reason').on("change",function () {

        $("#reason_handler_id").append(reason_packer);

        if($(this).val() == "blank"){

            $('.reason_handler').empty();
            reason_final.reason = $(this).val();
        }

        if($(this).val() == "Billing dispute"){

            bool_reason_billing_dispute = true ;
            loadTemplate(reason_billing_dispute);
            reason_final.reason = $(this).val(); // comment for reason field


            $('.billing_issue_type').on("change", function () {

                starterTemplateBillingDispute($(this).val());
            });

        }else if($(this).val() == "Monthly service"){

            bool_reason_monthly_service = true ;
            loadTemplate(reason_monthly_plan_related);
            reason_final.reason = $(this).val();

            $('.monthly_plan_related_type').on('change', function () {
                starterTemplateMonthlyService($(this).val());
            })




        }else if($(this).val() == "account management"){
            bool_account_management = true ;
            loadTemplate(reason_account_management);
            reason_final.reason = $(this).val();
            
            $('.management_type').on('change', function () {
                starterTemplateAccountManagement($(this).val());
            })

        }

        else if($(this).val() == "Contract related"){
            $('.reason_handler').empty();
            $('.reason_handler').append(reason_contract_related);


            reason_final.reason = $(this).val();

            bool_reason_contract_related = true ;

            $('.contract_related_type').on('change',function () {

                if($(this).val() == "HUP with no current contract"){

                    Bool_contract_related_hup_no_contract = true ;
                    setOff_controllers_contract_lvl1(Bool_contract_related_hup_with_contract, Bool_contract_related_ex, Bool_contract_pp, Bool_contract_related_pay_off);


                    $('.to_remove').remove();
                    $('.to_remove2').remove();
                    $('.reason_handler').append(hup_no_contract_template);

                    helpers();
                }
                if($(this).val() == "HUP with current contract"){

                    Bool_contract_related_hup_with_contract = true ;
                    setOff_controllers_contract_lvl1(Bool_contract_related_hup_no_contract, Bool_contract_related_ex, Bool_contract_pp, Bool_contract_related_pay_off);


                    $('.to_remove').remove();
                    $('.to_remove2').remove();
                    $('.reason_handler').append(hup_with_contract_template);

                    helpers();

                }
                if($(this).val() == "Exchange or return device"){

                    Bool_contract_related_ex = true ;
                    setOff_controllers_contract_lvl1(Bool_contract_related_hup_no_contract,Bool_contract_related_hup_with_contract, Bool_contract_pp, Bool_contract_related_pay_off);

                    $('.to_remove').remove();
                    $('.to_remove2').remove();
                    $('.reason_handler').append(exchange_return_device_template);

                   helpers();
                }
                if($(this).val() == "Pay off the contract"){
                    $('.reason_handler').empty();
                    $('.reason_handler').append(change_the_plan_template);
                }
            })

        }else if($(this).val() == "Unlocking device"){
            $('.reason_handler').empty();
            $('.reason_handler').append(unlocking_template);

            bool_reason_unlocking_device = true ;
            setOff_controllers_lvl2(bool_reason_contract_related,bool_reason_monthly_plan_related,bool_reason_billing_dispute,bool_reason_cancellation, bool_reason_other) ;

            reason_final.reason = $(this).val();
        }
        else if($(this).val() == "Cancellation"){
            $('.reason_handler').empty();
            $('.reason_handler').append(reason_cancellation);
            bool_reason_cancellation = true;
            setOff_controllers_lvl2(bool_reason_contract_related,bool_reason_monthly_plan_related,bool_reason_unlocking_device,bool_reason_billing_dispute, bool_reason_other) ;

            reason_final.reason = $(this).val();

        }

        else if($(this).val() == "Other"){
            $('.reason_handler').empty();
            $('.reason_handler').append(reason_specification);
            bool_reason_other = true ;
            setOff_controllers_lvl2(bool_reason_contract_related,bool_reason_monthly_plan_related,bool_reason_unlocking_device,bool_reason_cancellation, bool_reason_billing_dispute) ;

            reason_final.reason = $(this).val();
        }
    });


    $(".add_new_reason").on('click',function () {
        anotherReason();
    });



    $("#print_it").on("click",function () {

        $('.final').empty();
        $('.fsolution').empty();
        $('.finalTest').empty();

        // variable to handle output of reason
        let template_test ;
        let template_header;
        let template_reason_lvl1;
        let template_reason_lvl2;
        let template_reason_lvl2_output1;
        let template_reason_lvl2_output2;
        let template_solution;
        let template_solution2 ;
        let template_solution3 ;
        let template_solution4 ;
        let template_solution5 ;


        if (bool_caller_specification) {

            var header = displayHeader2();
            final_note.header = displayHeader2();
        }
        else if (!bool_caller_specification) {

            var header = displayHeader1();
            final_note.header = displayHeader1();

        }

        template_reason_lvl1 = $('\
        <p>Reason : ' + reason_final.reason + '</p>');

        $('.final').append(header, template_reason_lvl1);

//Now we get hardcore - billing dispute


        if (bool_reason_billing_dispute) {

            if (bool_billing_dispute_data_dispute) {

                template_reason_lvl2_output1 = displayNotesDataDispute();

            }

            else if (bool_billing_dispute_roaming_dispute){

                if (bool_billing_dispute_roaming_fido_roam) {
                    template_reason_lvl2_output1 = $('\
                    <p>Covered by Fido Roam : YES </p><p>Has cx received welcome text msg : ' + roamingDispute_fidoRoam.text_sent + ' || Is there recorded activity : ' + roamingDispute_fidoRoam.recorded_usage + ' || Charge($$): ' + roamingDispute_fidoRoam.charge + ' || Calls(mins) : ' + roamingDispute_fidoRoam.AirTime + ' || Data(GBs) : ' + roamingDispute_fidoRoam.data + ' || Text : ' + roamingDispute_fidoRoam.SmsMms + '</p>\
                    <br><p>Situation : ' + roamingDispute_fidoRoam.info + '</p>');

                }
                else if (bool_billing_dispute_roaming_not_fido_roam) {

                    template_reason_lvl2_output1 = $('\
                    <p>Covered by Fido Roam : NO </p><p>Has cx received welcome text msg : ' + roamingDispute_NotFidoRoam.text_sent + ' || Is there recorded activity : ' + roamingDispute_NotFidoRoam.recorded_usage + ' || Charge($$): ' + roamingDispute_NotFidoRoam.charge + ' || Calls(mins) : ' + roamingDispute_NotFidoRoam.AirTime + ' || Data(GBs) : ' + roamingDispute_NotFidoRoam.data + ' || Text : ' + roamingDispute_NotFidoRoam.SmsMms + '</p>\
                    <br><p>Situation : ' + roamingDispute_NotFidoRoam.info + '</p>\');');
                }

            }
            else if (bool_billing_dispute_longdistance_dispute) {
                template_reason_lvl2_output1 = $('\
                <p>Is call(s) fraudulent ? : ' + longDistanceDispute.scam + ' || Have ctn(s) been called before : ' + longDistanceDispute.call_before + ' || Has customer family in the called destination : ' + longDistanceDispute.family + ' || Air Time(mins) : ' + longDistanceDispute.AirTime + ' || Charge($$) : ' + longDistanceDispute.charge + '</p>\
                    <br><p>Situation : ' + longDistanceDispute.info + '</p>');
            }

            else if (bool_billing_dispute_minutes_dispute){
                template_reason_lvl2_output1 = $('\
                <p>Is it first time : ' + minutesDispute.first + ' || Has customer been notified : ' + minutesDispute.notif + ' || Is customer aware incoming/outoing calls : ' + minutesDispute.incomingOutgoing + ' || Air Time(mins) : ' + minutesDispute.charge + ' || Charge($$) : ' + minutesDispute.charge + '</p>\
                    <br><p>Situation : ' + minutesDispute.info + '</p>');
            }

            $('.final').append(template_reason_lvl2_output1);


            if(bool_solution_education){
                template_solution = displayNotesEducation();
            }
            else if(bool_solution_adj_topup){
                template_solution = displayNoteAdjTp();
            }
            else if(bool_solution_adj_pp){
                template_solution = displayNotesAdjPP();
            }
            else if(bool_solution_gw){
                template_solution = displayNotesGW();
            }
            else if(bool_solution_monthly_discount){
                template_solution = displayNotesMonthlyDiscount();
            }
            else if(bool_solution_bonus_data){
                template_solution = displayNotesBonusData();
            }
            else if(bool_solution_bonus_minutes){
                template_solution = displayNotesBonusMinutes();
            }
            else if(bool_solution_plan_change){
                template_solution = displayNotesPP();
            }
            else if(bool_solution_escalation){
                template_solution = displayNotesEscalation();
            }
            /*
             <option value="Education">
                       <option value="Adjustment + data topup">
                       <option value="Adjustment + Plan change">
                       <option value="Good will credit">
                       <option value="Monthly discount">
                       <option value="Bonus data addon">
                       <option value="Bonus minutes addon">
                       <option value="Plan change">
                       <option value="Escalation">
             */

            $('.fsolution').append(template_solution);

            if(sol_lvl_deep.content_lvl2 == "Education"){
                template_solution2 = displayNotesEducation2();
            }else if(sol_lvl_deep.content_lvl2 == "Adjustment + data topup"){
                template_solution2 = displayNoteAdjTp2();
            }else if(sol_lvl_deep.content_lvl2 == "Adjustment + Plan change"){
                template_solution2 = displayNotesAdjPP2();
            }else if(sol_lvl_deep.content_lvl2 == "Good will credit"){
                template_solution2 = displayNotesGW2();
            }else if(sol_lvl_deep.content_lvl2 == "Monthly discount"){
                template_solution2 = displayNotesMonthlyDiscount2();
            }else if(sol_lvl_deep.content_lvl2 == "Bonus data addon"){
                template_solution2 = displayNotesBonusData2();
            }else if(sol_lvl_deep.content_lvl2 == "Bonus minutes addon"){
                template_solution2 = displayNotesBonusMinutes2();
            }else if(sol_lvl_deep.content_lvl2 == "Plan change"){
                template_solution2 = displayNotesPP2();
            }else if(sol_lvl_deep.content_lvl2 == "Escalation"){
                template_solution2 = displayNotesEscalation2();
            }

            if(sol_lvl_deep.content_lvl3 == "Education"){
                template_solution3 = displayNotesEducation3();
            }else if(sol_lvl_deep.content_lvl3 == "Adjustment + data topup"){
                template_solution3 = displayNoteAdjTp3();
            }else if(sol_lvl_deep.content_lvl3 == "Adjustment + Plan change"){
                template_solution3 = displayNotesAdjPP3();
            }else if(sol_lvl_deep.content_lvl3 == "Good will credit"){
                template_solution3 = displayNotesGW3();
            }else if(sol_lvl_deep.content_lvl3 == "Monthly discount"){
                template_solution3 = displayNotesMonthlyDiscount3();
            }else if(sol_lvl_deep.content_lvl3 == "Bonus data addon"){
                template_solution3 = displayNotesBonusData3();
            }else if(sol_lvl_deep.content_lvl3 == "Bonus minutes addon"){
                template_solution3 = displayNotesBonusMinutes3();
            }else if(sol_lvl_deep.content_lvl3 == "Plan change"){
                template_solution3 = displayNotesPP3();
            }else if(sol_lvl_deep.content_lvl3 == "Escalation"){
                template_solution3 = displayNotesEscalation3();
            }

            if(sol_lvl_deep.content_lvl4 == "Education"){
                template_solution4 = displayNotesEducation4();
            }else if(sol_lvl_deep.content_lvl4 == "Adjustment + data topup"){
                template_solution4 = displayNoteAdjTp4();
            }else if(sol_lvl_deep.content_lvl4 == "Adjustment + Plan change"){
                template_solution4 = displayNotesAdjPP4();
            }else if(sol_lvl_deep.content_lvl4 == "Good will credit"){
                template_solution4 = displayNotesGW4();
            }else if(sol_lvl_deep.content_lvl4 == "Monthly discount"){
                template_solution4 = displayNotesMonthlyDiscount4();
            }else if(sol_lvl_deep.content_lvl4 == "Bonus data addon"){
                template_solution4 = displayNotesBonusData4();
            }else if(sol_lvl_deep.content_lvl4 == "Bonus minutes addon"){
                template_solution4 = displayNotesBonusMinutes4();
            }else if(sol_lvl_deep.content_lvl4 == "Plan change"){
                template_solution4 = displayNotesPP4();
            }else if(sol_lvl_deep.content_lvl4 == "Escalation"){
                template_solution4 = displayNotesEscalation4();
            }

            if(sol_lvl_deep.content_lvl5 == "Education"){
                template_solution5 = displayNotesEducation5();
            }else if(sol_lvl_deep.content_lvl5 == "Adjustment + data topup"){
                template_solution5 = displayNoteAdjTp5();
            }else if(sol_lvl_deep.content_lvl5 == "Adjustment + Plan change"){
                template_solution5 = displayNotesAdjPP5();
            }else if(sol_lvl_deep.content_lvl5 == "Good will credit"){
                template_solution5 = displayNotesGW5();
            }else if(sol_lvl_deep.content_lvl5 == "Monthly discount"){
                template_solution5 = displayNotesMonthlyDiscount5();
            }else if(sol_lvl_deep.content_lvl5 == "Bonus data addon"){
                template_solution5 = displayNotesBonusData5();
            }else if(sol_lvl_deep.content_lvl5 == "Bonus minutes addon"){
                template_solution5 = displayNotesBonusMinutes5();
            }else if(sol_lvl_deep.content_lvl5 == "Plan change"){
                template_solution5 = displayNotesPP5();
            }else if(sol_lvl_deep.content_lvl5 == "Escalation"){
                template_solution5 = displayNotesEscalation5();
            }

            $('.fsolution').append(template_solution,template_solution2,template_solution3,template_solution4,template_solution5);

        } else if(bool_reason_monthly_service){

            if(bool_monthly_service_change_plan){
                template_reason_lvl2_output1 = displayNotesChangePlan();
            }


            $('.final').append(template_reason_lvl2_output1);

        } else if(bool_account_management){

            if(bool_port_in){
                template_reason_lvl2_output1 = displayNotesPortIn();
            }

            $('.final').append(template_reason_lvl2_output1);

        }
        $('.output').css({
            "margin":"20px",
            "padding":"30px",
            "background-color":"red",
            "color" : "white",
            "font-size":"1.2em"
        });
        $('.test').css({
            "margin": "20px",
            "padding": "30px",
            "background-color": "red",
            "color": "white"
        });

    })

});



//Common header - end -

// Reason template




