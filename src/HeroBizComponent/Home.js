import React,{useState,useEffect} from 'react'
import {BsPlay,BsBoundingBoxCircles,BsFillCalendarWeekFill,BsBroadcast} from "react-icons/bs"
import {FiActivity} from "react-icons/fi"
import {AboutData} from "./HerobizData"

function Home() {
    const [aboutUs, setAboutUs] = useState(0)
    //const AboutLength = AboutData.length
    
    const AboutUs = (num)=>{
        setAboutUs(aboutUs !== num ? num : aboutUs )
    }
    useEffect(()=>{
        setAboutUs(0)
    },[])
  return (
    <section className="home-container">
        <div className="hero-container">
            <img src="../../hero-carousel-3.svg" alt=" " />
            <div className='hero-item'>
                <h2>Welcome To HeroBiz</h2>
                <p>This a beautiful hero page that looks absolutely responsive and user friendly</p>
                <button>Get Started</button>
                <button>
                <div className="video-thumbnail">
                    <div className="play-btn">
                        <BsPlay className="videoIcon "/>
                        Watch Video
                    </div>
                </div> 
                </button>
            </div> 
        </div>
        <div className=" hero-card">
            <div className="card-body ">
                <FiActivity className="hero-icon"/>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-body ">
                <BsBoundingBoxCircles className="hero-icon"/>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-body ">
                <BsFillCalendarWeekFill className="hero-icon"/>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-body ">
                <BsBroadcast className="hero-icon"/>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
        <div className="about-us">
            <h1>About Us</h1>A
            <p>
                This is fantastic and elegant about page section. 
                This is fantastic and elegant about page section
                This is fantastic and elegant about page section
                This is fantastic and elegant about page section
                This is fantastic and elegant about page section
                This is fantastic and elegant about page section
            </p>
            <div className='about-item'>
                <img src="../../assets/img/about.jpg" alt="" className='aboutImg'/>
                <div className='about-container'>
                    <h2>lorem lorem lorem20</h2>
                    <div className="about-links">   
                        <button onClick={()=>AboutUs(0)}>Link 1</button>
                        <button onClick={()=>AboutUs(1)}>Link 2</button>
                        <button onClick={()=>AboutUs(2)}>Link 3</button>
                    </div>
                    <div className='about-wrapper'>
                        {AboutData.map((data,id)=>{
                            return(
                                <div className={id === aboutUs ? "about-info current" : "about-info"} key={id}>
                                    {id === aboutUs && (
                                        <div className='content'>
                                            <p>{data.para}</p>
                                            <div>{data.content}</div>
                                        </div>
                                        )
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>                
            </div>
        </div>
    </section>
    

  )
}

export default Home