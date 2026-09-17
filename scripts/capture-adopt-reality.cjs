const puppeteer = require("/Users/vikram/.npm/_npx/0f94ee7615faf582/node_modules/puppeteer-core");
const { spawn } = require("child_process");
const path = require("path");

const ARTIFACTS_DIR = "/Users/vikram/.gemini/antigravity-ide/brain/81032143-b662-4f1a-9ed7-04d443a40ec7";

async function main() {
  const preview = spawn("npx", ["vite", "preview", "--port", "4173"], {
    cwd: path.resolve(__dirname, ".."),
    stdio: "inherit"
  });

  await new Promise(r => setTimeout(r, 2000));

  try {
    const browser = await puppeteer.launch({
      executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    const page = await browser.newPage();

    const viewports = [
      { name: "1680-light", width: 1680, height: 1050, theme: "light" },
      { name: "1680-dark", width: 1680, height: 1050, theme: "dark" },
      { name: "1440-light", width: 1440, height: 900, theme: "light" },
      { name: "1440-dark", width: 1440, height: 900, theme: "dark" },
      { name: "1280-light", width: 1280, height: 800, theme: "light" },
      { name: "1024-light", width: 1024, height: 768, theme: "light" },
      { name: "768-light", width: 768, height: 1024, theme: "light" },
      { name: "390-light", width: 390, height: 844, theme: "light", isMobile: true },
      { name: "390-dark", width: 390, height: 844, theme: "dark", isMobile: true },
      { name: "360-light", width: 360, height: 800, theme: "light", isMobile: true },
    ];

    for (const vp of viewports) {
      await page.setViewport({
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 2,
        isMobile: !!vp.isMobile
      });

      await page.goto(`http://localhost:4173/adopt-landing?theme=${vp.theme}`, {
        waitUntil: "networkidle0"
      });

      // Temporarily hide fixed/sticky navigation bar during element screenshot
      await page.evaluate(() => {
        const nav = document.querySelector("nav");
        if (nav) nav.style.display = "none";
        const el = document.querySelector("#reality-of-adoption");
        if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
      });

      await new Promise(r => setTimeout(r, 400));

      const sectionEl = await page.$("#reality-of-adoption");
      if (sectionEl) {
        await sectionEl.screenshot({
          path: `${ARTIFACTS_DIR}/adopt-reality-${vp.name}.png`
        });
        console.log(`Captured adopt-reality-${vp.name}.png`);
      }
    }

    // Context transition screenshot
    await page.setViewport({ width: 1440, height: 2200, deviceScaleFactor: 2 });
    await page.goto("http://localhost:4173/adopt-landing?theme=light", { waitUntil: "networkidle0" });
    await page.evaluate(() => {
      const nav = document.querySelector("nav");
      if (nav) nav.style.display = "none";
      const el = document.querySelector("#reality-of-adoption");
      if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
    });
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({
      path: `${ARTIFACTS_DIR}/adopt-context-light.png`
    });

    await browser.close();
    console.log("Screenshots captured successfully!");
  } finally {
    preview.kill();
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
