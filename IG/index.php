<?php
require 'templates/header.html';
?>
<?php
require 'templates/sidebar.html';
?>
<div class="content_middle">

    <div class="row">
        <div class="col-md-2 col-lg-2">

                <h5><i class="fas fa-user" style="margin-right: 10px"></i>Churn rate</h5>
                <p class="text-left"><span  style="font-size: 1.4em; margin-right: 10px; font-weight: bold">13%</span></p>
                <p><small><span style="color: #5cb85c">-0.6%</span><em>    From last week</em></small></p>
        </div>

        <div class="col-md-2 col-lg-2" style="border-left: 1px solid black">
            <h5><i class="fas fa-clock" style="margin-right: 10px"></i>Average time</h5>
            <p class="text-left"><span  style="font-size: 1.4em; margin-right: 10px; font-weight: bold">11.09 min</span></p>
            <p><small><span style="color: #5cb85c">+0.22%</span><em>    From last week</em></small></p>
        </div>

        <div class="col-md-2 col-lg-2" style="border-left: 1px solid black">
            <h5><i class="fas fa-medkit" style="margin-right: 10px"></i>MSC</h5>
            <p class="text-left"><span  style="font-size: 1.4em; margin-right: 10px; font-weight: bold">211 requests</span></p>
            <p><small><span style="color: #5cb85c">+1.92%</span><em>    From last week</em></small></p>
        </div>

        <div class="col-md-2 col-lg-2" style="border-left: 1px solid black">
            <h5><i class="fas fa-mobile-alt" style="margin-right: 10px"></i>FDP</h5>
            <p class="text-left"><span  style="font-size: 1.4em; margin-right: 10px; font-weight: bold">33 sold</span></p>
            <p><small><span style="color: #5cb85c">+3.92%</span><em>    From last week</em></small></p>
        </div>
        <div class="col-md-2 col-lg-2" style="border-left: 1px solid black">
            <h5><i class="fas fa-smile-beam" style="margin-right: 10px"></i>OTE</h5>
            <p class="text-left"><span  style="font-size: 1.4em; margin-right: 10px; font-weight: bold">66.87</span></p>
            <p><small><span style="color: #5cb85c">+0.92%</span><em>    From last week</em></small></p>
        </div>

        <div class="col-md-2 col-lg-2" style="border-left: 1px solid black">
            <h5><i class="fas fa-headset" style="margin-right: 10px"></i>Calls back</h5>
            <p class="text-left"><span  style="font-size: 1.4em; margin-right: 10px; font-weight: bold">19.87</span></p>
            <p><small><span style="color: #5cb85c">+2.92%</span><em>    From last week</em></small></p>
        </div>
    </div>


    <div class="row" style="background-color: white; margin-left: 2px; margin-right: 2px; margin-top: 35px; padding: 15px">
        <div class="col-md-6 col-lg-6">
            <h4 class="text-left" style="color: grey">Cancellations saved<small>   <em>2nd semester 2018</em></small></h4>
            <hr>

            <canvas id="myChart" height="200" width="400">
            </canvas>

        </div>
        <div class="col-md-6 col-lg-6" style="border-left: solid 3px grey">
            <div class=" col-md-11 col-lg-11">
                <h4 class="text-left" style="color: grey">TOP WAYS SAVED CANCELLATIONS</h4>
                <hr>

                <div class="row">
                    <label>Prepaid migration</label>
                <div class="progress">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 50%">
                        50%
                    </div>
                </div>
                </div>

                <div class="row">
                    <label>Retention offers</label>
                    <div class="progress">
                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
                            30%
                        </div>
                    </div>
                </div>

                <div class="row">
                    <label>Billing issue resolution</label>
                    <div class="progress">
                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style="width: 15%">
                            15%
                        </div>
                    </div>
                </div>

                <div class="row">
                    <label>Transfer of responsibility (TOR)</label>
                    <div class="progress">
                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style="width: 5%">
                            5%
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="row" style="margin-left: 2px; margin-right: 2px; margin-top: 35px;">

        <div class="col-lg-4 col-md-4" style="background-color: white; padding: 25px">
            <h4 class="text-left" style="color: grey">Top 5 sold Devices</h4>
            <hr>
            <div class="row" style="padding-left: 20px;padding-right: 20px">
                <canvas id="topDeviceChart" height="35" width="35">

                </canvas>
            </div>
        </div>

        <div class="col-lg-4 col-md-4" style="background-color: white; padding: 25px; margin-left: 25px">
            <h4 class="text-left" style="color: grey">Top MyApp activities usage</h4>
            <hr>
            <div class="row" style="padding-left: 20px;padding-right: 20px">
                <canvas id="myAppChart" height="35" width="35">

                </canvas>
            </div>
        </div>

        <div class="col-lg-3 col-md-3 " style="background-color: white; padding: 25px; margin-left: 25px">
            <h4 class="text-left" style="color: grey">Latest Alerts</h4>
            <hr>
            <div class="row" style="padding-left: 20px;padding-right: 20px">
            </div>
        </div>





    </div>
</div>

<script>
    var ctx = document.getElementById('myChart').getContext('2d');
    var mixedChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{

                label: 'Cancellation requests',
                backgroundColor: 'rgb(187,222,251)',
                borderColor: '#FFFFFF',
                data: [18,37,22,42,58,62]
            },{
                label: 'Cancellations saved',
                backgroundColor: 'rgb(183,28,28)',
                borderColor: '#FFFFFF',
                data: [15,25,20,40,56,60]
            }],
            labels: ['July','August','September','October','November','December']
        },
        options: {}
    });

    var ctr = document.getElementById('topDeviceChart').getContext('2d');
    var myDevice = new Chart(ctr,{

        type: 'pie',
        data: {
            labels: [
                "IPhone X",
                "Samsung S9+",
                "IPhone Xs",
                "Samsung S8",
                "Huawei 20Pro "
            ],
            datasets: [{
                data: [130,95,120,80,65],
                backgroundColor: [
                    "#FF6384",
                    "#63FF84",
                    "#84FF63",
                    "#8463FF",
                    "#6384FF"
                ]
            }]
        },
        options: {}
    });

    var activitiesData = {
        labels: ["Data Bytes","FidoXtra","Data tracker","Billing","Plan change & HUP"],
        datasets: [{
            label: "Quebec users",
            backgroundColor: "rgba(200,0,0,0.2)",
            data: [75, 60, 70, 40, 32]
        },{
            label: "Ontario users",
            backgroundColor: "rgba(0,0,200,0.2)",
            data: [90, 55, 82, 48, 25]
        }]
    };

    var cte = document.getElementById('myAppChart').getContext('2d');
    var myApp = new Chart(cte, {

        type: 'radar',
        data: activitiesData
    });


</script>

<?php require 'templates/footer.html' ; ?>

