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
        {/* 1st div */}
        <div className="intro-content">
            <div className="heading-and-text">
                <h1 className="heading">Your Gateway to Global Education Starts Here!</h1>
                <p className="text">Master IELTS with expert-led training.</p>
            </div>
            <video poster="./assets/card1.svg"></video>
        </div>

        {/* 2nd div */}
        <div className="title">
            <h1 className="heading">Why Choose EEC  for Test Prep?</h1>
            <p className="text">EEC Global is a trusted leader in IELTS coaching. Get personalized 1:1 coaching with daily speaking and writing practice for targeted improvement. Plus, with 26+ centers across Gujarat, you can learn flexibly at your convenience.
            <br />
            📢 Join EEC and achieve your dream IELTS score!</p>
        </div>

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

        <div className="cards">
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

        {/* 4th div */}
        <div className="info-and-images">
            <div className="heading-and-text">
                <h1 className="heading">Where do our students go next?</h1>
                <p className="text">Our alumni have successfully progressed to prestigious universities around the world.  Here's a glimpse of institutions where our students continue their academic journey.</p>
            </div>
            <div className="items">
                <div className="logo"></div>
                <div className="logo"></div>
            </div>
        </div>

        {/* 5th div */}
        <div className="section5">
            <div className="heading-and-text">
                <h1 className="heading">Extensive Library & Study Resources</h1>
                <p className="text">Gain unlimited library access with 13 expert-curated books, video lectures, and digital notes for in-depth IELTS 
                preparation—learn anytime, anywhere!</p>
            </div>
            <div className="testimonial">
                <div className="cards"></div>
                <div className="btns">
                    <div className="left-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15.8334 10.0001H4.16675M4.16675 10.0001L10.0001 15.8334M4.16675 10.0001L10.0001 4.16675" stroke="#767676" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="right-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4.16675 10.0001H15.8334M15.8334 10.0001L10.0001 4.16675M15.8334 10.0001L10.0001 15.8334" stroke="#767676" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        {/* 6th div */}
        <div className="speaking-and-writing">
            <div className="heading-and-text">
                <h1>Speaking & Writing Assessment Sheets</h1>
                <p>Track your progress, predict your band score, and improve with expert feedback.</p>
            </div>
            <div className="cards">
                {speakingCrads.map((content)=>(
                    <div className="card" key={content.id}>
                        {/* <img src={}/> */}
                        <div className="heading-and-text">
                            <h2 className="heading">{content.heading}</h2>
                            <p className="text">{content.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* 7th div */}
        <div className="section7">
            <div className="content">
                <div className="heading-and-text">
                    <h1 className="heading">Experience Before You Commit – Attend a Free Demo Class!</h1>
                    <p className="text">Get a firsthand experience of our expert-led sessions before enrolling. Meet your trainers, explore our teaching methods, and see if EEC Global is the right fit—no obligation, no pressure!</p>
                </div>
                <button className="btn" type="button">Book Your Free Demo Now</button>
            </div>
        </div>

        {/* 8th div */}
        <div className="section8">
            <div className="heading-and-text">
                <h1 className="heading">Meet Our IELTS Achievers</h1>
                <p className="text">Join thousands of Band 7+ achievers with EEC Global’s expert training and proven strategies.</p>
            </div>
            <div className="images">
                <div className="imgs"></div>
                <div className="imgs"></div>
            </div>
        </div>
        
        {/* 9th div */}
        <div className="section9">
            <div className="heading-and-text">
                <h1 className="heading">Real Success Stories!</h1>
                <p className="text">See how EEC Global has helped students achieve their dream IELTS scores with expert training and personalized guidance.</p>
            </div>
            <div className="text-and-images">
                <div className="text-and-star">
                    <div className="star-and-p">
                        <div className="stars"></div>
                        <p>Band 8.0</p>
                    </div>
                    <p className="descr">EEC Global’s structured approach and expert coaching made all the difference! The personalized 1:1 speaking sessions and AI-powered mock tests helped me boost my confidence. I scored Band 8.0 on my first attempt!</p>
                </div>
                <div className="images">
                    {/* <img src={} />
                    <img src={} />
                    <img src={} /> */}
                </div>
                <div className="btns">
                    <div className="left-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15.8334 10.0001H4.16675M4.16675 10.0001L10.0001 15.8334M4.16675 10.0001L10.0001 4.16675" stroke="#767676" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="right-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4.16675 10.0001H15.8334M15.8334 10.0001L10.0001 4.16675M15.8334 10.0001L10.0001 15.8334" stroke="#767676" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        {/* section 10 */}
        <div className="section10">
            <div className="heading-and-text">
                <h1 className="heading">Stay Inspired – Follow Us on Instagram!</h1>
                <p className="text">Tag us @EECGlobal and share your #IELTSSuccessStory for a chance to be featured!</p>
            </div>
            <div className="images">
                {/* <img src={} className="img1"/>
                <img src={} className="img2"/>
                <img src={} className="img3"/>
                <img src={} className="img4"/> */}
            </div>
        </div>
    </div>
    );
}
export default Course;