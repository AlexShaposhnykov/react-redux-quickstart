import ApiClient from './ApiClient';
import TodosAPI from './Todos';

export default function ({ apiEndpoint = '', apiKey = '' }) {
    if (!apiEndpoint) {
        throw new Error('[API_FACTORY]: apiEndpoint is required');
    }

    const apiClient = new ApiClient({ apiEndpoint, apiKey });

    return {
        apiClient,
        test: new TodosAPI({ apiClient }),
    };
}
