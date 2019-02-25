<?php
require 'templates/header.html';
?>
<?php
require 'templates/sidebar.html';
?>
<style>
    table, th, td{

        border: 1px solid black ;
        border-collapse: collapse;
    }

</style>
    <script language="JavaScript" type="text/javascript">

        function display(){

            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {

                if(this.readyState == 4 && this.status == 200){

                    fetchInfo(this);

                }
            };
            request.open("GET", "test_plan.xml", true);
            request.send();
        }

        function fetchInfo(xml){
            var i ;
            var xmlDoc = xml.responseXML ;
            var table = "<tr><th>Plan name</th><th>Data</th><th>Price</th></tr>";
            var x = xmlDoc.getElementsByTagName("plan");

            for(i = 0; i < x.length ; i++){
                table += "<tr><td>" + x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</td><td>" +
                    x[i].getElementsByTagName("data")[0].childNodes[0].nodeValue + "</td><td>" +
                    x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</td></tr>" ;
            }

            $('.display').empty();
            $('.display').append(table);
        }


        function erase() {

            $('.display').empty();
        }

    </script>


<div class="content_middle">


    <div class="pricesContainer">

    <div class="row">
        <div class="col-md-offset-4 col-md-8">
            <h2>Let s make it happen through AJAX</h2>
            <button type="button" class="btn" onclick="display()">Let s display it</button><button type="button" class="btn" onclick="erase()">Let s erase it</button>
            <div class="display">

            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-3 col-lg-3">
            <div class="jumbotron">

            <h3 class="text-center">BIG GIG 5</h3>
            <ul>
                <li>5GB data usage</li>
                <li>unlimited calls</li>
                <li>unlimited global sms</li>
            </ul>
            <h4 class="text-center">55$ + tax</h4>
            </div>

        </div>
        <div class="col-md-3 col-lg-3" style="border-left: 2px solid">
            <div class="jumbotron">

            <h3 class="text-center">BIG GIG 10</h3>
            <ul>
                <li>10GB data usage</li>
                <li>unlimited calls</li>
                <li>unlimited global sms</li>
            </ul>
            <h4 class="text-center">65$ + tax</h4>
            </div>
        </div>

        <div class="col-md-3 col-lg-3" style="border-left: 2px solid">
            <div class="jumbotron">
            <h3 class="text-center">BIG GIG 15</h3>
            <ul>
                <li>15GB data usage</li>
                <li>unlimited calls</li>
                <li>unlimited global sms</li>
            </ul>
            <h4 class="text-center">85$ + tax</h4>
            </div>
        </div>

        <div class="col-md-3 col-lg-3" style="border-left: 2px solid">
            <div class="jumbotron">
            <h3 class="text-center">BIG GIG 20</h3>
                <ul>
                    <li>20GB data usage</li>
                    <li>unlimited calls</li>
                    <li>unlimited global sms</li>
                </ul>
                <h4 class="text-center">105$ + tax</h4>
            </div>
        </div>
    </div>
    </div>
</div>


<?php
require 'templates/footer.html';
?>