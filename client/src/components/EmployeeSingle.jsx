// * Packages

import { Form, useLoaderData, Link } from "react-router-dom"
import { Link as ChakraLink } from '@chakra-ui/react'


// * Styling & Images
import empImage from '../assets/hrt_favi.png'
import star from '../assets/1366.ico'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Card, SimpleGrid, chakra } from "@chakra-ui/react"

// * Default function
export default function EmployeeSingle(){

  const employee = useLoaderData()
  const { id, username, first_name, last_name, team, manager, status, join_date, softwares, reviews_received, hardwares, image } = employee
  const manager_name = manager ? manager.username : "No manager"

  // * Sort reviews by quarter then year:
  function compare( a, b ) {
    if ( a.quarter < b.quarter ){
      return -1;
    }
    if ( a.quarter > b.quarter ){
      return 1;
    }
    return 0;
  }
  
  const reviews_sorted = reviews_received.sort( compare );

  function compareYear( a, b ) {
    if ( a.year < b.year ){
      return -1;
    }
    if ( a.year > b.year ){
      return 1;
    }
    return 0;
  }
  
  const reviews_ordered = reviews_sorted.sort( compareYear );

  return(
    <section className='employeeSingle'>
        <section className='employeeuLHS'>
          <div className="employeeBioLHS">
            <img className='employeePicLarge' src={image}/>
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
        <SimpleGrid minChildWidth='80px' spacing='20px'>
        {softwares.map(software => {
          return(
            <div className='softwareContainer' key={software.name}>
              <p>{software.name}</p>
              <p>£{software.licence_cost}pcm</p>
            </div>
          )
        })
        }
        </SimpleGrid>
        </section>
        <section className='employeelLHS'>
          {/* Employee reviews go here; use Chakra element */}
          <h1> Employee Reviews</h1>
          <Accordion allowToggle>
            {reviews_ordered.map(review => {
            return(
              <AccordionItem className='softwareContainer' key={review.id}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' className='reviewHeader'>
                    C{review.quarter} - {review.year} : 
                    {/* <div className='visual-rating'> */}
                      {review.rating > 0 && <img className='rating-star' src={star} alt='star'/>}
                      {review.rating > 1 && <img className='rating-star' src={star} alt='star'/>}
                      {review.rating > 2 && <img className='rating-star' src={star} alt='star'/>}
                      {review.rating > 3 && <img className='rating-star' src={star} alt='star'/>}
                      {review.rating > 4 && <img className='rating-star' src={star} alt='star'/>}
                    {/* </div> */}
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
          <SimpleGrid minChildWidth='80px' spacing='20px'>
            {hardwares.map(hardware => {
              return(
                <div className='softwareContainer' key={hardware.name}>
                  <p>{hardware.name} - {hardware.type}</p>
                  <p>£{hardware.value}</p>
                </div>
              )
            })
            }
        </SimpleGrid>
        </section>
      </section>
  )
}