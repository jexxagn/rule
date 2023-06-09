let obj = JSON.parse($response.body);
obj.data.gonggao = "open":false;
obj.data.adconfignew = {"hengfu":false,"adtime":12};
$done({body: JSON.stringify(obj)});
