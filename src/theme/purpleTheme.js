import createTheme from '@mui/material/styles/createTheme';
import { red } from '@mui/material/colors';
 
export const purpleTheme = createTheme({
    palette:{
        primary:{
            main:'#262254'
        },
        secondary:{
            main:'#543884'
        },
        error:{
            main: red.A400
        },
        add:{
            main: '#9f86c0'
        }
    }
})