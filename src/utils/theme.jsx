import { createTheme } from '@mui/material'

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#17e9e1',
        },
        secondary: {
            main: '#17224d',
        },
        text: {
            primary: '#ffffff',
        },
        background: {
            default: '#151515',
        },
        info: {
            main: '#4bb392',
        },
    },
})

export default theme