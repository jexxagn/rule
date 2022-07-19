/*
脚本功能：解锁WPS本地会员
脚本作者：R·E
支持版本：商店最新 11.24.0(US) 11.26.1(CN)
更新时间：2022.07.10
问题反馈：https://t.me/Functional_Store_Hub
使用声明：⚠️⚠️⚠️此脚本仅供学习与交流，禁止转载与贩卖！⚠️⚠️⚠️
*/
var a='{\x22result\x22:\x22ok\x22,\x22privilege\x22:[],\x22total_cost\x22:0,\x22level\x22:88,\x22wealth\x22:0,\x22exp\x22:0,\x22vip\x22:{\x22has_ad\x22:0,\x22enabled\x22:[]},\x22total_buy\x22:0}';var b=JSON['parse'](a);const c=new Array('data_recover','ocr','pdf2doc','pdf_merge','pdf_sign','pdf_split');const d=new Array(['超级会员',0x28],['WPS会员',0x14],['稻壳会员',0xc]);const e=0x70db6800;b['server_time']=e;b['userid']=e;b['vip']['name']=d[0x0][0x0];b['vip']['memberid']=d[0x0][0x1];b['vip']['expire_time']=e;for(i=0x0;i<c['length'];i++){b['privilege'][i]={'times':0x0,'expire_time':e,'spid':c[i]};}for(o=0x0;o<d['length'];o++){b['vip']['enabled'][o]={'name':d[o][0x0],'expire_time':e,'memberid':d[o][0x1]};}$done({body : JSON['stringify'](b)});
