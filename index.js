/**
 * Liftoff events
 */
export const PRELOAD_BEFORE = Symbol.for("GULP_CLI_PRELOAD_BEFORE");
export const PRELOAD_SUCCESS = Symbol.for("GULP_CLI_PRELOAD_SUCCESS");
export const PRELOAD_FAILURE = Symbol.for("GULP_CLI_PRELOAD_FAILURE");
export const LOADER_SUCCESS = Symbol.for("GULP_CLI_LOADER_SUCCESS");
export const LOADER_FAILURE = Symbol.for("GULP_CLI_LOADER_FAILURE");
export const NODE_FLAGS = Symbol.for("GULP_CLI_NODE_FLAGS");
export const RESPAWNED = Symbol.for("GULP_CLI_RESPAWNED");

/**
 * Various problems that amight occur
 */
export const UNSUPPORTED_GULP_VERSION = Symbol.for(
  "GULP_CLI_UNSUPPORTED_GULP_VERSION",
);
export const MISSING_GULPFILE = Symbol.for("GULP_CLI_MISSING_GULPFILE");
export const MISSING_NODE_MODULES = Symbol.for("GULP_CLI_MISSING_NODE_MODULES");
export const MISSING_GULP = Symbol.for("GULP_CLI_MISSING_GULP");
export const YARN_INSTALL = Symbol.for("GULP_CLI_YARN_INSTALL");
export const NPM_INSTALL = Symbol.for("GULP_CLI_NPM_INSTALL");
export const YARN_INSTALL_GULP = Symbol.for("GULP_CLI_YARN_INSTALL_GULP");
export const NPM_INSTALL_GULP = Symbol.for("GULP_CLI_NPM_INSTALL_GULP");
export const GULPLOG_DEPRECATED = Symbol.for("GULP_CLI_GULPLOG_DEPRECATED");

/**
 * Other details
 */
export const CWD_CHANGED = Symbol.for("GULP_CLI_CWD_CHANGED");
export const DESCRIPTION = Symbol.for("GULP_CLI_DESCRIPTION");
export const GULPFILE = Symbol.for("GULP_CLI_GULPFILE");

/**
 * Task system
 */
export const TASK_START = Symbol.for("GULP_CLI_TASK_START");
export const TASK_STOP = Symbol.for("GULP_CLI_TASK_STOP");
export const TASK_FAILURE = Symbol.for("GULP_CLI_TASK_FAILURE");
export const TASK_MISSING = Symbol.for("GULP_CLI_TASK_MISSING");
export const TASK_SYNC = Symbol.for("GULP_CLI_TASK_SYNC");

/**
 * Completions
 */
export const COMPLETION_TYPE_MISSING = Symbol.for(
  "GULP_CLI_COMPLETION_TYPE_MISSING",
);
export const COMPLETION_TYPE_UNKNOWN = Symbol.for(
  "GULP_CLI_COMPLETION_TYPE_UNKNOWN",
);

/**
 * Errors
 */
export const PRELOAD_ERROR = Symbol.for("GULP_CLI_PRELOAD_ERROR");
export const LOADER_ERROR = Symbol.for("GULP_CLI_LOADER_ERROR");
export const ARGV_ERROR = Symbol.for("GULP_CLI_ARGV_ERROR");
export const EXEC_ERROR = Symbol.for("GULP_CLI_EXEC_ERROR");
export const TASK_ERROR = Symbol.for("GULP_CLI_TASK_ERROR");

/**
 * Help
 */
export const USAGE = Symbol.for("GULP_CLI_USAGE");
export const FLAG_HELP = Symbol.for("GULP_CLI_FLAG_HELP");
export const FLAG_VERSION = Symbol.for("GULP_CLI_FLAG_VERSION");
export const FLAG_PRELOAD = Symbol.for("GULP_CLI_FLAG_PRELOAD");
export const FLAG_GULPFILE = Symbol.for("GULP_CLI_FLAG_GULPFILE");
export const FLAG_CWD = Symbol.for("GULP_CLI_FLAG_CWD");
export const FLAG_TASKS = Symbol.for("GULP_CLI_FLAG_TASKS");
export const FLAG_TASKS_SIMPLE = Symbol.for("GULP_CLI_FLAG_TASKS_SIMPLE");
export const FLAG_TASKS_JSON = Symbol.for("GULP_CLI_FLAG_TASKS_JSON");
export const FLAG_TASKS_DEPTH = Symbol.for("GULP_CLI_FLAG_TASKS_DEPTH");
export const FLAG_COMPACT_TASKS = Symbol.for("GULP_CLI_FLAG_COMPACT_TASKS");
export const FLAG_SORT_TASKS = Symbol.for("GULP_CLI_FLAG_SORT_TASKS");
export const FLAG_COLOR = Symbol.for("GULP_CLI_FLAG_COLOR");
export const FLAG_NO_COLOR = Symbol.for("GULP_CLI_FLAG_NO_COLOR");
export const FLAG_SILENT = Symbol.for("GULP_CLI_FLAG_SILENT");
export const FLAG_CONTINUE = Symbol.for("GULP_CLI_FLAG_CONTINUE");
export const FLAG_SERIES = Symbol.for("GULP_CLI_FLAG_SERIES");
export const FLAG_LOG_LEVEL = Symbol.for("GULP_CLI_FLAG_LOG_LEVEL");

/**
 * Task tree
 */
export const TASK_NAME = Symbol.for("GULP_CLI_TASK_NAME");
export const TASK_DESCRIPTION = Symbol.for("GULP_CLI_TASK_DESCRIPTION");
export const TASK_FLAG = Symbol.for("GULP_CLI_TASK_FLAG");
export const TASK_FLAG_DESCRIPTION = Symbol.for(
  "GULP_CLI_TASK_FLAG_DESCRIPTION",
);
export const BOX_DRAWINGS_LIGHT_UP_AND_RIGHT = Symbol.for(
  "GULP_CLI_BOX_DRAWINGS_LIGHT_UP_AND_RIGHT",
);
export const BOX_DRAWINGS_LIGHT_VERTICAL_AND_RIGHT = Symbol.for(
  "GULP_CLI_BOX_DRAWINGS_LIGHT_VERTICAL_AND_RIGHT",
);
export const BOX_DRAWINGS_LIGHT_HORIZONTAL = Symbol.for(
  "GULP_CLI_BOX_DRAWINGS_LIGHT_HORIZONTAL",
);
export const BOX_DRAWINGS_LIGHT_DOWN_AND_HORIZONTAL = Symbol.for(
  "GULP_CLI_BOX_DRAWINGS_LIGHT_DOWN_AND_HORIZONTAL",
);
export const BOX_DRAWINGS_LIGHT_VERTICAL = Symbol.for(
  "GULP_CLI_BOX_DRAWINGS_LIGHT_VERTICAL",
);
