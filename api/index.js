'use strict';

const express = require('express');
const api = require('./controller');

var router = express.Router();

router.post('/', api.filter);

module.exports = router;