import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useStaticQuery, graphql } from "gatsby";
import classNames from "classnames";
import PropTypes from "prop-types";
import { log, isDefined } from "utility";
import axios from "axios";

import Icon from "components/Icon";
import { Row, Col, Spinner } from "react-bootstrap";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

import "./style.scss";

function constructChannel(category) {
  return name => ({ name, category, live: false, data: null });
}

const clientId = process.env.GATSBY_TWITCH_CLIENT_ID;
function TwitchEmbed() {
  // Official & community Twitch channels
  const { official, community } = useStaticQuery(graphql`
    query TwitchChannels {
      file(name: { eq: "twitch" }) {
        childDataYaml {
          official
          community
        }
      }
    }
  `).file.childDataYaml;

  // Initial state where each stream is loading
  const initialStreamState = useMemo(
    () => [
      ...official.map(constructChannel("official")),
      ...community.map(constructChannel("community"))
    ],
    []
  );

  // Whether the component is loading live channel information
  const [isLoading, setIsLoading] = useState(true);
  // Channel list
  const [channels, setChannels] = useState(initialStreamState);
  // Currently selected channel
  const [currentChannel, setCurrentChannel] = useState(null);

  // Dispatch initial API request
  useEffect(() => {
    const streamQueryParam = initialStreamState
      .map(s => `user_login=${s.name}`)
      .join("&");
    axios
      .get(
        `https://api.twitch.tv/helix/streams?first=100&${streamQueryParam}`,
        {
          headers: {
            "Client-ID": clientId
          }
        }
      )
      .then(({ data }) => {
        const channelData = initialStreamState.map(channel => {
          const responseData = data.data.find(
            d => d.user_name.toLowerCase() === channel.name.toLowerCase()
          );
          if (isDefined(responseData)) {
            return {
              ...channel,
              live: true,
              data: responseData
            };
          } else return channel;
        });

        // Sort first by live, then by username
        channelData.sort((a, b) =>
          a.live && !b.live
            ? -1
            : !a.live && b.live
            ? 1
            : a.name.localeCompare(b.name)
        );

        setIsLoading(false);
        setChannels(channelData);

        // Set first live channel if any are live
        if (channelData.length > 0 && channelData[0].live) {
          setCurrentChannel(channelData[0].name);
        }
      })
      .catch(e => {
        log(`[Twitch client] Error ocurred: ${e}`);
      });
  }, []);

  const categories = [
    { key: "official", title: "Official Streams" },
    { key: "community", title: "Community Broadcasters" }
  ];

  // Context switch upon clicking channel selector
  const onClick = key => {
    setCurrentChannel(key);
  };

  return (
    <div className="raised twitch-embed">
      <Row>
        <Col md={12} lg={3}>
          <div className="twitch-embed--channels">
            {categories.map(({ key, title }) => (
              <div className="twitch-embed--channel-category" key={key}>
                <h4>{title}</h4>
                <hr />
                <ul className="twitch-embed--channel-list">
                  {isLoading
                    ? [1, 2, 3].map(a => (
                        <li
                          className="twitch-embed--channel-placeholder"
                          key={a}
                          onClick={onClick}
                        />
                      ))
                    : channels
                        .filter(({ category }) => category === key)
                        .map(({ name, live }) => (
                          <TwitchEmbed.Channel
                            username={name}
                            live={live}
                            key={name}
                            genericOnClick={onClick}
                            active={name === currentChannel}
                          />
                        ))}
                </ul>
              </div>
            ))}
          </div>
        </Col>
        <Col md={12} lg={9}>
          <div className="twitch-embed--embed">
            {isLoading ? (
              <div className="twitch-embed--embed-loading">
                <Spinner animation="border" variant="light" />
              </div>
            ) : isDefined(currentChannel) ? (
              <ReactTwitchEmbedVideo
                channel={currentChannel}
                muted={false}
                theme="dark"
                width="100%"
                height="100%"
                layout="video"
              />
            ) : (
              <div className="twitch-embed--stream-placeholder" />
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default TwitchEmbed;

TwitchEmbed.propTypes = {};

TwitchEmbed.defaultProps = {};

TwitchEmbed.displayName = "TwitchEmbed";

// ? ====================
// ? Sub-components
// ? ====================

TwitchEmbed.Channel = function({ live, active, username, genericOnClick }) {
  const onClick = useCallback(() => genericOnClick(username));
  return (
    <li
      className={classNames("twitch-embed--channel", {
        active,
        live
      })}
      onClick={onClick}
    >
      <Icon name="circle" className="twitch-embed--channel-live-indicator" />
      <span className="twitch-embed--channel-name">{username}</span>{" "}
    </li>
  );
};

TwitchEmbed.Channel.propTypes = {
  live: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  genericOnClick: PropTypes.func
};

TwitchEmbed.Channel.defaultProps = {
  genericOnClick: () => {}
};

TwitchEmbed.Channel.displayName = "TwitchEmbed.Channel";
