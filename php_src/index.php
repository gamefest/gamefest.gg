<?php echo file_get_contents($_SERVER['DOCUMENT_ROOT']."/html/head.html"); ?>
<title>Gamefest @ GT - Home</title>
<meta property="og:title" content="Gamefest @ GT - Home">
<meta property="og:url" content="https://gamefest.gg/index.html">
<link href="/prod/index.min.css" rel="stylesheet">
</head>
<body>
<header>
    <?php echo file_get_contents($_SERVER['DOCUMENT_ROOT']."/html/navbar.html"); ?>
    <div id="intro" class="view header-view jarallax" data-jarallax data-speed="0.3">
        <div class="mask rgba-black-strong d-flex justify-content-center align-items-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="mt-5 white-text text-center  col-lg-8 pt-lg-1 mt-lg-3 text-lg-left">
                        <div class="wow fadeInLeft mx-3 mx-xl-4">
                            <img class="landing-logo" src="/svg/logo_dark.svg" alt="Gamefest @ GT"/>
                            <h2 class="landing-lead white-text">
                                October 27&#8201;-&#8201;28, 2018
                            </h2>
                            <h3 class="landing-lead">
                                Georgia Tech | Atlanta, GA
                            </h3>
                            <div class="landing-blurb">
                                <div class="glass mr-lg-5">
                                    <div class="d-flex game-icon-dock justify-content-center justify-content-sm-around flex-wrap">
                                        <a class="waves-effect waves-light rounded" data-toggle="tooltip" data-placement="bottom" title="Overwatch" href="/prizing-rules#Overwatch"><img class="game-icon" src="/img/game_logos/overwatch.png" alt="overwatch"></a>
                                        <a class="waves-effect waves-light rounded" data-toggle="tooltip" data-placement="bottom" title="Dota 2" href="/prizing-rules#Dota"><img class="game-icon" src="/img/game_logos/dota.png" alt="dota 2"></a>
                                        <a class="waves-effect waves-light rounded" data-toggle="tooltip" data-placement="bottom" title="Hearthstone" href="/prizing-rules#Hearthstone"><img class="game-icon" src="/img/game_logos/hearthstone.png" alt="hearthstone"></a>
                                        <a class="waves-effect waves-light rounded" data-toggle="tooltip" data-placement="bottom" title="Counter-Strike: Global Offensive" href="/prizing-rules#CSGO"><img class="game-icon" src="/img/game_logos/csgo_alt.png" alt="csgo"></a>
                                        <a class="waves-effect waves-light rounded" data-toggle="tooltip" data-placement="bottom" title="Rocket League" href="/prizing-rules#RocketLeague"><img class="game-icon" src="/img/game_logos/rocketleague.png" alt="rocket league"></a>
                                        <a class="waves-effect waves-light rounded" data-toggle="tooltip" data-placement="bottom" title="Super Smash Bros." href="/prizing-rules#Smash"><img class="game-icon" src="/img/game_logos/smash.png" alt="smash"></a>
                                        <a class="waves-effect waves-light rounded" data-toggle="tooltip" data-placement="bottom" title="League of Legends" href="/prizing-rules#League"><img class="game-icon" src="/img/game_logos/league.png" alt="league"></a>
                                        <a class="waves-effect waves-light rounded white-text" data-toggle="tooltip" data-placement="bottom" title="And More..." href="/prizing-rules#More"><i id="plus-icon" class="fas fa-plus game-icon"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a class="btn btn-outline btn-outline-secondary btn-outline-heavy btn-lg mt-4 rounded hidden" id="liveBtn" href="/watch">Live<i class="fas fa-circle fa-sm ml-4" style="color:#fc3636; font-size: .8em; vertical-align: .08em;"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-0 col-lg-3"></div>
                </div>
            </div>
        </div>
        <div class="d-flex flex-column align-items-center justify-content-end" style="height: 100%;">
            <div class="d-flex flex-column wow fadeInUp mb-4 white-text text-capitalize align-items-center" data-wow-delay="0.9s">
                <img src="/svg/down-arrow.svg" alt="Content Below" width="48" style="opacity: 0.4"/>
            </div>
        </div>
    </div>
