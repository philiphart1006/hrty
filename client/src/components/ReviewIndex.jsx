// & Imports
// * Packages
import { useLoaderData, Link } from "react-router-dom"
import { Card, CardHeader, CardBody, CardFooter, Button, SimpleGrid } from '@chakra-ui/react'
import { useState, useEffect } from "react"
import { Form } from "react-router-dom"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react"

// * Styling & Images
import hrtLogo from '../assets/hrt_favi.png'

// * Default function
export default function AllReviews(){

  let reviewsData = useLoaderData()
  console.log(reviewsData)
  let reviewsAll = reviewsData[0]
  let employeesAll = reviewsData[1]

  // * Sort reviews by quarter then year:
  function compare( a, b ) {
    if ( a.quarter > b.quarter ){
      return -1;
    }
    if ( a.quarter < b.quarter ){
      return 1;
    }
    return 0;
  }
  
  const reviews_sorted = reviewsAll.sort( compare );

  function compareYear( a, b ) {
    if ( a.year > b.year ){
      return -1;
    }
    if ( a.year < b.year ){
      return 1;
    }
    return 0;
  }
  
  const reviews_ordered = reviews_sorted.sort( compareYear );

  // * Get current user ID from localStorage
  const currentUser = localStorage.getItem('hrty-id')

  // * State
  const [filters, setFilters]= useState({
    quarter: 'All',
    search: ''
  })
  const [reviewsList, setReviewsList] = useState('')

  // * Effect
  useEffect(() => {
    const pattern = new RegExp(filters.search, 'i')
    const pattern2 = new RegExp(filters.quarter, 'i')
    const filteredArr = reviews_ordered.filter(review => {
      return pattern.test(review.employee.username) && pattern2.test(review?.quarter) ||  filters.quarter ==='All'
    })
    setReviewsList(filteredArr)
  }, [reviews_ordered, filters.search, filters.quarter])

  // * Change handle function
  function handleChange(e){
    const newObj = {
      ...filters,
      [e.target.name]: e.target.value
    }
    setFilters(newObj)
  }

  // * Work out current CQ & year
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth()
  const currentQuarter = Math.floor((currentMonth + 3) / 3);
  
  const { isOpen, onOpen, onClose } = useDisclosure()

  // * JSX
  return(
    <section className='displayContainer'>


      {/* ! Modal here */}
      <Button onClick={onOpen}>Click here to submit a review</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent className='modalContent'>
          {/* <ModalHeader>Leave a review</ModalHeader> */}
          <ModalCloseButton className='modalClose'/>
          <ModalBody>
          <section className='newReview'>
        <Form method="post" className="reviewForm">
          <label hidden htmlFor='value'>Leave a review</label>
          <label form='year'>Year:</label>
          <input type='number' name='year' defaultValue={currentYear} placeholder={currentYear} />
          <label form='quarter'>Quarter:</label>
          <input type='number' name='quarter' defaultValue={currentQuarter} placeholder={currentQuarter} />
          <label form='rating'>Rating (/5):</label>
          <input type='number' name='rating' min={1} max={5}/>
          <label form='summary'>Summary:</label>
          <input type='text' name='summary' />
          {/* <input type='text' name='owner' value={currentUser ? currentUser : 3} hidden readOnly /> */}
          <label form='employee'>Employee:</label>
          <select name='employee' onChange={handleChange} defaultValue={3} placeholder=''>
            {employeesAll.map(employee => {
            const {id, username} = employee
            return(
              <option value={id} key={id}>{username}</option>
            )
          })
          }
          </select>
          <button className='btn' type='submit'>Submit review</button>
        </Form>
      </section>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>

      
      <section className='indexFilters'>
        <h1>Quarterly Performance Reviews</h1>
        <select name='quarter' value={filters.quarter} onChange={handleChange}>
          <option value='All'>All</option>
          <option value='1'>C1</option>
          <option value='2'>C2</option>
          <option value='3'>C3</option>
          <option value='4'>C4</option>
        </select>
        <input name='search' placeholder='Search by username...' value={filters.search} onChange={handleChange} />
      </section>
      {/* { reviewsList?.length > 0 */}
      { reviewsList?.length > 0
      ?
      // Map through and create individual container
      <SimpleGrid minChildWidth='160px' spacing='40px'>
      {
      reviewsList.map(review => {
        const {id, employee, owner, quarter, year, summary } = review
        const { username, first_name, last_name } = employee
        return (
          <Link to = {`/employees/${employee.id}`} key={id}>
            <Card className="indContainer reviewContainer">
              <CardHeader>
                <p>{first_name} {last_name} - C{quarter} ({year})</p>
              </CardHeader>
              <CardBody>
              <p>{summary}</p>
              <p>Mgr: {owner.username}</p>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
          </Link>
        )
      })
    }
      </SimpleGrid>
      :
      <p>No reviews - go judge some folks!</p>
    }
    </section>
  )
}