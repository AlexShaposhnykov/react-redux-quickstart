import apiConfig from './apiConfig';
import apiFactory from './api';

export default apiFactory({
    apiEndpoint: apiConfig.apiEndpoint,
    apiKey: apiConfig.apiKey,
});
