import  ManImage from "../../assets/detroixtemplate.png"


function Main(){
  return(
    <Main role="main" className="row">
        <HeroImage/>
    </Main>
  )
}
function HeroImage(){
  return(
    <div className="col-12">
      <img
        src={ManImage}
        className="img-fluid"
        alt="Professional man standing confidently in a modern office environment"
      />
    </div>
  )
}

export default Main