import React, { useContext } from 'react';

import {Fragment} from "react";
import styled from 'styled-components';

import MainSection from "./MainSection";

import GlobalFonts from './../../styles/GlobalFonts'
import DarkModeContext from './../../store/darkmode-context'


const Layout = (props) => {
    const ctx = useContext(DarkModeContext);
   // const styles = classes['app-contianer'] + ' '+ classes['app-contianer-primary']

    return (
        <Fragment>
            <GlobalFonts/>
            <Page ctx={ctx}  id='fullpage'>
                <PageLayout id='pglayout'>
                {/*    <TopHeader />*/}
                    <MainSection  >
                        <Main id='main' >
                            {props.children}
                        </Main>
                    </MainSection>

                </PageLayout>

            </Page>
        </Fragment>


    );
};

export const colors = {
    darkModeBackgroundColour : 'hsl(207, 26%, 17%)' ,
    lightModeBackgroundColour : 'hsl(0, 0%, 98%)'
}

/*const Page = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  transition: .5s;
  background-color: ${props => (props.ctx.isDarkMode ?   colors.darkModeBackgroundColour : colors.lightModeBackgroundColour )};
  
`;*/

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
 
  transition: .5s;
  background-color: ${props => (props.ctx.isDarkMode ?   colors.darkModeBackgroundColour : colors.lightModeBackgroundColour )};
  
  
  @media only screen and (max-width: 500px){
  
  }
`;
const PageLayout = styled.div`
    
     display: flex;
     flex-direction: column;
     width: 100%;
     
     @media only screen and (max-width: 500px){
  
     }

`

const Main = styled.div`
    
    display:grid; 
    grid-template-columns: auto;
    grid-template-rows: auto auto; 
    
     @media only screen and (max-width: 500px){
        grid-template-rows: auto auto auto; 
     } 
    
`

export default Layout;