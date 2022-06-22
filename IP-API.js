//geo_location_checker=http://ip-api.com/json/?lang=zh-CN, https://jexxagn.netlify.app/IP-API.js
if ($response.statusCode != 200) {
  $done(null);
}

const emojis= ['🆘','🈲','⚠️','🔞','📵','🚦','🏖','🖥','📺','🐧','🐬','🦉','🍄','⛳️','🚴','🤑','👽','🤖','🎃', '👺', '👁', '🐶', '🐼','🐌', '👥']
var city0 = "高谭市";
var isp0 = "Cross-GFW.org";
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function City_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return city0
//emojis[getRandomInt(emojis.length)]
  }
}

function ISP_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return isp0
//emojis[getRandomInt(emojis.length)]
  }
}

function Area_check(para) {
  if(para=="中华民国"){
  return "台湾"
  } else
  {
  return para
  }
}

var flags = new Map([["AC","🇦🇨"],["AD","🇦🇩"],["AE","🇦🇪"],["AF","🇦🇫"],["AG","🇦🇬"],["AI","🇦🇮"],["AL","🇦🇱"],["AM","🇦🇲"],["AO","🇦🇴"],["AQ","🇦🇶"],["AR","🇦🇷"],["AS","🇦🇸"],["AT","🇦🇹"],["AU","🇦🇺"],["AW","🇦🇼"],["AX","🇦🇽"],["AZ","🇦🇿"],["BA","🇧🇦"],["BB","🇧🇧"],["BD","🇧🇩"],["BE","🇧🇪"],["BF","🇧🇫"],["BG","🇧🇬"],["BH","🇧🇭"],["BI","🇧🇮"],["BJ","🇧🇯"],["BM","🇧🇲"],["BN","🇧🇳"],["BO","🇧🇴"],["BR","🇧🇷"],["BS","🇧🇸"],["BT","🇧🇹"],["BV","🇧🇻"],["BW","🇧🇼"],["BY","🇧🇾"],["BZ","🇧🇿"],["CA","🇨🇦"],["CD","🇨🇩"],["CF","🇨🇫"],["CG","🇨🇬"],["CH","🇨🇭"],["CI","🇨🇮"],["CK","🇨🇰"],["CL","🇨🇱"],["CM","🇨🇲"],["CN","🇨🇳"],["CO","🇨🇴"],["CP","🇨🇵"],["CR","🇨🇷"],["CU","🇨🇺"],["CV","🇨🇻"],["CW","🇨🇼"],["CX","🇨🇽"],["CY","🇨🇾"],["CZ","🇨🇿"],["DE","🇩🇪"],["DG","🇩🇬"],["DJ","🇩🇯"],["DK","🇩🇰"],["DM","🇩🇲"],["DO","🇩🇴"],["DZ","🇩🇿"],["EA","🇪🇦"],["EC","🇪🇨"],["EE","🇪🇪"],["EG","🇪🇬"],["EH","🇪🇭"],["ER","🇪🇷"],["ES","🇪🇸"],["ET","🇪🇹"],["EU","🇪🇺"],["FI","🇫🇮"],["FJ","🇫🇯"],["FK","🇫🇰"],["FM","🇫🇲"],["FO","🇫🇴"],["FR","🇫🇷"],["GA","🇬🇦"],["GB","🇬🇧"],["GD","🇬🇩"],["GE","🇬🇪"],["GF","🇬🇫"],["GH","🇬🇭"],["GI","🇬🇮"],["GL","🇬🇱"],["GM","🇬🇲"],["GN","🇬🇳"],["GP","🇬🇵"],["GR","🇬🇷"],["GT","🇬🇹"],["GU","🇬🇺"],["GW","🇬🇼"],["GY","🇬🇾"],["HK","🇭🇰"],["HN","🇭🇳"],["HR","🇭🇷"],["HT","🇭🇹"],["HU","🇭🇺"],["ID","🇮🇩"],["IE","🇮🇪"],["IL","🇮🇱"],["IM","🇮🇲"],["IN","🇮🇳"],["IR","🇮🇷"],["IS","🇮🇸"],["IT","🇮🇹"],["JM","🇯🇲"],["JO","🇯🇴"],["JP","🇯🇵"],["KE","🇰🇪"],["KG","🇰🇬"],["KH","🇰🇭"],["KI","🇰🇮"],["KM","🇰🇲"],["KN","🇰🇳"],["KP","🇰🇵"],["KR","🇰🇷"],["KW","🇰🇼"],["KY","🇰🇾"],["KZ","🇰🇿"],["LA","🇱🇦"],["LB","🇱🇧"],["LC","🇱🇨"],["LI","🇱🇮"],["LK","🇱🇰"],["LR","🇱🇷"],["LS","🇱🇸"],["LT","🇱🇹"],["LU","🇱🇺"],["LV","🇱🇻"],["LY","🇱🇾"],["MA","🇲🇦"],["MC","🇲🇨"],["MD","🇲🇩"],["MG","🇲🇬"],["MH","🇲🇭"],["MK","🇲🇰"],["ML","🇲🇱"],["MM","🇲🇲"],["MN","🇲🇳"],["MO","🇲🇴"],["MP","🇲🇵"],["MQ","🇲🇶"],["MR","🇲🇷"],["MS","🇲🇸"],["MT","🇲🇹"],["MU","🇲🇺"],["MV","🇲🇻"],["MW","🇲🇼"],["MX","🇲🇽"],["MY","🇲🇾"],["MZ","🇲🇿"],["NA","🇳🇦"],["NC","🇳🇨"],["NE","🇳🇪"],["NF","🇳🇫"],["NG","🇳🇬"],["NI","🇳🇮"],["NL","🇳🇱"],["NO","🇳🇴"],["NP","🇳🇵"],["NR","🇳🇷"],["NZ","🇳🇿"],["OM","🇴🇲"],["PA","🇵🇦"],["PE","🇵🇪"],["PF","🇵🇫"],["PG","🇵🇬"],["PH","🇵🇭"],["PK","🇵🇰"],["PL","🇵🇱"],["PM","🇵🇲"],["PR","🇵🇷"],["PS","🇵🇸"],["PT","🇵🇹"],["PW","🇵🇼"],["PY","🇵🇾"],["QA","🇶🇦"],["RE","🇷🇪"],["RO","🇷🇴"],["RS","🇷🇸"],["RU","🇷🇺"],["RW","🇷🇼"],["SA","🇸🇦"],["SB","🇸🇧"],["SC","🇸🇨"],["SD","🇸🇩"],["SE","🇸🇪"],["SG","🇸🇬"],["SI","🇸🇮"],["SK","🇸🇰"],["SL","🇸🇱"],["SM","🇸🇲"],["SN","🇸🇳"],["SR","🇸🇷"],["ST","🇸🇹"],["SV","🇸🇻"],["SY","🇸🇾"],["SZ","🇸🇿"],["TC","🇹🇨"],["TD","🇹🇩"],["TG","🇹🇬"],["TH","🇹🇭"],["TJ","🇹🇯"],["TL","🇹🇱"],["TM","🇹🇲"],["TN","🇹🇳"],["TO","🇹🇴"],["TR","🇹🇷"],["TT","🇹🇹"],["TV","🇹🇻"],["TW","🇨🇳"],["TZ","🇹🇿"],["UA","🇺🇦"],["UG","🇺🇬"],["UK","🇬🇧"],["UM","🇺🇲"],["US","🇺🇸"],["UY","🇺🇾"],["UZ","🇺🇿"],["VA","🇻🇦"],["VC","🇻🇨"],["VE","🇻🇪"],["VG","🇻🇬"],["VI","🇻🇮"],["VN","🇻🇳"],["VU","🇻🇺"],["WS","🇼🇸"],["YE","🇾🇪"],["YT","🇾🇹"],["ZA","🇿🇦"],["ZM","🇿🇲"],["ZW","🇿🇼"]])

var body = $response.body;
var obj = JSON.parse(body);
var ip = obj['query'];
var title = flags.get(obj['countryCode']) + ' ' + Area_check(obj['country']) + ' ' + City_ValidCheck(obj['regionName']) + ' ' + City_ValidCheck(obj['city']);
var subtitle = '💋 '+ obj['timezone'] + ' ➠ ' + 'IP:' + obj['query'];
var description = '-----------------------------------'+'\n'+'服务商:'+obj['isp'] + '\n\n'+'国家/地区:' +Area_check(obj['country']) + ' ' + City_ValidCheck(obj['regionName']) + ' ' + City_ValidCheck(obj['city'])+ '\n\n' + 'IP:'+ obj['query'] + '\n\n' +'经度：'+ obj['lon'] + '  ' + '维度：' + obj['lat'] +  '\n\n' +'时区:'+ obj['timezone'];
$done({title, subtitle, ip, description});
