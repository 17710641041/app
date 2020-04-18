<template>
	<view>
		<view class="header" :style="{height:`${ImgHeight}px`}">
			<image class="bg" src="../../static/bj1.jpg"></image>
			<image class="kti" src="../../static/kt1.png"></image>
			<view class="space" :style="{height:`${ImgHeight}px`}">
				<view class="stars">
					<view class="star"></view>
					<view class="star pink"></view>
					<view class="star blue"></view>
					<view class="star yellow"></view>
				</view>
			</view>
		</view>
		<view class="mains">
			<view class="addTl">增加算力</view>
			<view class="cont">
				<view class="kj_title">
					<text class="kj_title_left">矿机动态</text>
					<text class="kj_title_right" @click="toRule">规则</text>
				</view>
				<view class="kj_list">
					<view class="kj_nav">
						<!-- <view class="kj_nav_btn cour">我的动态</view> -->
						<view 
							v-for="(item, index) in dynamicData" 
							:key="index" 
							:class="{ cour: tabCurrentIndex === index }" 
							class="kj_nav_btn" 
							@click="tabClick(index,item.id)">
							{{item.title}}
						</view>
					</view>
					<view v-if="tabCurrentIndex == 0">
						<view class="kj_items">
							<view class="kj_items_left">
								<image class="kj_icon" src="../../static/tab-csj-current.png"></image>
								<text class="name">矿机</text>
							</view>
							<view class="kj_items_cont">
								经历千心万苦，获得金币3125个
							</view>
							<view class="kj_items_right">
								15:13
							</view>
						</view>
					</view>
					<view v-else>
						<view class="kj_items">
							<view class="kj_items_left">
								<image class="kj_icon" src="../../static/tab-csj-current.png"></image>
								<text class="name">矿机</text>
							</view>
							<view class="kj_items_cont">
								世界千心万苦，获得金币3125个
							</view>
							<view class="kj_items_right">
								15:13
							</view>
						</view>
					</view>
					<view class="kj_footer" @click="toHarvest">查看更多动态</view>
				</view>
				
				<view class="kj_title">
					<text class="kj_title_left">交易大厅</text>
					<text class="kj_title_right" @click="toHall">进入交易大厅</text>
				</view>
				<view class="dt_list">
					<view class="dt_items">
						<image class="headImg" src="../../static/missing-face.png"></image>
						<view class="dt_txt">小鼠：出售小熊获取出售小熊获取出售小熊获取20秒币</view>
						<view class="dt_trem">3:15</view>
					</view>
					<view class="dt_items">
						<image class="headImg" src="../../static/missing-face.png"></image>
						<view class="dt_txt">小鼠：出售小熊获取出售小熊获取出售小熊获取20秒币</view>
						<view class="dt_trem">3:15</view>
					</view>
					<view class="dt_items">
						<image class="headImg" src="../../static/missing-face.png"></image>
						<view class="dt_txt">小鼠：出售小熊获取出售小熊获取出售小熊获取20秒币</view>
						<view class="dt_trem">3:15</view>
					</view>
					<view class="dt_items">
						<image class="headImg" src="../../static/missing-face.png"></image>
						<view class="dt_txt">小鼠：出售小熊获取出售小熊获取出售小熊获取20秒币</view>
						<view class="dt_trem">3:15</view>
					</view>
				</view>
				
				
				<view class="kj_title">
					<text class="kj_title_left">我的仓库</text>
					<text class="kj_title_right-txt" @click="toCard">挖矿可能获得</text>
				</view>
				<view class="sh_list">
					<view class="sh_items"></view>
					<view class="sh_items"></view>
					<view class="sh_items"></view>
					<view class="sh_items"></view>
					<view class="sh_items" @click="toStock">全部</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				tabCurrentIndex: 0,
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				ImgHeight: '',
				dynamicData:[
					{id:1,title:"我的动态"},
					{id:2,title:"世界动态"}
				],
				dynamicId:'1'
			}
		},
		onShow(){
			let _this = this;
			let info = uni.createSelectorQuery().select(".bg");
	　　　   info.boundingClientRect(function(data) { 
	　　　  　   _this.ImgHeight =  data.height;
		　　 }).exec()
		},
		methods: {
			tabClick(index,id) {
				this.dynamicId = id;
				this.tabCurrentIndex = index;
			},
			toStock(){
				uni.navigateTo({
					url: "/pages/stock/stock"
				})
			},
			toHall(){
				uni.navigateTo({
					url: "/pages/hall/hall"
				})
			},
			toCard(){
				uni.navigateTo({
					url: "/pages/card/index"
				})
			},
			//矿机动态
			toHarvest(){
				let url;
				if(this.dynamicId == 1){
					url = "/pages/harvest/harvest"
				}else{
					url = "/pages/harvest/dynamic"
				}
				uni.navigateTo({ url: url})
			},
			toRule(){
				uni.navigateTo({
					url: "/pages/rule/rule"
				})
			}
		}
	}
