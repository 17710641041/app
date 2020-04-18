
const api = 'http://mayiren.itdiguo.cn';

/**接口配置*/
const contactInterface = {
	//获取用户信息
	getMemberDetail: `${api}/shop/Member/getMemberDetail`,
	//获取直邀好友
	getLastUset: `${api}/shop/Member/getLastUset`,
	//用户登录
	userLogin: `${api}/shop/Member/userLogin`,
	//用户注册
	shopRegister: `${api}/shop/Member/shopRegister`,
	//获取商品
	goodsList: `${api}/shop/Goods/goodsList`,
	//获取banner图
	banner: `${api}/shop/Banner/banner`,
	//导航
	nav: `${api}/shop/index/nav`,
	//折扣
	zhekou: `${api}/shop/index/zhekou`,
	//秒杀
	miaosha: `${api}/shop/goods/miaosha`,
	//蚂蚁严选
	jingpin: `${api}/shop/goods/jingpin`,
	//今日主推
	zhutui: `${api}/shop/goods/zhutui`
}

export { contactInterface }
