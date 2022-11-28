import {React, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {getProjectDetails} from '../api/projectFinder/index.js'

export default function ProjectDetail(){
		const {id} = useParams();
		const [data, setData] = useState(null);
		
		useEffect(()=>{
			getProjectDetails(id)
				.then((projectDetails)=>(setData((prev)=>(projectDetails))))
				.catch((err)=>(console.log(err)));
		}, [id]);

    return (
			!data? <div>loading...</div> : 
			<div className="project-details">
				<div className="banner">{data.name} </div>
				<div className="project-video-cover">
						<img src={data.videoCover}></img>
				</div>
				<div className="project-links">
					<p className="link-description">To Watch The Project Demo Video</p>
					<a href={data.videoUrl}>click here</a>
					<p className="link-description">To Visit The Github Repository</p>
					<a href={data.githubUrl}>click here</a>
				</div>
				<div className="project-code-snippets">
					<h2>CODE SNIPPETS</h2>
					{data.codeSnippets.map((snippet)=>(<article className="single-snippet">
							<p className="snippet-description">{snippet.description}</p>
							<img className="snippet-image" src={snippet.payload}></img>
						</article>)
						
					)}
				</div>
			</div>
		)

				
    
}