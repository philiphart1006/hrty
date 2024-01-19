// & Imports
// * Packages
import { useLoaderData, Link } from "react-router-dom"
import { Card, CardHeader, CardBody, CardFooter, Button, SimpleGrid } from '@chakra-ui/react'
// import { useState, useEffect } from "react"

// * Styling & Images
import hrtLogo from '../assets/hrt_favi.png'

// * Default function
export default function AllTeams(){

  const teamsAll = useLoaderData().data
  console.log(teamsAll)

  

  // * JSX
  return(
    <section className='indexContainer'>
      <SimpleGrid minChildWidth='250px' spacing='40px'>
      {
      teamsAll.map(team => {
        const {id, name, description } = team
        return (
          <Card className="indContainer" key={id}>
            <CardHeader>
              <h2>{name}</h2>
            </CardHeader>
            <CardBody>
              <img className='team-pic' src={ team.image } alt='team photo'/>
              <p>{description}</p>
            </CardBody>
            <CardFooter>
            </CardFooter>
          </Card>
        )
      })
    }
      </SimpleGrid>
    </section>
  )
}