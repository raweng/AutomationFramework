GLOBAL.webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var func1 = require("./helpers/functions");




describe("Web PEX 2015 Automation", function() {
    this.timeout(150000);
    var allPassed = true;
  
    GLOBAL.service = new chrome.ServiceBuilder(path).build();
    chrome.setDefaultService(service);

    GLOBAL.driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

    driver.get("http://emcworld.builtapp.io/#/");

    after(function() {
        return driver.sleep(5000);
        return driver.quit();
    });

    afterEach(function() {
        return driver.sleep(2000);  
        allPassed = allPassed && this.currentTest.state === 'passed';
    });


    var count = 0

    function TCID() {
        count++
        return "TCID-" + count
    }

    it("Scroll Sponsors", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/div/div/i[2]", "Scroll Sponsors", TCID())
    });

    it("Scroll Sponsors", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/div/div/i[2]", "Scroll Sponsors", TCID())
    });

    it("Scroll Sponsors", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/div/div/i[2]", "Scroll Sponsors", TCID())
    });

    it("Scroll Sponsors Back", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/div/div/i[1]", "Scroll Sponsors Back", TCID())
    });

    it("Scroll Sponsors Back", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/div/div/i[1]", "Scroll Sponsors Back", TCID())
    });

    it("Scroll Sponsors Back", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/div/div/i[1]", "Scroll Sponsors Back", TCID())
    });

    it("Scroll Tracks", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[4]/div/div/i[2]", "Scroll Tracks", TCID())
    });

    it("Scroll Tracks", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[4]/div/div/i[2]", "Scroll Tracks", TCID())
    });


    it("Scroll Tracks", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[4]/div/div/i[2]", "Scroll Tracks", TCID())
    });


    it("Scroll Tracks", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[4]/div/div/i[2]", "Scroll Tracks", TCID())
    });


    it("Scroll Tracks", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[4]/div/div/i[2]", "Scroll Tracks", TCID())
    });


    it("Scroll Tracks", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[4]/div/div/i[2]", "Scroll Tracks", TCID())
    });

    it("Scroll Tracks", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[4]/div/div/i[2]", "Scroll Tracks", TCID())
    });

    it("Scroll Tracks Back", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[4]/div/div/i[1]", "Scroll Tracks Back", TCID())
    });

    it("Scroll Tracks Back", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[4]/div/div/i[1]", "Scroll Tracks Back", TCID())
    });

    it("Scroll Tracks Back", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[4]/div/div/i[1]", "Scroll Tracks Back", TCID())
    });

    it("Scroll Tracks Back", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[4]/div/div/i[1]", "Scroll Tracks Back", TCID())
    });

    it("Scroll Tracks Back", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[4]/div/div/i[1]", "Scroll Tracks Back", TCID())
    });

    it("Scroll Tracks Back", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[4]/div/div/i[1]", "Scroll Tracks Back", TCID())
    });

    it("Scroll Tracks Back", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[4]/div/div/i[1]", "Scroll Tracks Back", TCID())
    });

    it("Click Social Media", function() {
        return func1.clickfunction("//*[contains(text(), 'Social Media')]", "Click Social Media", TCID())
    });

    it("Click Twitter", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[1]/ul/ul[1]/li[2]/a/i", "Click Twitter", TCID())
    });

    it("Switch Between Two Windows", function() {

        return driver.getAllWindowHandles()
            .then(function(windowObjects) {
                driver.switchTo().window(windowObjects[1]);
                driver.close();
                driver.switchTo().window(windowObjects[0]);
            }, function(err) {
                console.log(err)
            });
    });

    it("Click Facebook", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[1]/ul/ul[1]/li[3]/a/i", "Click Facebook", TCID())
    });

    it("Switch Between Two Windows", function() {

        return driver.getAllWindowHandles()
            .then(function(windowObjects) {
                driver.switchTo().window(windowObjects[1]);
                driver.close();
                driver.switchTo().window(windowObjects[0]);
            }, function(err) {
                console.log(err)
            });
    });

    it("Click LinkedIn", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[1]/ul/ul[1]/li[4]/a/i", "Click LinkedIn", TCID())
    });

    it("Switch Between Two Windows", function() {

        return driver.getAllWindowHandles()
            .then(function(windowObjects) {
                driver.switchTo().window(windowObjects[1]);
                driver.close();
                driver.switchTo().window(windowObjects[0]);
            }, function(err) {
                console.log(err)
            });
    });

    it("Click Daily Highlights", function() {
        return func1.clickfunction("//*[contains(text(), 'Daily Highlights')]", "Click Daily Highlights", TCID())
    });

    it("Click Registration", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[1]/ul/li[1]/a/span", "Click Registration", TCID())
    });

    it("Click The Venetian", function() {
        return func1.clickfunction("//*[contains(text(), 'The Venetian')]", "Click The Venetian", TCID())
    });

    it("Click Level 2", function() {
        return func1.clickfunction("//*[contains(text(), 'Level 2')]", "Click Level 2", TCID())
    })

    it("Verify Image", function() {
        return func1.imgPresentId("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/div/img", "Level 2 Image", TCID())
    })

    it("Click Level 3", function() {
        return func1.clickfunction("//*[contains(text(), 'Level 3')]", "Click Level 3", TCID())
    })

    it("Verify Image", function() {
        return func1.imgPresentId("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/div/img", "Level 3 Image", TCID())
    })

    it("Click Level 4", function() {
        return func1.clickfunction("//*[contains(text(), 'Level 4')]", "Click Level 4", TCID())
    })

    it("Verify Image", function() {
        return func1.imgPresentId("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/div/img", "Level 4 Image", TCID())
    })

    it("Click Level 5", function() {
        return func1.clickfunction("//*[contains(text(), 'Level 5')]", "Click Level 5", TCID())
    })

    it("Verify Image", function() {
        return func1.imgPresentId("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/div/img", "Level 5 Image", TCID())
    })

    it("Click Level 1", function() {
        return func1.clickfunction("//*[contains(text(), 'Level 1')]", "Click Level 1", TCID())
    })

    it("Verify Image", function() {
        return func1.imgPresentId("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/div/img", "Level 1 Image", TCID())
    })

    it("Click Solutions Expo", function() {
        return func1.clickfunction("//*[contains(text(), 'Solutions Expo')]", "Click Solutions Expo", TCID())
    })

    it("Verify Image", function() {
        return func1.imgPresentId("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[2]/div/div[2]/div/img", "Solutions Expo Image", TCID())
    })

    it("Click Las Vegas", function() {
        return func1.clickfunction("//*[contains(text(), 'Las Vegas')]", "Click Las Vegas", TCID())
    });

    it("Click B&B Ristorante", function() {
        return func1.clickfunction("//*[contains(text(), 'B&B Ristorante')]", "Click B&B Ristorante", TCID())
    });

    it("Switch Between Two Windows", function() {

        return driver.getAllWindowHandles()
            .then(function(windowObjects) {
                driver.switchTo().window(windowObjects[1]);
                driver.close();
                driver.switchTo().window(windowObjects[0]);
            }, function(err) {
                console.log(err)
            });
    });

    it("Click Grand Lux Café", function() {
        return func1.clickfunction("//*[contains(text(), 'Grand Lux Café')]", "Click Grand Lux Café", TCID())
    });

    it("Switch Between Two Windows", function() {

        return driver.getAllWindowHandles()
            .then(function(windowObjects) {
                driver.switchTo().window(windowObjects[1]);
                driver.close();
                driver.switchTo().window(windowObjects[0]);
            }, function(err) {
                console.log(err)
            });
    });

    it("Click Grand i♥burgers", function() {
        return func1.clickfunction("//*[contains(text(), 'i♥burgers')]", "Click i♥burgers", TCID())
    });

    it("Switch Between Two Windows", function() {

        return driver.getAllWindowHandles()
            .then(function(windowObjects) {
                driver.switchTo().window(windowObjects[1]);
                driver.close();
                driver.switchTo().window(windowObjects[0]);
            }, function(err) {
                console.log(err)
            });
    });

    it("Click Coffee", function() {
        return func1.clickfunction("//*[contains(text(), 'Coffee')]", "Click Coffee", TCID())
    });

     it("Click Café Presse", function() {
        return func1.clickfunction("//*[contains(text(), 'Café Presse')]", "Click Café Presse", TCID())
    });

    it("Switch Between Two Windows", function() {

        return driver.getAllWindowHandles()
            .then(function(windowObjects) {
                driver.switchTo().window(windowObjects[1]);
                driver.close();
                driver.switchTo().window(windowObjects[0]);
            }, function(err) {
                console.log(err)
            });
    });

    it("Click Espressamente Illy", function() {
        return func1.clickfunction("//*[contains(text(), 'Espressamente Illy')]", "Click Espressamente Illy", TCID())
    });

    it("Switch Between Two Windows", function() {

        return driver.getAllWindowHandles()
            .then(function(windowObjects) {
                driver.switchTo().window(windowObjects[1]);
                driver.close();
                driver.switchTo().window(windowObjects[0]);
            }, function(err) {
                console.log(err)
            });
    });

    it("Click Nightlife", function() {
        return func1.clickfunction("//*[contains(text(), 'Nightlife')]", "Click Nightlife", TCID())
    });

    it("Click TAO Nightclub", function() {
        return func1.clickfunction("//*[contains(text(), 'TAO Nightclub')]", "TAO Nightclub", TCID())
    });

    it("Switch Between Two Windows", function() {

        return driver.getAllWindowHandles()
            .then(function(windowObjects) {
                driver.switchTo().window(windowObjects[1]);
                driver.close();
                driver.switchTo().window(windowObjects[0]);
            }, function(err) {
                console.log(err)
            });
    });

    it("Click Transportation", function() {
        return func1.clickfunction("//*[contains(text(), 'Transportation')]", "Click Transportation", TCID())
    });

    it("Click Goibibo", function() {
        return func1.clickfunction("//*[contains(text(), 'Goibibo')]", "Click Goibibo", TCID())
    });

    it("Switch Between Two Windows", function() {

        return driver.getAllWindowHandles()
            .then(function(windowObjects) {
                driver.switchTo().window(windowObjects[1]);
                driver.close();
                driver.switchTo().window(windowObjects[0]);
            }, function(err) {
                console.log(err)
            });
    });

    it("Click Hopstop", function() {
        return func1.clickfunction("//*[contains(text(), 'Hopstop')]", "Click Hopstop", TCID())
    });

    it("Switch Between Two Windows", function() {

        return driver.getAllWindowHandles()
            .then(function(windowObjects) {
                driver.switchTo().window(windowObjects[1]);
                driver.close();
                driver.switchTo().window(windowObjects[0]);
            }, function(err) {
                console.log(err)
            });
    });

    it("Click Roadify", function() {
        return func1.clickfunction("//*[contains(text(), 'Roadify')]", "Click Roadify", TCID())
    });

    it("Switch Between Two Windows", function() {

        return driver.getAllWindowHandles()
            .then(function(windowObjects) {
                driver.switchTo().window(windowObjects[1]);
                driver.close();
                driver.switchTo().window(windowObjects[0]);
            }, function(err) {
                console.log(err)
            });
    });

    it("Click CAR SERVICES", function() {
        return func1.clickfunction("//*[contains(text(), 'CAR SERVICES')]", "Click CAR SERVICES", TCID())
    });

    it("Click Las Vegas Taxis", function() {
        return func1.clickfunction("//*[contains(text(), 'Las Vegas Taxis')]", "Click Las Vegas Taxis", TCID())
    });

    it("Switch Between Two Windows", function() {

        return driver.getAllWindowHandles()
            .then(function(windowObjects) {
                driver.switchTo().window(windowObjects[1]);
                driver.close();
                driver.switchTo().window(windowObjects[0]);
            }, function(err) {
                console.log(err)
            });
    });

    it("Click Agenda-at-a-Glance", function() {
        return func1.clickfunction("//*[contains(text(), 'Agenda-at-a-Glance')]", "Click Agenda-at-a-Glance", TCID())
    });

    it("Scroll", function() {
        return driver.executeScript("scroll(0, 500)");
    });

    it("Click Sun May 3", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[1]/ul/li[2]/a/span[1]", "Click Sun May 3", TCID())
    });

    it("Click Mon May 4", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[1]/ul/li[3]/a/span[2]", "Click Mon May 4", TCID())
    });

    it("Click Tue May 5", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[1]/ul/li[4]/a/span[2]", "Click Tue May 5", TCID())
    });

    it("Click Wed May 6", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[1]/ul/li[5]/a/span[2]", "Click Wed May 6", TCID())
    });

    it("Click Thur May 7", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[1]/ul/li[6]/a/span[2]", "Click Thur May 7", TCID())
    });

    it("Click Sponsors", function() {
        return func1.clickfunction("//*[contains(text(), 'Sponsors')]", "Click Sponsors", TCID())
    });

    it("Sleep called again", function() {
        return driver.sleep(8000)
    });

    it("Click Sponsors Element Pivotal", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[1]/div/div[1]/div/div[1]/a/img", "Click Sponsors Element Pivotal", TCID())
    });

    it("Close Sponsors Element Pivotal", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[3]/div[2]/div/div[1]/div/span[1]/i", "Close Sponsors Element Pivotal", TCID())
    });

    it("Click Sponsors Element RSA", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[1]/div/div[1]/div/div[2]/a/img", "Click Sponsors Element RSA", TCID())
    });

    it("Close Sponsors Element RSA", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[3]/div[2]/div/div[1]/div/span[1]/i", "Close Sponsors Element RSA", TCID())
    });

    it("Sponsors Search", function() {
        return func1.keyboardvalue("/html/body/div/div/div/div[2]/div[2]/div/div[1]/div[1]/div/div/div/input", "Capgemini" , "Sponsors Search", TCID())
    });

    it("Click Sponsors Element Capgemini", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[1]/div/div/div/div/a/img", "Click Sponsors Element Capgemini", TCID())
    });

    it("Close Sponsors Element Capgemini", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div[2]/div[3]/div[2]/div/div[1]/div/span[1]/i", "Close Sponsors Element Capgemini", TCID())
    });

    it("Click Program/FAQ", function() {
        return func1.clickfunction("//*[contains(text(), 'Program/FAQ')]", "Click Program/FAQ", TCID())
    });

    it("Click Info Guide", function() {
        return func1.clickfunction("//*[contains(text(), 'Info Guide')]", "Click Info Guide", TCID())
    });

    it("Click Settings", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[1]/div[1]/aside/div[1]/div/a/i ", "Click Settings", TCID())
    });

    it("Click FAQ", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[2]/div/div/div[2]/div/ul/ul[1]/li[2]/a/span", "Click FAQ", TCID())
    });

    it("Switch Between Two Windows", function() {

        return driver.getAllWindowHandles()
            .then(function(windowObjects) {
                driver.switchTo().window(windowObjects[1]);
                driver.close();
                driver.switchTo().window(windowObjects[0]);
            }, function(err) {
                console.log(err)
            });
    });

    it("Click About", function() {
        return func1.clickfunction("//*[contains(text(), 'About')]", "Click About", TCID())
    });

    it("Switch Between Two Windows", function() {

        return driver.getAllWindowHandles()
            .then(function(windowObjects) {
                driver.switchTo().window(windowObjects[1]);
                driver.close();
                driver.switchTo().window(windowObjects[0]);
            }, function(err) {
                console.log(err)
            });
    });

    it("Click Certification", function() {
        return func1.clickfunction("//*[contains(text(), 'Certification')]", "Click Certification", TCID())
    });

    it("Switch Between Two Windows", function() {

        return driver.getAllWindowHandles()
            .then(function(windowObjects) {
                driver.switchTo().window(windowObjects[1]);
                driver.close();
                driver.switchTo().window(windowObjects[0]);
            }, function(err) {
                console.log(err)
            });
    });

    it("Click License Agreement", function() {
        return func1.clickfunction("//*[contains(text(), 'License Agreement')]", "Click License Agreement", TCID())
    });

    it("Switch Between Two Windows", function() {

        return driver.getAllWindowHandles()
            .then(function(windowObjects) {
                driver.switchTo().window(windowObjects[1]);
                driver.close();
                driver.switchTo().window(windowObjects[0]);
            }, function(err) {
                console.log(err)
            });
    });

    it("Click Privacy Policy", function() {
        return func1.clickfunction("//*[contains(text(), 'Privacy Policy')]", "Click Privacy Policy", TCID())
    });

    it("Switch Between Two Windows", function() {

        return driver.getAllWindowHandles()
            .then(function(windowObjects) {
                driver.switchTo().window(windowObjects[1]);
                driver.close();
                driver.switchTo().window(windowObjects[0]);
            }, function(err) {
                console.log(err)
            });
    });


    it("Click Trademark & Copyright", function() {
        return func1.clickfunction("//*[contains(text(), 'Trademark & Copyright')]", "Click Trademark & Copyright", TCID())
    });

    it("Switch Between Two Windows", function() {

        return driver.getAllWindowHandles()
            .then(function(windowObjects) {
                driver.switchTo().window(windowObjects[1]);
                driver.close();
                driver.switchTo().window(windowObjects[0]);
            }, function(err) {
                console.log(err)
            });
    });

    it("Click Open Source Licenses", function() {
        return func1.clickfunction("//*[contains(text(), 'Open Source Licenses')]", "Click Open Source Licenses", TCID())
    });

    it("Switch Between Two Windows", function() {

        return driver.getAllWindowHandles()
            .then(function(windowObjects) {
                driver.switchTo().window(windowObjects[1]);
                driver.close();
                driver.switchTo().window(windowObjects[0]);
            }, function(err) {
                console.log(err)
            });
    });

    it("Click Login", function() {
        return func1.clickfunction("/html/body/div/div/div/div[2]/div[1]/div[1]/aside/nav/div/button", "Click Login", TCID())
    });

    it("Enter Username", function() {
        return func1.keyboardvalue("/html/body/div/div/div/div[1]/div[2]/div/div/div[2]/div[2]/form/div[1]/div/input", "Testraw2" , "Enterusername", TCID())
    });

    it("Enter Password", function() {
        return func1.keyboardvalue("/html/body/div/div/div/div[1]/div[2]/div/div/div[2]/div[2]/form/div[2]/div/input", "Testraw2" , "Enter Password", TCID())
    });

    it("Click Main Login", function() {
        return func1.clickfunction("/html/body/div/div/div/div[1]/div[2]/div/div/div[2]/div[2]/form/div[3]/button", "Main Login", TCID())
    });

    it("TOTAL OUTPUT", function() {
        return func1.finalResult()
    });

    it("Testing Ended", function() {
        return driver.quit(2000);
    });
});
