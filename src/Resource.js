import request from 'request-promise';
import _ from 'lodash';

class Resource {
  constructor({ id, secret, redirectUrl }) {
    this.clientId = id;
    this.clientSecret = secret;
    this.redirectUrl = redirectUrl;
    this.client = request.defaults({
      baseUrl: this.host,
      headers: { Accept: 'application/json' },
      resolveWithFullResponse: true,
    });
  }

  parseBodyResponse(response) {
    const contentType = _.get(response, ['headers', 'content-type']);
    if (contentType && contentType.match(/json/i)) {
      return JSON.parse(response.body);
    }
    return response.body;
  }

  async request(method, params) {
    try {
      const response = await this.client[method](params);
      return this.parseBodyResponse(response);
    } catch (error) {
      throw new Error(this.parseBodyResponse(error.response));
    }
  }
}

export default Resource;
