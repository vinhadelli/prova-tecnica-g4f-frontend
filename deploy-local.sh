#!/bin/bash
npm install
npx json-server database/db.json &
npm start