import { spawnSync } from "child_process";
import { readdirSync } from "fs";
import { resolve } from "path";
import { scriptsSrcPath } from "./common_path";
import { checkHashAndUpdate } from "./handle_checksums";

export function rebuildAllIfNeeded(force: boolean): void {
  console.log("checking hashes...");
  if (force || checkDirHash(scriptsSrcPath)) {
    console.log("Compiling...");
    spawnSync(`tsc`, ["--build", "scripts/tsconfig.json"]);
  } else {
    console.log("No changes detected");
  }
}

function checkDirHash(dir: string): boolean {
  return getFiles(dir)
    .map((file) => checkHashAndUpdate(file))
    .some((updated) => updated);
}

function getFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true })
    .map((file) => {
      const resolvedPath = resolve(dir, file.name);
      return file.isDirectory() ? getFiles(resolvedPath) : resolvedPath;
    })
    .flat();
}
