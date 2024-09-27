// ==UserScript==
// @name         Neopets - No CAPTCHA Userlookup Links
// @version      0.0.2
// @description  Edits links to userlookups to the non-captcha versions
// @author       Amu
// @match        *://*.neopets.com/*
// @match        *://neopets.com/*
// @grant        none
// @icon         https://www.neopets.com/favicon.ico
// ==/UserScript==

const replaceURL = function() {
    'use strict';

    const links = document.querySelectorAll('a[href*="userlookup.phtml?user="], a[href*="randomfriend.phtml?user="], a[href*="randomfriend.phtml?randomfriend="]');
    links.forEach(link => {
        const href = link.getAttribute("href");
        const params = href.split('?')[1];
        const neoDomain = "https://www.neopets.com/userlookup.phtml?";
        const placeValue = "&place=999";
        const urlString = (neoDomain + params + placeValue);
        // console.log(urlString);
        const newUrl = new URL(urlString);
        link.setAttribute('href', newUrl.href.toString());
    });
};

replaceURL();
