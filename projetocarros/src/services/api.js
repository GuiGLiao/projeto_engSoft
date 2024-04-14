import axios from 'axios';

export default class Api {
    constructor() {
        this.url = 'https://api-wx26qz6ysq-uc.a.run.app';
        this.api = axios.create({
            baseURL: this.url
        });
    }
    async getFormularios() {
        const response = await this.api.get('/formulario');
        return response.data;
    }
    postFormulario(data) {
        return this.api.post('/formulario', data);
    }
}

