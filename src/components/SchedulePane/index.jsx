import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useStaticQuery, graphql } from "gatsby";
import { isDefined } from "utility";

import Mdx from "components/Mdx";
import Link from "components/Link";
import Container from "components/Container";

import "./style.scss";

function SchedulePane() {
  const days = useStaticQuery(graphql`
    query SchedulePaneQuery {
      file(name: { eq: "schedule" }) {
        childDataYaml {
          days {
            date
            periods {
              comment
              block {
                start
                end
              }
              events {
                name
                location
                description
                cta {
                  ...Links
                }
                descriptionMdx {
                  childMdx {
                    body
                  }
                }
              }
            }
          }
        }
      }
    }
  `).file.childDataYaml.days;
  return (
    <div className="schedule">
      {isDefined(days) &&
        days.map((d, i) => <ScheduleDay key={d.date} number={i + 1} {...d} />)}
    </div>
  );
}

export default SchedulePane;

SchedulePane.displayName = "SchedulePane";

// ? ==============
// ? Sub-components
// ? ==============

// Prop-type definitions
const EventProps = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string,
  description: PropTypes.string,
  cta: PropTypes.object,
  descriptionMdx: PropTypes.object
};
const PeriodProps = {
  block: PropTypes.shape({
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
  }).isRequired,
  comment: PropTypes.string,
  events: PropTypes.arrayOf(PropTypes.shape(EventProps))
};
const DateProps = {
  date: PropTypes.string.isRequired,
  periods: PropTypes.arrayOf(PropTypes.shape(PeriodProps)),
  number: PropTypes.number.isRequired
};

// Entire scheduled day
function ScheduleDay({ date, periods, number }) {
  return (
    <div className="schedule--day">
      <h2 id={`day-${number}`}>{date}</h2>
      {periods && periods.length > 0 && (
        <div className="schedule--day-periods">
          {periods.map(p => (
            <SchedulePeriod key={`${p.block.start}=>${p.block.end}`} {...p} />
          ))}
        </div>
      )}
    </div>
  );
}

ScheduleDay.propTypes = DateProps;

ScheduleDay.defaultProps = {
  periods: []
};

ScheduleDay.displayName = "ScheduleDay";

// Schedule period (time a - b)
function SchedulePeriod({ block, comment, events }) {
  const blockText = `${block.start} - ${block.end}`;
  return (
    <div className="schedule--period">
      <div className="schedule--period-label">
        <span className="schedule--period-label-block" children={blockText} />
        {comment && (
          <span className="schedule--period-label-comment" children={comment} />
        )}
      </div>
      {events && events.length > 0 && (
        <div className="schedule--period-events">
          {events.map(e => (
            <ScheduleEvent key={e.name} {...e} />
          ))}
        </div>
      )}
    </div>
  );
}

SchedulePeriod.propTypes = PeriodProps;

SchedulePeriod.defaultProps = {
  comment: null,
  events: []
};

SchedulePeriod.displayName = "SchedulePeriod";

// Schedule event (name, location, cta)
function ScheduleEvent({ name, location, description, cta, descriptionMdx }) {
  return (
    <div className="schedule--event">
      <h3 className="schedule--event-title">{name}</h3>
      {location && <h5 className="schedule--event-location">{location}</h5>}
      <div className="schedule--event-description">
        {isDefined(descriptionMdx) ? (
          <Mdx content={descriptionMdx.childMdx.body} />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: description }} />
        )}
        {cta && (
          <Link
            {...cta}
            className={classNames(cta.className, "schedule--event-cta")}
          />
        )}
      </div>
    </div>
  );
}

ScheduleEvent.propTypes = EventProps;

ScheduleEvent.defaultProps = {
  location: null,
  description: null,
  cta: null,
  descriptionMdx: null
};

ScheduleEvent.displayName = "ScheduleEvent";
