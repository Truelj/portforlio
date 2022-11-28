import React, { useEffect, useState } from "react";
import Logo from './logo.png';
import {getProjects} from '../../api/projectFinder/index.js';
import {Link} from 'react-router-dom';
import defaultProjectImage from './default.png';

export default function Homepage(){
	const [data, setData] = useState(null);
	
	useEffect(()=>{

		getProjects().then((projectsData)=>{
			console.log(projectsData);
			setData((prev)=>(projectsData))
		})
		
	},[]);
	
	if (!data) {
		return <h2>Loading</h2>
	}

  return (
    <div className="homepage">
			<div className="heading-section">
				<img src={Logo}></img>
			</div>
			<div className="grid">
				{data.map((project)=>(
						<article>
							<div className="project-image-container">
								<img 
									className="project-image"
									src={project["url"] || defaultProjectImage}
									alt='project picture' />
							</div>
							<div className="project-overview-container">
								<div className="overview" id="1">
									<h3>Project Name</h3>
									<p>{project["name"]} </p>
								</div>
								<div className="overview" id="2">
									<h3>Programmming Language</h3>
									<p>{project["programming_language"]} </p>
								</div>
								<div className="overview" id="3">
									<h3>Library/Framework</h3>
									<p>{project["Library/Framework"]} </p>
								</div>
								<div className="overview" id="4">
									<h3>Feature</h3>
									<p>{project["Feature"]} </p>
								</div>
								<p className="read-more">
									<Link
									key={project.id}
									to={`/projects/${project.id}`}
									>Read More
									</Link>
								</p>
							</div>
						</article>

				))}
			</div>
		</div>
		
  )
}
