const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const targetDir = path.join(__dirname, "../external/articles/articles");

if (!fs.existsSync(targetDir)) {
  console.log("Clonage du dépôt d'articles...");
  execSync(`git clone https://github.com/ATKama/trackdiggers-articles.git ${targetDir}`, { stdio: "inherit" });
} else {
  console.log("Mise à jour du dépôt d'articles...");
  execSync(`git -C ${targetDir} pull`, { stdio: "inherit" });
}