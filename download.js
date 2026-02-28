const fs = require('fs');
const https = require('https');

function download(url, dest) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode !== 200 && res.statusCode !== 302 && res.statusCode !== 301 && res.statusCode !== 303) {
                return reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
            }
            if (res.headers.location) {
                console.log(`Redirecting to: ${res.headers.location}`);
                return download(res.headers.location, dest).then(resolve).catch(reject);
            }

            const file = fs.createWriteStream(dest);
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

async function main() {
    const screens = {
        'src/stitch_home.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ6Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpZCiVodG1sXzdhZjI3YTM4ZTEyMzQ3NDg5MGNiNThmMzA5Mzk1YjdiEgsSBxCtydbQ4hAYAZIBIgoKcHJvamVjdF9pZBIUQhI4MDQ1NDAwNjM3OTA1NTU2MjM&filename=&opi=96797242',
        'src/stitch_quiz.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ6Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpZCiVodG1sXzMxMjJlM2I3OWQ4OTRkYzJiZDhmOTVlNDc4ZDhkYjA4EgsSBxCtydbQ4hAYAZIBIgoKcHJvamVjdF9pZBIUQhI4MDQ1NDAwNjM3OTA1NTU2MjM&filename=&opi=96797242',
        'src/stitch_result.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ6Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpZCiVodG1sXzkwZTlmYTEyMzdjMjQ3MmFhMjk0ZGJhN2JiZjEwNzYzEgsSBxCtydbQ4hAYAZIBIgoKcHJvamVjdF9pZBIUQhI4MDQ1NDAwNjM3OTA1NTU2MjM&filename=&opi=96797242'
    };
    for (const [dest, url] of Object.entries(screens)) {
        console.log(`Downloading ${dest}...`);
        await download(url, dest);
        console.log(`Downloaded ${dest}`);
    }
}
main().catch(console.error);
