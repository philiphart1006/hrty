// & Imports
// * Packages
import { useLoaderData, Link } from "react-router-dom"
import { Card, CardHeader, CardBody, CardFooter, Button, SimpleGrid } from '@chakra-ui/react'
// import { useState, useEffect } from "react"

// * Styling & Images
import hrtLogo from '../assets/hrt_favi.png'

// * Default function
export default function AllTeams(){

  const teamsAll = useLoaderData()

  

  // * JSX
  return(
    <section className='displayContainer'>
      <SimpleGrid minChildWidth='160px' spacing='40px'>
      {
      teamsAll.map(team => {
        const {id, name, description } = team
        return (
          <Link to = {`${id}`} key={id}>
            <Card className="indContainer">
              <CardHeader>
                <p>{name}</p>
              </CardHeader>
              <CardBody>
                <img src={hrtLogo} className="indPic" />
                <p>{description}</p>
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