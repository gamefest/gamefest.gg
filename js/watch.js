var twitch_info_path = "https://gamefest.gg/data/twitch.json";
var twitch_endpoint = "https://api.twitch.tv/helix/streams";
var paneInited = false;
var embed = null;
var live = { "gt-channel-tabs": null };
var GT = "gt-channel-tabs";
var channelList = [];

$.get(twitch_info_path, function(twitch_info) {
    channelList = twitch_info["gt"];
    var liveGt = addStreams(GT, twitch_info["gt"], twitch_info["client_id"]);
});

function tryFinishLoad() {
    if(live[GT] != null) {
        if(!paneInited) {
            finishedLoading();
        }
    }
}

function finishedLoading() {
    if(!(live[GT].length === 0)) {
        changePane(live[GT][0]);
    } else {
        changePane(channelList[0]);
    }
}

function addStreams(rootID, channels, client_id) {
    var twitch_query = { first: 100 };
    var root = $("#{id}".formatUnicorn({id: rootID}));
    twitch_query["user_login"] = channels;
    // Populate page with jQuery
    var inner = "";
    channels.forEach(function(channel) {
        var newLink = '<a class="nav-item nav-link" href="#" id="channel-tab-{channel_name}">{channel_name}</a>'.formatUnicorn({channel_name: channel});
        inner = "{oldHTML}\n{newHTML}".formatUnicorn({oldHTML: inner, newHTML: newLink});
    });
    root.html(inner);
    root.on('click', 'a', function(event) {
        if(!$(this).hasClass('active')) {
            changePane($(this).text());
        }
        event.preventDefault();
    });

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
            var format = {channel_name: liveChannel["user_name"]};
            var tab = $("#channel-tab-{channel_name}".formatUnicorn(format));
            tab.html('{channel_name}<i class="fas fa-circle fa-sm ml-2" style="color:#fc3636; font-size: .6em; vertical-align: .08em;"></i>'.formatUnicorn(format));
            liveChannels.push(liveChannel["user_name"]);
        });
        $("#{id} a".formatUnicorn({id: rootID})).sortElements(function(a, b) {
            var channelA = $(a).text();
            var channelB = $(b).text();
            if(liveChannels.includes(channelA)) {
                if(liveChannels.includes(channelB)) {
                    return channelA > channelB ? 1 : -1;
                } else return -1;
            } else if(liveChannels.includes(channelB)) {
                return 1;
            } else  return channelA > channelB ? 1 : -1;
        });
        live[rootID] = liveChannels;
        tryFinishLoad();
    });
}

function changePane(channel) {
    $(".stream-tabs a").removeClass('active');
    $("#channel-tab-{channel_name}".formatUnicorn({channel_name: channel})).addClass('active');
    if(!paneInited) {
        embed = new Twitch.Embed("twitch-embed", {
            width: '100%',
            height: $(window).width() <= 576 ? 400 : 640,
            channel: channel,
            layout: "video"
        });
        paneInited = true;
    } else {
        embed.getPlayer().setChannel(channel);
    }
}

// https://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
String.prototype.formatUnicorn = String.prototype.formatUnicorn ||
function () {
    "use strict";
    var str = this.toString();
    if (arguments.length) {
        var t = typeof arguments[0];
        var key;
        var args = ("string" === t || "number" === t) ?
            Array.prototype.slice.call(arguments)
            : arguments[0];

        for (key in args) {
            str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
        }
    }

    return str;
};

// https://j11y.io/snippets/sorting-elements-with-jquery/
/**
 * jQuery.fn.sortElements
 * --------------
 * @param Function comparator:
 *   Exactly the same behaviour as [1,2,3].sort(comparator)
 *
 * @param Function getSortable
 *   A function that should return the element that is
 *   to be sorted. The comparator will run on the
 *   current collection, but you may want the actual
 *   resulting sort to occur on a parent or another
 *   associated element.
 *
 *   E.g. $('td').sortElements(comparator, function(){
 *      return this.parentNode;
 *   })
 *
 *   The <td>'s parent (<tr>) will be sorted instead
 *   of the <td> itself.
 */
jQuery.fn.sortElements = (function(){

    var sort = [].sort;

    return function(comparator, getSortable) {

        getSortable = getSortable || function(){return this;};

        var placements = this.map(function(){

            var sortElement = getSortable.call(this),
                parentNode = sortElement.parentNode,

                // Since the element itself will change position, we have
                // to have some way of storing its original position in
                // the DOM. The easiest way is to have a 'flag' node:
                nextSibling = parentNode.insertBefore(
                    document.createTextNode(''),
                    sortElement.nextSibling
                );

            return function() {

                if (parentNode === this) {
                    throw new Error(
                        "You can't sort elements if any one is a descendant of another."
                    );
                }

                // Insert before flag:
                parentNode.insertBefore(this, nextSibling);
                // Remove flag:
                parentNode.removeChild(nextSibling);

            };

        });

        return sort.call(this, comparator).each(function(i){
            placements[i].call(getSortable.call(this));
        });

    };

})();