</script>

<style scoped>
	.space {
		position: absolute;
		right: 0;
		left: 0;
		top:0;
		overflow: hidden;
		bottom: 0;
	}
	.crater1,
	.crater2,
	.crater3,
	.crater4 {
		position: absolute;
		border-radius: 50%;
		background: rgba(0, 0, 0, .3);
		box-shadow: inset 3px 3px 0 rgba(0, 0, 0, .2);
	}

	.crater1 {
		width: 20px;
		height: 20px;
		left: 25%;
		top: 20%;
	}

	.crater2 {
		width: 10px;
		height: 10px;
		left: 50%;
		top: 60%;
	}

	.crater3 {
		width: 15px;
		height: 15px;
		left: 30%;
		top: 65%;
	}

	.crater4 {
		width: 15px;
		height: 15px;
		left: 60%;
		top: 35%;
	}

	.star {
		display: block;
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: #FFF;
		position: relative;
		left: 0;
		transform-origin: 100% 0;
		animation: star-ani 6s infinite ease-out;
		box-shadow: 0 0 5px 5px rgba(255, 255, 255, .3);
		opacity: 0;
		z-index: 2;
	}

	.star:after {
		content: '';
		display: block;
		top: 0px;
		left: 4px;
		border: 0px solid #fff;
		border-width: 0px 90px 2px 90px;
		border-color: transparent transparent transparent rgba(255, 255, 255, .3);
		transform: rotate(-45deg) translate3d(1px, 3px, 0);
		box-shadow: 0 0 1px 0 rgba(255, 255, 255, .1);
		transform-origin: 0% 100%;
		animation: shooting-ani 3s infinite ease-out;
	}

	.pink {
		top: 30px;
		left: 395upx;
		background: #ff5a99;
		animation-delay: 3s;
		-webkit-animation-delay: 3s;
		-moz-animation-delay: 3s;
	}

	.pink:after {
		border-color: transparent transparent transparent #ff5a99;
		animation-delay: 3s;
		-webkit-animation-delay: 3s;
		-moz-animation-delay: 3s;
	}

	.blue {
		top: 35px;
		left: 432upx;
		background: cyan;
		animation-delay: 5s;
		-webkit-animation-delay: 5s;
		-moz-animation-delay: 5s;
	}

	.blue:after {
		border-color: 'transpareanimation-delay: 12s';
		-webkit-animation-delay: 5s;
		-moz-animation-delay: 5s;
		animation-delay: 5s;
	}

	.yellow {
		top: 50px;
		left: 600upx;
		background: #ffcd5c;
		animation-delay: 3.8s;
	}

	.yellow:after {
		border-color: transparent transparent transparent #ffcd5c;
		animation-delay: 3.8s;
	}

	@keyframes star-ani {
		0% {
			opacity: 0;
			transform: scale(0) rotate(0) translate3d(0, 0, 0);
			-webkit-transform: scale(0) rotate(0) translate3d(0, 0, 0);
			-moz-transform: scale(0) rotate(0) translate3d(0, 0, 0);
		}

		50% {
			opacity: 1;
			transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
			-webkit-transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
			-moz-transform: scale(1) rotate(0) translate3d(-200px, 200px, 0);
		}

		100% {
			opacity: 0;
			transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
			-webkit-transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
			-moz-transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
		}
	}
	.dt_trem{
		color: #8c8c8c;
	}
	.dt_items{
		display: flex;
		justify-content: space-between;
		font-size: 28upx;
		align-items: center;
		margin-bottom: 30upx;
	}
	.dt_items:last-child{
		margin-bottom: 0;
	}
	.dt_txt{
		flex: 1;
		width: 0;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
		margin: 0 15upx;
	}
	.headImg{
		width: 50upx;
		height: 50upx;
	}
	.dt_list{
		padding: 30upx 20upx;
		background: #fff;
		border-radius: 30upx;
		margin-bottom: 30upx;
	}
	.cbus{
		padding: 0 !important;
	}
	.pdm{
		padding-bottom: 20upx;
	}
	.smname{
		font-weight: 600;
	}
	.cour{
		background: #f64573 !important;
		color: #fff;
	}
	.kj_nav{
		display: flex;
		font-size: 30upx;
		justify-content: center;
		margin-bottom: 30upx
	}
	.kj_nav_btn{
		display: flex;
		align-items: center;
		width: 250upx;
		height: 70upx;
		background: #f8f8f8;
		justify-content: center;
	}
	.kj_nav_btn:first-child{
		border-radius: 35upx 0 0 35upx;
	}
	.kj_nav_btn:last-child{
		border-radius: 0 35upx 35upx 0;
	}
	.header{
		position: relative;
		width: 100%;
		overflow: hidden;
	}
	.bg{
		width: 100%;
	}
	.kti{
		width: 180upx;
		height: 180upx;
		position: absolute;
		top:50%;
		left: 50%;
		z-index: 10;
		transform:translate(-62%,-83%);
		animation: myfirst 400ms linear infinite;
		animation-direction: alternate;
	}
	@keyframes myfirst {
	  from {
		top: 50%
	  }

	  to {
		top: 49%
	  }
	}
	.mains{
		position: relative;
		z-index: 20;
		min-height: 220px;
		background: #f8f8f8;
		padding: 0 30upx;
	}
	.addTl{
		width: 300upx;
		height: 130upx;
		background: #f64573;
		border-radius:70upx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		border:20upx solid #f8f8f8;
		position: relative;
		left: 50%;
		margin-left: -150upx;
		top:-65upx;
		font-size: 36upx;
		
	}
	.cont{
		margin: 0;
		margin-top: -70upx;
		
	}
	.kj_title{
		display: flex;
		justify-content:space-between;
		margin-bottom: 40upx;
		align-items: center;
	}
	.kj_title_left{
		font-size: 34upx;
		font-weight: 600;
	}
	.kj_title_right{
		font-size: 30upx;
		color: #6c6c6c;
	}
	.kj_list{
		background: #fff;
		border-radius: 30upx;
		padding: 30upx 30upx 0;
		margin-bottom: 60upx;
	}
	.kj_items{
		display: flex;
		justify-content: space-between;
		font-size: 26upx;
		align-items: center;
		margin-bottom: 30upx;
	}
	.kj_icon{
		width: 45upx;
		height: 45upx;
		margin-right: 10upx;
	}
	.kj_items_left{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-right: 15upx;
	}
	.kj_items_cont{
		font-size: 28upx;
		flex: 1;
		width: 0;
	}
	.name{
		font-size: 28upx;
		font-weight: 600;
	}
	.kj_items_right{
		font-size: 28upx;
		margin-left: 20upx;
		color: #8c8c8c;
	}
	.kj_footer{
		height: 100upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28upx;
		border-top: 1upx solid #dedede;
	}
	.kj_title_right-txt{
		font-size: 30upx;
		color: #f49246;
		font-size: 600;
	}
	.sh_list{
		background: #fff;
		border-radius: 30upx;
		padding: 30upx;
		display: flex;
		justify-content: space-between;
	}
	.sh_items{
		width: 100upx;
		height: 100upx;
		background: #f0f0f3;
		border-radius: 10upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28upx;
		color: #909399;
	}
	.sh_items:last-child{
		margin: 0;
	}
</style>
