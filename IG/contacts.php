<?php
require 'templates/header.html';
?>
<?php
require 'templates/sidebar.html';
?>

<style>

    .list {
        font-family:sans-serif;
        margin:0;
        padding:20px 0 0;
    }
    .list > li {
        display:block;
        background-color: #eee;
        padding:10px;
        box-shadow: inset 0 1px 0 #fff;
    }
    .avatar {
        max-width: 150px;
    }
    img {
        max-width: 100%;
    }
    h3 {
        font-size: 16px;
        margin:0 0 0.3rem;
        font-weight: normal;
        font-weight:bold;
    }
    p {
        margin:0;
    }

    input {
        border:solid 1px #ccc;
        border-radius: 5px;
        padding:7px 14px;
        margin-bottom:10px
    }
    input:focus {
        outline:none;
        border-color:#aaa;
    }
    .sort {
        padding:8px 30px;
        border-radius: 6px;
        border:none;
        display:inline-block;
        color:#fff;
        text-decoration: none;
        background-color: #28a8e0;
        height:30px;
    }
    .sort:hover {
        text-decoration: none;
        background-color:#1b8aba;
    }
    .sort:focus {
        outline:none;
    }
    .sort:after {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
        content:"";
        position: relative;
        top:-10px;
        right:-5px;
    }
    .sort.asc:after {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #fff;
        content:"";
        position: relative;
        top:13px;
        right:-5px;
    }
    .sort.desc:after {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid #fff;
        content:"";
        position: relative;
        top:-10px;
        right:-5px;
    }
</style>

