import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Navbar1 from '../Components/Navbar1';


function Rootlayout() {
  return (
    <>
    <Grid templateColumns="repeat(6,1fr)" bg="gray">
        <GridItem as="aside" colSpan="1" bg="purple" minheight="100vh" p="30px">
            <span>Slider</span>
        </GridItem>
        <GridItem>
            <Navbar1/>
        </GridItem>
        <GridItem as="main" colspan="5">
           <span>Dashboard</span> 
        </GridItem>
    </Grid>
    </>
  )
}

export default Rootlayout