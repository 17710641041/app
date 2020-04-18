<template>
	<view class="main">
		<view class="code">21518472</view>
		<view class="iconr">
			<view class="iconr-items">
				<view class="tnum">12</view>
				<view class="txtt">直邀好友</view>
			</view>
			<view class="iconr-items">
				<view class="tnum">12</view>
				<view class="txtt">扩散好友</view>
			</view>
		</view>
		<view class="cont">
			<view class="cont-title">邀请奖励规则</view>
			<view class="cont-c">
				<view class="cont-t">1，有效用户定义：完成实名认证的直邀好友/扩散好友完成首单购物</view>
				<view class="cont-t">2，好友活跃收益：根据创客，粉丝们的[活跃时长]，[看视频 购物比例]，[邀请好友]等因素综合计算矿机算力，邀请好友也多，算力越高获得分红币的几率越大。每天坐享收益越多</view>
				<view class="cont-t">3，创客优品保留本活动的最终话语权，并将严查恶意邀请，恶意挖矿等行为，一经发现取消奖励资格</view>
			</view>
		</view>
		<view class="footer">邀请好友</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.footer{
	height: 100upx;
	position: fixed;
	left: 40upx;
	right: 40upx;
	bottom: 30upx;
	background: #f64573;
	border-radius: 50upx;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 36upx;
}
.cont-title{
	font-size: 32upx;
	font-weight: 600;
	margin-bottom: 20upx;
	color: #3a3a3a;
}
.cont-t{
	font-size: 28upx;
	color: #3a3a3a;
	margin-bottom: 15upx;
	line-height: 1.8;
}
.tnum{
	font-size: 50upx;
	font-weight: 600;
	margin-bottom: 8upx;
}
.txtt{
	font-size: 32upx;
	color: #a4a4a4;
}
.iconr-items{
	flex: 1;
	width: 0;
	display: flex;
	align-items: center;
	flex-direction:column;
	color: #3a3a3a;
	border-right: 1upx solid #e3e3e3;
}
.iconr-items:last-child{
	border-right: 0;
}
.iconr{
	height: 240upx;
	background: #fff;
	border-radius: 25upx;
	margin-top: 80upx;
	display: flex;
	align-items: center;
	margin-bottom: 30upx;
}
.main{
	padding: 100upx 40upx 0;
}
.code{
	text-align: center;
	font-size: 80upx;
	font-weight: 600;
	color: #3a3a3a;
}
</style>
