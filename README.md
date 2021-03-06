# bugzilla-helper
A Firefox WebExtension used as a helper on Mozilla Bugzilla bug pages.

## Features
* Copy2Wiki - with a button attached with bug summary so that you are able to copy bug summary to wiki-formatted string.

## Download
* [0.8.0](https://github.com/astleychen/bugzilla-helper/raw/master/bin/bugzilla_copy-0.8.0-an%2Bfx.xpi)

## Changelog
* 2017/02/21 - Initial version converted from Greasemonkey user script. [Originated with @mephisto41]
* 2017/02/22 - Workaround copy-to-clipboard function as replacement of GM_setClipboard. [(Bug 1334174)](https://bugzilla.mozilla.org/show_bug.cgi?id=1334174#c8)
* 2017/04/25 - Append copy button whenever document is loaded.
* 2017/05/09 - Fix a bug in summary2wiki.js to ensure button is correctly installed.
* 2017/08/11 - Refresh upon up-to-date WebExtension API
* 2017/10/26 - Refresh signed API keys and update add-on.

## How to build, test, and package
* Install [web-ext](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext) from MDN website.
* Build and Run in Firefox for testing
```bash
$ web-ext run
```
* Packaging
```bash
$ web-ext build -a <DIR>
```
## How to sign
* [Signing extension](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext#Signing_your_WebExtension_for_distribution)
```bash
$ web-ext sign --api-key=$AMO_JWT_ISSUER --api-secret=$AMO_JWT_SECRET
```
* Where:
  * --api-key: the API key (JWT issuer) from addons.mozilla.org needed to sign the extension. This should always be a string.
  * --api-secret: the API secret (JWT secret) from addons.mozilla.org needed to sign the extension. This should always be a string.
