<?php echo file_get_contents("html/head.html"); ?>
<title>Gamefest @ GT - Watch</title>
<meta property="og:title" content="Gamefest @ GT - Watch">
<meta property="og:url" content="https://gamefest.gg/watch.html">
<link href="prod/base.min.css" rel="stylesheet">
<link href="prod/watch.min.css" rel="stylesheet">
</head>
<body>
<header>
    <?php echo file_get_contents("html/navbar.html"); ?>
</header>
<main>
    <section>
        <div class="hex-background-gray">
            <div class="container pt-5 pb-3 px-4 white-text">
                <h2 class="h2 mt-5"><i class="fab fa-twitch mt-4 mb-4 mr-4"></i>Watch</h2>
            </div>
        </div>
    </section>
    <section>
        <div style="background-color: #222">
            <div class="container pt-5 white-text">
                <div class="rounded row" style="background-color: #6441A4; padding: 24px;">
                    <div class="col-12 col-lg-2 rounded mb-4 mb-lg-0" style="background-color: #4e337f; padding: 4px;">
                        <div class="stream-group"><p>Official GT Streams</p></div>
                        <nav class="nav flex-row flex-lg-column nav-pills nav-fill stream-tabs" id="gt-channel-tabs"></nav>
                        <div class="stream-group mt-4"><p>Community Streams</p></div>
                        <nav class="nav flex-row flex-lg-column nav-pills nav-fill stream-tabs" id="community-channel-tabs"></nav>
                    </div>
                    <div class="col-12 col-lg-10 pr-lg-0 pl-lg-4" style="margin-bottom: -7px;">
                        <div id="twitch-embed"></div>
                    </div>
                </div>
                <p style="color: #bbbbbb; font-style: italic; font-size: 14px; margin-top: 16px">Note: the opinions expressed by our community streamers are not necessarily the views of Gamefest @ GT, Georgia Tech Esports, or the Georgia Institute of Technology.</p>
            </div>
        </div>
    </section>
</main>
<?php echo file_get_contents("html/footer.html"); ?>
</div>
<?php echo file_get_contents("html/scripts.html"); ?>
<script src="https://embed.twitch.tv/embed/v1.js" type="text/javascript"></script>
<script src="/prod/watch.min.js" type="text/javascript"></script>
</body>
</html>