<template>
	<view class="good-list">
		<good-list :dataSource="goods" />
		<view v-if="noMore" class="no-more">---- 我是有底线的 ----</view>
	</view>
</template>

<script>
	import GoodList from '@/components/good-list/index';
	export default {
		components: {
			'good-list':GoodList
		},
		data() {
			return {
				goods:[],
				noMore:false,
				page:1
			};
		},
		created() {
			this.getGoods();
		},
		methods:{
			async getGoods(){
				const result=await this.$request({
					url:`good/getGoods?page=${this.page}`
				});
				if(result.length===0){
					this.noMore=true;
					return;
				}
				this.goods=[...this.goods,...result];	
			},
		},
		// 下拉刷新
		async onPullDownRefresh() {
			this.page=1;
			this.noMore=false;
			this.goods=[];
			await this.getGoods();
			uni.stopPullDownRefresh();
		},
		// 触底加载下一页
		async onReachBottom() {
			if(this.noMore){
				return;
			}
			this.page++;
			await this.getGoods()
		}
	}
</script>

<style lang="scss">
	.good-list {
		background-color: $uni-bg-color-grey;
	}
	.no-more{
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		padding:6rpx 0;
	}
</style>
