import React from 'react';
import { Container } from "react-bootstrap"
import './App.css';

import useFetchJobs from "./useFetchJobs"

function App() {
  const { jobs, loading, error } = useFetchJobs()
  return (
    <Container>
      { loading && <h1>Loading...</h1> }
      { error && <h1>Error. Try refreshing...</h1> }
      <h1>{jobs.length} jobs</h1>
    </Container>
  );
}

export default App;
