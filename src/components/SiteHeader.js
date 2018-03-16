import React from "react";
import Link from "gatsby-link";
import { withRouter } from "react-router-dom";

function enableSearch(history) {
  if (typeof docsearch === "undefined") {
    return;
  }
  docsearch({
    apiKey: "b8bae02e7bf22b05801b361ea00f9bf5",
    indexName: "graphile",
    inputSelector: "#search-box",
    debug: false,
    handleSelected: (input, event, suggestion) => {
      const url = suggestion.url;
      const path = url.replace(/^https?:\/\/[^/]*/, "");
      history.push(path);
    },
  });
}

export default withRouter(
  class SiteHeader extends React.Component {
    handleSearchBoxRef = () => {
      document.addEventListener(
        "DOMContentLoaded",
        enableSearch.bind(null, this.props.history)
      );
      document.addEventListener(
        "load",
        enableSearch.bind(null, this.props.history)
      );
      enableSearch(this.props.history);
    };
    render() {
      const { location } = this.props;
      return (
        <header className="header content absolute z-999 w-100">
          <nav className="navbar">
            <div className="container">
              <input
                className="navbar-toggler input-reset"
                type="checkbox"
                id="toggle"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              />
              <div className="nav-controls nested-list-reset ">
                <div className="navbar-crosses">
                  <span className="line line-1"> </span>
                  <span className="line line-2"> </span>
                  <span className="line line-3"> </span>
                </div>
                <ul className="navbar-nav flex w-100">
                  <li className="navbar-item">
                    <Link
                      className={`nav-link ${
                        location.pathname.match(/^\/$/) ? "active" : ""
                      }`}
                      to="/"
                    >
                      <span className="home-icon fa fa-home" />{" "}
                      <span className="home">Home</span>
                    </Link>
                  </li>
                  <li className="navbar-item">
                    <Link
                      className={`nav-link ${
                        location.pathname.match(/^\/postgraphile(\/|$)/)
                          ? "active"
                          : ""
                      }`}
                      to="/postgraphile/"
                    >
                      PostGraphile
                    </Link>
                  </li>
                  <li className="navbar-item">
                    <Link
                      className={`nav-link ${
                        location.pathname.match(/^\/graphile-build(\/|$)/)
                          ? "active"
                          : ""
                      }`}
                      to="/graphile-build/"
                    >
                      Graphile Build
                    </Link>
                  </li>
                  <li className="navbar-item">
                    <Link
                      className={`nav-link ${
                        location.pathname.match(/^\/support(\/|$)/)
                          ? "active"
                          : ""
                      }`}
                      to="/support/"
                    >
                      Support
                    </Link>
                  </li>
                  <li className="navbar-item">
                    <a
                      className="nav-link"
                      href="https://graphql-training.com"
                      title="GraphQL Training in London, Europe and Remote"
                    >
                      GraphQL Training
                    </a>
                  </li>
                  <li className="navbar-item ml-auto navbar-item-right">
                    <span className="searchbox-container">
                      <input
                        id="search-box"
                        placeholder="Search"
                        ref={this.handleSearchBoxRef}
                      />
                      <span className="fa fa-search searchbox-search" />
                    </span>
                  </li>
                  <li className="navbar-item navbar-item-right">
                    <a
                      className="nav-link nav-github-link flex items-center"
                      href="https://github.com/graphile"
                    >
                      <span className="f3 fa fa-github" />{" "}
                      <span className="github">Github</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      );
    }
  }
);
