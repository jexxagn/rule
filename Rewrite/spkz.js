let obj = JSON.parse($response.body);
obj.data.gonggao = "open":"false";
obj.data.adconfignew = {"hengfu":"false","adtime":"24"};
$done({body: JSON.stringify(obj)});
