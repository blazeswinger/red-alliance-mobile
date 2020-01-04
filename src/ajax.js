const apiHost = 'https://api.myjson.com/bins/97ves'

export default {
    async fetchMatchSchedule() {
        try {
            let response = await fetch(apiHost + '/appBuilding/team-2022/competitions/');
            let responseJson = await response.json(response);
            console.log(responseJson);
            return responseJson;

        } catch(error) {
            console.error(error);
        }
    }
};