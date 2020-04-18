<template>
	<view>
		<view class="headBox">
			<image class="headImg" src="../../static/bj2.jpg"></image>
			<image class="icon2" src="../../static/icon1.png"></image>
			<view class="head-cont">
				<view class="ony1">好友人数越多</view>
				<view class="ony2">我的收入越高</view>
			</view>
		</view>
		<view class="cont">
			<view class="num-box">
				<view class="num-box-txt" @click="toGoodFriend">
					<text class="hyrs">好友人数<text class="nuber">66</text>人</text>
					<image class="sj" src="../../static/sj.png"></image>
				</view>
				<view class="num-box-button">邀请好友</view>
			</view>
			<view class="cro1">
				<view class="cro1-title">
					<view class="cro1-title-left">累计收益</view>
					<view class="cro1-title-right" @click="toRule1">
						<text class="mr">玩法规则</text>
						<image class="sj" src="../../static/sj.png"></image>
					</view>
				</view>
				<view class="cro1-cont">
					<view class="cro1-cont-items">
						<view class="hy">666.66<text class="hyy">元</text></view>
						<view class="qyt">好友贡献</view>
					</view>
					<view class="cro1-cont-items bor">
						<view class="hys">666.66<text class="hyy">元</text></view>
						<view class="qyt">系统补助</view>
					</view>
				</view>
			</view>
			<!-- <view class="cro2" @click="toFriend">朋友圈</view> -->
			<view class="cro1">
				<view class="cro1-title">
					<view class="cro1-title-left">今日收益</view>
				</view>
				<view class="cro1-cont">
					<view class="cro1-cont-items">
						<view class="hy">66<text class="hyy">元</text></view>
						<view class="qyt">合计</view>
					</view>
					<view class="cro1-cont-items">
						<view class="hys">66<text class="hyy">元</text></view>
						<view class="qyt">好友贡献</view>
					</view>
					<view class="cro1-cont-items">
						<view class="hys">66<text class="hyy">元</text></view>
						<view class="qyt">系统补助</view>
					</view>
				</view>
			</view>
			<view class="cro1">
				<view class="cro1-title">
					<view class="cro1-title-left">我的邀请人</view>
					<!-- <view class="cro1-title-right" @click="toModal">
						<text class="mr">联系TA</text>
						<image class="sj" src="../../static/sj.png"></image>
					</view> -->
				</view>
				<view class="cro1-cont">
					<view class="user">
						<view class="user-info">
							<image class="headUrl" src="../../static/missing-face.png"></image>
							<view class="name">傲天大小</view>
						</view>
						<view class="user-time">2020-03-01</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad(){
			
		},
		methods: {
			tabClick(i,type){
				this.isPages = type;
				this.tabCurrentIndex = i;
			},
			toFriend(){
				uni.navigateTo({
					url: "/pages/friend/friend"
				})
			},
			onConfirm(){},
			cancel(){},
			toRule1(){
				uni.navigateTo({
					url: "/pages/rule/rule1"
				})
			},
			toGoodFriend(){
				uni.navigateTo({
					url: "/pages/goodFriend/goodFriend"
				})
			}
		}
	}
</script>


<style>

.cro2{
	background: #fff;
	padding:20upx;
	margin: 20upx 0;
}
.name{
	font-size: 30upx;
	font-weight: 500;
}
.user-time{
	font-size: 28upx;
	color: #7f7f7f;
}
.user{
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.user-info{
	display: flex;
	align-items: center;
}	
.headUrl{
	width: 100upx;
	height: 100upx;
	border-radius: 50%;
	margin-right: 15upx;
}
.mr{
	margin-right: 10upx;
}
.sj{
	width: 18upx;
	height: 25upx;
}
.bor{
	border-left: 1upx solid #d7d7d7;
}
.qyt{
	font-size: 30upx;
	color: #9d9d9d;
}
.hy{
	font-size: 40upx;
	color: #ff6325;
	font-weight: 600;
}
.hys{
	font-size: 40upx;
	font-weight: 600;
	color: #414141;
}
.hyy{
	font-size: 24upx;
}
.cro1-cont-items{
	flex: 1;
	width: 0;
	display: flex;
	align-items: center;
	flex-direction: column;
}
.cro1-cont{
	display: flex;
	margin-top: 30upx;
}
.cro1-title-left{
	font-size: 30upx;
	font-weight: 600;
}
.cro1-title-right{
	font-size: 26upx;
	color: #9d9d9d;
	font-weight: 600;
	display: flex;
	align-items: center;
}
.cro1-title{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.cro1{
	height: 260upx;
	background: #fff;
	margin-top: 20upx;
	border-radius: 8upx;
	padding: 40upx;
}
.num-box-button{
	height: 90upx;
	background: #f64573;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30upx;
	color: #fff;
	border-radius: 45upx;
	font-weight: 600;
}
	
.nuber{
	font-size: 48upx;
	font-weight: 600;
	margin: 0 5upx;
}

.num-box-txt{
	display: flex;
	justify-content: space-between;
	margin-bottom: 20upx;
	align-items: center;
}
.hyrs{
	font-size: 30upx;
	font-weight: 600;
}
.num-box{
	background: #fff;
	height: 240upx;
	border-radius: 8upx;
	padding: 40upx;
}
.headBox{
	height: 350upx;
	overflow: hidden;
	position: relative;
}
.headImg{
	width: 100%;
}
.icon2{
	position: absolute;
	width: 198upx;
	height: 210upx;
	top:20upx;
	right: 56upx;
}
.head-cont{
	position: absolute;
	top:98upx;
	left: 30upx;
	color: #fff;
}
.ony1{
	font-size: 34upx;
	margin-bottom: 5upx;
}
.ony2{
	font-size: 40upx;
	font-weight: 600;
}
.cont{
	margin: 0 30upx;
	min-height: 300upx;

	position: relative;
	top:-60upx;
	z-index: 2;
	border-radius: 10upx;
}
</style>

