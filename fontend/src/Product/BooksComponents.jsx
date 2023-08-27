import React, { useEffect, useState } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import { Box, Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'
import styled from "styled-components"
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { CardComponent } from './CardComponent';

export const BooksComponents = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  // const [category, setCategory] = useState("chemistry")
  const initialSubjects = searchParams.get("value")
  // console.log(initialSubjects, "+++");
  const [data, setData] = useState([])


  const handleSubjects = (e) => {
    const { value } = e.target;
    // setCategory(value)
    const params = {
      // category
      value
    }

    setSearchParams(params)
  }


  const getCategoryData = () => {
    axios.get(`http://localhost:8080/subjects/book?value=${initialSubjects}`)
      .then((res) => {
        console.log(res);
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }



  useEffect(() => {

    // const params = {
    //   category
    // }

    // setSearchParams(params)
    getCategoryData()

  }, [searchParams])


  return (
    <DIV>
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <Tab value={"Chemistry"} onClick={handleSubjects} >Chemistry</Tab>
          <Tab value={"Calcus"} onClick={handleSubjects}>Calcus</Tab>
          <Tab value={"Engineering"} onClick={handleSubjects}>Engineering</Tab>
          <Tab value={"Linear Algebra"} onClick={handleSubjects}>Algebra</Tab>
          <Tab value={"physics"} onClick={handleSubjects}>Physics</Tab>
          <Tab value={"Biology"} onClick={handleSubjects}>Biology</Tab>
          <Tab value={"Languages"} onClick={handleSubjects}>Languages</Tab>
          <Tab value={"Businesses"} onClick={handleSubjects}>Businesses</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <div className='chemistry' style={{}}>

              {
                initialSubjects === "Chemistry" && data.map((ele) => (
                  <CardComponent key={ele.id} {...ele} />
                ))
              }

            </div>
          </TabPanel>
          <TabPanel>
            <p>Calcus</p>
          </TabPanel>
          <TabPanel>
            <p>Engineering</p>
          </TabPanel>

          <TabPanel>
            <p>Linear Algebra</p>
          </TabPanel>

          <TabPanel>
            <div className='chemistry'>
              {
                initialSubjects === "physics" && data.map((ele) => (
                  <CardComponent key={ele.id} {...ele} />
                ))
              }

            </div>
          </TabPanel>

          <TabPanel>
            <p>Biology</p>
          </TabPanel>

          <TabPanel>
            <p>Language</p>
          </TabPanel>

          <TabPanel>
            <p>Linear Algebra</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </DIV>
  )
}


const DIV = styled.div`

.chemistry{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;


}


@media screen and (max-width: 890px) {
      /* Your styles for large devices go here */
      .chemistry{
  
  grid-template-columns: repeat(1, 1fr);
 


}
      
    }
  
`