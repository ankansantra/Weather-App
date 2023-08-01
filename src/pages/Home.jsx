import { useState } from 'react';
import { Box , styled} from '@mui/material';
import Sunset from '../assets/images/bg.jpg';
import { borderRadius, display, width } from '@mui/system';
import Form from '../components/Form';
import Information from '../components/Information';


const Component = styled(Box)({
    height:'100vh',
    display: 'flex',
    alignItems:'center',
    margin: '0 auto',
    width: '85%'
})


const Image = styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width: '27%',
    height: '88%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px'
})

const Home = () => {
    const [result, setResult] = useState({})

    return(
        <Component> 
        <Image></Image>
        <Box style= {{ width: '83%', height: '88%'}}>
            <Form setResult={setResult} />
            <Information result ={result} />
        </Box>
        </Component>
    )
}
export default Home;