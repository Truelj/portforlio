import React, { useEffect, useState } from "react";
import Logo from './logo.png';
export default function Homepage(){
	const [data, setData] = useState(null);
	
	useEffect(()=>{
		async function getProjectsData(){
			const projectsData = await getProjects();
			setData(projectsData);
		}
		getProjectsData()
			.then((projectsData)=>{console.log(projectsData)});
	});
	
  return (
    <div>
			<div classname='nav-log'>
				<img src={Logo}></img>
			</div>
			<div className='grid'>
				{projectsData.map((project)=>(
					<Link>
						//load project details
					</Link>
				))}
			</div>
		</div>
		
  )
}
