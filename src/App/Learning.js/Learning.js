// import logo from './logo.svg';
import './Learning.css';
import Header from "./Header";
import Card from "./blogCard";
import blog from "./blogs";
import Head from './BountyDesc/header'
import FooterSection from '../HomePage/FooterSection/footer'
import Navbar from '../Components/Navbar2';
function App() {
    return (
      <div>
      <Navbar/>
      <Head />
      
      <div className='band'>
        {blog.map((blog) => (
          <Card
          // src={blog.image}
          heading={blog.heading}
          deadline={blog.deadline}
          status={blog.status}
          skill1={blog.skill1}
          skill2={blog.skill2}
          inr={blog.inr}
          href={blog.href}
          />
        ))}
      </div>
      <FooterSection/>
      </div>
  );

}

export default App;
