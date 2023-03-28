<template>
  <div>{{ newList.支付宝.agName }}</div>
</template>

<script setup>
let list = [{
  "agVersion": "",
  "agContentType": "png",
  "agContent": "",
  "agSubType": "支付宝",
  "reSe1": "1",
  "agContentNo": "https://wxcredit.test.abchina.com/webankccenew/wbkImgServDev/allservs/getfrommgr?fileId=20230308140527c5829b&fileType=png",
  "agText": "",
  "agPic": "https://wxcredit.test.abchina.com/webankccenew/wbkImgServDev/allservs/getfrommgr?fileId=&fileType=png",
  "agRemark1": "支付宝",
  "agName": "多协议测试",
  "agMainType": "绑卡",
  "reSe2": "1",
  "agId": "a6bb6b4e",
  "agRemark2": "",
  "agType": "",
  "bindFlag": "0"
}, {
  "agVersion": "",
  "agContentType": "png",
  "agContent": "",
  "agSubType": "支付宝",
  "reSe1": "1",
  "agContentNo": "https://wxcredit.test.abchina.com/webankccenew/wbkImgServDev/allservs/getfrommgr?fileId=202303061616278a9d39&fileType=png",
  "agText": "",
  "agPic": "https://wxcredit.test.abchina.com/webankccenew/wbkImgServDev/allservs/getfrommgr?fileId=20230223112658823be6&fileType=png",
  "agRemark1": "支付宝",
  "agName": "支付宝快捷支付协议",
  "agMainType": "绑卡",
  "reSe2": "2",
  "agId": "df5092a7",
  "agRemark2": "并同意相关内容，同意授权中国农业银行在卡片激活后将证件号码、姓名、手机号、和卡号发送给支付宝用于绑定支付宝。若您有多个支付宝账号，则优先绑定与您预留手机号一致的账号。",
  "agType": "png",
  "bindFlag": "0"
}, {
  "agVersion": "",
  "agContentType": "png",
  "agContent": "",
  "agSubType": "京东",
  "reSe1": "2",
  "agContentNo": "https://wxcredit.test.abchina.com/webankccenew/wbkImgServDev/allservs/getfrommgr?fileId=20230306161639271937&fileType=png",
  "agText": "",
  "agPic": "https://wxcredit.test.abchina.com/webankccenew/wbkImgServDev/allservs/getfrommgr?fileId=20230223113159b35c68&fileType=png",
  "agRemark1": "京东",
  "agName": "京东快捷支付协议",
  "agMainType": "绑卡",
  "reSe2": "2",
  "agId": "47dad992",
  "agRemark2": "并同意相关内容，同意授权中国农业银行在卡片激活后将证件号码、姓名、手机号、和卡号信息发送给京东，用于开通“京东支付”快捷支付服务。",
  "agType": "png",
  "bindFlag": "0"
}, {
  "agVersion": "",
  "agContentType": "pdf",
  "agContent": "",
  "agSubType": "美团",
  "reSe1": "3",
  "agContentNo": "https://wxcredit.test.abchina.com/App/GetPicFromMgrCCE.aspx?id=202302231133492b55b0&type=pdf",
  "agText": "",
  "agPic": "https://wxcredit.test.abchina.com/webankccenew/wbkImgServDev/allservs/getfrommgr?fileId=202302231133565eea1e&fileType=png",
  "agRemark1": "美团",
  "agName": "美团快捷支付协议",
  "agMainType": "绑卡",
  "reSe2": "2",
  "agId": "40d71314",
  "agRemark2": "并同意相关内容，同意授权中国农业银行在卡片激活后将证件号码、姓名、手机号、和卡号信息发送给美团，用于开通“美团支付”快捷支付服务。",
  "agType": "png",
  "bindFlag": "0"
}, {
  "agVersion": "",
  "agContentType": "png",
  "agContent": "",
  "agSubType": "抖音",
  "reSe1": "4",
  "agContentNo": "https://wxcredit.test.abchina.com/webankccenew/wbkImgServDev/allservs/getfrommgr?fileId=20230306161651b3229d&fileType=png",
  "agText": "",
  "agPic": "https://wxcredit.test.abchina.com/webankccenew/wbkImgServDev/allservs/getfrommgr?fileId=20230223113454a55725&fileType=png",
  "agRemark1": "抖音",
  "agName": "抖音快捷支付协议",
  "agMainType": "绑卡",
  "reSe2": "2",
  "agId": "46248bcd",
  "agRemark2": "并同意相关内容，同意授权中国农业银行在卡片激活后将证件号码、姓名、手机号、和卡号信息发送给抖音，用于开通“抖音支付”快捷支付服务。",
  "agType": "png",
  "bindFlag": "0"
}]

let newList = new Object()
list.forEach((item,i)=> {
  if(item.agRemark1=='支付宝'){
    if(!!newList['支付宝']){
      for(let x in newList['支付宝']){
        if(newList['支付宝'][x]!==item[x]){
          let array = []
          array.push(newList['支付宝'][x])
          array.push(item[x])
          newList['支付宝'][x] = array
        }
      }
    }else {
      newList['支付宝'] = item
    }
  }else if(item.agRemark1=='美团'){
    newList[item.agRemark1] = item
  }else if(item.agRemark1=='抖音'){
    newList[item.agRemark1] = item
  }
})

console.log(newList)
</script>

<style scoped>

</style>
