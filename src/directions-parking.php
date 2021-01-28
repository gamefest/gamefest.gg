<?php echo file_get_contents("html/head.html"); ?>
<title>Gamefest @ GT - Directions & Parking</title>
<meta property="og:title" content="Gamefest @ GT - Directions & Parking">
<meta property="og:url" content="https://gamefest.gg/directions-parking.html">
<link href="/prod/base.min.css" rel="stylesheet">
<link href="/prod/directions-parking.min.css" rel="stylesheet">
</head>
<body>
<header>
    <?php echo file_get_contents("html/navbar.html"); ?>
</header>
<main>
    <section>
        <div class="hex-background-gray">
            <div class="container pt-5 pb-3 white-text">
                <h2 class="h2 mt-5 mb-4 pl-2 pl-md-0" style=""><i class="fas fa-car mt-4 mr-4"></i>Directions & Parking</h2>
            </div>
        </div>
    </section>
    <section>
        <div class="pt-5" style="background-color: #222;">
            <div class="container py-4 light-text light-hrs">
                <div class="pl-2 pl-md-0">
                    <h2 class="mb-4" style="font-weight: 700 !important;">Venue Location</h2>
                    <p class="mb-3"><span style="font-weight: 500;">Klaus Advanced Computing Building</span><br>
                        266 Ferst Dr<br>
                        Atlanta, GA 30332<br>
                        Georgia Institute of Technology</p>
                    <a class="link-color light-text mb-4" href="https://goo.gl/maps/quYJu7ZsKt12" target="_blank" rel="noopener">Open in Google Maps</a>
                </div>
                <div id="map-container">
                    <h2 class="mb-3 mt-1" style="font-weight: 700 !important;">Parking</h2>
                    <div class="row">
                        <div class="col-12 col-lg-9">
                            <div id="parkingMap" class="z-depth-1 rounded" style="height: 500px"></div>
                        </div>
                        <div class="col-12 col-lg-3">
                            <ul class="list-group dark-list-group light-text mt-5 mt-lg-0" style="background-color: #2b2b2b;">
                                <li class="list-group-item d-flex align-items-center">
                                    <i class="fas fa-circle fa-sm mr-3" style="color:#3fa9c5"></i>
                                    Parking locations
                                </li>
                                <li class="list-group-item d-flex align-items-center">
                                    <i class="fas fa-circle fa-sm mr-3" style="color:#40bd37"></i>
                                    Unloading locations
                                </li>
                                <li class="list-group-item d-flex align-items-center">
                                    <i class="fas fa-circle fa-sm mr-3" style="color:#ea4335"></i>
                                    Event venue
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <a id="directory"></a>
            </div>
        </div>
    </section>
    <section>
        <div style="background-color: #222;">
            <div class="container py-4 light-text light-hrs">
                <div>
                    <h2 class="mb-4" style="font-weight: 700 !important;">Event Map</h2>
                    <div class="row">
                        <div class="col-12 col-lg-9">
                            <div class="p-1 p-sm-3 p-md-4 p-lg-5 mb-4 mb-lg-0 rounded" style="border: 1px solid #666; background-color: #292929;">
                                <img class="img-fluid" src="/svg/directory.svg" alt="Gamefest Directory">
                            </div>
                        </div>
                        <div class="col-12 col-lg-3 light-hrs">
                            <div style="border-bottom: 2px solid #7CAF3C; margin-bottom: 16px;"><h4 style="font-weight: 600!important; letter-spacing: 1px;">LEGEND</h4></div>
                            <ol>
                                <li>Grand Finals Stage</li>
                                <li>Sponsor Tabling (Klaus Atrium)</li>
                                <li>Registration & Front Desk</li>
                                <li>Food Station</li>
                                <li>Potential Freeplay Areas</li>
                                <li>Loading Deck</li>
                            </ol>
                            <hr class="my-3">
                            <p class="mb-2 ml-3"><img class="mr-2" src="/svg/restroom.svg" alt="Restroom icon" height="24px"> Restroom</p>
                            <p class="mb-2 ml-3"><img class="mr-2" src="/svg/elevator.svg" alt="Elevator icon" height="24px"> Elevator</p>
                            <p class="mb-0 ml-3"><img class="mr-2" src="/svg/stairs.svg" alt="Stairs icon" height="24px"> Stairs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
<?php echo file_get_contents("html/footer.html"); ?>
<!--Google Maps-->
<script type="text/javascript" src="prod/directions-parking.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC1y8xKW2Rm5sV2nmpqZ35sMiqXfR0OtFE&callback=buildMaps"></script>
<?php echo file_get_contents("html/scripts.html"); ?>
</body>
</html>