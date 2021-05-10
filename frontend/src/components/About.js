import React from 'react'
import TedAbout from '../images/TedAbout.png'
import Typical from 'react-typical'

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-page'>
                    <img className='about-img' src={TedAbout} alt='TedAbout' />
                        <h2 className='typical-start'>
                            <Typical 
                                loop={Infinity}
                                wrapper="em"
                                steps={[
                                    'Dedicated',
                                    1000,
                                    'Reliable',
                                    1000,
                                    'Outgoing',
                                    1000,
                                    'Consistent',
                                    1000,
                                    'Team Player',
                                    1000
                                ]}
                            />
                        </h2>
                    <p className='about-body'>
                        These are what come to mind when I think about who I am. Hi! My name is Ted Neben and I am a Software Engineer looking to make an impact 
                        in my field and make a name for myself. My drive is met with my passion for people and only limited by my work ethic, that knows no bounds. Connecting with others and finding 
                        purpose among each other lifts me to higher standards that, in the long run, lead to better endeavours for everyone around. 
                        My goal and objective with every new opportunity is to connect, create, and drive forward any and all plans to ensure growth 
                        for everyone. Having owned and operated 2 businesses, as well as having been a Freelance Photographer and Videographer, has given 
                        me experience that most miss out on. Having leadership qualities not only allows me to see from the helm, but it aso allows me to see 
                        where things can be improved upon as well. However, every great mind starts out by being humble, and there is nothing short of that 
                        here. I want to be able to learn from my mistakes, my success, and my thought process to give my work the best chance of being at its 
                        top performance. I have led several people, in-person and online, to meet day to day operations while continuing to grow as an individual.
                        Ultimately, I am human. Someone who understands that mistakes exist in this world, but someone who also 
                        understands that greatness is sought after the first fall. I enjoy meeting challenges head on and not only learning how to approach that 
                        particular case, but how to learn from it and help approach everything else I come across as well. Putting one foot in front of the other 
                        is my approach to making a mark on this world.
                    </p>
            </div>
                <div className='break-line'/>
        </div>
    )
}

export default About;