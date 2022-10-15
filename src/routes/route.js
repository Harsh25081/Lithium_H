const express = require('express');
const router = express.Router();///test-you

const underscore = require('underscore')
const loggerFun = require('../logger/logger.js')
const helperFun = require('../util/helper.js')
const formatterFun = require('../validator/formatter.js')
const problem4 = require('../problem4.js')

router.get('/test-me', function (req, res) {
    loggerFun.welcome();
    console.log('\nThe Current Time is : ',helperFun.date)
    console.log('\nThe Current Month is : ',helperFun.month)
    helperFun.getBatchInfo();
    console.log('\nThe Trimed string is : ',formatterFun.trimstr);
    console.log('\nString to lower Case : ',formatterFun.changetoLowerCase());
    console.log('\nString to upper Case : ',formatterFun.changetoUpperCase());
    
    problem4.SUBARR();
    console.log("\nTail Elements are : ",problem4.ar2res);
    console.log("\nUnionArray is : ",problem4.unionArray);
    console.log("\nKey Value Pairs are : ",problem4.FromPairs);

    res.send('My first ever api!')
});

module.exports = router;

