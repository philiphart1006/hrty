// & Imports
// * Packages
import { useLoaderData, Link } from "react-router-dom"
import { Card, CardHeader, CardBody, CardFooter, Button, SimpleGrid } from '@chakra-ui/react'
import { useState, useEffect } from "react"

// * Styling & Images
import hrtLogo from '../assets/hrt_favi.png'

// * Default function
export default function AllEmployees(){

  const employeesAll = useLoaderData()

  // * State
  const [filters, setFilters]= useState({
    team: 'All',
    search: ''
  })
  const [employeesList, setEmployeesList] = useState('')

  // * Effect
  useEffect(() => {
    const pattern = new RegExp(filters.search, 'i')
    const pattern2 = new RegExp(filters.team, 'i')
    const filteredArr = employeesAll.filter(employee => {
      return pattern.test(employee.username) && (pattern2.test(employee.team?.name) || filters.team === 'All')
    })
    setEmployeesList(filteredArr)
  }, [employeesAll, filters.search, filters.team])

  // * Change handle function
  function handleChange(e){
    const newObj = {
      ...filters,
      [e.target.name]: e.target.value
    }
    setFilters(newObj)
  }
  

  // * JSX
  return(
    <section className='displayContainer'>
      <section className='indexFilters'>
        <h1>Employees</h1>
        <select name='team' value={filters.team} onChange={handleChange}>
          <option value='All'>All</option>
          <option value='HR'>HR</option>
          <option value='Engineering'>Engineering</option>
          <option value='Sales'>Sales</option>
          <option value='Support'>Support</option>
          <option value='Finance'>Finance</option>
        </select>
        <input name='search' placeholder='Search by name...' value={filters.search} onChange={handleChange} />
      </section>
      { employeesList?.length > 0
      ?
      // Map through and create individual container
      <SimpleGrid minChildWidth='160px' spacing='40px'>
      {
      employeesList.map(employee => {
        const {id, username, first_name, last_name, team, manager } = employee
        const manager_name = manager ? manager.username : "No manager"
        return (
          <Link to = {`${id}`} key={id}>
            <Card className="indContainer empContainer">
              <CardHeader>
                <p>{first_name} {last_name}</p>
              </CardHeader>
              <CardBody>
                <img src={hrtLogo} className="indPic" />
              <p>{username}</p>
              <p>Mgr: {manager_name}</p>
              </CardBody>
              <CardFooter>
                <Button>Promote</Button>
                <Button>Fire</Button>
              </CardFooter>
            </Card>
          </Link>
        )
      })
    }
      </SimpleGrid>
      :
      <p>No employees - go hire a team!</p>
    }
    </section>
  )
}