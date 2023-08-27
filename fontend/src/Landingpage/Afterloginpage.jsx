import React from 'react';

import Footer from './footer';
import { Link } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';
import NavBar from './Nav';

export default function Afterloginpage() {

  return (
  
    <div>
   <NavBar/>
      <Heading p={"10px"} size={"lg"}>Recommended Expert Solutions</Heading>
      <div style={{ backgroundColor: '', padding: '25px' }} >
       
        <div
          style={{
            display: 'flex',
        
             width: '80%',

 
             borderRadius:"10px",
            
          }}
        >
        
          {/* Repeat the following set of elements as needed for each book */}
          <div style={{display:"flex",       boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',}} >
            <div style={{ padding: '10px', width: '45%' ,display:"flex"}} >
              <Link to="/">
                <img
                  style={{ width: '80%' }}
                  src="https://d2nchlq0f2u6vy.cloudfront.net/cache/c8/a5/c8a5311396364c06fa04595bbe2902f9.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div style={{ padding: '10px', width: '45%' }}>
              <h2>Precalculus</h2>
              
              <p>2nd Edition - ISBN: 97</p>
              <p>Carter, Cuevas, Day, Malloy</p>
            
              <p>8,886 solutions</p>
            </div>
          </div>
          <div style={{display:"flex",       boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',}} >
            <div style={{ padding: '10px', width: '45%' ,display:"flex"}} >
              <Link to="/">
                <img
                  style={{ width: '80%' }}
                  src="	https://d2nchlq0f2u6vy.cloudfront.net/cache/2c/1e/2c1ebd8444499a8944f1c1c221b4201d.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div style={{ padding: '10px', width: '45%' }}>
              <h2>Realidades</h2>
              <p>1st Edition - ISBN: 97</p>
              <p>Savvas Learning Co</p>
              <p>1,783 solutions</p>
            </div>
          </div>
          <div style={{display:"flex",       boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',}} >
            <div style={{ padding: '10px', width: '45%' ,display:"flex"}} >
              <Link to="/">
                <img
                  style={{ width: '80%' }}
                  src="https://d2nchlq0f2u6vy.cloudfront.net/cache/ed/fb/edfba486f9985ffe5b1b850ec44e2ea5.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div style={{ padding: '10px', width: '45%' }}>
              <h2>Big Ideas Math Geometry</h2>
              <p>1nd Edition - ISBN: 97</p>
              <p>Boswell, Larson</p>
              <p>4,072 solutions</p>
            </div>
          </div>
      
         
          {/* Repeat more book elements here */}
        </div>
        
      </div>
      <Footer />
    </div>
  );
}
// import data from "./data.json"
// <div>
// {data?.map((e)=>(
//   <div key={"e._id"}>{e.image} </div>
// ))}
// </div>
