import * as React from "react"
import Sidebar2 from "../components/sidebar2"
import NavLink2 from "../components/navlink2"
import SubNavLink from "../components/sublink"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingSSR = ({ serverData }) => {
  return (
    <Layout>
      <Seo title="Using SSR" />
      <Sidebar2
         link1={
           <NavLink2
             state=""
             linkstate=""
             icon="home"
             linkname="Welcome"
             link="welcome"
           />
         }
         link2={
           <NavLink2
             state=""
             linkstate=""
             icon="dashboard"
             linkname="Overview"
             link="/404"
           />
         }
         link3={
           <NavLink2
             state=""
             linkstate=""
             icon="mobile"
             linkname="Phones"
             link="page-2"
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
       <main>

       </main>
    </Layout>
  )
}

export default UsingSSR

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    if (!res.ok) {
      throw new Error(`Response failed`)
    }
    return {
      props: await res.json(),
    }
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
