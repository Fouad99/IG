<?php
require 'templates/header.html';
?>
<?php
require 'templates/sidebar.html';
?>
<div class="content_middle">
<div class="row">
    <div class="col-lg-8 col-md-8">
        <div id="stat1">
        </div>
        <script>

            var data_plan = {
                x: ['month 06','month 05','month 04','month 03','month 02','month 01'],
                y: [6,6,6,6,6,6],
                name: 'Data of the plan',
                type: 'bar'
            };

            var data_usage = {
                x: ['month 06','month 05','month 04','month 03','month 02','month 01'],
                y: [3,5.5,4,2,6.6,6.8],
                name: 'Data usage',
                type: 'bar'
            };

            var data = [data_plan, data_usage];
            var layout = {
                title: 'Data usage of the last 6 months',
                font: {
                    family: 'Raleway, sans-serif'
                },

                barmode: 'group'

            };

            Plotly.newPlot('stat1',data, layout);

        </script>
    </div>
</div>
</div>

<?php
require 'templates/footer.html';
?>
