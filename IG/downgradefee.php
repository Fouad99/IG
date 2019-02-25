<?php
require 'templates/header.html';
?>
<?php
require 'templates/sidebar.html';
?>
<div class="content_middle">
    <div class="row">
        <div class="col-lg-4">
            <label>Enter the remaining balance : </label>
            <input type="number" class="form-control" id="ecf" >
        </div>

        <div class="col-lg-4">
            <label>Enter the number of remaining months : </label>
            <input type="number" class="form-control" id="remaining_months" >
        </div>

        <div class="col-lg-4">
            <label>Enter the complete subsidy of the new plan : </label>
            <input type="number" class="form-control" id="subsidy">
        </div>
    </div>
    <div class="row">
        <div class="col-lg-offset-4 col-lg-3">
            <a class="btn btn-info btn-lg btn-block" id="calculate_dgf">Calculate</a>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-6 rr2">
        </div>
    </div>
</div>
<script src="js2/calculations_dgf.js"></script>

<?php require 'templates/footer.html' ; ?>
