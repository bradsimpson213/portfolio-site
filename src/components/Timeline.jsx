import experience from "../data/experience";
import "./Timeline.css"



const Timeline = () => (


  <div className="timeline-main">
    {experience.length && experience.map(job => (
      <article 
        key={job.begin.month + job.begin.year} 
        className='timeline__item animate-on-scroll'
      >
        <div className="inner">
          <span className="timeline__date">
            <span className="timeline__month">{job.begin.month}</span>
            <span className="timeline__year">{job.begin.year}</span>
          </span>
          <div className="timeline__card">
            <h2 className='timeline__card-title'>
              {job.occupation} at {job.company} <br />
              <small className='timeline__card-title--small'>
                ({job.duration || 'present'})
              </small>
            </h2>
            { job.description.map( (element, index) => (
                <p key={ index }>{ element }</p>
            ))}
          </div>
        </div>
      </article>
    ))}
  </div>
)

export default Timeline;

  