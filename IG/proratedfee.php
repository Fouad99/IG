<?php
require 'templates/header.html';
?>
<?php
require 'templates/sidebar.html';
?>

<div class="content_middle">
    <div class="row">

        <div class="col-md-offset-3 col-lg-offset-3 col-md-5 col-lg-5">
            <label>How many days between beginning of the cycle and effective date of plan</label>
            <input type="number" class="form-control daysCycle" placeholder="Should be less than 30 days">
        </div>
    </div>

    <div class="row">

        <div class="col-md-6 col-lg-6">

            <div class="col-lg-6 col-md-6">
                <label>Price old plan</label>
                <input type="number" class="form-control priceOldPlan">
            </div>

            <div class="col-lg-6 col-md-6">
                <label>Total old addon (put 0 if not)</label>
                <input type="number" class="form-control priceAddon">
            </div>
        </div>

        <div class="col-md-6 col-lg-6" style="border-left: 3px solid black">

            <div class="col-lg-6 col-md-6">
                <label>Price new plan</label>
                <input type="number" class="form-control priceNewPlan">
            </div>

            <div class="col-lg-6 col-md-6">
                <label>Total new addon (put 0 if not)</label>
                <input type="number" class="form-control priceNewAddon">
            </div>
        </div>
    </div>

    <div class="row" style="margin-top: 100px">
        <div class="col-lg-offset-5 col-md-offset-5 col-md-4 col-lg-4">
            <a class="btn  btn-primary btn-lg calculateProrata">Calculate</a>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-offset-2 col-md-offset-2 col-md-8 col-lg-8">
            <div class="finalTotal">

            </div>
        </div>
    </div>
</div>


<script src="js2/calculationsprorata.js"></script>
<?php require 'templates/footer.html' ; ?>