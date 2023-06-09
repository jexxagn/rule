let obj = JSON.parse($response.body);
var sub = {
    "gonggao": {"open":"false"},
    "adconfignew": {"hengfu":"false","adtime":"24"}
}
obj.data = sub;
$done({body: JSON.stringify(obj)});
