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
       <Sidebar2
         link1={
           <NavLink2
             state=""
             linkstate=""
             icon="home"
             linkname="Welcome"
             link="/"
           />
         }
         link2={
           <NavLink2
             state=""
             linkstate=""
             icon="dashboard"
             linkname="Overview"
             link="404"
           />
         }
         link3={
           <NavLink2
             state=""
             linkstate=""
             icon="mobile"
             linkname="Phones"
             link="404"
           />
         }
         link4={
           <NavLink2
             state=""
             linkstate=""
             icon="currency-notes-coins"
             linkname="Charges"
             link="404"
           />
         }
         link5={
           <NavLink2
             state=""
             linkstate=""
             icon="landline"
             linkname="Calls"
             link="404"
           />
         }
         link6={
           <NavLink2
             state=""
             linkstate=""
             icon="international"
             linkname="Destinations"
             link="404"
           />
         }
         link7={
           <div>
             <NavLink2
               state="active2"
               linkstate="active-link2"
               icon="file"
               linkname="Reports"
               link="/"
             />
             <ul className="Sublink-Ul">
               <SubNavLink
                 state="active2"
                 linkstate="active-link2"
                 linkname="Unbilled"
                 link="/"
               />
               <SubNavLink
                 state=""
                 linkstate=""
                 linkname="Billed"
                 link="/"
               />
             </ul>
           </div>
         }
         link8={
           <NavLink2
             state=""
             linkstate=""
             icon="tag"
             linkname="Tagging"
             link="404"
           />
         }
         link9={
           <NavLink2
             state=""
             linkstate=""
             icon="user-admin"
             linkname="Admin"
             link="404"
           />
         }
         link10={
           <NavLink2
             state=""
             linkstate=""
             icon="download"
             linkname="Downloads"
             link="404"
           />
         }
         link11={
           <NavLink2
             state=""
             linkstate=""
             icon="time"
             linkname="Real Time"
             link="404"
           />
         }
       />
       <main>{children}</main>
       <Footer />
     </div>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 