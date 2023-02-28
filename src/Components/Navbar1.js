import React from 'react';
import { Box, Heading,HStack } from '@chakra-ui/react';
import { Flex, ButtonGroup , Button , Spacer} from '@chakra-ui/react';
import { NavLink } from "react-router-dom";

// 
const hoverStyle={
  ":hover":{
    color:'gray'
  }
}

function Navbar1() {
  return (
   <>

   <Flex as="nav" p="8px" alignItems="center" bg="blackAlpha.800" color="white">
   <NavLink to="/"><Heading as="h1" fontSize="2xl" m="0 22px">Basic App</Heading></NavLink>
   <HStack spacing="12px">
    <NavLink to="/"> <Box sx={hoverStyle} p="12px" fontSize="1xl">Home</Box></NavLink>
    <NavLink to="/fetchdata"><Box  sx={hoverStyle}  fontSize="1xl" p="12px">Table</Box></NavLink>
    <NavLink to="/random"><Box  sx={hoverStyle} fontSize="1xl" p="12px">Random</Box></NavLink>

    </HStack>
    <Spacer/>
    
   </Flex>
   {/* <Box bg='black' w='100%' p={4} color='white'>
   <Flex minWidth='max-content' alignItems='center' gap='2'>
   <ButtonGroup gap='2'>
   <NavLink to="/"><Button  fontSize='3xl' colorScheme='black'>Basic App</Button></NavLink>
   <NavLink to="/"><Button  fontSize='2xl' colorScheme='black'>Home</Button></NavLink>
   <NavLink to="/fetchdata"> <Button  fontSize='2xl' colorScheme='black'>Table</Button></NavLink>
   <NavLink to="/random"><Button  fontSize='2xl' colorScheme='black'>Random</Button></NavLink>
  </ButtonGroup>
    </Flex>
    <Spacer />
</Box> */}
   </>
  )
}

export default Navbar1