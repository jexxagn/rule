let obj = JSON.parse($response.body);
obj = {"data":{"gonggao":{"open":"false"},
               "adconfignew":{"":"","":"","":""}
              }
      };
$done({body: JSON.stringify(obj)});