</header>
<main>
    <section>
        <div style="background-color:#222">
            <div style="height: 80px"></div>
        </div>
    </section>
    <section>
        <div class="hex-background-green py-5">
            <div class="container py-4 py-md-5 wow fadeIn" data-wow-delay="0.2s">
                <div class=" d-sm-flex justify-content-center text-center text-sm-left text-white py-5">
                    <div class="col-sm-3 col-md-3 col-lg-2 mb-4 mr-0 mr-sm-5 mr-xl-4 pr-0 pr-sm-3 pr-lg-0 mb-sm-0 mt-3 ml-sm-0">
                        <img class="adjust-hex" src="/svg/logo_small_hex.svg" alt="About Gamefest" height="140">
                    </div>
                    <div class="col-sm-8 pl-sm-2 col-lg-8 pl-sm-6 pl-lg-0">
                        <p class="h3 mb-0">
                            Georgia Tech Esports is bringing back one of the largest collegiate LAN's in the South this fall, Gamefest @ GT.
                            Compete in various games against collegiate teams from all over in our BYOC (Bring Your Own Computer) tournaments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div style="background-color:#222">
            <div class="container no-adj d-sm-flex flex-items-stretch flex-justify-start light-emph point-section">
                <div class="col-md-4 mb-5 mb-md-0 pr-md-4 d-md-flex flex-column wow fadeInUp" data-wow-delay="0.2s">
                    <div class="mb-2">
                        <i class="fas fa-trophy fa-xl"></i>
                    </div>
                    <h3 class="h3 mt-3 mb-4">Tournaments</h3>
                    <p class="p-lg flex-auto">
                        Compete against other collegiate and local teams in multiple tournaments for
                        a variety of different prizes!
                    </p>
                    <div>
                        <a class="link-color light-emph" href="/prizing-rules.php">Games, Rules, and Prizing</a>
                    </div>
                </div>

                <div class="col-md-4 mb-5 mb-md-0 pr-md-4 d-md-flex flex-column wow fadeInUp" data-wow-delay="0.4s">
                    <div class="mb-2">
                        <i class="fab fa-twitch fa-xl"></i>
                    </div>
                    <h3 class="h3 mt-3 mb-4">Streaming</h3>
                    <p class="p-lg flex-auto">
                        We will have live broadcasting during the event for all of the various tournaments.
                        Make sure to tune in on the second day for the finals!
                    </p>
                    <div>
                        <a class="link-color light-emph link--pink" href="/watch.php">Watch</a>
                    </div>
                </div>

                <div class="col-md-4 mb-md-0 d-md-flex flex-column wow fadeInUp" data-wow-delay="0.6s">
                    <div class="mb-2">
                        <i class="fas fa-headset fa-xl "></i>
                    </div>
                    <h3 class="h3 mt-3 mb-4">Freeplay</h3>
                    <p class="p-lg flex-auto">
                        Just want to come by and hang out? We'll have space and computers dedicated for playing
                        whatever game you and your friends want.
                    </p>
                    <div>
                        <a class="link-color light-emph link--purple" href="/prizing-rules.php#freeplay">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div id="banner" class="view jarallax" data-jarallax data-speed="0.3">
            <div class="mask rgba-black-light">
            </div>
        </div>
    </section>
    <section>
        <a id="sponsors"></a>
        <div style="background-color: #FDFDFD;">
            <div class="impact-section-background hex-background-green">
                <div class="container wow fadeIn" data-wow-delay="0.2s">
                    <div class="row justify-content-center white-text">
                        <div class="col-11 text-center">
                            <div class="mb-2">
                                <i class="fas fa-hand-holding-heart fa-xl"></i>
                            </div>
                            <h2 class="h2 mt-2 mb-0">Sponsors</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container no-adj">
                <div class="row justify-content-center py-5">
                    <div class="col-9 text-center mb-3">
                        <p class="descr">Meet the organizations that make Gamefest possible. For more information, visit our <a href="/sponsors.php">sponsor page</a>, and if you’d like to learn more about our sponsorships, feel free to <a href="mailto:mail@gamefest.gg">email us</a>.</p>
                    </div>
                    <div class="col-11 col-12-lg wow fadeIn" data-wow-delay="0.2s">
                        <ul class="logo-list justify-content-center">
                            <li>
                                <a href="https://www.hirezstudios.com/" target="_blank" rel="noopener"><img class="sponsor-img sponsor-lg mt-3 mb-4" src="/img/sponsors/hirez.svg" alt="Hi-Rez Studios"></a>
                            </li>
                            <li>
                                <a href="https://respawnproducts.com/" target="_blank" rel="noopener"><img class="sponsor-img" src="/img/sponsors/respawn.svg" alt="Respawn"></a>
                            </li>
                            <li>
                                <a href="https://dreamhack.com/" target="_blank" rel="noopener"><img class="sponsor-img" src="/img/sponsors/dreamhack.svg" alt="Dreamhack"></a>
                            </li>
                            <li>
                                <a href="https://www.axisreplay.com/" target="_blank" rel="noopener"><img class="sponsor-img" src="/img/sponsors/axis_replay.svg" alt="Axis Replay"></a>
                            </li>
                            <li>
                                <a href="http://www.coolermaster.com/" target="_blank" rel="noopener"><img class="sponsor-img" src="/img/sponsors/cooler_master.svg" alt="Cooler Master"></a>
                            </li>
                            <li>
                                <a href="https://lootcaveco.com/" target="_blank" rel="noopener"><img class="sponsor-img" src="/img/sponsors/lootcaveco.svg" alt="Loot Cave"></a>
                            </li>
                            <li>
                                <a href="https://www.skillshot.com/" target="_blank" rel="noopener"><img class="sponsor-img" src="/img/sponsors/skillshot.svg" alt="Skillshot"></a>
                            </li>
                            <li>
                                <a href="https://www.cstarleague.com/" target="_blank" rel="noopener"><img class="sponsor-img" src="/img/sponsors/csl.svg" alt="Collegiate Starleague"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="hex-background-gray impact-section-background">
            <div class="container">
                <form id="mailing-list-form" class="needs-validation" novalidate>
                    <div class="text-center mt-2">
                        <h3 class="white-text form-header mb-4 mb-lg-2">
                            Sign Up For Updates
                        </h3>
                    </div>
                    <div class="row justify-content-center">
                        <div class="md-form col-12 col-md-11 col-lg-9 col-xl-7 my-0">
                            <i class="fa fa-user prefix white-text active form-icon"></i>
                            <input id="form1" spellcheck="false" name="name" type="text" class="white-text form-control" required>
                            <label for="form1" class="active">
                                Your name *
                            </label>
                            <div class="invalid-tooltip">
                                Please enter in a name.
                            </div>
                        </div>
                        <div class="md-form col-12 col-md-11 col-lg-9 col-xl-7 my-3">
                            <i class="fa fa-envelope prefix white-text active form-icon"></i>
                            <input id="form2" spellcheck="false" name="email" type="email" class="white-text form-control" required>
                            <label for="form2" class="active">
                                Your email *
                            </label>
                            <div class="invalid-tooltip">
                                Please enter in a valid email.
                            </div>
                        </div>
                        <div class="md-form col-12 mt-3 mb-0 d-flex flex-row justify-content-center">
                            <div class="spinner-wrapper d-none d-xs-block py-1"><div class="loader-dummy"></div></div>
                            <button id="submit-form" type="submit" class="btn-hex btn-hex-primary form-submit mb-0 wow fadeInUp">
                                Sign up
                            </button>
                            <div id="submit-progress-spinner" class="spinner-wrapper hidden py-1">
                                <div class="loader">
                                    <svg class="circular" viewBox="25 25 50 50">
                                        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</main>
