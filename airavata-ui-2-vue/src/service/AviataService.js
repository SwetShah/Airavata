import axios from "axios";

const URL = 'http://localhost:9080/aviata/team';

class AviataService {
  getTeamDetails(){
    return axios.get(URL);
}
}

export default new AviataService();