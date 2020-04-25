<template>
	<view class="content">
		
		<view class="row b-b">
			<text class="tit">联系人</text>
			<input class="input" type="text" v-model="addressData.consigner" placeholder="收货人姓名" placeholder-class="placeholder" />
		</view>
		
		<view class="row b-b">
			<text class="tit">手机号</text>
			<input class="input" type="number" v-model="addressData.mobile" placeholder="收货人手机号码" placeholder-class="placeholder" />
		</view>
		
		<view class="row b-b">
			<text class="tit">地址</text>
			<text @tap="popup_bottom()" class="input">
				{{address}}
			</text>
			<text class="yticon icon-shouhuodizhi"></text>
		</view>
		
		<view class="row b-b"> 
			<text class="tit">门牌号</text>
			<input class="input" type="text" v-model="addressData.address" placeholder="楼号、门牌" placeholder-class="placeholder" />
		</view>
		
		<view class="row b-b">
			<text class="tit">邮编</text>
			<input class="input" type="text" v-model="addressData.zip_code" placeholder="邮编" placeholder-class="placeholder" />
		</view>
		
		<view class="row default-row">
			<text class="tit">设为默认</text>
			<switch :checked="addressData.is_default" color="#fa436a" @change="switchChange" />
		</view>
		
		<button class="add-btn" @click="confirm">提交</button>
		
		<addRess ref="linkAddress" :height="height" @confirmCallback="confirmCallback"></addRess>
	</view>
</template>

<script>
	import {contactInterface} from '@/libs/api.js';
	import http from '@/libs/http.js';
	import addRess from '../../components/address/address.vue'
	export default {
		components:{
			addRess
		},
		data() {
			return {
				height: '500px',
				address:'请选择地址',
				hasLogin: false,
				userInfo:'',
				addressDataId:'',
				addressData: {
					consigner: '', //收件人
					uid : '', //用户id
					mobile: '', //收货人手机号
					province : '', //省id
					city:'', //	城市id
					district:'', //区(街道)id
					address: '', //详细地址
					zip_code: '', //邮编
					is_default: false //是否为默认地址
				}
			}
		},
		onLoad(option){
			console.log(option)
			let title = '新增收货地址';
			if(option.type==='edit'){
				title = '编辑收货地址'
				let data = JSON.parse(option.data);
				
				if(data.is_default){
					data.is_default  = true;
				}else{
					data.is_default  = false;
				}
				this.addressData = data;
				this.address = data.address_info;
				console.log("123",this.addressData )
			}
			this.manageType = option.type;
			uni.setNavigationBarTitle({
				title
			})
		},
		onShow() {
			const user = uni.getStorageSync('user');
			if(user){
				this.hasLogin = true;
				this.userInfo = user
			}
			this.addressData.uid = this.userInfo.uid;
		},
		methods: {
			
			//点击弹出弹窗
			popup_bottom() {
				this.height = '550rpx';
				//显示
				this.show_popup();
			},
			//显示弹窗
			show_popup(){
				this.$refs.linkAddress.show();
			},
			//回掉
			confirmCallback(val) {
				this.addressData.province = val.province_id;
				this.addressData.city = val.city_id;
				this.addressData.district = val.district_id;
				this.address = val.province+val.city+val.district;
			},
			switchChange(e){
				console.log("kankan",e.detail.value)
				this.addressData.is_default = e.detail.value;
			},
			
			//地图选择地址
			chooseLocation(){
				uni.getLocation({
				    type: 'wgs84',
					geocode:true,
				    success: function (res) {
				        console.log(res)
				    }
				});
				// uni.chooseLocation({
				// 	success: (data)=> {
				// 		this.addressData.addressName = data.name;
				// 		this.addressData.address = data.name;
				// 	}
				// })
			},
			
			//提交
			confirm(){
				let _this = this;
				let data = this.addressData;
				console.log(data)
				
				if(!data.consigner){
					this.$api.msg('请填写收货人姓名');
					return;
				}
				if(!/(^1[3|4|5|7|8][0-9]{9}$)/.test(data.mobile)){
					this.$api.msg('请输入正确的手机号码');
					return;
				}
				if(!data.province && !data.city && !data.district){
					this.$api.msg('请选择收货地址');
					return;
				}
				if(!data.address){
					this.$api.msg('请填写门牌号信息');
					return;
				}
				if(!data.zip_code){
					this.$api.msg('请输入邮政编号');
					return;
				}
				if(data.is_default){
					data.is_default = '1';
				}else{
					data.is_default = '0';
				}
				console.log("提交数据",data)
				if(this.manageType=='edit'){
					let opts={ url: contactInterface.operationAddress, method: 'post'};
					http.httpRequest(opts, data).then(res => {
						if(res.data.code==1){
							this.$api.msg(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
							uni.navigateBack()
						}else{
							this.$api.msg(`系统错误`);
						}
					},error => {console.log(error);})
				}else{
					let opts={ url: contactInterface.addressInsert, method: 'post'};
					http.httpRequest(opts, data).then(res => {
						if(res.data.code==1){
							this.$api.msg(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
							uni.navigateBack()
						}else{
							this.$api.msg(`系统错误`);
						}
					},error => {console.log(error);})
				}
				
				//this.$api.prePage()获取上一页实例，可直接调用上页所有数据和方法，在App.vue定义
				// this.$api.prePage().refreshList(data, this.manageType);
				// this.$api.msg(`地址${this.manageType=='edit' ? '修改': '添加'}成功`);
				// setTimeout(()=>{
				// 	uni.navigateBack()
				// }, 800)
			},
		}
	}
</script>

<style lang="scss">
	page{
		background: $page-color-base;
		padding-top: 16upx;
	}

	.row{
		display: flex;
		align-items: center;
		position: relative;
		padding:0 30upx;
		height: 110upx;
		background: #fff;
		
		.tit{
			flex-shrink: 0;
			width: 120upx;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.input{
			flex: 1;
			font-size: 30upx;
			color: $font-color-dark;
		}
		.icon-shouhuodizhi{
			font-size: 36upx;
			color: $font-color-light;
		}
	}
	.default-row{
		margin-top: 16upx;
		.tit{
			flex: 1;
		}
		switch{
			transform: translateX(16upx) scale(.9);
		}
	}
	.add-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		margin: 60upx auto;
		font-size: $font-lg;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
</style>