<?php echo file_get_contents($_SERVER['DOCUMENT_ROOT']."/html/footer.html"); ?>
<div class="modal fade" id="emailSignupSuccess" tabindex="-1" role="dialog" aria-labelledby="emailSignupSuccess" aria-hidden="true">
    <div class="modal-dialog modal-notify modal-success" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <p class="heading modal-header-text">
                    Sign-Up Successful
                </p>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true" class="white-text mr-3">
							&times;
						</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="text-center">
                    <i class="fa fa-check fa-4x mb-3 animated rotateIn fast-anim"></i>
                    <p>Thanks for signing up for the Gamefest 2018 mailing list!
                        Feel free to follow us on the social media below:
                    </p>
                </div>
            </div>
            <div class="modal-footer justify-content-center">
                <a href="https://discord.gg/6uv76qC" class="btn-floating-hex btn-floating-hex-success d-none d-sm-inline-block modal-footer-button">
                    <i class="fab fa-discord"></i>
                </a>
                <a href="https://twitter.com/gatechesports" class="btn-floating-hex btn-floating-hex-success modal-footer-button">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com/gtgamefest/" class="btn-floating-hex btn-floating-hex-success modal-footer-button">
                    <i class="fab fa-facebook"></i>
                </a>
                <button class="btn-floating-hex btn-floating-hex-success modal-footer-close-button-small d-sm-none" data-dismiss="modal">
                    <i class="fas fa-times ml-sm-3"></i>
                </button>
                <button class="btn-hex btn-hex-success ml-4 d-none d-sm-block" data-dismiss="modal" style="z-index: 4">
                    Close
                    <i class="fas fa-times ml-sm-3"></i>
                </button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="emailSignupFailure" tabindex="-1" role="dialog" aria-labelledby="emailSignupFailure" aria-hidden="true">
    <div class="modal-dialog modal-notify modal-danger" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <p class="heading modal-header-text">
                    Sign Up Failed
                </p>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true" class="white-text mr-3">
							&times;
						</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="text-center">
                    <i class="fa fa-times fa-4x mb-3 animated headShake"></i>
                    <p class="text-danger" style="font-weight: 400;">
                        Type: <span id="error-type"></span>
                    </p>
                    <p>
                        An error occurred. Please try again later.
                    </p>
                </div>
            </div>
            <div class="modal-footer justify-content-center">
                <button class="btn-hex btn-hex-danger ml-4" data-dismiss="modal" style="z-index: 4">
                    Close<i class="fas fa-times ml-3"></i>
                </button>
            </div>
        </div>
    </div>
</div>
<?php echo file_get_contents($_SERVER['DOCUMENT_ROOT']."/html/scripts.html"); ?>
<script type="text/javascript" src="/prod/lib/jarallax.min.js"></script>
<script src="https://embed.twitch.tv/embed/v1.js" type="text/javascript"></script>
<script src="/prod/twitch.min.js" type="text/javascript"></script>
<script type="text/javascript" src="/prod/index.min.js"></script>
</body>
</html>