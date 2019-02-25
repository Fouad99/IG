var template_downgradefee;
var ecf;
var subsidy;
var remaining_months;

function DgfCalculator(ecf,subsidy,months_remaining){

    var monthly_cost = (subsidy / 24) ;
    var total = monthly_cost * months_remaining ;
    var dgf = ecf - total ;
    return template_downgradefee = $('\
                       <p>Here is the downgrade fee for the contract change : '+dgf+' $</p>');

}

$('#ecf').on('change',function () {
    ecf = $(this).val();
})
$('#remaining_months').on('change',function () {
    remaining_months = $(this).val();
})
$('#subsidy').on('change',function () {
    subsidy = $(this).val();
})

$('#calculate_dgf').on('click',function () {

    $('.rr2').empty();
    $('.rr2').append(DgfCalculator(ecf,subsidy,remaining_months));

})

