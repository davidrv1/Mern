import {Link} from 'react-router-dom';

const About = (props) => {
    return(
    <div>
        <h1 style={{color: "blue"}}>
        About Component
        </h1>
        {/* w Link, as shown below, we can create link which can help us switch between components */}
        {/* must also import Link as above. */}
        <Link to={"/Home"}>Go To Home</Link>
    </div>
    )
}

export default About;