<template>
	<view class="timelineItem">
		<view class="timeItem">
			<view class="leftTime">
				{{leftTime}}
			</view>
			<view class="line">
				<view class="out" :style="{background: color == '' ? '' : color}">
					<view class="inner" :style="{background: color == '' ? '' : color}"></view>
				</view>
			</view>
			<view class="rightContent">
				<slot></slot>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			leftTime:{
				type:String,
				default:''
			},
			color:{
				type:String,
				default:''
			}
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.leftTime {
		width: 135upx;
		padding: 0 10upx;
		font-size:22upx;
		font-family:PingFangSC-Medium,PingFang SC;
		font-weight:500;
		color:rgba(51,51,51,1);
		margin-right: 10upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.line {
		width: 2upx;
		background:#ffd5bc;
		position: relative;
	}
	.out {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 28upx;
		height: 28upx;
		background : rgba(236,104,23,0.6);
		border-radius: 50%;
	}
	.inner {
		width: 18upx;
		height: 18upx;
		background : rgba(236,104,23,1);
		border-radius: 50%;
	}
	.rightContent {
		flex: 1;
		padding: 0 10upx 40upx;
		margin-left: 20upx;
		min-height: 50upx;
	}
	.timeItem {
		display: flex;
	}
</style>
