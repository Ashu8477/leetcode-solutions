const fs = require("fs");
const { execSync } = require("child_process");

// last changed file detect karo
const file = execSync("git diff --name-only HEAD~1 HEAD").toString().trim();

if (!file.endsWith(".cpp") && !file.endsWith(".js") && !file.endsWith(".py")) {
  process.exit(0);
}

// simple image (text to image using node-canvas)
const { createCanvas } = require("canvas");
const canvas = createCanvas(800, 600);
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#0d1117";
ctx.fillRect(0, 0, 800, 600);

ctx.fillStyle = "#ffffff";
ctx.font = "14px monospace";

const code = fs.readFileSync(file, "utf-8").split("\n");

code.forEach((line, i) => {
  ctx.fillText(line, 10, 20 + i * 18);
});

const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("preview.png", buffer);

console.log("Image generated!");
