import { Image, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export const CardComponent = ({image, title, author, description, _id}) => {
  // const [searchParams, setSearchParams] = useSearchParams()
  // console.log(searchParams);
 


  return (
    <div style={{display: "flex", backgroundColor: "white", padding: "10px"}}>
                <div style={{width: '15%'}}>
                  <Image src={image} alt='Dan Abramov' />
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
              </div>
  )
}
