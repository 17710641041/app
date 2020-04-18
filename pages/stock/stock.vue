<template>
  <view class="hm-goods-card">
    <view class="list">
		<view class="goods">
			<view class="wrap">
				<image class="pic" src=""></image>
			</view>
			<view class="block">
				<text class="tradeName">玩具小熊碎片(5/6)</text>
				<text class="describe">及其六个兑换</text>
				<view class="tabBar">
					<view class="tabBar-left">立即回收80秒币</view>
					<view class="tabBar-right">
						<view class="lq">领取</view>
						<view class="cs">出售</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	<view class="footer">
		<!-- <view class="foot-left">账单</view> -->
		<view class="foot-right">交易大厅</view>
	</view>
  </view>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
@import './index.response.css';
.lq{
	background: #6cd66f;
	padding: 8upx 15upx;
	border-radius: 10upx;
	margin-right: 10upx;
	color: #fff;
}
.cs{
	background: #f64573;
	padding: 8upx 15upx;
	border-radius: 10upx;
	color: #fff;
}
.tabBar{
	display: flex;
	justify-content: space-between;
	width: 100%;
	font-size: 26upx;
	padding-top: 10upx;
	align-items: center;
}
.tabBar-left{
	background: #f8f8f8;
	padding: 8upx 15upx;
	border-radius: 10upx;
	color: #8c8c8c;
}
.tabBar-right{
	display: flex;
}
.footer{
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	height: 120upx;
	background: #fff;
	display: flex;
	padding: 20upx;
}
.foot-right{
	flex: 1;
	margin-left: 20upx;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #f64573;
	border-radius: 60upx;
	color: #fff;
	font-size: 32upx;
}
</style>
