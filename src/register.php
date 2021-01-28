<?php echo file_get_contents("html/head.html"); ?>
<title>Gamefest @ GT - Register</title>
<meta property="og:title" content="Gamefest @ GT - Register">
<meta property="og:url" content="https://gamefest.gg/register.html">
<link href="prod/base.min.css" rel="stylesheet">
</head>
<body>
<header>
    <?php echo file_get_contents("html/navbar.html"); ?>
</header>
<main>
    <section>
        <div class="hex-background-gray">
            <div class="container pt-5 pb-3 px-4 white-text">
                <h2 class="h2 mt-5"><i class="fas fa-ticket-alt mt-4 mb-4 mr-4"></i>Register</h2>
                <div class="mb-4">
                    <p class="descr" style="line-height: 24px;">Register for our prized tournaments or freeplay areas. Ticket price includes two pizza meals provided at the event and admission for both days. See the <a href="schedule">schedule</a> for more information.</p>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div style="background-color: #EAEAEA;">
            <div class="container">
                <div class=" z-depth-1" style="z-index: -10; background-color: white;">
                    <div id="loading-progress-spinner" class="spinner-wrapper py-1" style="position: absolute; left: 50%;">
                        <div class="loader" style="position: relative; left: -50%; top: 240px;">
                            <svg class="circular" viewBox="25 25 50 50">
                                <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
                            </svg>
                        </div>
                    </div>
                    <iframe src="https://smash.gg/tournament/gamefest-2018/register/embed" frameborder="0" height="580" width="100%" scrolling="auto" onload="onRegisterFrameLoad(this)" style="margin-bottom: -7px;"></iframe>
                </div>
            </div>
        </div>
    </section>
</main>
<?php echo file_get_contents("html/footer.html"); ?>
<?php echo file_get_contents("html/scripts.html"); ?>
<script type="text/javascript">
    function onRegisterFrameLoad() {
        $("#loading-progress-spinner").addClass("hidden");
    };
</script>
</body>
</html>