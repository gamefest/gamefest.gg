var twitch_info_path = "/data/twitch.json";
var twitch_endpoint = "https://api.twitch.tv/helix/streams";

function isLive(callback) {
    result = { "gt": false };
    $.get(twitch_info_path, function(twitch_info) {
        var callbackCalled = false;
        var f = function assessChannels() {
            if(callbackCalled) return;
            var finished = false;
            for (var key in result) {
                if (result.hasOwnProperty(key)) {
                    var obj = result[key];
                    finished = finished || obj;
                }
            }
            if(finished) {
                callbackCalled = true;
                callback();
            } };
        queryLiveStreams("gt", twitch_info["gt"], twitch_info["client_id"], result, f);
    });
}

function queryLiveStreams(id, channels, client_id, result, callback) {
    var twitch_query = { first: 100 };
    twitch_query["user_login"] = channels;
    $.ajax({
        url: twitch_endpoint,
        method: "GET",
        data: twitch_query,
        headers: {
            "Client-ID": client_id
        }
    }).done(function(stream_data) {
        var liveChannels = [];
        stream_data["data"].forEach(function(liveChannel) {
            liveChannels.push(liveChannel["user_name"]);
        });

        if(liveChannels.length > 0) result[id] = true;
        callback();
    });
}