<div class="content_middle">

    <div class="row">
        <h2 class="page-header text-center">Here you will find what it takes</h2>
        <div class="col-lg-3 col-md-3"></div>
    </div>

    <div id="liste">
        <div class="row">
            <div class="col-lg-offset-4 col-md-offset-4 col-lg-3 col-md-3">
                <input type="text" class="form-control search" placeholder="Search">
                <!--<button class="sort" data-sort = "name">Sort by name</button> -->
            </div>
        </div>

        <div class="row">
            <div class="col-md-offset-1 col-lg-offset-1 col-md-9 col-lg-9">
                <ul class="list">
                    <li>
                        <h4 class="doc_name">Retention Customer</h4>
                        <div class="doc_code">
                            <p><strong>CONT3456</strong></p>
                            <button data-toggle="collapse" data-target="#ret" class="btn btn-success">More..</button>
                            <div id="ret" class="collapse">
                                <p><strong>This page will allow to find the info you need to contact the retention dept. this has to be
                                warm transf. except if you have received approval from your TM
                                    </strong></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h4 class="doc_name">Universal internet/Mobile</h4>
                        <div class="doc_code">
                            <p><strong>CONT3999</strong></p>
                            <button data-toggle="collapse" data-target="#universal" class="btn btn-success">More..</button>
                            <div id="universal" class="collapse">
                                <p><strong>This page will allow to find the info you need to contact the universal dept. this has to be
                                        warm transf. except if you have received approval from your TM
                                    </strong></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h4 class="doc_name">CET escalation</h4>
                        <div class="doc_code">
                            <p><strong>CONT3940</strong></p>
                            <button data-toggle="collapse" data-target="#cet" class="btn btn-success">More..</button>
                            <div id="cet" class="collapse">
                                <p><strong>This page will allow to find the info you need to contact the CET escalation team dept. this has to be
                                        warm transf. except if you have received approval from your TM
                                    </strong></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h4 class="doc_name">Technical support 1</h4>
                        <div class="doc_code">
                            <p><strong>CONT1990</strong></p>
                            <button data-toggle="collapse" data-target="#techSupport1" class="btn btn-success">More..</button>
                            <div id="techSupport1" class="collapse">
                                <p><strong>This page will allow to find the info you need to contact the technical support 1 dept. this has to be
                                        warm transf. except if you have received approval from your TM
                                    </strong></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h4 class="doc_name">Technical support 2</h4>
                        <div class="doc_code">
                            <p><strong>CONT1992</strong></p>
                            <button data-toggle="collapse" data-target="#techSupport2" class="btn btn-success">More..</button>
                            <div id="techSupport2" class="collapse">
                                <p><strong>This page will allow to find the info you need to contact the technical support 2 dept. this has to be
                                        warm transf. except if you have received approval from your TM
                                    </strong></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h4 class="doc_name">Technical support 3</h4>
                        <div class="doc_code">
                            <p><strong>CONT1993</strong></p>
                            <button data-toggle="collapse" data-target="#techSupport3" class="btn btn-success">More..</button>
                            <div id="techSupport3" class="collapse">
                                <p><strong>This page will allow to find the info you need to contact the technical support 3 dept. this has to be
                                        warm transf. except if you have received approval from your TM
                                    </strong></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h4 class="doc_name">Dispatch</h4>
                        <div class="doc_code">
                            <p><strong>CONT1993</strong></p>
                            <button data-toggle="collapse" data-target="#dispatch" class="btn btn-success">More..</button>
                            <div id="dispatch" class="collapse">
                                <p><strong>This page will allow to find the info you need to contact the dispatch dept. to discuss any matter regarding technicians this has to be
                                        warm transf. except if you have received approval from your TM
                                    </strong></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h4 class="doc_name">Fido Telesale</h4>
                        <div class="doc_code">
                            <p><strong>CONT007</strong></p>
                            <button data-toggle="collapse" data-target="#direct" class="btn btn-success">More..</button>
                            <div id="direct" class="collapse">
                                <p><strong>This page will allow to find the info you need to contact the telesale dept. to discuss any matter regarding technicians this has to be
                                        warm transf. except if you have received approval from your TM
                                    </strong></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h4 class="doc_name">Validation team</h4>
                        <div class="doc_code">
                            <p><strong>CONT114</strong></p>
                            <button data-toggle="collapse" data-target="#validation" class="btn btn-success">More..</button>
                            <div id="validation" class="collapse">
                                <p><strong>This page will allow to find the info you need to contact the validation dept. to discuss any matter regarding technicians this has to be
                                        warm transf. except if you have received approval from your TM
                                    </strong></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h4 class="doc_name">OOP</h4>
                        <div class="doc_code">
                            <p><strong>CONT114</strong></p>
                            <button data-toggle="collapse" data-target="#oop" class="btn btn-success">More..</button>
                            <div id="oop" class="collapse">
                                <p><strong>This page will allow to find the info you need to contact the validation dept. to discuss any matter regarding technicians this has to be
                                        warm transf. except if you have received approval from your TM
                                    </strong></p>
                            </div>
                        </div>
                    </li>
                    <!------------------------------------------------------>
                    <li>
                        <h4 class="doc_name">OOP</h4>
                        <div class="doc_code">
                            <p><strong>CONT114</strong></p>
                            <button data-toggle="collapse" data-target="#oop" class="btn btn-success">More..</button>
                            <div id="oop" class="collapse">
                                <p><strong>This page will allow to find the info you need to contact the validation dept. to discuss any matter regarding technicians this has to be
                                        warm transf. except if you have received approval from your TM
                                    </strong></p>
                            </div>
                        </div>
                    </li><li>
                        <h4 class="doc_name">OOP</h4>
                        <div class="doc_code">
                            <p><strong>CONT114</strong></p>
                            <button data-toggle="collapse" data-target="#oop" class="btn btn-success">More..</button>
                            <div id="oop" class="collapse">
                                <p><strong>This page will allow to find the info you need to contact the validation dept. to discuss any matter regarding technicians this has to be
                                        warm transf. except if you have received approval from your TM
                                    </strong></p>
                            </div>
                        </div>
                    </li><li>
                        <h4 class="doc_name">OOP</h4>
                        <div class="doc_code">
                            <p><strong>CONT114</strong></p>
                            <button data-toggle="collapse" data-target="#oop" class="btn btn-success">More..</button>
                            <div id="oop" class="collapse">
                                <p><strong>This page will allow to find the info you need to contact the validation dept. to discuss any matter regarding technicians this has to be
                                        warm transf. except if you have received approval from your TM
                                    </strong></p>
                            </div>
                        </div>
                    </li><li>
                        <h4 class="doc_name">OOP</h4>
                        <div class="doc_code">
                            <p><strong>CONT114</strong></p>
                            <button data-toggle="collapse" data-target="#oop" class="btn btn-success">More..</button>
                            <div id="oop" class="collapse">
                                <p><strong>This page will allow to find the info you need to contact the validation dept. to discuss any matter regarding technicians this has to be
                                        warm transf. except if you have received approval from your TM
                                    </strong></p>
                            </div>
                        </div>
                    </li><li>
                        <h4 class="doc_name">OOP</h4>
                        <div class="doc_code">
                            <p><strong>CONT114</strong></p>
                            <button data-toggle="collapse" data-target="#oop" class="btn btn-success">More..</button>
                            <div id="oop" class="collapse">
                                <p><strong>This page will allow to find the info you need to contact the validation dept. to discuss any matter regarding technicians this has to be
                                        warm transf. except if you have received approval from your TM
                                    </strong></p>
                            </div>
                        </div>
                    </li><li>
                        <h4 class="doc_name">OOP</h4>
                        <div class="doc_code">
                            <p><strong>CONT114</strong></p>
                            <button data-toggle="collapse" data-target="#oop" class="btn btn-success">More..</button>
                            <div id="oop" class="collapse">
                                <p><strong>This page will allow to find the info you need to contact the validation dept. to discuss any matter regarding technicians this has to be
                                        warm transf. except if you have received approval from your TM
                                    </strong></p>
                            </div>
                        </div>
                    </li><li>
                        <h4 class="doc_name">OOP</h4>
                        <div class="doc_code">
                            <p><strong>CONT114</strong></p>
                            <button data-toggle="collapse" data-target="#oop" class="btn btn-success">More..</button>
                            <div id="oop" class="collapse">
                                <p><strong>This page will allow to find the info you need to contact the validation dept. to discuss any matter regarding technicians this has to be
                                        warm transf. except if you have received approval from your TM
                                    </strong></p>
                            </div>
                        </div>
                    </li><li>
                        <h4 class="doc_name">OOP</h4>
                        <div class="doc_code">
                            <p><strong>CONT114</strong></p>
                            <button data-toggle="collapse" data-target="#oop" class="btn btn-success">More..</button>
                            <div id="oop" class="collapse">
                                <p><strong>This page will allow to find the info you need to contact the validation dept. to discuss any matter regarding technicians this has to be
                                        warm transf. except if you have received approval from your TM
                                    </strong></p>
                            </div>
                        </div>
                    </li><li>
                        <h4 class="doc_name">OOP</h4>
                        <div class="doc_code">
                            <p><strong>CONT114</strong></p>
                            <button data-toggle="collapse" data-target="#oop" class="btn btn-success">More..</button>
                            <div id="oop" class="collapse">
                                <p><strong>This page will allow to find the info you need to contact the validation dept. to discuss any matter regarding technicians this has to be
                                        warm transf. except if you have received approval from your TM
                                    </strong></p>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul class="pagination"></ul>
            </div>
        </div>
    </div>
</div>
<script>


    var LL = new List('liste', {
        valueNames: ['doc_name','doc_code'],
        page: 5,
        pagination: true
    });

</script>

<?php require 'templates/footer.html' ?>
