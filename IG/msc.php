<?php
require 'templates/header.html';
?>
<?php
require 'templates/sidebar.html';
?>

<div class="content_middle">
<form id="msc">
    <div class="row">
        <div class="col-md-3">
            <label>Department : </label>
            <select class="form-control department">
                <option value="blank">Choose option.. </option>
                <option value="Retention">Retention</option>
                <option value="FidoDirect">Fido Direct</option>
                <option value="Loyalty">Loyalty</option>
            </select>
        </div>
        <div class="col-md-3">
            <label>BAN number : </label>
            <input type="text" class="form-control ban" placeholder="999999999">
        </div>

        <div class="col-md-3 col-lg-3">
            <label>How many impacted ctns : </label>
            <select class="form-control ctns">
                <option value="blank" >Choose option.. </option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    </div>

    <div class="ctn_handler">

    </div>

    <div class="row">
        <div class="col-md-3 col-lg-3">
            <label>Nature of the issue  : </label>
            <select class="form-control msc_reason">
                <option value="blank" >Choose option.. </option>
                <option value="Billing dispute">Billing dispute</option>
                <option value="Transaction issue">Transaction issue</option>
                <option value="Unlocking device">Unlocking device</option>
                <option value="Cancellation">Cancellation</option>
                <option value="Other">Other</option>
            </select>
        </div>
    </div>

        <div class="msc_reason_handler">

        </div>

    <div class="row">
        <div class="col-md-10" style="text-align: center">
            <a type="submit" id="print_comment" class="btn btn-lg btn-info">Print it</a>
            <button type="reset" class="btn btn-lg btn-default" id="Reset">Reset</button>
        </div>
    </div>
</form>


    <div class="row final_comment">

    </div>



</div>

<script src="js3/msc.js"></script>
<?php require 'templates/footer.html' ; ?>
