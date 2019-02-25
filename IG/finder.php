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
            <div class="col-lg-3 col-md-3">
                <input type="text" class="form-control search" placeholder="Search">

                <button class="sort" data-sort = "name">Sort by name</button>

            </div>
        </div>

            <div class="row">

                <div class="col-md-9 col-lg-9">

                    <ul class="list">
                        <li>
                            <h3 class="doc_name">Handle data notification issue</h3>
                            <p class="doc_code">PRO3345</p>
                        </li>
                        <li>
                            <h3 class="doc_name">Domestique 50$ overage</h3>
                            <p class="doc_code">PRO222</p>
                        </li>
                        <li>
                            <h3 class="doc_name">Different cases</h3>
                            <p class="doc_code">REF33</p>
                        </li>
                        <li>
                            <h3 class="doc_name">payment methods</h3>
                            <p class="doc_code">REF18</p>
                        </li>
                        <li>
                            <h3 class="doc_name">Price plans</h3>
                            <p class="doc_code">REF3453</p>
                        </li>
                        <li>
                            <h3 class="doc_name">Phones</h3>
                            <p class="doc_code">REF334</p>
                        </li>
                        <li>
                            <h3 class="doc_name">Handle data notification issue</h3>
                            <p class="doc_code">PRO3345</p>
                        </li>
                        <li>
                            <h3 class="doc_name">Domestique 50$ overage</h3>
                            <p class="doc_code">PRO222</p>
                        </li>
                        <li>
                            <h3 class="doc_name">Different cases</h3>
                            <p class="doc_code">REF33</p>
                        </li>
                        <li>
                            <h3 class="doc_name">payment methods</h3>
                            <p class="doc_code">REF18</p>
                        </li>
                        <li>
                            <h3 class="doc_name">Price plans</h3>
                            <p class="doc_code">REF3453</p>
                        </li>
                        <li>
                            <h3 class="doc_name">Phones</h3>
                            <p class="doc_code">REF334</p>
                        </li>
                        <li>
                            <h3 class="doc_name">Handle data notification issue</h3>
                            <p class="doc_code">PRO3345</p>
                        </li>
                        <li>
                            <h3 class="doc_name">Domestique 50$ overage</h3>
                            <p class="doc_code">PRO222</p>
                        </li>
                        <li>
                            <h3 class="doc_name">Different cases</h3>
                            <p class="doc_code">REF33</p>
                        </li>
                        <li>
                            <h3 class="doc_name">payment methods</h3>
                            <p class="doc_code">REF18</p>
                        </li>
                        <li>
                            <h3 class="doc_name">Price plans</h3>
                            <p class="doc_code">REF3453</p>
                        </li>
                        <li>
                            <h3 class="doc_name">Phones</h3>
                            <p class="doc_code">REF334</p>
                        </li>
                        <li>
                            <h3 class="doc_name">Handle data notification issue</h3>
                            <p class="doc_code">PRO3345</p>
                        </li>
                        <li>
                            <h3 class="doc_name">Domestique 50$ overage</h3>
                            <p class="doc_code">PRO222</p>
                        </li>
                        <li>
                            <h3 class="doc_name">Different cases</h3>
                            <p class="doc_code">REF33</p>
                        </li>
                        <li>
                            <h3 class="doc_name">payment methods</h3>
                            <p class="doc_code">REF18</p>
                        </li>
                        <li>
                            <h3 class="doc_name">Price plans</h3>
                            <p class="doc_code">REF3453</p>
                        </li>
                        <li>
                            <h3 class="doc_name">Phones</h3>
                            <p class="doc_code">REF334</p>
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
            page: 10,
            pagination: true
        });

    </script>

<?php require 'templates/footer.html' ?>