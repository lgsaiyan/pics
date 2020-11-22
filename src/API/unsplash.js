import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID lr8py2EJ2gbRRinwsQ2n5rcnWzeQjTh7Z43Femjox-k' 
    }

});