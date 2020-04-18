<template>
	<view>
		<view class="mian-box" :style="{paddingTop: `${CustomBar}px`}">
			<view class="headerBox" :style="{height: `${CustomBar}px`}">
				<view class="ta" :style="{height: `${StatusBar}px`}"></view>
				<view class="nav" :style="{top: `${StatusBar}px`}">
					<view
						class="header-items"
						v-for="(items,index) in nav"
						:class="{ act: tabCurrentIndex === index }" 
						:key="index"
						@click="tabClick( index, items.type)"
					>
						{{items.name}}
					</view>
				</view>
			</view>
			<ck v-if="isPages=='ck'"></ck>
			<wk v-if="isPages=='wk'"></wk>
			<pyq v-if="isPages=='pyq'"></pyq>
		</view>
	</view>
	
</template>

<script>
	import ck from './ck.vue'
	import wk from './wk.vue'
	import pyq from './pyq.vue'
	export default {
		data() {
			return {
				isPages:'wk',
				tabCurrentIndex:  1,
				nav:[{name:"创客",type:"ck"},{name:"挖矿",type:"wk"},{name:"朋友圈",type:"pyq"}],
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar
			}
		},
		onLoad(){
			
		},
		components:{
			ck,
			wk,
			pyq
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
<style scoped>
	.ta{
		background: #fff;
		width: 100%;
		position: fixed;
		top:0;
	}
	.act{
		font-size: 34upx;
		font-weight: 600;
		color: #333;
	}
	.nav{
		display: flex;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		align-items: center;
		justify-content: center;
	}
	.headerBox{
		width: 100%;
		background: #fff;
		position: fixed;
		z-index: 9999999;
		top:0;
		font-size: 30upx;
		padding-left: 20upx;
		color: #6d6d6d;
		font-weight: 600;
	}
	.header-items{
		margin: 0 15upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>