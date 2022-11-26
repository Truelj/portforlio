export const getProjects = async ()=>{
	//send a request to the mocking api
	const requestUrl = '/projects';
	const response = await fetch(requestUrl, {
		method: 'GET'
	})
	
	const projectsData = await response.json();
	console.log(projectsData);
	return projectsData;
}