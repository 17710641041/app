
const api = 'http://mayiren.itdiguo.cn';

/**接口配置*/
const contactInterface = {
  //获取banner图
  banner: `${api}/shop/Banner/banner`,
  //导航
  nav: `${api}/shop/index/nav`,
  //分类
  classList: `${api}/shop/index/index`,
  //登录
  userLogin: `${api}/shop/Member/userLogin`,
  //获取用户信息
  getMemberDetail: `${api}/shop/Member/getMemberDetail`,
  //用户注册
  shopRegister: `${api}/shop/Member/shopRegister`,
  //为您推荐
  goodsList: `${api}/shop/Goods/goodslist`,
  //商品详情
  goodsinfos : `${api}/shop/Goods/goodsinfos`
}
export { contactInterface }
