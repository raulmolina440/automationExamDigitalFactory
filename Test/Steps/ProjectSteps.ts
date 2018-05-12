import { $, browser } from "protractor";
import { timeout } from "q";

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

browser.get('http://www.google.com')


