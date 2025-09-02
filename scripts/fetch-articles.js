const { execSync } = require("child_process");
const path = require("path");

const repoRoot = path.join(__dirname, "..");
const targetDir = path.join(repoRoot, "external/articles");

function run(cmd, opts = {}) {
  execSync(cmd, { stdio: "inherit", ...opts });
}

try {
  console.log("🔁 Init/update du sous-module external/articles…");
  // S'assure que le sous-module existe dans l'arbre de travail
  run("git submodule update --init --recursive external/articles", { cwd: repoRoot });

  console.log("⬇️  Récupération de la branche main du dépôt d'articles…");
  // En detached HEAD, on évite 'pull' et on force l'état sur origin/main
  run(`git -C "${targetDir}" fetch origin main --depth=1`);
  run(`git -C "${targetDir}" reset --hard origin/main`);

  console.log("✅ Articles synchronisés sur la dernière révision de origin/main.");
} catch (err) {
  console.error("❌ Erreur pendant la mise à jour des articles:", err);
  process.exit(1);
}