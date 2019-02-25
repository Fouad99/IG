<?php
require 'templates/header.html';
?>
<?php
require 'templates/sidebar.html';
?>

    <div class="content_middle">

        <div class="container">
            <h3>This page helps you out to know services of Freedom mobile</h3>

            <ul class="nav nav-tabs">
                <li class="active"><a data-toggle="tab" href="#summary">Summary</a></li>
                <li><a data-toggle="tab" href="#prices">Prices</a></li>
                <li><a data-toggle="tab" href="#compare">Virgin VS Fido</a></li>
                <li><a data-toggle="tab" href="#positioning">Positioning</a></li>
            </ul>

            <div class="tab-content">
                <div id="summary" class="tab-pane fade in active">
                    <h4>Summary of the company</h4>
                    <p>This would be the area where the info will be displayed </p>
                </div>
                <div id="prices" class="tab-pane fade in">
                    <h4>Prices of plans / services</h4>
                    <p>This would be the area where the info will be displayed </p>
                </div>
                <div id="compare" class="tab-pane fade in">
                    <h4>Comparison of Virgin and Fido</h4>
                    <p>This would be the area where the info will be displayed </p>
                </div>
                <div id="positioning" class="tab-pane fade in">
                    <h4>Positioning concerning Virgin mobile</h4>
                    <p>This would be the area where the info will be displayed </p>
                </div>
            </div>
        </div>

    </div>
<?php require 'templates/footer.html' ; ?>