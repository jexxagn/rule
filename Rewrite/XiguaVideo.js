var body = $response.body;
var obj = JSON.parse(body);
var data = [];
for (var i=0; i<obj['data'].length; ++i){
    content = JSON.parse(obj['data'][i]['content']);
    if('ad_label' in content){
        data.push({'content':'','code':''})
        console.log('干掉广告视频！');
    }else{
        insert_ads = JSON.parse(content['insert_ads']);
        delete insert_ads['roll_time_list'];
        delete insert_ads['insert_time_list'];
        insert_ads['has_insert_ads'] = false;
        insert_ads['has_roll_ads'] = false;
        console.log('干掉视频中广告！');
        data.push(content)
    }
}
obj['data'] = data;
$done(JSON.stringify(obj));
