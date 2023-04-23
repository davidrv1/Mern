import React, {useState, useEffect} from 'react';
import CreateShoe from '../components/CreateShoe';
import Display from '../components/Display';
const Main = (props) => {
    const [allShoes, setAllShoes] = useState([])
    return(
        <div>
            <CreateShoe allShoes={allShoes} setAllShoes={setAllShoes}/>
            <Display allShoes={allShoes} setAllShoes={setAllShoes} />
        </div>
    )
}

export default Main;