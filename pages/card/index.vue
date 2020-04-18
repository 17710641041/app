<template>
  <view class="hm-goods-card">
    <view class="list">
		<view class="goods">
			<view class="wrap">
				<image class="pic" :src="options.pic"></image>
			</view>
			<view class="block">
				<text class="tradeName">{{ options.tradeName }}</text>
				<text class="describe">{{ options.describe }}</text>
			</view>
		</view>
		<view class="goods">
			<view class="wrap">
				<image class="pic" :src="options.pic"></image>
			</view>
			<view class="block">
				<text class="tradeName">{{ options.tradeName }}</text>
				<text class="describe">{{ options.describe }}</text>
			</view>
		</view>
		<view class="goods">
			<view class="wrap">
				<image class="pic" :src="options.pic"></image>
			</view>
			<view class="block">
				<text class="tradeName">{{ options.tradeName }}</text>
				<text class="describe">{{ options.describe }}</text>
			</view>
		</view>
		<view class="goods">
			<view class="wrap">
				<image class="pic" :src="options.pic"></image>
			</view>
			<view class="block">
				<text class="tradeName">{{ options.tradeName }}</text>
				<text class="describe">{{ options.describe }}</text>
			</view>
		</view>
		<view class="goods">
			<view class="wrap">
				<image class="pic" :src="options.pic"></image>
			</view>
			<view class="block">
				<text class="tradeName">{{ options.tradeName }}</text>
				<text class="describe">{{ options.describe }}</text>
			</view>
		</view>
		<view class="goods">
			<view class="wrap">
				<image class="pic" :src="options.pic"></image>
			</view>
			<view class="block">
				<text class="tradeName">{{ options.tradeName }}</text>
				<text class="describe">{{ options.describe }}</text>
			</view>
		</view>
		<view class="goods">
			<view class="wrap">
				<image class="pic" :src="options.pic"></image>
			</view>
			<view class="block">
				<text class="tradeName">{{ options.tradeName }}</text>
				<text class="describe">{{ options.describe }}</text>
			</view>
		</view>
		<view class="goods">
			<view class="wrap">
				<image class="pic" :src="options.pic"></image>
			</view>
			<view class="block">
				<text class="tradeName">{{ options.tradeName }}</text>
				<text class="describe">{{ options.describe }}</text>
			</view>
		</view>
	</view>
  </view>
</template>
<script>
export default {
  name: 'HmGoodsCard',
  props: {
    dataId: {
      type: String,
      default: 'hm-goods-card'
    },
    options: {
      type: Object,
      default: function() {
        return {
          title: '热门产品',
          titleimg:
            './images/img_25335_0_0.png',
          pic:
            './images/img_25335_0_1.png',
          tradeName: '圆形户外搁脚凳',
          describe: '搁脚凳',
          commodity: '凳子',
          img:
            './images/img_25335_0_2.png',
          secondName: '深灰色翼背',
          secondDescribe: '椅子第1版',
          secondcommodity: '椅子',
          smallItem:
            './images/img_25335_0_3.png',
          thirdName: '简易木端',
          thirdDescribe: '小号桌',
          thirdcommodity: '桌子'
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style>
@import './index.response.css';
</style>
