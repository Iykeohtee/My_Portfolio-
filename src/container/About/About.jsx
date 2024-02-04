import React from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { images } from '../../constants'
import { urlFor, client } from '../../client' 

const About = () => {

  // const abouts = [
  //   { title: "Frontend", description: "I am a good frontend developer", imgURL: images.about01},
  //   { title: "ReactJS", description: "Proficient in the popular Javascript framewrok", imgURL: images.react},
  //   { title: "Responsive designs", description: "Making your site look good in all screen sizes", imgURL: images.about03},
  //   { title: "UI/UX", description: "Creating visually appealing designs", imgURL: images.figma},
  // ]
 
  const [ abouts, setAbouts] = useState([])  

  useEffect(() => {
     const query = '*[_type == "abo"]'        

     client.fetch(query)
      .then((data) => setAbouts(data)) 
      console.log(abouts); 
  }, [])

  return (
    <>
     <h2 className='head-text'>
      I know That 
      <span> Good Dev.</span> 
      <br />
      means  
      <span> Good Business</span> 
     </h2> 

     <div className='app__profiles'>
       { abouts.map((about, index) => (
        <motion.div
         whileInView={{ opacity: 1 }}
         whileHover={{ scale: 1.1 }}
         transition={{ duration: 0.5, type: 'tween'}}
         className='app__profile-item'
         key={about.title + index }
        >
         <img src={about.imgURL} alt={about.title} />
         <h2 className='bold-text' style={{ marginTop:20}}>{about.title}</h2>
         <p className='p-text' style={{ marginTop:10}}>{about.description}</p> 
        </motion.div>
       ))}
     </div> 
    </>
  )
}

export default About
