# Chrome Dev Tools

## About

Chrome provides tools in the browser for developers to better understand waht is going on with web pages in regards to performance and errors. All major browsers provide tools built into the browser.

This workshop will be using the Chrome dev tools however. Latest version of Chrome at the time of teh workshop.

## Required

* Current version of Chrome browser (free)
* Github account (free)
* Glitch account (free and you can sign in with your github account)
* Basic familiarity with html, css, and some js

## Workshop Goals

A sample glitch site with issues will be provided to remix in your glitch account

1. Learn the basic tabs
2 Review difference between source and rendered DOM
2. Use the Elements tab to find  CSS issues
3. Use the Console to identify errors
4. Use the Network tab to identify resource issues
5. Use Audit tab to see suggest5ions on site performance


## Steps

### Opening dev tools

Right click oin the browner and click Inspect

Chrome browser or organized into several tabs.

This workshop we will go over the Element, Console, Network, and audit tabs,

#### Elements

In this tab we see the rendered page. this differs from the the source as javascript has executed possibly making changes to html and css.

There are common fools to help you like cmd+f to find text. In the left panel there is the DOM and you can manipulate this and see results immediately in the browser. This of course will not make any permanent changes. this is all only in the browser and a refresh will resent any changes you have made.

#### Console

The console tab logs general errors. In this workshop network and javascript errors will be referenced.

### Network

The network tab diagrams all the network activity the browser does. From the first request for a web page to any referenced resources and ajax requests.

#### Audit

The Audit tab contains google's lighthouse, a web page audit tool. This audit provides scores in Performance, Accessability, Best Practices, SEO, and PWS (progressive web app). The scores are 1-100 and the audit will even provide tips on how to improve your scores. This is a great tool for finding performance gains as well as following googles guidelines for pages on the web.

### Other tabs

There are a few other very useful tools in Chrome Dev tools. Feel free to explore these.
