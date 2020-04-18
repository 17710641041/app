<template>
	<view class="home">
		<zhongchao :slist="list" @jump_write="jump_write"></zhongchao>
	</view>
</template>

<script> 
	import zhongchao from '@/components/qy-zhongcao/zhongcao'
	export default {
		data() {
			return { 
				list: [{
					"id": 4,
					"user_id": 32,
					"title": "我的中式婚礼",
					"article": "穿一件适合自己并自己喜欢的嫁衣嫁给心爱的人是最大的幸福，婚期一定我就在婚纱店试，试了好多都不和心意，要不穿着不理想要不就是价格太高，后来我就在网上找了好久，选了好多家最后决定这一家，收到货之后我和我家人都很满意 ，中袖的设计不但遮住了我的小粗胳膊而上面的刺绣非常精美，胸前的刺绣非常好看，衣服的塑形效果超级棒，显得腰好细，老公还说一握就没了，腰间的层次很好就是是有小肚肚的女生也完全看不出来，裙摆垂感很好很有质感，大家都说看着也不想几百块的婚纱，本来还怕会不会扎，结果完全不用担心一点都不扎，简直太喜欢了，忍不住写了这么多评价，我还要谢谢客服小姐姐推荐的码数完全适合我，笔芯，大爱。",
					"goods_id": 24,
					"sort": 3,
					"region_id": 2,
					"status": 2,
					"create_time": "2019-11-30",
					"image": [require("@/static/imgs/4.jpg"),
						require("@/static/imgs/2.jpg"),
						require("@/static/imgs/3.jpg")
					],
					"user": {
						"id": 32,
						"nickname": "美少女",
						"headpic": require("@/static/imgs/head1.jpg")
					},
					"goods": {
						"id": 24,
						"goods_name": "秀禾服新娘2019新款中式婚纱礼服凤冠霞帔结婚古装嫁衣敬酒秀和服",
						"img_id": 178,
						"price": "3600.00",
						"vip_price": "18600.00",
						"state": 1,
						"imgs":require("@/static/imgs/1.jpg"),
					}
				}, {
					"id": 3,
					"user_id": 32,
					"title": "完美的婚礼",
					"article": "买到手就试穿了下，总体来说还是挺修身的，感觉或许开始买大一号，但又觉得就没有那个感觉了。",
					"goods_id": 24,
					"sort": 2,
					"region_id": 2,
					"status": 2,
					"create_time": "2019-11-30",
					"image": [require("@/static/imgs/10.jpg"),
						require("@/static/imgs/18.jpg"),
						require("@/static/imgs/37.jpg"),
						require("@/static/imgs/04.jpg"),
						require("@/static/imgs/15.jpg"),
						require("@/static/imgs/28.jpg")
					],
					"user": {
						"id": 32,
						"nickname": "放电",
						"headpic": require("@/static/imgs/head.jpg")
					},
					"goods": {
						"id": 24,
						"goods_name": "简约一字肩婚纱2019新款新娘礼服小个子森系超仙梦幻冬季奢华圣母",
						"img_id": 178,
						"price": "1960.00",
						"vip_price": "1860.00",
						"state": 1,
						"imgs": require("@/static/imgs/07.jpg")
					}
				}],
			}
		},
		components: { 
			zhongchao
		}, 
		onShow() { 
			
		},
		methods: {	
			jump_write(){
				uni.navigateTo({
					url: `/pages/game/write`
				})
			}
		}
	}
</script>

<style lang='scss'>
 
</style>
