/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 
 import Header from "./header"
 import "./layout.css"
 import "./icon.css"
 import "./font.css"
 import Footer from "./footer"
 import Sidebar2 from "./sidebar2"
 import NavLink2 from "./navlink2"
 import SubNavLink from "./sublink"
 
 const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
         siteMetadata {
           title
         }
       }
     }
   `)
 
   return (
     <div className="layout">
       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
       {children}
       <Footer />
     </div>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 