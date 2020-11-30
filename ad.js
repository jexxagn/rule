QX:
https:\/\/.*\..*\.com\/(app\/php\/api\/ad|ucp/index|getGlobalData) url script-response-body https://gitee.com/jexxagn/quan-x/raw/master/ad.js

MITM = bghrt.fzsystem.cn
*/

const ad = 'app/php/pai/ad';
const adold = 'getGlobalData';
let obj = JSON.parse($response.body);


if ($request.url.indexOf(ad) != -1) {
delete obj.data.pmap
}

if ($request.url.indexOf(adold) != -1) {
delete obj.data.adrows
delete obj.data.adgroups
delete obj.data.iOS_adgroups
}

$done({body: JSON.stringify(obj)});