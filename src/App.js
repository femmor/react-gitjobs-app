import React, { useState } from 'react';
import useFetchJobs from "./useFetchJobs"
import { Container, Spinner, Alert } from "react-bootstrap"
import './App.css'
import Logo from "./images/logo.png"

import Job from "./components/Job"
import Pagination from "./components/JobsPagination"
import SearchForm from './components/SearchForm';


function App() {
  const [ params, setParams ] = useState({})
  const [ page, setPage ] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  function handleParamsChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return {
        ...prevParams,
        [param]: value
      }
    })
  }

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-center mb-3">
        <img src={Logo} alt="app logo" width="200"/>
      </div>
      <SearchForm params={params} onParamChange={handleParamsChange}/>
      <div className="d-flex justify-content-center mb-3">
        { loading && 
          <Spinner animation="border" variant="primary" />
        }
      </div>
      <div className="d-flex justify-content-center mb-3">
          { error && 
            <Alert variant="danger">
              Error! something went wrong. Please reload...
            </Alert>
          }
          <h3>{jobs.length > 0 && `${jobs.length} jobs found`} </h3>
      </div>
      
      <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
      
      {jobs.map(job => {
        return ( 
          <Job key={job.id} job={job}></Job>
        )
      })}

      <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
    </Container>
  );
}

export default App;
