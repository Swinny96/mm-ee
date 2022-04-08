import * as React from "react"
import styled from "styled-components"
import Sidebar2 from "../components/sidebar2"
import NavLink2 from "../components/navlink2"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cards from "../components/Welcome/Card"

const WelcomePage = () => (
  <Layout>
    <Seo title="Mobile Manager - Welcome" />
    <Sidebar2
         link1={
           <NavLink2
             state="active2"
             linkstate="active-link2"
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
               state=""
               linkstate=""
               icon="file"
               linkname="Reports"
               link="/"
             />
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
       <Content>
         <Contents>
            <Title>WELCOME TO MOBILE MANAGER BOB</Title>
            <Text>Keep on top of your bills & usage, manage your services, check out the shop  - and more.Lift and shift – click and hold on tiles to re-arrange them in any order you want.</Text>
            <Cards />
          </Contents>
       </Content>
  </Layout>
)

export default WelcomePage

const Content = styled.main`
  margin: 0 auto;
  text-align: center;
`
const Contents = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 80%;
`
const Title = styled.h1`
  font-size: 64px;
  line-height: 100%;
  text-transform: uppercase;
`
const Text = styled.h5`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
  color: #009C9C;
`