// & Imports
// * Packages
import { useLoaderData, Link } from "react-router-dom"
import { Card, CardHeader, CardBody, CardFooter, Button, SimpleGrid } from '@chakra-ui/react'
// import { useState, useEffect } from "react"

// * Styling & Images
import hrtLogo from '../assets/hrt_favi.png'

// * Default function
export default function AllHardwares(){

  const hardwaresAll = useLoaderData().data
  console.log(hardwaresAll)

  

  // * JSX
  return(
    <section className='displayContainer'>
      <SimpleGrid minChildWidth='250px' spacing='40px'>
      {
      hardwaresAll.map(hardware => {
        const {id, name, value, year, type } = hardware
        return (
          <Link to = {`${id}`} key={id}>
            <Card className="indContainer">
              <CardHeader>
                <p>{name}</p>
              </CardHeader>
              <CardBody>
                <p>Type: {type}</p>
                <p>Value: £{value}</p>
                <p>Purchase year: {year}</p>
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