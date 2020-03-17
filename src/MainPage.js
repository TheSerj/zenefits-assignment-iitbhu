import React, {useEffect, useState} from 'react';
import axios from 'axios';

import HirarchyChart from './HirarchyChart.js';
import Lander from './Lander.js';

const MainPage = ()=>
{
    const [hirarchy, setHirarchy] = useState([]);

    useEffect(()=>{
        const fetchPosts = async () => {

        const peopleData = await axios.get("https://cors-enabled-zenefits.herokuapp.com/people");
        const arrayOfData = peopleData.data.data.data;
        arrayOfData.map(people=> people.status==='active'?setHirarchy(hirarchy=>
            
            [...hirarchy, [people.id, people.manager.url ===null? '': people.manager.url.slice(people.manager.url.length-7), '']]):null);
        }

        
        fetchPosts();
        
    },[]);

    
    return(
        
        <React.Fragment>
            <Lander />
            <br /><br /> <br /> <br />
            <HirarchyChart hirarchy={hirarchy} />
        </React.Fragment>
    )
}

export default MainPage;