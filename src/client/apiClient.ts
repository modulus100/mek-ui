// apiClient.ts

import { paths } from './types';
import createClient from "openapi-fetch";


const client = createClient<paths>({ baseUrl: "http://localhost:8080/" });

export default client;
