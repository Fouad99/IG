var priceOldPlan, priceOldAddon, priceNewPlan, priceNewAddon, days, total, template_total, template_total_empty ;

template_total_empty = $('\
<p><h2 class="text-center">One or more fields need to be filled</h2></p>\
<p><h4 class="text-center">Please fill all the fields, thank you</h4></p>\
');
function calculProrata(priceOld, oldAddon, priceNew, newAddon, days){
    var remainingDays = 30 - days ;
    var passedDays = days ;
    var oldProrata = (( priceOld / 30 ) * days) + ((oldAddon / 30) * days) ;
    var newProrata = ((priceNew / 30) * (30 - days) ) + ((newAddon / 30) * (30 - days)) ;

    var total = oldProrata + newProrata ;

    return template_total =  $('\
        <p><h2> Total :'+ total + ' + taxes</h2></p>\
        <p><h4> Total of last plan with its addon(if any) is :'+ oldProrata +' , valid for :'+ passedDays +' days</h4></p>\
        <p><h4> Total of new plan with its addon(if any) is :'+ newProrata +' , valid for :'+ remainingDays +' days</h4></p>\
    ');

}

$(document).ready(function () {

    $('.daysCycle').on('change', function () {
        days = $(this).val();
    });
    $('.priceOldPlan').on('change', function () {
        priceOldPlan = $(this).val();
    });
    $('.priceAddon').on('change', function () {
        priceOldAddon = $(this).val();
    });
    $('.priceNewPlan').on('change', function () {
        priceNewPlan = $(this).val();
    });
    $('.priceNewAddon').on('change', function () {
        priceNewAddon = $(this).val();
    });
    
    $('.calculateProrata').on('click', function () {
        $('.finalTotal').css({
            "padding" : "25px",
            "background-color" : "white",
            "color" : "black",
            "font-size" : "1.2em"
            });
        $('.finalTotal').empty();

        if(days == null || priceOldPlan == null || priceOldAddon == null || priceNewPlan == null || priceNewAddon == null){
            $('.finalTotal').append(template_total_empty);
        }else{
            $('.finalTotal').append(calculProrata(priceOldPlan, priceOldAddon, priceNewPlan, priceNewAddon, days));
        }

    })




});

