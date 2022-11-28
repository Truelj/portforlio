export const getProjects = async ()=>{
	//send a request to the mocking api
	const requestUrl = '/projects';
	const response = await fetch(requestUrl, {
		method: 'GET'
	})
	
	const projectsData = await response.json();
	return projectsData;
}

export const getProjectDetails = async (id)=>{
	//send a request to the mocking api
	const requestUrl = `/projects/${id}`;
	const response = await fetch(requestUrl, {
		method: 'GET'
	})
	
	const projectDetails = await response.json();
	return projectDetails;
}