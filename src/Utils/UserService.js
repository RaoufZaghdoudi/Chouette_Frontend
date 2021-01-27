import Configuration from './configuration';
import axios from 'axios';

class UserService {
    constructor() {
        this.config = new Configuration();
    }

    async getUserByIdentification(identification) {
        const access_token = localStorage.getItem('access_token')
        if (access_token) {
            const url = this.config.API_URL+'api/users/'+identification;
            var headers = {
                headers : {
                    'Authorization' : 'Bearer ' + access_token 
                }
            }
            return axios.get(url,headers)
            .then(res => {
                return res           
            })
        }   
        else {
            return null
        }     
    }
}

export default UserService;