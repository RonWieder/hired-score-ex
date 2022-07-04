import Experience from './Experience.jsx';

const Candidate = ({ name, experiences }) => (
  <div>
    <h1>{name}:</h1>
    <ul>
      {!experiences.length ? (
        <h3>No experience</h3>
      ) : (
        experiences.map(({ title, start_date, end_date }, i) => (
          <Experience
            title={title}
            startDate={start_date}
            endDate={end_date}
            key={i}
          />
        ))
      )}
    </ul>
  </div>
);
export default Candidate;
