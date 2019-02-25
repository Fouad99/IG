var result ;
var result_TPS;
var result_TPV;
var TPS ;
var TVP ;
var template_taxes_included ;

function taxesCalculator(province,amount) {

    if(province == "al"){

        TPS = 0.05;
        TVP = 0.0;
        result_TPS = (amount * TPS);
        result_TPV = (amount * TVP);
        result = parseFloat(amount) + parseFloat(result_TPS) + parseFloat(result_TPV) ;
        return template_taxes_included = $('\
                      <p>TPS : '+result_TPS+'</p>\
                      <p>TVP : '+result_TPV+'</p>\
                      <p>Price taxes included : '+result+'</p>');
    }
    else if(province == "bc"){

        TPS = 0.05;
        TVP = 0.07;
        result_TPS = (amount * TPS);
        result_TPV = (amount * TVP);
        result = parseFloat(amount) + parseFloat(result_TPS) + parseFloat(result_TPV) ;
        return template_taxes_included = $('\
                      <p>TPS : '+result_TPS+'</p>\
                      <p>TVP : '+result_TPV+'</p>\
                      <p>Price taxes included : '+result+'</p>');

    }
    else if(province == "nb"){

        TPS = 0.05;
        TVP = 0.1;
        result_TPS = (amount * TPS);
        result_TPV = (amount * TVP);
        result = parseFloat(amount) + parseFloat(result_TPS) + parseFloat(result_TPV) ;
        return template_taxes_included = $('\
                      <p>TPS : '+result_TPS+'</p>\
                      <p>TVP : '+result_TPV+'</p>\
                      <p>Price taxes included : '+result+'</p>');
    }
    else if(province == "nl"){

        TPS = 0.05;
        TVP = 0.1;
        result_TPS = (amount * TPS);
        result_TPV = (amount * TVP);
        result = parseFloat(amount) + parseFloat(result_TPS) + parseFloat(result_TPV) ;
        return template_taxes_included = $('\
                      <p>TPS : '+result_TPS+'</p>\
                      <p>TVP : '+result_TPV+'</p>\
                      <p>Price taxes included : '+result+'</p>');
    }
    else if(province == "ns"){

        TPS = 0.05;
        TVP = 0.1;
        result_TPS = (amount * TPS);
        result_TPV = (amount * TVP);
        result = parseFloat(amount) + parseFloat(result_TPS) + parseFloat(result_TPV) ;
        return template_taxes_included = $('\
                      <p>TPS : '+result_TPS+'</p>\
                      <p>TVP : '+result_TPV+'</p>\
                      <p>Price taxes included : '+result+'</p>');
    }
    else if(province == "mb"){

        TPS = 0.05;
        TVP = 0.08;
        result_TPS = (amount * TPS);
        result_TPV = (amount * TVP);
        result = parseFloat(amount) + parseFloat(result_TPS) + parseFloat(result_TPV) ;
        return template_taxes_included = $('\
                      <p>TPS : '+result_TPS+'</p>\
                      <p>TVP : '+result_TPV+'</p>\
                      <p>Price taxes included : '+result+'</p>');

    }
    else if(province == "on"){

        TPS = 0.05;
        TVP = 0.08;
        result_TPS = (amount * TPS);
        result_TPV = (amount * TVP);
        result = parseFloat(amount) + parseFloat(result_TPS) + parseFloat(result_TPV) ;
        return template_taxes_included= $('\
                      <p>TPS : '+result_TPS+'</p>\
                      <p>TVP : '+result_TPV+'</p>\
                      <p>Price taxes included : '+result+'</p>');

    }
    else if(province == "pe"){

        TPS = 0.05;
        TVP = 0.1;
        result_TPS = (amount * TPS);
        result_TPV = (amount * TVP);
        result = parseFloat(amount) + parseFloat(result_TPS) + parseFloat(result_TPV) ;
        return template_taxes_included = $('\
                      <p>TPS : '+result_TPS+'</p>\
                      <p>TVP : '+result_TPV+'</p>\
                      <p>Price taxes included : '+result+'</p>');

    }
    else if(province == "qc"){

        TPS = 0.05;
        TVP = 0.09975;
        result_TPS = (amount * TPS);
        result_TPV = (amount * TVP);
        result = parseFloat(amount) + parseFloat(result_TPS) + parseFloat(result_TPV) ;
        return template = $('\
                      <p>TPS : '+result_TPS+'</p>\
                      <p>TVP : '+result_TPV+'</p>\
                      <p>Price taxes included : '+result+'</p>');

    }
    else if(province == "sk"){

        TPS = 0.05;
        TVP = 0.06;
        result_TPS = (amount * TPS);
        result_TPV = (amount * TVP);
        result = parseFloat(amount) + parseFloat(result_TPS) + parseFloat(result_TPV) ;
        return template_taxes_included = $('\
                      <p>TPS : '+result_TPS+'</p>\
                      <p>TVP : '+result_TPV+'</p>\
                      <p>Price taxes included : '+result+'</p>');

    }

}
$(document).ready(function () {


    $('#province').on('change',function () {
        $('.rr1').empty();

        province_input = $(this).val();

    })
    $('#amount').on('change',function () {

        amount_input = $(this).val();

    })

    $('#calculate').on('click', function () {
        $('.rr1').empty();
        $('.rr1').append(taxesCalculator(province_input,amount_input));
    })


})