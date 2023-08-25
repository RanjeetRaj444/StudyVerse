import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'
import styled from "styled-components"

export const BooksComponents = () => {
  return (
    <DIV>
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <Tab>Chemistry</Tab>
          <Tab>Calcus</Tab>
          <Tab>Engineering</Tab>
          <Tab>Linear Algebra</Tab>
          <Tab>Physics</Tab>
          <Tab>Biology</Tab>
          <Tab>Languages</Tab>
          <Tab>Businesses</Tab>
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

              <div style={{display: "flex", backgroundColor: "white", padding: "10px"}}>
                <div style={{width: '30%'}}>
                  <Image src='https://d2nchlq0f2u6vy.cloudfront.net/cache/f0/5b/f05b21063194c1b8a8c430c213bdce16.jpg' alt='Dan Abramov' />
                </div>

                <div style={{ marginLeft: '10px'}}>
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


              {/*  */}

              <div style={{display: "flex"}}>
                <div style={{width: '30%'}}>
                  <Image src='https://d2nchlq0f2u6vy.cloudfront.net/cache/f0/5b/f05b21063194c1b8a8c430c213bdce16.jpg' alt='Dan Abramov' />
                </div>

                <div style={{marginLeft: '10px'}}>
                  <Text fontSize={{ base: "16px" }}>
                    Chemistry: The Central Science
                  </Text>
                  <Text fontSize={{ base: "16px" }}>
                    14th Edition . ISBN: 9780134414232
                  </Text>

                   <Text fontSize={{ base: "16px" }}>
                   Bruce Edward Bursten, Catherine J. Murphy, H. Eugene Lemay, Matthew E. Stoltzfus, Patrick Woodward, Theodore E. Brown
                  </Text>
                </div>
              </div>

              {/*  */}

              <div style={{display: "flex"}}>
                <div style={{width: '30%'}}>
                  <Image src='https://d2nchlq0f2u6vy.cloudfront.net/cache/f0/5b/f05b21063194c1b8a8c430c213bdce16.jpg' alt='Dan Abramov' />
                </div>

                <div style={{marginLeft: '10px'}}>
                  <Text fontSize={{ base: "16px" }}>
                    Chemistry: The Central Science
                  </Text>
                  <Text fontSize={{ base: "16px" }}>
                    14th Edition . ISBN: 9780134414232
                  </Text>

                   <Text fontSize={{ base: "16px" }}>
                   Bruce Edward Bursten, Catherine J. Murphy, H. Eugene Lemay, Matthew E. Stoltzfus, Patrick Woodward, Theodore E. Brown
                  </Text>
                </div>
              </div>



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
            <p>Physice</p>
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
  
`