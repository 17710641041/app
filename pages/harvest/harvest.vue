<template>
	<view class="main">
		<timeline>
			<timelineItem leftTime='2020-01-02'>
				<view class="tripItem">
					<view class="title">经历了千心万苦终于得到了分红币</view>
					<view class="tips">时间：3:15</view>
				</view>
			</timelineItem>
			<timelineItem leftTime='2020-01-01'>
				<view class="tripItem">
					<view class="title">您接收了健康教育内容推送</view>
					<view class="tips">时间：3:25</view>
				</view>
				<view class="tripItem">
					<view class="title">您接收了健康教育内容推送</view>
					<view class="tips">时间：3:45</view>
				</view>
			</timelineItem>
		</timeline>
	</view>
</template>

<script>
	import timeline from '../../components/chenbin-timeline/timeLine.vue'
	import timelineItem from '../../components/chenbin-timeline/timelineItem.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			timeline,
			timelineItem
		},
		methods: {
			
		}
	}
</script>

<style>
.main{
	padding-top: 40upx;
}
.tips {
	font-size:22upx;
	font-family:PingFangSC-Regular,PingFang SC;
	font-weight:400;
	color:rgba(153,153,153,1);
	margin-top: 20upx;

}
.title {
	font-size:28upx;
	font-family:PingFangSC-Medium,PingFang SC;
	font-weight:500;
	color:rgba(51,51,51,1);
}
.tripItem {
	height:140upx;
	padding: 20upx 30upx;
	box-sizing: border-box;
	background:rgba(255,255,255,1);
	box-shadow:0px 0px 20upx 0px rgba(0,0,0,0.08);
	border-radius:10upx;
	margin-bottom: 30upx;
}
</style>
