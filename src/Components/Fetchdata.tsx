import React, { useState, useEffect } from 'react';
import { useQuery, gql } from "@apollo/client";
import Table from './Table';
import { CountriesInterface } from '../Interfaces/CountriesInterface';
const Country_Query = gql`
  {
    countries{
      code 
      name 
      capital
      currency
      continent{
        name
      }
    }
  }
`;

const Fetchdata = () => {
  const [countries, setCountries] = useState<CountriesInterface[] | []>([])

  const { data, loading, error } = useQuery(Country_Query);

  console.log(data);
  useEffect(() => {
    if (data) {
      setCountries(data.countries);
    }
  }, [data]);

  if (loading) return <h1>Loading Please wait</h1>

  if (error)
    return (
      <h2>
        <pre>{error.message}</pre>
      </h2>
    );
  return (
    <>
      <Table countries={countries} />
      {/* <Table/> */}
    </>
  )
}


export default Fetchdata;