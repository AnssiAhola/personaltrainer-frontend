const BASE_URL = 'https://customerrest.herokuapp.com/api/';

const CustomersURL = `${BASE_URL}customers/`;
export const CustomersService = {
	GetAll: () => _fetch(CustomersURL, 'GET'),
	GetSelf: (customer) => _fetch(customer.links[0].href, 'GET'),
	GetTrainings: (customer) => _fetch(customer.links[2].href, 'GET'),
	Delete: (customer) => _fetch(customer.links[0].href, 'DELETE'),
	Add: (data) => _fetch(CustomersURL, 'POST', data),
	Update: (customer) => _fetch(customer.links[0].href, 'PUT', customer)
};

const TrainingsURL = `${BASE_URL}trainings/`;
export const TrainingsService = {
	GetAll: () => _fetch('https://customerrest.herokuapp.com/gettrainings', 'GET'),
	Add: (data) => _fetch(TrainingsURL, 'POST', data),
	Delete: (training) => _fetch(TrainingsURL + training.id, 'DELETE'),
	Update: (training) => _fetch(TrainingsURL + training.id, 'PUT', training)
};

const headers = { 'Content-type': 'application/json' };
const _fetch = async (url, method, data = undefined) => {
	const options = {
		method: method,
		headers,
		body: JSON.stringify(data)
	};
	console.log(url);
	return await fetch(url, options)
		.then((response) => response.json())
		.catch((error) => console.log(error));
};
