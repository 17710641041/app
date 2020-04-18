<template>
	<view class="container" :style="{paddingTop: `${80+StatusBar}px`}">
		<view class="zaiui-head-search-box"
			style="background: radial-gradient(ellipse, #f23a3a, #f75f30);"
			:style="{paddingTop: `${StatusBar}px`}">
			<!--搜索框-->
			<view class="cu-bar search zaiui-search-box">
				<view class="search-form round">
					<text>口罩</text>
				</view>
				<view class="action text-white">消息</view>
			</view>
			<!--分类-->
			<view class="zaiui-flex-tab">
				<view class="flex text-white">
					<view class="basis-xxl">
						<scroll-view scroll-x class="nav z" scroll-with-animation :scroll-left="headTab.scrollLeft">
							<block v-for="(item,index) in headTab.list" :key="index">
								<view class="cu-item" :class="index==headTab.TabCur?'select':''" @tap="tabSelect" :data-index="index" :data-id="item.category_id">
									<view>{{item.category_name}}</view>
									<view class="tab-dot bg-white"/>
								</view>
							</block>
						</scroll-view>
					</view>
				</view>
			</view>
		</view>
		<view class="homeMain" v-if="headTab.TabCur==0">
			<!-- 头部轮播 -->
			<view class="carousel-section">
				<swiper class="carousel" style="background: #fff;padding-top:20upx" circular :autoplay="true" @change="swiperChange">
					<swiper-item v-for="(item, index) in carouselList" :key="index" class="carousel-item" @click="navToDetailPage({title: '轮播广告'})">
						<image :src="item.adv_image" />
					</swiper-item>
				</swiper>
				<!-- 自定义swiper指示器 -->
				<view class="swiper-dots">
					<text class="num">{{swiperCurrent+1}}</text>
					<text class="sign">/</text>
					<text class="num">{{swiperLength}}</text>
				</view>
			</view>
			<!--滑动菜单-->
			<grid-menu-list :list_data='gridMenuData' @listTap='gridMenuTap'/>
			<!-- 广告图 -->
			<!-- <view class="ad-1">
				<image :src="zhekouData.category_pic" mode="scaleToFill"></image>
			</view> -->
			
			<!-- 分类 -->
			<view class="home-type">
				<view class="type-items">
					<view class="type-items-title">低价开单</view>
					<view class="conts">
						<view class="type-items-cont">每日开单神物</view>
						<view class="type-items-img">
							<image src="../../static/temp/cate15.jpg" mode=""></image>
						</view>
					</view>
					<view class="type-items-foot">￥9.9</view>
				</view>
				<view class="type-items">
					<view class="type-items-title">高佣爆卖</view>
					<view class="conts">
						<view class="type-items-cont">轻松日入过千</view>
						<view class="type-items-img">
							<image src="../../static/temp/cate16.jpg" mode=""></image>
						</view>
					</view>
					<view class="type-items-foot">￥9.9</view>
				</view>
				<view class="type-items">
					<view class="type-items-title">蚂蚁严选</view>
					<view class="conts">
						<view class="type-items-cont">假一赔十</view>
						<view class="type-items-img">
							<image src="../../static/temp/cate17.jpg" mode=""></image>
						</view>
					</view>
					<view class="type-items-foot">￥9.9</view>
				</view>
				<view class="type-items">
					<view class="type-items-title">今日上新</view>
					<view class="conts">
						<view class="type-items-cont">每日新鲜好物</view>
						<view class="type-items-img">
							<image src="../../static/temp/cate18.jpg" mode=""></image>
						</view>
					</view>
					<view class="type-items-foot">￥9.9</view>
				</view>
			</view>
			
			<!-- 秒杀楼层 -->
			<view class="seckill-section m-t" v-if="0">
				<view class="s-header">
					<text class="tits">热销榜单</text>
					<!-- <image class="s-img" src="/static/temp/icon9.9.jpg" mode="widthFix"></image> -->
					<text class="yticon icon-you" @click="navToList(14,'热销榜单')"></text>
				</view>
				<scroll-view class="floor-list" scroll-x>
					<view class="scoll-wrapper">
						<view 
							v-for="(item, index) in miaosha" :key="index"
							class="floor-item"
							@click="navToDetailPage(item)"
						>
							<image :src="item.pic_cover_mid" mode="aspectFill"></image>
							<text class="title clamp">{{item.goods_name}}</text>
							<text class="price">{{item.display_price}}</text>
						</view>
					</view>
				</scroll-view>
			</view>
			
			<!-- <view class="card-list">
				<view class="card-head">
					<view class="card-head-title">精品女装</view>
					<view class="card-head-icon">
						<text class="cell-more yticon icon-you"></text>
					</view>
				</view>
				<view class="card-cont">
					<view class="card-cont-items">
						<view class="items-img">
							<image src="../../static/images/avatar/1.jpg" mode=""></image>
						</view>
						<view class="items-info">
							<view class="items-info-title">
								网红手机支架网课看剧更轻松网红手机支架网课看剧更轻松
							</view>
							<text class="items-info-mum">已售365套</text>
							<view class="items-info-money">￥30000</view>
						</view>
						<view class="share">
							<view class="share-title">分享赚￥251</view>
						</view>
					</view>
				</view>
			</view> -->
			
			<!--标题-->
			<view class="margin-bottom-sm zaiui-tab-list-title">
				<view class="flex flex-wrap zaiui-tab-list-flex">
					<view class="basis-sm text-right">
						<image class="img-aau" src="/static/zaiui/img/aau.png" lazy-load mode="widthFix"/>
					</view>
					<view class="basis-xs text-center">
						<text class="text-black text-xl text-bold">为您推荐</text>
					</view>
					<view class="basis-sm text-left">
						<image class="img-aau" src="/static/zaiui/img/aau.png" lazy-load mode="widthFix"/>
					</view>
				</view>
			</view>
			<!--商品列表-->
			<goods-list :list_data="goodsData" @listTap="goodsListTap"/>
			<l-load-more ref="loadMore" :isImg="isImg"></l-load-more>
		</view>
		<view class="typesMain zaiui-view-content" v-else>
			<grid-sort-list v-if="gridSortData.length > 0" :list_data="gridSortData" click="gridSortTap"></grid-sort-list>
			<!--标题-->
			<view class="margin-bottom-sm zaiui-tab-list-title">
				<view class="flex flex-wrap zaiui-tab-list-flex">
					<view class="basis-sm text-right">
						<image class="img-aau" src="/static/zaiui/img/aau.png" lazy-load mode="widthFix"/>
					</view>
					<view class="basis-xs text-center">
						<text class="text-black text-xl text-bold">为您推荐</text>
					</view>
					<view class="basis-sm text-left">
						<image class="img-aau" src="/static/zaiui/img/aau.png" lazy-load mode="widthFix"/>
					</view>
				</view>
			</view>
			<!--商品列表-->
			
			<goods-list :list_data="goodsData" @listTap="goodsListTap"/>
			
			<l-load-more ref="loadMore" :isImg="isImg"></l-load-more>
		</view>
	</view>
