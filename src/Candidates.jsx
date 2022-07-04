import { useEffect, useState } from 'react';
import Candidate from './Candidate.jsx';

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  async function fetchCandidates() {
    const candidatesData = await fetch('http://localhost:3001/candidates');

    const candidatesJson = await candidatesData.json();
    setCandidates(candidatesJson);
  }

  return (
    <>
      {!candidates.length ? (
        <h1>Fetching candidates...</h1>
      ) : (
        candidates.map((candidate) => (
          <Candidate
            name={candidate.contact_info.name.formatted_name}
            experiences={candidate.experience}
            key={candidate.contact_info.email}
          />
        ))
      )}
    </>
  );
};

export default Candidates;
