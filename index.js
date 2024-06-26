'use strict';

module.exports = {
  /**
   * Liftoff events
   */
  PRELOAD_BEFORE: Symbol.for('GULP_CLI_PRELOAD_BEFORE'),
  PRELOAD_SUCCESS: Symbol.for('GULP_CLI_PRELOAD_SUCCESS'),
  PRELOAD_FAILURE: Symbol.for('GULP_CLI_PRELOAD_FAILURE'),
  LOADER_SUCCESS: Symbol.for('GULP_CLI_LOADER_SUCCESS'),
  LOADER_FAILURE: Symbol.for('GULP_CLI_LOADER_FAILURE'),
  NODE_FLAGS: Symbol.for('GULP_CLI_NODE_FLAGS'),
  RESPAWNED: Symbol.for('GULP_CLI_RESPAWNED'),

  /**
   * Various problems that might occur
   */
  UNSUPPORTED_GULP_VERSION: Symbol.for('GULP_CLI_UNSUPPORTED_GULP_VERSION'),
  MISSING_GULPFILE: Symbol.for('GULP_CLI_MISSING_GULPFILE'),
  MISSING_NODE_MODULES: Symbol.for('GULP_CLI_MISSING_NODE_MODULES'),
  MISSING_GULP: Symbol.for('GULP_CLI_MISSING_GULP'),
  YARN_INSTALL: Symbol.for('GULP_CLI_YARN_INSTALL'),
  NPM_INSTALL: Symbol.for('GULP_CLI_NPM_INSTALL'),
  YARN_INSTALL_GULP: Symbol.for('GULP_CLI_YARN_INSTALL_GULP'),
  NPM_INSTALL_GULP: Symbol.for('GULP_CLI_NPM_INSTALL_GULP'),
  GULPLOG_DEPRECATED: Symbol.for('GULP_CLI_GULPLOG_DEPRECATED'),

  /**
   * Other details
   */
  CWD_CHANGED: Symbol.for('GULP_CLI_CWD_CHANGED'),
  DESCRIPTION: Symbol.for('GULP_CLI_DESCRIPTION'),
  GULPFILE: Symbol.for('GULP_CLI_GULPFILE'),

  /**
   * Task system
   */
  TASK_START: Symbol.for('GULP_CLI_TASK_START'),
  TASK_STOP: Symbol.for('GULP_CLI_TASK_STOP'),
  TASK_FAILURE: Symbol.for('GULP_CLI_TASK_FAILURE'),
  TASK_MISSING: Symbol.for('GULP_CLI_TASK_MISSING'),
  TASK_SYNC: Symbol.for('GULP_CLI_TASK_SYNC'),

  /**
   * Completions
   */
  COMPLETION_TYPE_MISSING: Symbol.for('GULP_CLI_COMPLETION_TYPE_MISSING'),
  COMPLETION_TYPE_UNKNOWN: Symbol.for('GULP_CLI_COMPLETION_TYPE_UNKNOWN'),

  /**
   * Errors
   */
  PRELOAD_ERROR: Symbol.for('GULP_CLI_PRELOAD_ERROR'),
  LOADER_ERROR: Symbol.for('GULP_CLI_LOADER_ERROR'),
  ARGV_ERROR: Symbol.for('GULP_CLI_ARGV_ERROR'),
  EXEC_ERROR: Symbol.for('GULP_CLI_EXEC_ERROR'),
  TASK_ERROR: Symbol.for('GULP_CLI_TASK_ERROR'),

  /**
   * Help
   */
  USAGE: Symbol.for('GULP_CLI_USAGE'),
  FLAG_HELP: Symbol.for('GULP_CLI_FLAG_HELP'),
  FLAG_VERSION: Symbol.for('GULP_CLI_FLAG_VERSION'),
  FLAG_PRELOAD: Symbol.for('GULP_CLI_FLAG_PRELOAD'),
  FLAG_GULPFILE: Symbol.for('GULP_CLI_FLAG_GULPFILE'),
  FLAG_CWD: Symbol.for('GULP_CLI_FLAG_CWD'),
  FLAG_TASKS: Symbol.for('GULP_CLI_FLAG_TASKS'),
  FLAG_TASKS_SIMPLE: Symbol.for('GULP_CLI_FLAG_TASKS_SIMPLE'),
  FLAG_TASKS_JSON: Symbol.for('GULP_CLI_FLAG_TASKS_JSON'),
  FLAG_TASKS_DEPTH: Symbol.for('GULP_CLI_FLAG_TASKS_DEPTH'),
  FLAG_COMPACT_TASKS: Symbol.for('GULP_CLI_FLAG_COMPACT_TASKS'),
  FLAG_SORT_TASKS: Symbol.for('GULP_CLI_FLAG_SORT_TASKS'),
  FLAG_COLOR: Symbol.for('GULP_CLI_FLAG_COLOR'),
  FLAG_NO_COLOR: Symbol.for('GULP_CLI_FLAG_NO_COLOR'),
  FLAG_SILENT: Symbol.for('GULP_CLI_FLAG_SILENT'),
  FLAG_CONTINUE: Symbol.for('GULP_CLI_FLAG_CONTINUE'),
  FLAG_SERIES: Symbol.for('GULP_CLI_FLAG_SERIES'),
  FLAG_LOG_LEVEL: Symbol.for('GULP_CLI_FLAG_LOG_LEVEL'),

  /**
   * Task tree
   */
  TASK_NAME: Symbol.for('GULP_CLI_TASK_NAME'),
  TASK_DESCRIPTION: Symbol.for('GULP_CLI_TASK_DESCRIPTION'),
  TASK_FLAG: Symbol.for('GULP_CLI_TASK_FLAG'),
  TASK_FLAG_DESCRIPTION: Symbol.for('GULP_CLI_TASK_FLAG_DESCRIPTION'),
  BOX_DRAWINGS_LIGHT_UP_AND_RIGHT: Symbol.for('GULP_CLI_BOX_DRAWINGS_LIGHT_UP_AND_RIGHT'),
  BOX_DRAWINGS_LIGHT_VERTICAL_AND_RIGHT: Symbol.for('GULP_CLI_BOX_DRAWINGS_LIGHT_VERTICAL_AND_RIGHT'),
  BOX_DRAWINGS_LIGHT_HORIZONTAL: Symbol.for('GULP_CLI_BOX_DRAWINGS_LIGHT_HORIZONTAL'),
  BOX_DRAWINGS_LIGHT_DOWN_AND_HORIZONTAL: Symbol.for('GULP_CLI_BOX_DRAWINGS_LIGHT_DOWN_AND_HORIZONTAL'),
  BOX_DRAWINGS_LIGHT_VERTICAL: Symbol.for('GULP_CLI_BOX_DRAWINGS_LIGHT_VERTICAL'),
};
