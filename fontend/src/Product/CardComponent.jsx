import { Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { styled } from 'styled-components'

export const CardComponent = ({image, title, author, description, _id}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams);
 


  return (
    <DIV style={{display: "flex", backgroundColor: "white", padding: "10px"}}>
                <div  className='imageDiv'>
                  <Image src={image} className='imageDiv' alt='Dan Abramov' width={{base: 40,sm:20,md: 20, xl: 20}}/>
                </div>

                <div style={{ marginLeft: '10px'}}>  
                  <Text fontSize={{ base: "16px" }} style={{fontWeight: 'bold'}}>
                   
                    <Link to={`/book/${_id}`}>{title}</Link>
                
                  </Text>
                  <Text fontSize={{ base: "13px" }}  style={{fontWeight: '500', color: '#928b8b'}}>
                    Author : {author}
                  </Text>

                   <Text fontSize={{ base: "13px" }}  style={{fontWeight: '500', color: '#928b8b'}}>
                  {description}
                  </Text>
                </div>
              </DIV>
  )
}

const DIV = styled.div`

@media screen and (max-width: 540px) {

  /* .imageDiv{
    width: 405%;
  } */

}

@media screen and (max-width: 540px) {

/* .imageDiv{
  width: 50%;
} */

}
  
`
