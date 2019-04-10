export default class ApiClient {
    constructor({ apiEndpoint = '', apiKey = '' }) {
        this.apiEndpoint = apiEndpoint;
        this.apiKey = apiKey;
    }

    get(url, payload = {}, params = {}) {
        return this.request({
            url,
            method: 'GET',
            body: payload,
            params,
        });
    }

    put(url, payload = {}) {
        return this.request({
            url,
            method: 'PUT',
            body: payload,
        });
    }

    post(url, payload = {}, params = {}) {
        return this.request({
            url,
            method: 'POST',
            body: payload,
            params,
        });
    }

    delete(url, params = {}) {
        return this.request({
            url,
            method: 'DELETE',
            params,
        });
    }

    async request({
        url = '/',
        method = 'GET',
        params,
    }) {
        const requestUrl = `${this.apiEndpoint}${url}`;

        const response = await fetch(requestUrl, { method, params });

        return response.json();
    }
}
