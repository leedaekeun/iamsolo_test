const fs = require('fs');
const https = require('https');

const url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzBlNDVmYmNlZDQzMjRjNmM4MzRjZTI1MjIyOTdkMjFkEgsSBxCtydbQ4hAYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDMzNTUwMjc0OTIzMjgyMzcyOQ&filename=&opi=89354086";

https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        fs.writeFileSync('C:\\Users\\sun_f\\.gemini\\antigravity\\brain\\b83c91e2-df7d-4ad5-b39c-43ba1407b337\\stitch_raw.html', data);
        console.log('Downloaded successfully');
    });
}).on('error', (err) => {
    console.error('Error:', err.message);
});
