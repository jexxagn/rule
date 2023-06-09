let obj = JSON.parse($response.body);
obj = {"data":{{"gonggao": {"open":"false"},"adconfignew": {"hengfu":"false","adtime":"999999999"}}};
$done({body: JSON.stringify(obj)});
