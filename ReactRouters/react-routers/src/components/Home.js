import {Link} from 'react-router-dom';

const Home = (props) => {
    return(
    <div>
        <h1 style={{color: "red"}}>
        Home Component
        </h1>
        {/* w Link, as shown below, we can create link which can help us switch between components */}
        {/* must also import Link as above. */}
        <Link to={"/about"}>Go To About</Link><br/>
        <Link to={"/word/:color"}>Word</Link><br/>
    </div>
    )
}

export default Home;