//Navigation.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircleFill , JournalText} from 'react-bootstrap-icons';
import "../App.css"



const Navigation = () => {
const nav = useNavigate();
//route for home page
const gotoHome = ()=>{
	nav('/');
}

//route for add address page
const gotoAdd = ()=>{
	nav('/add');
}

return (

	<nav className='container d-flex flex-row m-3'>
		<h2 className=' nav p-2 m-1' onClick={gotoHome}><JournalText />Data Notes</h2>
        <h2 className=' nav p-2 m-1' onClick={gotoAdd}><PlusCircleFill />ADD User contact Deatail</h2>
	</nav>
);
};

export default Navigation;
