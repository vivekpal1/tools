#!/usr/bin/env node

import { runCommandInWorkspaces } from '../scripts/scripts';

// process.argv[0] is the node executable
// process.argv[1] is the path to this script file
// So the actual command starts from process.argv[2]
const [,, ...args] = process.argv;

// `args[0]` will be `test` in this case.
runCommandInWorkspaces(args[0]);
