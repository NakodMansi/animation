// import logo from './logo.svg';
import './App.css';
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";

function App() {
  const {scrollY} = useScroll();

  useMotionValueEvent(scrollY, "change", (latest)=>{
    console.log(latest);
  })

  const scale1 = useTransform(scrollY, [500, 900], [1, 0.8])
  const scale2 = useTransform(scrollY, [900, 1300], [1, 0.8])
  const bgColor = useTransform(scrollY, 
                      [0, 500, 900, 1300], 
                      ["radial-gradient(circle at top right, #7944d1, #449cd1)", "radial-gradient(circle at top right, #7944d1, #449cd1)", "linear-gradient(to bottom, #449cd1, #d14479, #FF5733)","linear-gradient(to bottom, #ff33f3, #d14479, #FF5733)"])
  return (
    <div className='main-div'>
      <motion.div
        style={{
          background: bgColor,
          position: "fixed",
          zIndex: 0,
        }}
        className="parent-box"
      >
        <div className='heading-and-text'>
          <h1 className='heading'>
            Your Path to a High IELTS Score Starts Here!
          </h1>
          <p className='text'>
            Learn, practice, and master every IELTS section with a proven strategy for maximum score improvement through a personalized approach!
          </p>
        </div>
        <div className='content'>
          <div className='heading-and-text'>
            <h2 className='heading'>100K</h2>
            <p className='text'>
              Students Trained Across 26+ Centers
            </p>
          </div>
          <div className='heading-and-text'>
            <h2 className='heading'>95%</h2>
            <p className='text'>
              Band 7+ in First Attempt
            </p>
          </div>
          <div className='heading-and-text'>
            <h2 className='heading'>30+ Hours</h2>
            <p className='text'>
              1:1 Speaking & Writing Sessions
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{
          // position: "sticky",
          // top: "20vh",
          // scale: scale1,
          backgroundColor: "#DEAA79",
          backdropFilter: "blur(100px)",
          zIndex:1,
          marginTop: "580px",
          borderRadius: "20px",
          marginBottom: "30px",
        }}

        className='child-box first-box'
      >
        <div className='card-content'>
          <div className='card-header'>
            <h2 className='heading'>
              Personalised Classroom Coaching & Flexible Batch Timings
            </h2>
            <p className='text'>
              Master IELTS with structured coaching designed for your success.
            </p>
          </div>
          <div className='card-metrics'>
            <div className='metric1 metric'>
              <h2 className='heading'>Expert-Led Training</h2>
              <p className='text'>
                Learn from top IELTS trainers with proven success rates.
              </p>
            </div>
            <div className='metric2 metric'>
              <h2 className='heading'>Flexible Learning</h2>
              <p className='text'>
                Choose morning, evening, or weekend batches as per your schedule.
              </p>
            </div>
          </div>
        </div>
        <button type="button" className='btn'>
            Join Now!!
        </button>
      </motion.div>
      <motion.div
        style={{
          // position: "sticky",
          // top: "20vh",
          // scale: scale2,
          backgroundColor: "#FFE6A9",
          backdropFilter: "blur(100px)",
          zIndex:1,
          borderRadius: "20px",
          marginBottom: "30px",
        }}

        className='child-box second-box'
      >
      <div className='card-content'>
          <div className='card-header'>
            <h2 className='heading'>
              Personalised Classroom Coaching & Flexible Batch Timings
            </h2>
            <p className='text'>
              Master IELTS with structured coaching designed for your success.
            </p>
          </div>
          <div className='card-metrics'>
            <div className='metric1 metric'>
              <h2 className='heading'>Expert-Led Training</h2>
              <p className='text'>
                Learn from top IELTS trainers with proven success rates.
              </p>
            </div>
            <div className='metric2 metric'>
              <h2 className='heading'>Flexible Learning</h2>
              <p className='text'>
                Choose morning, evening, or weekend batches as per your schedule.
              </p>
            </div>
          </div>
        </div>
        <button type="button" className='btn'>
            Join Now!!
        </button>
      </motion.div>
      <motion.div
        style={{
          position: "sticky",
          top: "25vh",
          backgroundColor: "#B1C29E",
          zIndex:1,
          // marginBottom: "100px",
          borderRadius: "20px",
        }}

        className='child-box third-box'
      >
          <div className='card-content'>
          <div className='card-header'>
            <h2 className='heading'>
              Personalised Classroom Coaching & Flexible Batch Timings
            </h2>
            <p className='text'>
              Master IELTS with structured coaching designed for your success.
            </p>
          </div>
          <div className='card-metrics'>
            <div className='metric1 metric'>
              <h2 className='heading'>Expert-Led Training</h2>
              <p className='text'>
                Learn from top IELTS trainers with proven success rates.
              </p>
            </div>
            <div className='metric2 metric'>
              <h2 className='heading'>Flexible Learning</h2>
              <p className='text'>
                Choose morning, evening, or weekend batches as per your schedule.
              </p>
            </div>
          </div>
        </div>
        <button type="button" className='btn'>
            Join Now!!
        </button>
      </motion.div>
    </div>
  
  );
}

export default App;
