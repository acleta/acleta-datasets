#!/usr/bin/env node

require('./validate_geojson').run(function (success) {
  if (success) {
    process.exit(0);
  } else {
    process.exit(1);
  }
});
