
import image from './dog.jpg';
import image1 from './dog1.jpg';
import image2 from './dog2.jpg';
import './About.css'
import Navbar from '../components/NavLog';
function AAbout() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="remaining">
      <h1>About Us</h1>
      <p>
        PetConnect is a passionate group of individuals dedicated to improving the lives of stray animals in our community.
        <br />
        We believe every pet deserves a loving home, and we work tirelessly to rescue, rehabilitate, and rehome strays in need.
        <br />
        Through our website, adoption events, and accessories management, we strive to connect wonderful pets with caring families.
      </p>
      <div className="images">
      <img src={image} style={{borderRadius:'12px'}} alt='img1'/> 
      <img src={image1} style={{borderRadius:'12px'}}  alt='img1'/> 
      < img style={{width:'20%', height:'20%', borderRadius:'12px'}}img src={image2} alt='img1'/>
      </div>
      </div>
    </div>
  );
}

export default AAbout;