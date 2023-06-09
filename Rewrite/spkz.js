let obj = JSON.parse($response.body);
obj = {"data":{"gonggao":{"open":false}}};
$done({body: JSON.stringify(obj)});
