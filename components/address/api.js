import Request from "@/static/address/request.js"
//创建Request对象
let request=new Request();

export default{
	//data 参数值
	get_linkAddress_api:function(data){
		return request.http('/shop/Member/getProvince',data,'GET');
	}
}
