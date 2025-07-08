import Detroix from '../../assets/detroix.png';

function Header() {
  return (
      <header role="banner" className="row">
          <SmallNav/>
          <LargeNav/>
      </header>
  );
}

function SmallNav(){
  return(
    <nav className="row smallnav">
          <div className="col-2 websitebox">
            <a className="website" href="https://www.Demolink.org">www.DEMOLINK.ORG</a>
          </div>
          <div className="col-3 guideBox">
              <div className="guide"><a className="navitem" href="#">SUPPORT|</a></div>
              <div className="guide"><a className="navitem" href="#">FAQS|</a></div>
              <div className="guide"><a className="navitem" href="#">SITEMAP|</a></div>
              <div className="guide"><a className="navitem" href="#">HELP|</a></div>
          </div>
    </nav>
  )
}
function LargeNav(){
  return(
      <nav className="lrgnav row">
          <div className="col-3 detroix">
            <img src={Detroix} className="img-fluid" alt="the word detroix"/>
          </div>
          <ul className="col-6 libox">
            <li className="li"><a href="#">Home</a></li>
            <li className="li"><a href="#">About</a></li>
            <li className="li"><a href="#">Services</a></li>
            <li className="li"><a href="#">FAQS</a></li>
            <li className="li"><a href="#">Contact</a></li>
          </ul>
        </nav>
  )    
}
export default Header