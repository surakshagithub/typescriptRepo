import React, { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import {
  Stack,
  Input,
  Container,
  Button,
  Text,
  Flex,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useQuery, useMutation, useQueryClient } from "react-query";
// import {getData} from '../api'

const Home = () => {
  const queryClient = useQueryClient();
  const [products, setProducts] = useState([]);
  const [setInputValue] = useState();

  var { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://dummyjson.com/products").then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  const initialValues = {
    title: "title",
    price: "2323",
    discountPercentage: "32",
    rating: "4",
    stock: "34",
    brand: "new",
    category: "phone",
    thumbnail: "fdfsd",
  };
  const addNewProduct = async (inputValue) => {
    const response = await fetch("https://dummyjson.com/products/add", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValue),
    });

    return response;
  };

  var { mutate, isLoading } = useMutation(addNewProduct, {
    onSuccess: (data) => {
      console.log(data);
      const message = "success";
      alert(message);
    },
    onError: () => {
      alert("there was an error");
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });

  const onSubmit = (values) => {
    console.log(values);

    setInputValue(values);
    // console.log(inputValue)

    mutate(values);
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Flex gap="5">
        <Stack spacing={2}>
          <Heading mx={3}>Fill This Form</Heading>

          <Container maxW="3xl">
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnChange={false}
              validateOnBlur={false}
            >
              {(props) => (
                <Form>
                  <label htmlFor="title">Enter title:</label>
                  <Input
                    id="title"
                    name="title"
                    my={3}
                    value={props.values.title}
                    onChange={props.handleChange}
                  />

                  {props.errors.title && props.touched.title && (
                    <Text color="red"> *** title is required</Text>
                  )}

                  <label htmlFor="price">Enter Your price Number:</label>
                  <Input
                    type="tel"
                    placeholder=""
                    my={3}
                    id="price"
                    name="price"
                    value={props.values.price}
                    onChange={props.handleChange}
                  />

                  <label htmlFor="discountPercentage">
                    Enter discountPercentage:
                  </label>
                  <Input
                    type="number"
                    placeholder=""
                    my={3}
                    id="discountPercentage"
                    name="discountPercentage"
                    value={props.values.discountPercentage}
                    onChange={props.handleChange}
                  />

                  <label htmlFor="rating">Enter rating:</label>
                  <Input
                    type="number"
                    placeholder=""
                    my={3}
                    id="rating"
                    name="rating"
                    value={props.values.rating}
                    onChange={props.handleChange}
                  />

                  <label htmlFor="stock">Enter stock:</label>
                  <Input
                    type="number"
                    placeholder=""
                    my={3}
                    id="stock"
                    name="stock"
                    value={props.values.stock}
                    onChange={props.handleChange}
                  />

                  <label htmlFor="brand">Enter brand:</label>
                  <Input
                    type="text"
                    placeholder=""
                    my={3}
                    id="brand"
                    name="brand"
                    value={props.values.brand}
                    onChange={props.handleChange}
                  />

                  <label htmlFor="category">Enter category:</label>
                  <Input
                    type="text"
                    placeholder=""
                    my={3}
                    id="category"
                    name="category"
                    value={props.values.category}
                    onChange={props.handleChange}
                  />

                  <label htmlFor="thumbnail">Enter Thumbnail:</label>
                  <Input
                    type="text"
                    placeholder=""
                    my={3}
                    id="thumbnail"
                    name="thumbnail"
                    value={props.values.thumbnail}
                    onChange={props.handleChange}
                  />

                  <Button colorScheme="blue" type="submit">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Container>
        </Stack>
        {/* <Spacer /> */}
        <UnorderedList>
          <Heading my={3}>Products Name</Heading>
          {products.length &&
            products.map((product, index) => (
              <ListItem key={index}>{product.title}</ListItem>
            ))}
        </UnorderedList>
      </Flex>
    </>
  );
};

export default Home;
