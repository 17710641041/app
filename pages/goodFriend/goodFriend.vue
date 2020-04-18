<template>
	<view>
		<view class="navdir">
			<view class="navdir-cont">
				<view 
					v-for="(item, index) in goodList" 
					:class="{ cors : tabCurrentIndex === index }" 
					class="navdir-cont-items"
					:key="index"
					@click="tabClick(index,item.id)"
				>
					{{item.title}}
				</view>
			</view>
		</view>
		<view class="user-list">
			<view class="user-list-items">
				<view class="user-list-items-left">
					<view class="imgbox">
						<image class="imgUrl" src="../../static/missing-face.png"></image>
					</view>
					<view class="usinfo">
						<view class="usname">松果腺</view>
						<view class="ustime">2020-10-12</view>
					</view>
				</view>
				<view class="user-list-items-right">SL:104</view>
			</view>
			<view class="user-list-items">
				<view class="user-list-items-left">
					<view class="imgbox">
						<image class="imgUrl" src="../../static/missing-face.png"></image>
					</view>
					<view class="usinfo">
						<view class="usname">松果腺</view>
						<view class="ustime">2020-10-12</view>
					</view>
				</view>
				<view class="user-list-items-right">SL:104</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabCurrentIndex:0,
				goodList:[
					{id:1, title:"直邀好友"},
					{id:2, title:"扩散好友"}
				]
			}
		},
		methods: {
			tabClick(index,id) {
				this.tabCurrentIndex = index;
			},
		}
	}
</script>

<style>
.user-list-items-right{
	font-size: 30upx;
}
.user-list-items{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20upx 0;
	border-bottom: 1upx solid #dedede;
}
.user-list-items:last-child{
	border-bottom: 0;
}
.user-list-items-left{
	display: flex;
}
.imgbox{
	margin-right: 20upx;
}
.usname{
	font-size: 32upx;
	color: #303030;
	margin-bottom: 5upx;
}
.ustime{
	color: #a3a3a3;
	font-size: 32upx;
}
.imgUrl{
	width: 90upx;
	height: 90upx;
}
.user-list{
	padding: 0 40upx;
	background: #fff;
}
.cors{
	background: #f64573!important;
	color: #fff !important;
}
.navdir-cont-items{
	width: 250upx;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #f5f5f5;
	color: #707070;
	font-size: 30upx;
	overflow: hidden;
}
.navdir-cont-items:first-child{
	border-radius: 35upx  0  0 35upx;
}
.navdir-cont-items:last-child{
	border-radius: 0  35upx 35upx 0;
}
.navdir-cont{
	height: 70upx;
	display: flex;
	justify-content: center;
}
.navdir{
	background: #fff;
	width: 100%;
	padding: 40upx;
}
</style>
