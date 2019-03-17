import axios from 'axios';
import { serverBaseUrl } from '../config';

class V1 {
  constructor() {
    this.baseURL = serverBaseUrl;
    this.noAuthReq = null;
  }

  get noAuth() {
    if (!this.noAuthReq) {
      this.noAuthReq = axios.create({ baseURL: `${this.baseURL}/api` });
    }
    return this.noAuthReq;
  }
}

export default V1;