</template>

<script>
	import {contactInterface} from '@/libs/api.js';
	import http from '@/libs/http.js';
	import gridMenuList from '@/components/grid-menu-list/index';
	import gridSortList from '@/components/grid-menu-list/grid-sort-list';
	import goodsList from '@/components/grid-menu-list/goods-list';
	import LLoadMore from '@/components/l-load-more/l-load-more.vue';
	export default {
		components:{gridMenuList,gridSortList,goodsList,LLoadMore},
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				headTab: {
					TabCur: 0, 
					scrollLeft: 0, 
					list: [
						{
							category_id: '',
							category_name: '首页',
							category_pic: '',
							xiaji: ''
						}
					]
				},
				titleNViewBackground: '',
				swiperCurrent: 0,
				swiperLength: 0,
				carouselList: [],
				goodsList: [],
				navList:[],
				zhekouData:'',
				miaosha:'',
				jingpin:'',
				zhutui:'',
				gridMenuData:[],
				gridSortData:[],
				category_id:'',
				goodsData:[],
				pages:1,
				isError:true,
				isImg:false
			};
		},
		onPullDownRefresh(){
		    this.pages=1;
			this.goodsData = [];
		    this.gettuijian()
		},
		onReachBottom() {
			this.pages++
			this.gettuijian();
		},
		onLoad() {
			this.loadData();
			this.getBanner();
			this.getSelect();
			this.getNav();
			this.gettuijian();
		},
		methods: {
			goodsListTap(e) {
				uni.navigateTo({
					url: `/pages/product/product?id=${e.data.goodsid}`
				})
			},
			gridMenuTap(e) {
				console.log(e)
				uni.navigateTo({
					url: `/pages/product/list?category_id=${e.data.id}&title=${e.data.nav_title}`
				});
			},
			//tab分类点击
			tabSelect(e) {
				//初始化列表分类
				this.pages=1;
				this.goodsData = [];
				let index = e.currentTarget.dataset.index;
				this.category_id = e.currentTarget.dataset.id;
				this.headTab.TabCur = index;
				this.headTab.scrollLeft = (index - 1) * 60;
				uni.pageScrollTo({
				    scrollTop: 0,
				    duration: 0
				});
				for(var i = 0 ; i < this.headTab.list.length ; i++){
					//console.log(this.headTab.list[i].category_id)
					if(this.headTab.list[i].category_id == e.currentTarget.dataset.id){
						this.gridSortData = this.headTab.list[i].xiaji
					}
				}
				this.gettuijian();
			},
			//tab分类列表
			getSelect(){
				let _this = this;
				let opts={ url: contactInterface.classList, method: 'get'};
				let param={};
				http.httpRequest(opts, param).then(res => {
				  if(res.data.code == 1){
					  _this.headTab.list =  _this.headTab.list.concat(res.data.data);
				  }
				},error => {console.log(error);})
			},
			//banner轮播图
			getBanner(){
				let _this = this;
				let opts={ url: contactInterface.banner, method: 'get'};
				let param={};
				http.httpRequest(opts, param).then(res => {
				  if(res.data.code == 1){
					_this.carouselList = res.data.data;
					_this.titleNViewBackground = _this.carouselList[0].background;
					_this.swiperLength = res.data.data.length;
				  }
				},error => {console.log(error);})
			},
			//分类导航
			getNav(){
				let _this = this;
				let opts={ url: contactInterface.nav, method: 'get'};
				let param={};
				http.httpRequest(opts, param).then(res => {
				  if(res.data.code == 1){
					_this.gridMenuData = res.data.data;
				  }
				},error => {console.log(error);})
			},
			//为您推荐
			gettuijian(){
				let _this = this;
				let opts={ url: contactInterface.goodsList, method: 'get'};
				let param={category_id:this.category_id,page:this.pages};
				http.httpRequest(opts, param).then(res => {
				  if(res.data.code == 1){
					  _this.isError = false;
					  if(res.data.data){
						  if(res.data.data.length < 10){
							  _this.$refs.loadMore.$loadOver();
						  }
						_this.goodsData = _this.goodsData.concat(res.data.data);
					  }else{
						  _this.$refs.loadMore.$loadOver();
					  }
				  }else{
					  _this.$refs.loadMore.$loadError();
				  }
				  uni.stopPullDownRefresh();
				},error => {console.log(error);})
			},
			
			navToList(sid,title){
				uni.navigateTo({
					url: `/pages/product/list?category_id=${sid}&title=${title}`
				})
			},
			/**
			 * 请求静态数据只是为了代码不那么乱
			 * 分次请求未作整合
			 */
			async loadData() {
				let carouselList = await this.$api.json('carouselList');
				
				let goodsList = await this.$api.json('goodsList');
				this.goodsList = goodsList || [];
			},
			//轮播图切换修改背景色
			swiperChange(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;
				this.titleNViewBackground = this.carouselList[index].background;
			},
			//详情页
			navToDetailPage(item) {
				//测试数据没有写id，用title代替
				let id = item.title;
				uni.navigateTo({
					url: `/pages/product/product?id=${id}`
				})
			},
		},
		// #ifndef MP
		// 标题栏input搜索框点击
		onNavigationBarSearchInputClicked: async function(e) {
			uni.navigateTo({
				url: `/pages/search/search`
			})
		},
		//点击导航栏 buttons 时触发
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.$api.msg('点击了扫描');
			} else if (index === 1) {
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
		}
		// #endif
	}
