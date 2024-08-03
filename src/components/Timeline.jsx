import experience from "../data/experience";
import "./Timeline.css"



const Timeline = () => (


  <div className="timeline-main">
    {experience.length && experience.map(job => (
      <article
        key={ job.begin.month + job.begin.year }
        className='timeline-item animate-on-scroll'
      >
        <div className="inner">
          <span className="timeline-date">
            <span className="timeline-month">{ job.begin.month }</span>
            <span className="timeline-year">{ job.begin.year }</span>
          </span>
          <div className="timeline-card">
            <h2 className='timeline-card-title'>
              { job.occupation }
            </h2>
            { job.description.map((element, index) => (
              <p key={index}>{element}</p>
            ))}
            <div className="timeline-card-company">
              <span className="timeline-card-subcompany">
                { job.company }
              </span>
              <span className="timeline-card-duration">
                { job.duration || 'present' }
              </span>
            </div>
          </div>
        </div>
      </article>
    ))}
  </div>
)

export default Timeline;

