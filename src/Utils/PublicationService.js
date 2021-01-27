import Configuration from './configuration';
import axios from 'axios';

class PublicationService {
    constructor() {
        this.config = new Configuration();
    }

    async getPublications() {
        const access_token = localStorage.getItem('access_token')
        if (access_token) {
            const url = this.config.API_URL+'api/publications';
            var headers = {
                headers : {
                    'Authorization' : 'Bearer ' + access_token 
                }
            }
            return axios.get(url,headers)
            .then(res => {
                return res.data.Publications           
            })
        }   
        else {
            return null
        }     
    }
}

export default PublicationService;