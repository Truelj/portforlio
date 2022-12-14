//create request handlers
import { rest } from "msw";
import projects from './data/projects/projects.json';
import projectDetails from './data/projects/projectDetails.json';

export const handlers = [
	rest.get('/projects', (req, res, ctx) =>{
		
		let response = projects.projects;
		return res(
			ctx.status(200),
			ctx.json(response)
		);
	}),

	rest.get('/projects/:id', (req, res, ctx) =>{
		const {id} = req.params;
		let response = projectDetails[id];
		
		if(!response){
			return res(ctx.status(404));
		}else{
			return res(ctx.status(200), ctx.json(response));
		}
		
	})

	
]
