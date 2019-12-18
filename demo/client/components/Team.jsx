import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import SingleMemberCard from './SingleMemberCard'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";



const teamMembers = [
  {
    firstName: 'Bradley',
    lastName: 'Woolf',
    title: 'Software Engineer',
    shortBio: 'Here is some short bio about myself',
    email: '',
    gitHubLink: 'https://github.com/bmwoolf',
    linkedInLink: 'https://www.linkedin.com/in/bradley-woolf/',
    avatar: '/assets/bradley_woolf.jpg'
  },
  {
    firstName: 'Evan',
    lastName: 'King',
    title: 'Software Engineer',
    shortBio: 'Here is some short bio about myself',
    email: '',
    gitHubLink: 'https://github.com/evank21',
    linkedInLink: 'https://www.linkedin.com/in/evanking11/',
    avatar: '/assets/evan_king.jpg',
  },
  {
    firstName: 'Joshua',
    lastName: 'Manto',
    title: 'Software Engineer',
    shortBio: 'Here is some short bio about myself',
    email: '',
    gitHubLink: 'https://github.com/JoshuaManto',
    linkedInLink: 'https://www.linkedin.com/in/joshuamanto/',
    avatar: '/assets/joshua_manto.jpg',
  },
  {
    firstName: 'Kiril',
    lastName: 'Christov',
    title: 'Software Engineer',
    shortBio: 'Here is some short bio about myself',
    email: '',
    gitHubLink: 'https://github.com/kirilchristov',
    linkedInLink: 'https://www.linkedin.com/in/kchristov/',
    avatar: '/assets/kiril_christov.jpg',
  },
]



function Team() {
  const [firstName, lastName, title, gitHubLink, linkedInLink, avatar] = useState([])
  
  return (
    <div id="TeamBox">
      <h1>Team</h1>
      <ScrollAnimation animateIn='fadeIn'>
        <Grid
          container
          spacing={4}
          style={{padding: '24px'}}
          >
          {teamMembers.map( member => 
              <Grid
              item
              xs={12} sm={6} md={3} lg={3} xl={3}
              >
                <SingleMemberCard
                key={member.firstName} 
                firstName={member.firstName}
                lastName={member.lastName}
                email={member.email}
                shortBio={member.shortBio}
                avatar={member.avatar}
                gitHubLink={member.gitHubLink}
                linkedInLink={member.linkedInLink}
                />
              </Grid>
            )} 
      </Grid>
     </ScrollAnimation>
    </div>
  ) 
}
export default Team;