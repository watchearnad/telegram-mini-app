@@ .. @@
-const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
+import { config } from '../config/env';
+
+const API_BASE_URL = config.api.baseUrl;