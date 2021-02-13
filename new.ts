import {generateFromUrl} from "./render.utils.ts";

const { args } = Deno;

interface GithubContentResult {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string;
    git_url: string;
    download_url: string;
    type: 'dir' | 'file';
}


const BASE_URL = "https://api.github.com/repos/alosaur/cli/contents/";
const TEMPLATES = new Map([
  ["basic", "templates/apps/basic"],
]);

/**
 * Generate blank page
 */
export async function newBlank() {
    const blank = args[1];
    const name = args[2];

    if (!blank) {
        throw new Error("Template alias not found");
    }

    if (!name) {
        throw new Error(`name argument not found`);
    }

    const baseDir = TEMPLATES.get(blank);

    if (!baseDir) {
        throw new Error(`Template ${blank} not found`);
    }

    await generateGithubContentsOnDirs(baseDir, "", {name})

}

/**
 * Generate files from github api contents
 */
async function generateGithubContentsOnDirs(baseDir: string, resultDir: string, config: { name: string }) {
    const results: GithubContentResult[] = await fetch(`${BASE_URL}${resultDir}`).then(async (r) =>
        JSON.parse(await r.text())
    );

    if(!Array.isArray(results)) {
        throw new Error("Not result in " + BASE_URL);
    }

    for (let i = 0; i < results.length; i++) {
        const result = results[i];

        if(result.type === 'file') {
            const outputFileName = result.path.replace(baseDir, '');
            await generateFromUrl(result.download_url, outputFileName,  config.name)
        } else if(result.type === 'dir') {
            await generateGithubContentsOnDirs(baseDir, result.path, config);
        }
    }


}
