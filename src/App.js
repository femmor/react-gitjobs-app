import React, { useState } from 'react';
import useFetchJobs from "./useFetchJobs"
import { Container, Spinner } from "react-bootstrap"
import './App.css'

import Job from "./components/Job"


function App() {
  const [ params, setParams ] = useState({})
  const [ page, setPage ] = useState(1)
  const { jobs, loading, error } = useFetchJobs()
  return (
    <Container>
      { loading && 
        <Spinner animation="border" variant="primary" />
      }
      { error && <h1>Error. Try refreshing...</h1> }
      <h1>{jobs.length} jobs found</h1>
      {jobs.map(job => {
        return (
          <Job key={job.id} job={job}></Job>
        )
      })}
    </Container>
  );
}

export default App;
