
import styled from 'styled-components';
import {useContext} from "react";
import DarkModeContext from "../../store/darkmode-context";

const MainSection = (props) =>{
    const ctx = useContext(DarkModeContext);


      return  (<MainSec ctx={ctx} id='mainsec'>
                    {props.children}
               </MainSec>)

}

export const colors = {
    darkModeBorderColour : 'hsl(207, 12%, 21%)' ,
    lightModeBorderColour : 'hsl(0, 12%, 87%)'
}

const MainSec = styled.div`
     padding:0;
     margin:0;
     border:none;
     width:inherit;
     box-shadow:3px -1px 2px 0 ${props =>  props.ctx.isDarkMode ? colors.darkModeBorderColour : colors.lightModeBorderColour }; 
     
     @media only screen and (max-width: 500px){
        
     }
`;

export default MainSection