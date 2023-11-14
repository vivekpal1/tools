#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const glob = require('glob');
import url from 'url';

const workspaces = ['packages/*', 'apps/*', 'configs/*', 'scripts/*'];

export function runCommandInWorkspaces(command: string) {
  workspaces.forEach((workspacePattern) => {
    const workspaceDirs = glob.sync(workspacePattern);

    workspaceDirs.forEach((workspaceDir: string) => {
      const packageJsonPath = path.join(workspaceDir, 'package.json');
      try {
        if (fs.existsSync(packageJsonPath)) {
          const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
          if (packageJson.scripts && packageJson.scripts[command]) {
            console.log(`Running "${command}" on ${workspaceDir}`);
            execSync(`bun run ${command}`, {
              stdio: 'inherit',
              cwd: workspaceDir,
            });
          } else {
            console.log(`Skipping ${workspaceDir}, script "${command}" not found.`);
          }
        }
      } catch (error) {
        console.error(`Failed to run "${command}" on ${workspaceDir}: ${error}`);
      }
    });
  });
}


if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
  const command = process.argv[2];
  runCommandInWorkspaces(command);
}