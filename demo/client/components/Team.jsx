import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import SingleMemberCard from './SingleMemberCard'


const teamMembers = [
  {
    firstName: 'Bradley',
    lastName: 'Woolf',
    title: 'Software Engineer',
    shortBio: 'Here is some short bio about myself',
    email: '',
    gitHubLink: '',
    linkedInLink: 'https://www.linkedin.com/in/bradley-woolf/',
    avatar: '/assets/logo.png'
  },
  {
    firstName: 'Evan',
    lastName: 'King',
    title: 'Software Engineer',
    shortBio: 'Here is some short bio about myself',
    email: '',
    gitHubLink: '',
    linkedInLink: '',
    avatar: '/assets/logo.png',
  },
  {
    firstName: 'Joshua',
    lastName: 'Manto',
    title: 'Software Engineer',
    shortBio: 'Here is some short bio about myself',
    email: '',
    gitHubLink: '',
    linkedInLink: '',
    avatar: '/assets/logo.png',
  },
  {
    firstName: 'Kiril',
    lastName: 'Christov',
    title: 'Software Engineer',
    shortBio: 'Here is some short bio about myself',
    email: '',
    gitHubLink: '',
    linkedInLink: '',
    avatar: '/assets/logo.png',
  },
]



function Team() {
  useEffect(() => console.log("This is the users array", teamMembers))

  const [firstName, lastName, title, gitHubLink, linkedInLink, avatar] = useState([])
  
  return (
    <div id="TeamBox">
      <h1>Team</h1>
      <Grid
     container
     spacing={4}
     style={{padding: '24px'}}
     >
     {teamMembers.map( member => 
          <Grid
          item
          //number of ROWS we want depending on the size
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
    </div>
  ) 
}
export default Team;