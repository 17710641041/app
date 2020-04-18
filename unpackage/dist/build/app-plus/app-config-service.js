
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/card/index","pages/goodFriend/goodFriend","pages/game/game","pages/Share/Share","pages/search/search","pages/product/product","pages/set/set","pages/userinfo/userinfo","pages/cart/cart","pages/public/login","pages/user/user","pages/detail/detail","pages/order/order","pages/money/money","pages/order/createOrder","pages/address/address","pages/address/addressManage","pages/money/pay","pages/money/paySuccess","pages/notice/notice","pages/category/category","pages/product/list","pages/rule/rule","pages/rule/rule1","pages/harvest/harvest","pages/harvest/dynamic","pages/qrcode/qrcode","pages/wallet/wallet","pages/hall/hall","pages/stock/stock","pages/game/write"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#f8f8f8"},"tabBar":{"color":"#C0C4CC","selectedColor":"#fa436a","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/tab-home.png","selectedIconPath":"static/tab-home-current.png","text":"首页"},{"pagePath":"pages/game/game","iconPath":"static/tab-ck.png","selectedIconPath":"static/tab-ck-current.png","text":"创客"},{"pagePath":"pages/cart/cart","iconPath":"static/tab-cart.png","selectedIconPath":"static/tab-cart-current.png","text":"购物车"},{"pagePath":"pages/user/user","iconPath":"static/tab-my.png","selectedIconPath":"static/tab-my-current.png","text":"我的"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"mix-mall","compilerVersion":"2.6.9","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"type":"transparent","searchInput":{"backgroundColor":"rgba(231, 231, 231,.7)","borderRadius":"16px","placeholder":"请输入地址 如：大钟寺","disabled":true,"placeholderColor":"#606266"},"buttons":[{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"26","color":"#303133","float":"left","background":"rgba(0,0,0,0)"},{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"27","color":"#303133","background":"rgba(0,0,0,0)","redDot":true}]}}},{"path":"/pages/card/index","meta":{},"window":{"navigationBarTitleText":"挖矿可能获得"}},{"path":"/pages/goodFriend/goodFriend","meta":{},"window":{"navigationBarTitleText":"邀请记录"}},{"path":"/pages/game/game","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/Share/Share","meta":{},"window":{"navigationStyle":"custom","navigationBarTextStyle":"white"}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarTitleText":"搜索"}},{"path":"/pages/product/product","meta":{},"window":{"navigationBarTitleText":"详情展示","titleNView":{"type":"transparent"}}},{"path":"/pages/set/set","meta":{},"window":{"navigationBarTitleText":"设置"}},{"path":"/pages/userinfo/userinfo","meta":{},"window":{"navigationBarTitleText":"修改资料"}},{"path":"/pages/cart/cart","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"购物车"}},{"path":"/pages/public/login","meta":{},"window":{"navigationBarTitleText":"","navigationStyle":"custom","titleNView":false,"animationType":"slide-in-bottom"}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","bounce":"none","titleNView":{"type":"transparent","buttons":[{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"24","color":"#303133","width":"46px","background":"rgba(0,0,0,0)"},{"fontSrc":"/static/yticon.ttf","text":"","fontSize":"28","color":"#303133","background":"rgba(0,0,0,0)","redDot":true}]}}},{"path":"/pages/detail/detail","meta":{},"window":{"navigationBarTitleText":"","titleNView":{"type":"transparent"}}},{"path":"/pages/order/order","meta":{},"window":{"navigationBarTitleText":"我的订单","bounce":"none"}},{"path":"/pages/money/money","meta":{},"window":{}},{"path":"/pages/order/createOrder","meta":{},"window":{"navigationBarTitleText":"创建订单"}},{"path":"/pages/address/address","meta":{},"window":{"navigationBarTitleText":"收货地址"}},{"path":"/pages/address/addressManage","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/money/pay","meta":{},"window":{"navigationBarTitleText":"支付"}},{"path":"/pages/money/paySuccess","meta":{},"window":{"navigationBarTitleText":"支付成功"}},{"path":"/pages/notice/notice","meta":{},"window":{"navigationBarTitleText":"通知"}},{"path":"/pages/category/category","meta":{},"window":{"navigationBarTitleText":"分类","bounce":"none"}},{"path":"/pages/product/list","meta":{},"window":{"enablePullDownRefresh":true,"navigationBarTitleText":"商品列表"}},{"path":"/pages/rule/rule","meta":{},"window":{"navigationBarTitleText":"矿机规则"}},{"path":"/pages/rule/rule1","meta":{},"window":{"navigationBarTitleText":"创客规则"}},{"path":"/pages/harvest/harvest","meta":{},"window":{"navigationBarTitleText":"动态"}},{"path":"/pages/harvest/dynamic","meta":{},"window":{"navigationBarTitleText":"世界动态"}},{"path":"/pages/qrcode/qrcode","meta":{},"window":{"navigationBarTitleText":"我的邀请码"}},{"path":"/pages/wallet/wallet","meta":{},"window":{"navigationBarTitleText":"我的钱包"}},{"path":"/pages/hall/hall","meta":{},"window":{"navigationBarTitleText":"交易大厅"}},{"path":"/pages/stock/stock","meta":{},"window":{"navigationBarTitleText":"我的仓库"}},{"path":"/pages/game/write","meta":{},"window":{"navigationBarTitleText":"发布"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,window:void 0,global:void 0}}}});
