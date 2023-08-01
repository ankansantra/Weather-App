
import { Box, Typography, styled } from '@mui/material';
import { LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud } from '@mui/icons-material'
import { fontSize } from '@mui/system';
import { red } from '@mui/material/colors';

const Row = styled(Typography)({
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    '& > svg': {
        marginRight: 10
    }

});

const Error = styled(Typography)({
    color: 'red',
    margin: 50,
    padding: 20

})

const Information = ({ result }) => {
    return(
        result && Object.keys(result).length > 0 ?
       
        <Box style= {{ margin: '30px 60px' }}>
           <Row><LocationOn/>Location: {result.name},{result.sys.country}</Row>
           <Row><SettingsBrightness/>Temparature: {result.main.temp}</Row>
           <Row><Opacity/>Humidity: {result.main.humidity}</Row>
           <Row><Brightness5/>Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()} </Row>
           <Row><Brightness6/>Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()} </Row>
           <Row><Dehaze/>Humidity: {result.weather[0].main}</Row>
           <Row><Cloud/>Clouds: {result.clouds.all}%</Row>

        

        </Box>
        :<Typography>Please Enter the values</Typography>
    )
}
export default Information;