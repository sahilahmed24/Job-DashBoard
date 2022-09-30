import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import jobs from "../utils/data.json";

const JobsContainer = () => {
  return (
    <Wrapper>
      <h5>{/* {totalJobs} job{jobs.length > 1 && "s"} found */}</h5>
      <div className="jobs">
        {jobs?.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};
export default JobsContainer;
