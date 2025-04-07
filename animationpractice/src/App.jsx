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
    <div style={{display:"flex",
    flexDirection:"column",
    alignItems: "center",
    marginTop: "30px"
    }}>
      <motion.div
        style={{
          width: "500px",
          height: "500px",
          background: bgColor,
          position: "fixed",
          zIndex: 0,
          borderRadius: "20px"
        }}
      >

      </motion.div>
      <motion.div
        style={{
          position: "sticky",
          top: "70px",
          scale: scale1,
          width: "400px",
          height: "400px",
          backgroundColor: "#DEAA79",
          backdropFilter: "blur(100px)",
          zIndex:1,
          marginTop: "560px",
          borderRadius: "20px"
        }}
      />
      <motion.div
        style={{
          position: "sticky",
          top: "70px",
          scale: scale2,
          width: "400px",
          height: "400px",
          backgroundColor: "#FFE6A9",
          backdropFilter: "blur(100px)",
          zIndex:1,
          borderRadius: "20px",
        }}
      />
      <motion.div
        style={{
          position: "sticky",
          top: "100px",
          width: "400px",
          height: "400px",
          backgroundColor: "#B1C29E",
          zIndex:1,
          marginBottom: "70px",
          borderRadius: "20px",
        }}
      />
    </div>
  
  );
}

export default App;
