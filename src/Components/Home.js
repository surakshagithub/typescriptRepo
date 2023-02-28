import React,{useState} from 'react';
import { Heading } from '@chakra-ui/react';
import { Center , Stack , Input, Textarea , Container ,Button} from '@chakra-ui/react';


const Home=()=>{
  const [value, setValue] = useState({
    userName:"",
    email:"",
    phone:"",
    desc:""

  });
  const [records, setRecords] = useState([]);
  // :React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  let handleInputChange = (e) => {
    let name = e.target.name;
    let value=e.target.value;
    console.log(name,value);
    setValue({ ...value , name:value})
    // setValue({value});
  }
  // : React.MouseEvent<HTMLButtonElement>
  let handleSubmit=(e)=>{
e.preventDefault();
const newRecords={...value,id:new Date().getTime.toString};
// console.log(records)
setRecords([...records,newRecords]);
console.log(records);
setValue({
  userName:"",
  email:"",
  phone:"",
  desc:""

})
  }
  return (
    <>
    <Center bg='white' color='black' >
    <Heading>Fill This Form</Heading>
    </Center>

    <Stack spacing={3}>
    <Container maxW='6xl'>
      
    <label  htmlFor='userName'>Enter Your Name:</label>
  <Input 
   id="userName"
   name="userName"
   my={3}
    placeholder='Enter Your Name'
   value={value.userName}
   onChange={(e)=>handleInputChange(e)}

    />
    <label htmlFor='phone'>Enter Your Phone Number:</label>
    <Input type='tel' placeholder='98******' my={3}  id="phone" name="phone" value={value.phone} onChange={(e)=>handleInputChange(e)}/>

    <label htmlFor='email'>Enter Your Email:</label>
    <Input type='email' placeholder='Email@gmail.com' my={3}  id="email" name="email" value={value.email} onChange={(e)=>handleInputChange(e)} />


    {/* <label htmlFor='dob'>Enter Your Date of Birth:</label>
   <Input
 placeholder="Enter Your Birth Date"
 size="md"
 type="datetime-local"
 my={3}
 id="dob"
/> */}
<label htmlFor='desc'>Description:</label>
<Textarea
        value={value.desc}
        onChange={(e)=>handleInputChange(e)}       
         placeholder='Describe About Yourself'
        size='sm'
        my={3}
        id="desc"
        name="desc"
      />

<Button colorScheme='blue' onClick={(e)=>handleSubmit(e)} >Submit</Button>

</Container>
    </Stack>
   
    </>
  )
}


export default Home