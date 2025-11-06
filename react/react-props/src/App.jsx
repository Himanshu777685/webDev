import React from 'react'
import Card from './components/Card.jsx'

const App = () => {


const jobOpenings = [
  {
    logo: "https://pngdownload.io/wp-content/uploads/2023/12/Apple-Logo-Iconic-Tech-Brand-Symbol-PNG-Transparent-Representation-of-Innovation-and-Design-jpg.webp",
    company: "Apple Inc.",
    datePosted: "5 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120,000 / year",
    location: "Cupertino, USA",
  },
  {
    logo: "https://toppng.com/uploads/preview/microsoft-logo-png-hd-11660471230b6nd5n6huh.png",
    company: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$110,000 / year",
    location: "Redmond, USA",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJg75LWB1zIJt1VTZO7O68yKciaDSkk3KMdw&s",
    company: "Google",
    datePosted: "1 week ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$105,000 / year",
    location: "Mountain View, USA",
  },
  {
    logo: "https://icon2.cleanpng.com/lnd/20241121/bj/96a913c68a8055c91e7626887336cc.webp",
    company: "Tesla",
    datePosted: "3 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130,000 / year",
    location: "Austin, USA",
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png",
    company: "LinkedIn",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$95,000 / year",
    location: "Bangalore, India",
  },
  {
    logo: "https://www.citypng.com/public/uploads/preview/transparent-hd-paypal-logo-701751694777788ilpzr3lary.png",
    company: "PayPal",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$100,000 / year",
    location: "San Jose, USA",
  },
  {
    logo: "https://w7.pngwing.com/pngs/576/126/png-transparent-logo-brand-adobe-certified-expert-adobe-systems-ibm-watson-logo-angle-text-logo.png",
    company: "Adobe",
    datePosted: "6 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$115,000 / year",
    location: "San Francisco, USA",
  },
  {
    logo: "https://static.dezeen.com/uploads/2021/11/meta-facebook-rebranding-name-news_dezeen_2364_col_sq.jpg",
    company: "Meta",
    datePosted: "1 week ago",
    post: "AR/VR Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$125,000 / year",
    location: "Menlo Park, USA",
  },
  {
    logo: "https://static.vecteezy.com/system/resources/previews/006/642/223/non_2x/spotify-icon-spotify-logo-spotify-symbol-logo-set-free-vector.jpg",
    company: "Spotify",
    datePosted: "4 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$105,000 / year",
    location: "Stockholm, Sweden",
  },
  {
    logo: "https://pngdownloads.wordpress.com/wp-content/uploads/2023/08/x-logo.jpg",
    company: "X (Twitter)",
    datePosted: "3 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$90,000 / year",
    location: "New York, USA",
  },
];





  return (
   
    <div className="cards">

      {jobOpenings.map((ele,idx)=>{
        return <div key={idx}>
          <Card  logo={ele.logo} name={ele.company} date={ele.datePosted} post={ele.post} tag1={ele.tag1} tag2={ele.tag2} pay={ele.pay} loc={ele.location} />
        </div>

      })}
      
    </div>
  
  )
}

export default App