</script>

<style lang="scss">
	
	.zaiui-tab-list-flex{
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 40upx 0 20upx;
	}
	.zaiui-tab-list-title {
		margin-top: 20upx;
		.img-aau {
			width: 101.81upx;
			margin-top: 12.72upx;
		}
		.text-right {
			.img-aau {
				margin-right: 14.54upx;
			}
		}
		.text-left {
			.img-aau {
				margin-left: 14.54upx;
			}
		}
	}
	.card-list{
		margin-top: 15upx;
		background: #fff;
		padding: 0 30upx 1upx;
		.card-cont{
			.card-cont-items{
				display: flex;
				position: relative;
				margin-bottom: 25upx;
				.share{
					position: absolute;
					right: 0;
					bottom: 35upx;
					font-size: 26upx;
					background: radial-gradient(ellipse, #f23a3a, #f75f30);
					border-radius: 25upx 0 0 25upx;
					padding: 2upx 20upx;
					color: #fff;
					z-index: 11;
				}
				.items-img{
					margin-right: 20upx;
					image{
						width: 200upx;
						height: 200upx;
						border-radius: 20upx;
					}
				}
				.items-info{
					padding-top: 10upx;
					.items-info-title{
						font-size: 30upx;
						overflow: hidden;
					    text-overflow: ellipsis;
					    display: -webkit-box;
					    -webkit-line-clamp: 2;
					    -webkit-box-orient: vertical;
					}
					.items-info-mum{
						font-size: 24upx;
						margin: 15upx 0;
						background: #F43F3B;
						color: #fff;
						padding: 3upx 20upx;
						border-radius: 20upx;
					}
					.items-info-money{
						font-size: 30upx;
						margin-top: 10upx;
						color: #f23a3a;
					}
				}
			}
		}
		.card-head{
			height: 100upx;
			font-size: 34upx;
			color: #666;
			display: flex;
			justify-content:space-between ;
			align-items: center;
			.card-head-icon{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 40upx;
				height: 40upx;
			}
		}
	}
	.conts{
		width: 100%;
		display: flex;
		flex-direction:column;
		align-items: center;
		//border-right: 1upx solid #f4f4f4;
	}
	.type-items:last-child .conts{
		border: 0;
	}
	.md20{
		margin-top: 15upx;
	}
	.tits{
		font-size: 34upx;
		color: #666;
	}
	.home-type{
		display: flex;
		padding: 30upx;
		background: #fff;
		margin-top: 15upx;
	}
	.type-items{
		display: flex;
		width: 0;
		flex: 1;
		flex-direction:column;
		align-items: center;
	}
	.type-items-title{
		font-size: 32upx;
		color: #666;
	}
	.type-items-cont{
		font-size: 24upx;
		margin: 8upx 0;
		color: #d08b54;
	}
	.type-items-foot{
		font-size: 24upx;
		color: #d23256;
	}
	.type-items-img image{
		width: 140upx;
		height: 140upx;
	}
	.nav{white-space: nowrap;}
	.nav.z .cu-item {
		height: 34px;
		line-height: 34px;
		position: relative;
		display: inline-block;
		margin: 0 8upx;
		padding: 0 16upx;
		font-size: 28upx;
		color: #fff;
	}
	.nav.z .cu-item.select {
		font-size: 30upx;
		.tab-dot {
			position: absolute;
			height: 8upx;
			border-radius: 20upx;
			bottom: 0;
			left: 0;
			right: 0;
			width: 40upx;
			margin: auto;
			background: #fff;
		}
	}
	.nav.z .cu-item.nf.select {
		font-size: inherit;
	}
	.nav.z .cu-item.cur {
		border-bottom: 0;
	}
	.action {
	    display: flex;
	    align-items: center;
	    justify-content: center;
		color: #fff;
		font-size: 28upx;
		margin-right: 24upx;
	}
	.cu-bar {
	    display: flex;
	    position: relative;
	    align-items: center;
	    height: 40px;
	    justify-content: space-between;
	}
	.search-form {
	    background-color: #f5f5f5;
	    line-height: 30px;
	    height: 30px;
		border-radius: 15px;
	    font-size: 26upx;
	    color: #333333;
	    flex: 1;
	    display: flex;
	    align-items: center;
	    margin: 0 24upx;
		padding-left: 20upx;
	}
	.zaiui-head-search-box {
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 9999;
		background-color: rgba(229, 77, 66,0);
		padding-top: var(--status-bar-height);
		transition: top .25s;
		padding-bottom: 10rpx;
		.zaiui-search-box {
			position: relative;
		}
		.zaiui-flex-tab {
			position: relative;
			transition: opacity .25s;
			.flex {
				.basis-xxl {
					z-index: 1;
					padding: 0 20upx;
				}
				.basis-xxs {
					flex-basis: 10%;
					z-index: 1;
					width: 10%;
				}
				.sort-icon {
					font-size: 55rpx;
					height: 64rpx;
					line-height: 64rpx;
					text-align: center;
				}
			}
		}
	}
	.pro-box-btn{
		background: #fa436a;
		color: #fff;
		width: 100%;
		text-align: center;
		padding: 5upx 0;
		border-radius: 30upx;
		font-size: 24upx;
	}
	/* #ifdef MP */
	.mp-search-box{
		position:absolute;
		left: 0;
		top: 30upx;
		z-index: 9999;
		width: 100%;
		padding: 0 80upx;
		.ser-input{
			flex:1;
			height: 56upx;
			line-height: 56upx;
			text-align: center;
			font-size: 28upx;
			color:$font-color-base;
			border-radius: 20px;
			background: rgba(255,255,255,.6);
		}
	}
	page{
		.cate-section{
			position:relative;
			z-index:5;
			border-radius:16upx 16upx 0 0;
			margin-top:-20upx;
		}
		.carousel-section{
			padding: 0;
			.carousel{
				
				.carousel-item{
					padding: 0;
				}
			}
			.swiper-dots{
				left:45upx;
				bottom:40upx;
			}
		}
	}
	/* #endif */
	
	
	page {
		background: #f5f5f5;
	}
	.m-t{
		margin-top: 16upx;
	}
	/* 头部 轮播图 */
	.carousel-section {
		position: relative;
		.titleNview-background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 426upx;
			transition: .4s;
		}
	}
	.carousel {
		width: 100%;
		height: 350upx;

		.carousel-item {
			width: 100%;
			height: 100%;
			padding: 0 28upx;
			overflow: hidden;
		}

		image {
			width: 100%;
			height: 100%;
			border-radius: 10upx;
		}
	}
	.swiper-dots {
		display: flex;
		position: absolute;
		left: 60upx;
		bottom: 15upx;
		width: 72upx;
		height: 36upx;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);
		background-size: 100% 100%;

		.num {
			width: 36upx;
			height: 36upx;
			border-radius: 50px;
			font-size: 24upx;
			color: #fff;
			text-align: center;
			line-height: 36upx;
		}

		.sign {
			position: absolute;
			top: 0;
			left: 50%;
			line-height: 36upx;
			font-size: 12upx;
			color: #fff;
			transform: translateX(-50%);
		}
	}
	
	
	
	

</style>
