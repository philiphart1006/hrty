// & Imports
// * Packages
import { useLoaderData, Link } from "react-router-dom"
import { Card, CardHeader, CardBody, CardFooter, Button, SimpleGrid } from '@chakra-ui/react'
// import { useState, useEffect } from "react"

// * Styling & Images
import hrtLogo from '../assets/hrt_favi.png'

// * Default function
export default function AllSoftwares(){

  const softwaresAll = useLoaderData().data
  console.log(softwaresAll)

  

  // * JSX
  return(
    <section className='displayContainer'>
      <SimpleGrid minChildWidth='250px' spacing='40px'>
      {
      softwaresAll.map(software => {
        const {id, name, licence_cost } = software
        return (
          <Link to = {`${id}`} key={id}>
            <Card className="indContainer">
              <CardHeader>
                <p>{name}</p>
              </CardHeader>
              <CardBody>
                <p>{licence_cost}</p>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
          </Link>
        )
      })
    }
      </SimpleGrid>
    </section>
  )
}