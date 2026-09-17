const puppeteer = require("/Users/vikram/.npm/_npx/0f94ee7615faf582/node_modules/puppeteer-core");
const { spawn } = require("child_process");
const path = require("path");

const ARTIFACTS_DIR = "/Users/vikram/.gemini/antigravity-ide/brain/81032143-b662-4f1a-9ed7-04d443a40ec7";

async function main() {
  console.log("Starting preview server on port 4180...");
  const preview = spawn("./node_modules/.bin/vite", ["preview", "--port", "4180"], {
    cwd: path.resolve(__dirname, ".."),
    stdio: "pipe"
  });

  preview.stdout.on("data", d => console.log("vite:", d.toString()));
  preview.stderr.on("data", d => console.error("vite err:", d.toString()));

  await new Promise(r => setTimeout(r, 2500));

  try {
    const browser = await puppeteer.launch({
      executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

    console.log("Navigating to http://localhost:4180/scale-copilot ...");
    await page.goto("http://localhost:4180/scale-copilot", { waitUntil: "networkidle0" });

    // Unlock with password
    console.log("Unlocking password...");
    await page.waitForSelector("input[type='password']", { timeout: 10000 });
    await page.type("input[type='password']", "designtoimproveworld");
    await page.keyboard.press("Enter");

    await new Promise(r => setTimeout(r, 1200));

    // Scroll to the health diagnosis section
    console.log("Scrolling to diagnosis section...");
    await page.evaluate(() => {
      const el = document.getElementById("diagnosis");
      if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
    });

    await new Promise(r => setTimeout(r, 800));

    // Capture Recommended Initiatives Tab
    const diagnosisEl = await page.$("#diagnosis");
    if (diagnosisEl) {
      await diagnosisEl.screenshot({
        path: path.join(ARTIFACTS_DIR, "scale-copilot-initiatives.png")
      });
      console.log("Captured scale-copilot-initiatives.png");
    }

    // Click on DESIGN EXECUTION WORKSPACE tab
    console.log("Switching to DESIGN EXECUTION WORKSPACE tab...");
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll("button"));
      const execBtn = buttons.find(b => b.textContent.includes("DESIGN EXECUTION WORKSPACE"));
      if (execBtn) execBtn.click();
    });

    await new Promise(r => setTimeout(r, 800));

    // Click on Initiative C
    console.log("Selecting Initiative C...");
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll("button"));
      const cBtn = buttons.find(b => b.textContent.trim() === "C");
      if (cBtn) cBtn.click();
    });

    await new Promise(r => setTimeout(r, 800));

    if (diagnosisEl) {
      await diagnosisEl.screenshot({
        path: path.join(ARTIFACTS_DIR, "scale-copilot-execution-c.png")
      });
      console.log("Captured scale-copilot-execution-c.png");
    }

    await browser.close();
    console.log("All screenshots captured successfully!");
  } catch (err) {
    console.error("Error capturing screenshots:", err);
  } finally {
    preview.kill();
  }
}

main();
