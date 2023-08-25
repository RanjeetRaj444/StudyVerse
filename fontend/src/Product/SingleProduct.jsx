import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { Text, Image } from '@chakra-ui/react'
import { Exercise } from '../Components/Exercise'


export const SingleProduct = () => {
  return (
    <div style={{backgroundColor: "#dbdfff99"}}>
    <DIV style={{border: "2px solid red", width: "80%", margin: "auto"}}>
        
        <div style={{display: "flex", backgroundColor: "white", flexDirection: "row", backgroundColor: "#dbdfff99"}}>
                <div style={{width: '10%'}}>
                  <Image src='https://d2nchlq0f2u6vy.cloudfront.net/cache/f0/5b/f05b21063194c1b8a8c430c213bdce16.jpg' alt='Dan Abramov' />
                </div>

                <div style={{border: "2px solid green", width: "30%", marginLeft: "10px"}}>  
                  <Text fontSize={{ base: "16px" }} style={{fontWeight: 'bold'}}>
                    
                    Chemistry: The Central Science
                
                  </Text>
                  <Text fontSize={{ base: "13px" }}  style={{fontWeight: '500', color: '#928b8b'}}>
                    14th Edition . ISBN: 9780134414232
                  </Text>

                   <Text fontSize={{ base: "13px" }}  style={{fontWeight: '500', color: '#928b8b'}}>
                   Bruce Edward Bursten, Catherine J. Murphy, H. Eugene Lemay, Matthew E. Stoltzfus, Patrick Woodward, Theodore E. Brown
                  </Text>
                </div>
          </div>

          <div style={{marginTop: '50px'}} >
          <Text fontSize={{ base: "16px", md: "24px", lg: "24px" }} fontWeight={"bold"} color={"#2e3856"}>
            Textbook solutions
          </Text>

          <Exercise />
          </div>


    </DIV>
    </div>
  )
}


const DIV = styled.div`
background-color: #dbdfff99;
  

`