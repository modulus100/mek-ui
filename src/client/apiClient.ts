// apiClient.ts

import type { paths } from './schema';
import createClient from "openapi-fetch";


const apiClient = createClient<paths>({ baseUrl: "http://localhost:8080/api/v1" });
export default apiClient;
