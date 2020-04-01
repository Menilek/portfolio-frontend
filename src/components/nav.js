import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const Nav = () => (
    <div>
    <div>
        <nav className="uk-navbar" data-uk-navbar>
        <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
            <li>
                <Link to="/">Mik(eye)el</Link>
            </li>
            </ul>
        </div>

        <div className="uk-navbar-center">
            <ul className="uk-navbar-nav">
            <StaticQuery
                query={graphql`
                query {
                    site {
                    siteMetadata {
                        menuLinks {
                        name
                        link
                        }
                    }
                    }
                }
                `}
                render={data =>
                data.site.siteMetadata.menuLinks.map((site, i) => {
                    return (
                    <li key={site.name} className="heading-link">
                        <Link to={`/${site.link}`}>
                        {site.name}
                        </Link>
                    </li>
                    )
                })
                }
            />
            </ul>
        </div>

        {/* <div className="uk-navbar-center">
            <ul className="uk-navbar-nav">
            <StaticQuery
                query={graphql`
                query {
                    allStrapiCategory {
                    edges {
                        node {
                        strapiId
                        name
                        }
                    }
                    }
                }
                `}
                render={data =>
                data.allStrapiCategory.edges.map((category, i) => {
                    return (
                    <li key={category.node.strapiId} className="heading-link">
                        <Link to={`/category/${category.node.strapiId}`}>
                        {category.node.name}
                        </Link>
                    </li>
                    )
                })
                }
            />
            </ul>
        </div> */}

        <div className="uk-navbar-right">
            <ul className="uk-navbar-nav uk-iconnav">
            <li><a href="https://www.instagram.com/mikaels_album/" uk-icon="icon: instagram"></a></li>
            <li><a href="#" uk-icon="icon: vimeo"></a></li>
            </ul>   
        </div>        

        </nav>
    </div>
    </div>
)

export default Nav
