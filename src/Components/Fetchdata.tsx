import React , {useState,useEffect} from 'react';
import { useQuery, gql } from "@apollo/client";
import Table from './Table';
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

interface stateType{
 <Array> [ {
    name:string,
    capital:string,
    currency:string,
    continent:{
      name:string,
    }
  }]
}

const Fetchdata=()=>{
    const [countries, setCountries] = useState<stateType | []>([])

    const { data, fetching, error } = useQuery(Country_Query);
    console.log(data);
    useEffect(() => {
      if (data) {
        setCountries(data.countries);
      }
    }, [data]);
  
    if (fetching) return <h1>Loading Please wait</h1>
    
    if (error)
      return (
        <h2>
          <pre>{error.message}</pre>
        </h2>
      );
    return(
        <>
         <Table countries={countries}/>
         {/* <Table/> */}
        </>
    )
}


export default Fetchdata;