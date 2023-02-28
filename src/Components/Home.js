import React, { useState } from "react";
import { Heading } from "@chakra-ui/react";
import {
  Center,
  Stack,
  Input,
  Container,
  Button,
} from "@chakra-ui/react";
import { Form, Formik, useFormik ,ErrorMessage, Field } from "formik";
import * as Yup from 'yup';


const Home = () => {
  const initialValues={
      userName: "",
      email: "",
      phone: "",
    }
  
  const onSubmit=(values,props)=>{
    console.log(values);
  }
  const validationSchema=Yup.object().shape({
    username: Yup.string().required('Required'),
     email: Yup.string().email('Invalid email').required('Required'),
  })
  
  return (
    <>
      <Center bg="white" color="black">
        <Heading>Fill This Form</Heading>
      </Center>

      <Stack spacing={3}>
        <Container maxW="6xl">
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
            {
              (props)=>(
          <Form>
            <label htmlFor="userName">Enter Your Name:</label>
            <Input
              id="userName"
              name="userName"
              my={3}
              placeholder="Enter Your Name"
              value={props.values.userName}
              onChange={props.handleChange}
              helperText={<ErrorMessage name="userName"/>}
            />

            {
              props.errors ? 
                
                  console.log(props.errors)
                
              :null
            }

            {
              props.errors.username && props.touched.username && <p>There is error in userName</p>
            }


            <label htmlFor="phone">Enter Your Phone Number:</label>
            <Input
              type="tel"
              placeholder="98******"
              my={3}
              id="phone"
              name="phone"
              value={props.values.phone}
              onChange={props.handleChange}
              helperText={<ErrorMessage name="phone"/>}

            />

            <label htmlFor="email">Enter Your Email:</label>
            <Input
              type="email"
              placeholder="Email@gmail.com"
              my={3}
              id="email"
              name="email"
              value={props.values.email}
              onChange={props.handleChange}
            />
            <Button colorScheme="blue" type="submit">
              Submit
            </Button>
          </Form>
          )
        }
          </Formik>
        </Container>
      </Stack>
    </>
  );
};

export default Home;
