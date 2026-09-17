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

    const runs = [
      { name: "footer-ama-1440-light", width: 1440, height: 900, theme: "light" },
      { name: "footer-ama-1440-dark", width: 1440, height: 900, theme: "dark" },
      { name: "footer-ama-390-light", width: 390, height: 844, theme: "light" },
    ];

    for (const run of runs) {
      await page.setViewport({ width: run.width, height: run.height });
      await page.goto(`http://localhost:4173/?theme=${run.theme}`, { waitUntil: "networkidle0" });

      // Scroll to footer (#contact)
      await page.evaluate(() => {
        const contact = document.getElementById("contact");
        if (contact) {
          contact.scrollIntoView({ behavior: "instant", block: "end" });
        }
      });

      // Wait for smooth animations and transitions
      await new Promise(r => setTimeout(r, 1200));

      const screenshotPath = path.join(ARTIFACTS_DIR, `${run.name}.png`);
      await page.screenshot({ path: screenshotPath });
      console.log(`Captured ${run.name}.png`);
    }

    await browser.close();
    console.log("Footer AMA screenshots captured successfully!");
  } catch (err) {
    console.error("Error capturing screenshots:", err);
  } finally {
    preview.kill();
  }
}

main();
