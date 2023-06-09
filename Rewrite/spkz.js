let obj = JSON.parse($response.body);
obj = {
  "gonggao": {
    "title": "公告",
    "text": "🎃",
    "open": false
  },
  "sharetxt": {
    "myshare": "剧荒？来这！ http://iosapp.tv",
    "playshare": "剧荒？来这！ http://iosapp.tv"
  },
  "update": {
    "banbenhao": "1.0|1.0",
    "text": "更新失败请访问keer.app下载更新|苹果更新log",
    "url": "https://www.bjjhsyxx.com/lanzou/ke1.5.520.apk|http://iosapp.tv",
    "url1": "https://s3-us-east-1.ossfiles.com/yyyggg/ke1.5.520.apk|http://iosapp.tv",
    "open": "false"
  },
  "dingding": {
    "open": true,
    "dyurl": "http://www.aliyuncss.top/dynew.json"
  },
  "adconfignew": {
     "kaiping" : false,
     "homecha" : false,
     "xiangqingcha" : false,
     "hengfu" : false,
     "xiazaijili" : false,
     "bofangjili" : false,
     "adtime" : 24
  }
};
$done({body: JSON.stringify(obj)});
