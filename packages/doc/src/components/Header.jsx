/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-danger */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import GitHubButton from "react-github-btn";
import config from "../../config";
import "./styles.css";

import Link from "./link";
import Search from "./search/index";
import Sidebar from "./sidebar";

import help from "./images/help.svg";
import logoImg from "./images/logo.svg";
import twitter from "./images/twitter.svg";

const isSearchEnabled = !!(
  config.header.search && config.header.search.enabled
);

const searchIndices = [];
if (isSearchEnabled && config.header.search.indexName) {
  searchIndices.push({
    name: `${config.header.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`
  });
}

const Header = ({ location }) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            headerTitle
            githubUrl
            helpUrl
            tweetText
            logo {
              link
              image
            }
            headerLinks {
              link
              text
            }
          }
        }
      }
    `}
    render={data => {
      const {
        site: {
          siteMetadata: {
            headerTitle,
            githubUrl,
            helpUrl,
            tweetText,
            logo,
            headerLinks
          }
        }
      } = data;
      const finalLogoLink = logo.link !== "" ? logo.link : "/";
      return (
        <div className="navBarWrapper">
          <nav className="navbar navbar-default navBarDefault">
            <div className="navbar-header navBarHeader">
              <Link to={finalLogoLink} className="navbar-brand navBarBrand">
                {logo.image !== "" ? (
                  <img className="img-responsive" src={logo.image} alt="logo" />
                ) : (
                  <img className="img-responsive" src={logoImg} alt="logo" />
                )}
                <div
                  className="headerTitle"
                  dangerouslySetInnerHTML={{ __html: headerTitle }}
                />
              </Link>
              <button
                type="button"
                className="navbar-toggle collapsed navBarToggle"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
            </div>
            {isSearchEnabled ? (
              <div className="searchWrapper hidden-xs navBarUL">
                <Search collapse indices={searchIndices} />
              </div>
            ) : null}
            <div
              id="navbar"
              className="navbar-collapse collapse navBarCollapse"
            >
              <div className="visible-xs">
                <Sidebar location={location} />
                <hr />
                {isSearchEnabled ? (
                  <div className="searchWrapper navBarUL">
                    <Search collapse indices={searchIndices} />
                  </div>
                ) : null}
              </div>
              <ul className="nav navbar-nav navBarUL navBarNav navbar-right navBarULRight">
                {headerLinks.map(
                  ({ link, text }) =>
                    link !== "" &&
                    text !== "" && (
                      <li key={link}>
                        <a
                          text={text}
                          href={link}
                          target="_blank"
                          dangerouslySetInnerHTML={{ __html: text }}
                        />
                      </li>
                    )
                )}
                {helpUrl !== "" ? (
                  <li>
                    <a href={helpUrl}>
                      <img src={help} alt="Help icon" />
                    </a>
                  </li>
                ) : null}
                {tweetText !== "" || githubUrl !== "" ? (
                  <li className="divider hidden-xs" />
                ) : null}
                {tweetText !== "" ? (
                  <li>
                    <a
                      href={`https://twitter.com/intent/tweet?&text=${tweetText}`}
                      target="_blank"
                    >
                      <img className="shareIcon" src={twitter} alt="Twitter" />
                    </a>
                  </li>
                ) : null}
                {githubUrl !== "" ? (
                  <li className="githubBtn">
                    <GitHubButton
                      href={githubUrl}
                      data-show-count="true"
                      aria-label="Star on GitHub"
                    >
                      Star
                    </GitHubButton>
                  </li>
                ) : null}
              </ul>
            </div>
          </nav>
        </div>
      );
    }}
  />
);

Header.propTypes = {
  location: PropTypes.string
};

Header.defaultProps = {
  location: ""
};

export default Header;
