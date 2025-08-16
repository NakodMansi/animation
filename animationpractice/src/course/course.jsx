// import { useState } from "react";
import "./course.css";
import { 
    motion, 
    useScroll, 
    useMotionValueEvent, 
    useTransform 
    } from "framer-motion";

const gradientStops = [0,270, 530, 960, 1360, 1650];
const gradients = ["linear-gradient(to bottom, #FFF, #FFF)",
                    "linear-gradient(to bottom, #FFF, #FFF)",
                    "linear-gradient(to bottom, #88D1D8, #C8EEF1)",
                    "linear-gradient(to bottom, #4557F6, #D7DBFF)",
                    "linear-gradient(to bottom, #FFA585, #FFEDA0)",
                    "linear-gradient(to bottom, #0061FF, #60EFFF)",
                ];

const Data = [
    {
    id: 1,
    heading: "Personalised Classroom Coaching & Flexible Batch Timings",
    subheading:"Master IELTS with structured coaching designed for your success.",
    metric: {
        metric1: {
        heading: "Expert-Led Training",
        subheading: "Learn from top IELTS trainers with proven success rates.",
        },
        metric2: {
        heading: "Flexible Learning",
        subheading: "Choose morning, evening, or weekend batches as per your schedule.",
        }
    },
    button: "Join Now!!",
    },
    {
    id: 2,
    heading: "1:1 Daily Speaking & Writing Practice",
    subheading:"Enhance fluency and writing skills with personalized practice.",
    metric: {
        metric1: {
        heading: "Daily Speaking Drills",
        subheading: "Real-time mentor feedback to boost confidence.",
        },
        metric2: {
        heading: "Structured Writing Practice",
        subheading: "Master essay & task responses with expert techniques.",
        }
    },
    button: "Start Practicing!",
    },
    {
    id: 3,
    heading: "Exclusive Grammar Batches & Resource Materials",
    subheading:"Strengthen your foundation with IELTS-focused grammar training.",
    metric: {
        metric1: {
        heading: "Targeted Grammar Lessons",
        subheading: "Learn only what’s essential for IELTS success.",
        },
        metric2: {
        heading: "Live Doubt-Solving Sessions",
        subheading: "Get instant answers to tricky grammar questions.",
        }
    },
    button: "Improve Now!",
    },
    {
    id: 4,
    heading: "Membership Access to 26+ Centers Across Gujarat",
    subheading:"Get unlimited access to learning centers for a seamless study experience.",
    metric: {
        metric1: {
        heading: "Switch Centres Anytime",
        subheading: "Attend classes at any of our 26+ locations.",
        },
        metric2: {
        heading: "Free Library & Study Spaces",
        subheading: "Prepare in a focused, distraction-free environment.",
        }
    },
    button: "Access Now!",
    },
];

const parentCard=[
    {
        id: 1,
        heading: "100K",
        text: "Students Trained Across 26+ Centers",
    },
    {
        id: 2,
        heading: "95%",
        text: "Band 7+ in First Attempt",
    },
    {
        id: 3,
        heading: "30+ Hours",
        text: "1:1 Speaking & Writing Sessions",
    }
];

const speakingCrads= [
    {
        id: 1,
        heading: "Performance Tracking",
        text: "Get regular feedback on your speaking & writing.",
    },
    {
        id: 2,
        heading: "Band Score Predictions",
        text: "Know where you stand before the actual test.",
    },
    {
        id: 3,
        heading: "Improvement Strategies",
        text: "Targeted exercises to boost weak areas.",
    },
];

const Course = () =>{
    const {scrollY} = useScroll();
    // const [index, setIndex] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest)=>{
        console.log(latest);

        // if(latest>=500 && latest<=1600){
        //     setIndex(1);
        // }else{
        //     setIndex(0);
        // }
    })

    const bgColor = useTransform(scrollY, gradientStops, gradients);

    return (
    <div className='main-div'>
       

        {/* 3rd div */}
        <motion.div style={{backgroundImage: bgColor,}} className="parent-card" >
            <div className='heading-and-text'>
                <h1 className='heading'>Your Path to a High IELTS Score Starts Here!</h1>
                <p className='text'>Learn, practice, and master every IELTS section with a proven strategy for maximum score improvement through a personalized approach!</p>
            </div>
            <div className='content'>
                {parentCard.map((content)=>(
                <div className='heading-and-text' key={content.id}>
                    <h2 className='heading'>{content.heading}</h2>
                    <p className='text'>{content.text}</p>
                </div>
                ))}
            </div>
        </motion.div>

        <div className="cards" style={{paddingTop: "400px"}}>
            {Data.map((content)=>(
            <motion.div key={content.id} className={`card${content.id} child-card`} >
                <div className='card-content'>
                    <div className='card-header'>
                        <h2 className='heading'>{content.heading}</h2>
                        <p className='text'>{content.subheading}</p>
                    </div>
                    <div className='card-metrics'>
                        <div className='metric1 metric'>
                            <h2 className='heading'>{content.metric.metric1.heading}</h2>
                            <p className='text'>{content.metric.metric1.subheading}</p>
                        </div>
                        <div className='metric2 metric'>
                        <h2 className='heading'>{content.metric.metric2.heading}</h2>
                        <p className='text'>{content.metric.metric2.heading}</p>
                        </div>
                    </div>
                </div>
                <button type="button" className='btn'>
                    {content.button}
                </button>
            </motion.div>
            ))}
        </div>

        
    </div>
    );
}
export default Course;