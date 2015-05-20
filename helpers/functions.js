"use strict";

var fs = require('fs');

var _ = require('underscore'),
    Q = require('q');

var date = new Date();
var dt = date.getDate();
var mt = date.getMonth();
var yr = date.getYear();
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var Results = "\\result\\Result-" + dt + "-" + mt + "-" + yr + "----" + h + "-" + m + "-" + s + ".html";
var startTime = date;
var Pass = 0
var Fail = 0



var result = function(TCID, data, res) {
    if (res == "Pass") {
        return "<tr><td><font color='green'>" + TCID + "</font></td> <td><font color='green'>" + data + "</font></td> <td><font color='green'>" + res + " </font></td></tr></font>";
    } else if (res == "Fail") {
        return "<tr><td><font color='red'>" + TCID + "</font></td> <td><font color='red'>" + data + "</font></td> <td><font color='red'>" + res + " </font></td></tr></font>";
    }
}

module.exports.finalResult = function() {
    var endDate = new Date();
    var totalTestcase = Pass + Fail;
    var data = fs.readFileSync(Results); //read existing contents into data
    var fd = fs.openSync(Results, 'w+');
    var finalcount = "<style>td{font-weight:bold;}</style><h1 align='center'>Test Summary</h1><table border='1' align='center' width=800> <tr><td> Project Name </td>  <td> Checkmate</td></tr> <tr><td> Start time </td>  <td>" + startTime + "</td></tr> <tr><td>End time </td><td> " + endDate + "</td></tr>  <tr><td> Total TestCases </td>   <td>" + totalTestcase + "</td></tr>  <tr><td>Pass </td> <td>" + Pass + "</td> </tr> <tr><td>" + "Fail </td> <td> " + Fail + "</td> </tr> </table> <br> <table border='1' align='center' width=800><tr><th><b>Test-ID</b></th><th><b>Description</b></th><th><b>Result</b></th><tr>"
    var buffer = new Buffer(finalcount);
    fs.writeSync(fd, buffer, 0, buffer.length); //write new data
    fs.writeSync(fd, data, 0, data.length); //append old data
    fs.appendFileSync(Results, "</table>")
    return fs.close(fd);

}

exports.clickfunction = function(el, desc, TCID) {
    return driver.findElement(webdriver.By.xpath(el)).click()
        .then(function() {
                Pass++
                console.log(Pass);
                fs.openSync(Results, 'a')
                fs.appendFileSync(Results, result(TCID, desc, 'Pass'));
            },
            function(err) {
                Fail++
                console.log(Pass);
                fs.openSync(Results, 'a')
                fs.appendFileSync(Results, result(TCID, desc, 'Fail'));
            })
}

exports.keyboardvalue = function(el, values, desc, TCID) {
    return driver.findElement(webdriver.By.xpath(el)).sendKeys(values)
        .then(function() {
                Pass++
                console.log(Pass);
                fs.openSync(Results, 'a')
                fs.appendFileSync(Results, result(TCID, desc, 'Pass'));
            },
            function(err) {
                Fail++
                console.log(Pass);
                fs.openSync(Results, 'a')
                fs.appendFileSync(Results, result(TCID, desc, 'Fail'));
            })
}

exports.imgPresentId = function(el,desc,TCID) {
  return driver.findElement(webdriver.By.xpath(el)).getSize()
  .then(function(img) {
    var height = img.height;
   if(height > 0){
    Pass++
    fs.appendFile(Results, result(TCID, desc + '<b> is Present </b>','Pass'), function (err){
              if(err) return console.log(err);
            })
   } else if(height < 1){
    Fail++
    fs.appendFile(Results, result(TCID, desc + '<b> is Not Present </b>','Fail'), function (err){
              if(err) return console.log(err);
            })
   }
  },function(err){
    Fail++
    fs.appendFile(Results, result(TCID, desc +'<b> is Not found to </b>','Fail'), function (err){
              if(err) return console.log(err);
  })
  
  })
}

