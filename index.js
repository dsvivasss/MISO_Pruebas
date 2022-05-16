const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');
const cypress = require('cypress')

const {
    viewportHeight,
    viewportWidth,
    browsers,
    options
} = config;

const functionalities = {
    pages: {
        name: 'page',
        parentPath: 'Page.feature',
        indexCases: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
    },
    posts: {
        name: 'post',
        parentPath: 'Post.feature',
        indexCases: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    }
}

async function executeTest() {
        if (browsers.length === 0) {
            return;
        }
        let resultInfo = {}
        let datetime = new Date().toISOString().replace(/:/g, ".");
        for (b of browsers) {
            if (!b in ["chromium", "webkit", "firefox"]) {
                return;
            }
            if (!fs.existsSync(`./results/${datetime}`)) {
                fs.mkdirSync(`./results/${datetime}`, {
                    recursive: true
                });
            }

            //Launch the current browser context
            // const browser = await playwright[b].launch({headless: true, viewport: {width:viewportWidth, height:viewportHeight}});
            // const context = await browser.newContext();
            // const page = await context.newPage(); 
            // await page.goto(config.url);
            // await page.screenshot({ path: `./results/${datetime}/before-${b}.png` });
            // await page.click('#generate');
            // await page.screenshot({ path: `./results/${datetime}/after-${b}.png` });
            // await browser.close();

            for (let functionality of Object.keys(functionalities)) {
                const {
                    name,
                    parentPath
                } = functionalities[functionality];

                for (let i of functionalities[functionality].indexCases) {
                    const data = await compareImages(
                        fs.readFileSync(`./cypress/screenshots_4-41-3/${parentPath}/${name}${i}.png`),
                        fs.readFileSync(`./cypress/screenshots/${parentPath}/${name}${i}.png`),
                        options
                    );
                    resultInfo[b] = {
                        isSameDimensions: data.isSameDimensions,
                        dimensionDifference: data.dimensionDifference,
                        rawMisMatchPercentage: data.rawMisMatchPercentage,
                        misMatchPercentage: data.misMatchPercentage,
                        diffBounds: data.diffBounds,
                        analysisTime: data.analysisTime
                    }
                    fs.writeFileSync(`./results/${datetime}/compare-${b}-${name}${i}.png`, data.getBuffer());

                }
            }

            // for (let i = 1; i < 15; i++) {
            //     const data = await compareImages(
            //         fs.readFileSync(`./cypress/screenshots_4-41-3/Page.feature/page${i}.png`),
            //         fs.readFileSync(`./cypress/screenshots/Page.feature/page${i}.png`),
            //         options
            //     );
            //     resultInfo[b] = {
            //         isSameDimensions: data.isSameDimensions,
            //         dimensionDifference: data.dimensionDifference,
            //         rawMisMatchPercentage: data.rawMisMatchPercentage,
            //         misMatchPercentage: data.misMatchPercentage,
            //         diffBounds: data.diffBounds,
            //         analysisTime: data.analysisTime
            //     }
            //     fs.writeFileSync(`./results/${datetime}/compare-${b}-page${i}.png`, data.getBuffer());

            // }

        }

        fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultInfo));
        fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);

        console.log('------------------------------------------------------------------------------------')
        console.log("Execution finished. Check the report under the results folder")
        return resultInfo;
    }
    (async () => console.log(await executeTest()))();

function browser(b, info) {
    let text = `
    <div class=" browser" id="test${b}">
    <div class=" btitle">
        <h2>Browser: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>`;

    for (let functionality of Object.keys(functionalities)) {
            const {
                name,
                parentPath
            } = functionalities[functionality];

            for (let i of functionalities[functionality].indexCases) {
                let content = `
                    <div class="imgline">
                        <div class="imgcontainer">
                            <span class="imgname">Reference ${name}${i}</span>
                            <img class="img2" src="../../cypress/screenshots_4-41-3/${parentPath}/${name}${i}.png" id="refImage" label="Reference">
                        </div>
                        <div class="imgcontainer">
                            <span class="imgname">Test ${name}${i}</span>
                            <img class="img2" src="../../cypress/screenshots/${parentPath}/${name}${i}.png" id="testImage" label="Test">
                        </div>
                        </div>
                        <div class="imgline">
                        <div class="imgcontainer">
                            <span class="imgname">Diff ${name}${i} </span>
                            <img class="imgfull" src="./compare-${b}-${name}${i}.png" id="diffImage" label="Diff">
                        </div>
                    </div>
                `;

                text += content;
            }
        }

        text += `</div>`;

        return text;
    }

    function createReport(datetime, resInfo) {
        return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${config.browsers.map(b=>browser(b, resInfo[b]))}
            </div>
        </body>
    </html>`
    }