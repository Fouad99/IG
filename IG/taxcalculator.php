<?php
require 'templates/header.html';
?>
<?php
require 'templates/sidebar.html';
?>

<div class="content_middle">
    <div class="row">
        <div class="col-lg-4">
            <label>Select the Province :</label>
            <select id="province" class="form-control">
                <option value="al">Alberta</option>
                <option value="bc">British Columbia</option>
                <option value="nb">New Brunswick</option>
                <option value="nl">Newfoundland and Labrador</option>
                <option value="ns">Nova Scotia</option>
                <option value="mb">Manitoba</option>
                <option value="on">Ontario</option>
                <option value="pe">Prince Edward Island</option>
                <option value="qc">Quebec</option>
                <option value="sk">Saskatchewan</option>
            </select>
        </div>
        <div class="col-lg-4">
            <label>Indicate the price :</label>
            <input class="form-control" type="number" id="amount">
        </div>
        <div class="col-lg-2">
            <label>There you click</label>
            <a class="btn btn-md btn-info" id="calculate">calculate</a>
        </div>
    </div>

    <div class="row">

        <div class="col-lg-6 rr1">

        </div>
    </div>
</div>




<script src="js2/calculations.js"></script>
<?php require 'templates/footer.html' ; ?>
