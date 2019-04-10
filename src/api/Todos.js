import Base from './Base';

export default class TestAPI extends Base {
    getJSON = () => this.apiClient.get('albums')
}
