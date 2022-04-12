import * as React from "react"
import styled from "styled-components"
import Sidebar2 from "../components/sidebar2"
import NavLink2 from "../components/navlink2"
import SubNavLink from "../components/sublink"
import {BsPlusLg} from "react-icons/bs"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Cards from "../components/Reports/Recentusage/Card"
import NavBar from "../components/Nav/Navbar"

const Recentusage = () => (
  <Layout>
    <Seo title="Mobile Manager - Welcome" />
    {/* <Sidebar2
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
                 state=""
                 linkstate=""
                 linkname="Billed"
                 link="/"
               />
               <SubNavLink
                 state="active2"
                 linkstate="active-link2"
                 linkname="Recent Usage"
                 link="RecentUsage"
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
       /> */}
       <NavBar />
       <Content>
         <Contents>
            <Section>
              <Title>Real Time Accounts</Title>
              <Company>NextGen Test Company</Company>
              <SubText>Real Time usage will be updated within 24 hours</SubText>
              <Cards />
            </Section>
            <Section>
              <Company>Manage Usage Alerts</Company>
              <SubText>There are currently no alerts.</SubText>
              <Alerts>
                <Alert className="Alert">
                  <BsPlusLg />
                  <AlertTitle>Create new alert</AlertTitle>
                </Alert>
              </Alerts>
            </Section>
          </Contents>
       </Content>
  </Layout>
)

export default Recentusage

const Content = styled.main`
  text-align: left;
`
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const Section = styled.section`
`
const Title = styled.h1`
  text-transform: uppercase;
  margin-bottom: 14px;
`
const Company = styled.h2`
  font-weight: normal;
`
const SubText = styled.p`
  font-weight: normal;
  font-size: 16px;
  color: var(--slate);
`
const Alerts = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Alert = styled.div`
  background: var(--white);
  padding: 20px;
  border: 2px solid var(--aqua);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-height: 150px;
  min-width: 600px;
  color: var(--aqua);
  font-size: 20px;
  cursor: pointer;
  transition: 0.4s;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0px 3px 16px 8px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 850px) {
    .Alert {
      min-width: 100% !important;
    }
  }
`
const AlertTitle = styled.h3`
  color: var(--aqua);
  font-size: 20px;
`