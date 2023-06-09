let obj = JSON.parse($response.body);
obj = {"data":{"gonggao":{"open":"false"},
               "adconfignew":{"kaiping" : false,"homecha" : false,"xiangqingcha" : false,"hengfu" : false,"xiazaijili" : false,"bofangjili" : false,"adtime" : 24}
     }
      };
$done({body: JSON.stringify(obj)});
