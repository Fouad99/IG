<?php
require 'templates/header.html';
?>
<?php
require 'templates/sidebar.html';
?>
        <div class="content_middle">
                <form id="icm_notes">
                    <!-- first block ( depart. + caller identity + voice Id + reason ) fields -->
                    <div class="row">
                        <div class="col-md-3">
                            <label>Department : </label>
                            <select id="department" class="form-control">
                                <option value="blank">Choose option.. </option>
                                <option value="Loyalty">Loyalty</option>
                                <option value="Retention">Retention</option>
                                <option value="Universal">Universal</option>
                                <option value="FidoDirect">Fido Direct</option>
                                <option value="Tech support">Technical support</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                        <label>Who called :</label>
                            <select id="who" class="form-control WW">
                                <option value="blank">Choose option.. </option>
                                <option value="Account holder">Account Holder</option>
                                <option value="Contact auth. Level 1">Contact LVL1</option>
                                <option value="Contact auth. Level 2">Contact LVL2</option>
                                <option value="Contact general">General Contact</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div class="col-md-3" id="specify_container">
                            <label>Specify :</label>
                            <input id="who_specify" class="form-control" type="text" placeholder="Specify who called" disabled>
                        </div>

                        <div class="col-md-3" id="auth_container">

                            <label>Authenticated by : </label>
                            <select id="authentication" class="form-control">
                                <option value="blank">Choose option.. </option>
                                <option value="Voice ID">Voice ID</option>
                                <option value="PIN code">Pin code</option>
                                <option value="security questions">Security Questions</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 reason_container">
                            <label>Reason  : </label>
                            <select id="reason" class="form-control">
                                <option value="blank" >Choose option.. </option>
                                <option value="account management">Account management</option>
                                <option value="Billing dispute">Billing dispute</option>
                                <option value="Monthly service">Monthly service</option>
                                <option value="payment">Payment</option>
                                <option value="Contract related">Upgrade</option>
                                <!--<option value="Tor">TOR</option> -->
                                <!--<option value="Temp">Temporary suspension</option> -->
                                <!--<option value="prepaid">Prepaid migration</option> -->
                                <option value="Unlocking device">Unlocking device</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <!-- End of first block ( depart. + caller identity + voice Id + reason ) fields -->


                    <div id="reason_handler_id">

                    </div>

                    <div id="reason_handler_id_2">
                        <!--
                        <div class="row">
                            <label class="control-label col-md-2 col-lg-2">Is there another reason ?</label>
                            <div class="col-md-3 col-lg-3">
                                <label class="radio-inline control-label"><input type="radio" name="anotherReason" value="yes" >Yes</label>
                                <label class="radio-inline control-label"><input type="radio" name="anotherReason" value="no" >No</label></div>
                            <div class="col-md-3 col-lg-3"><a href="javascript:void(0);"class="btn btn-md btn-success add_new_reason" disabled>Add another reason</a></div>
                        </div> -->
                    </div>




                    <!--
                                        <div class="row r1">
                                            <div class="col-md-3">
                                                <label>TELLI ACTIONS OFFERS :</label>
                                                <select id="telli_offers" class="form-control">
                                                    <option value="Targeted hup">Targeted HUP Discount</option>
                                                    <option value="Targeted PP">Targeted Plan Loyalty</option>
                                                </select>
                                            </div>
                                            <div class="col-md-7">
                                                <label>TELLI TO RESOLVE : </label>
                                                <textarea id="telli_resolve" placeholder="describe what was in the Telli to Resolve (Optional)" class="form-control"></textarea>
                                            </div>
                                        </div> -->

                    <div class="row">
                        <div class="col-md-10" style="text-align: center">
                            <a type="submit" id="print_it" class="btn btn-lg btn-info">Print it</a>
                            <button type="reset" class="btn btn-lg btn-default" id="Reset">Reset</button>
                        </div>
                    </div>
                </form>
            <div class="output">
                <div class="row final">

                </div>
                <div class="row fsolution">
                </div>
            </div>
        </div>
<?php require 'templates/footer.html' ; ?>

