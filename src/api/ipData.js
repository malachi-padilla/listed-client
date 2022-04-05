var axios = require('axios').default;

const corsProxy = 'https://shrouded-journey-58811.herokuapp.com/';

export const fetchIpData = (ip) => {
	return new Promise(async (resolve, reject) => {
		await axios.get(`${corsProxy}https://ipapi.co/${ip}/json/`).then(async (response) => {
			const {
				data: { city },
				data: { region_code },
			} = response;

			const returnObject = {
				city,
				region_code,
			};

			resolve(returnObject);
		});
	});
};
