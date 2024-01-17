// * Packages

import { Form, useLoaderData, Link } from "react-router-dom"
import { Link as ChakraLink } from '@chakra-ui/react'


// * Styling & Images
import empImage from '../assets/hrt_favi.png'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Card, SimpleGrid, chakra } from "@chakra-ui/react"

// * Default function
export default function EmployeeSingle(){

  const employee = useLoaderData()
  const { id, username, first_name, last_name, team, manager, status, join_date, softwares, reviews_received } = employee
  const manager_name = manager ? manager.username : "No manager"
  console.log(employee)

  return(
    <section className='employeeSingle'>
        <section className='employeeuLHS'>
          <div className="employeeBioLHS">
            <img className='employeePicLarge' src={empImage}/>
            <div className='employeeButtons'>
              <ChakraLink as={Link} to={`/employees/${id}/edit`}><button type='button'>Edit</button></ChakraLink>
              <Form
                method='post'
                action='delete'
                onSubmit={(e) => {
                  if (
                    !confirm(
                      "Deleting this employee is irreversible - are you sure? Consider changing their status instead."
                    )
                  ) {
                    e.preventDefault()
                  }
                }}
              >
                <button type='submit'>Delete</button>
              </Form>
            </div>
          </div>
          <div className='employeeBio'>
            {/* Employee Bio goes here */}
            <h2>{username}</h2>
            <p><span className='bioLabel'>Name: </span>{first_name} {last_name}</p>
            <p><span className='bioLabel'>Team: </span>{team?.name}</p>
            <p><span className='bioLabel'>Managed by: </span>{manager_name}</p>
            <p><span className='bioLabel'>Status: </span>{status}</p>
            <p><span className='bioLabel'>Joined: </span>{join_date}</p>
          </div>
        </section>
        <section className='employeeuRHS' >
        {/* Employee softwares go here */}
        <h1>Employee Software Subscriptions</h1>
        <SimpleGrid minChildWidth='80px' spacing='40px'>
        {softwares.map(software => {
          return(
            <div className='softwareContainer' key={software.name}>
              <p>{software.name}</p>
              <p>{software.licence_cost}</p>
            </div>
          )
        })
        }
        </SimpleGrid>
        </section>
        <section className='employeelLHS'>
          {/* Employee reviews go here; use Chakra element */}
          <h1> Employee Reviews</h1>
          <Accordion>
            {reviews_received.map(review => {
            return(
              <AccordionItem className='softwareContainer' key={review.id}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                    C{review.quarter} - {review.year}: {review.rating}/5
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {review.summary}
                </AccordionPanel>
              </AccordionItem>
            )
            })
            }
          </Accordion>
        </section>
        
        <section className='employeelRHS'>
          {/* Employee hardwares go here */}
          <h1>Company hardware</h1>
        </section>
      </section>
  )
}