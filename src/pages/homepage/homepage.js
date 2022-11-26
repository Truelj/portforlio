import React, { useEffect, useState } from "react";
import Logo from './logo.png';
import {getProjects} from '../../api/projectFinder/index.js';
import {Link} from 'react-router-dom';
export default function Homepage(){
	const [data, setData] = useState(null);
	
	useEffect(()=>{

		getProjects().then((projectsData)=>{
			console.log(projectsData);
			setData((prev)=>(projectsData))
		})
		
	},[]);
	
  return (
    <div>
			<div className='nav-log'>
				<img src={Logo}></img>
			</div>
			<div className='grid'>
				{data === null ? "loading projects" : 
					data.map((project)=>(
						<Link
							key={project.id}>
							{project.name}
						</Link>
				))}
			</div>
		</div>
		
  )
}
