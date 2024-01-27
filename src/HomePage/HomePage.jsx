import NavBar from '../NavBar' 


export default function HomePage(){


  return(
    <div className="Wrapper-HomePage">
    <NavBar />
    <div className="Intro-Group">
    <div className="Wrapper-Title">
      <h1 className="Home-Title">Samdn</h1>
      <h4>Sam's version of MDN</h4>
    </div>
    <p id="Intro"><i>Information overload???</i> &nbsp; Tired of running around in circles? &nbsp; Enjoy learning within a context?<br/> 
        Well you're in luck, I made / make notes as I learn and they're going to be up here for free
    </p>
    </div>
    </div>
  )
}