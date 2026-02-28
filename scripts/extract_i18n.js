import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In order to not depend on TS compilation, we'll just parse the files as strings or we can use ts-node via npx
