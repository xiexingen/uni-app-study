<template>
	<view>
		<view class="new-item" v-for="item in dataSource" :key="item._id" @click="viewDetail(item._id)">
			<image class="left-image" :src="item.main_image"></image>
			<view class="right">
				<view class="title">{{item.title}}</view>
				<view class="info">
					<text>发表时间:{{item.publish_time | formatDateTime}}</text>
					<text class="view-count">浏览:{{item.view}}</text>
				</view>
			</view>
		</view>
		<xw-empty v-if="dataSource.length===0" text="暂无数据" textColor="#777777"></xw-empty>
	</view>
</template>

<script>
	import Empty from '@/components/xw-empty/xw-empty'
	export default {
		props:['dataSource'],
		components:{
			'xw-empty':	Empty
		},
		filters:{
			formatDateTime(v){
				return ` ${v}`;
			}
		},
		methods:{
			viewDetail(id){
				this.$emit('viewDetail',id)
			}
		}
	}
</script>

<style lang="scss">
	.new-item {
		display: flex;
		padding:10rpx 20rpx;
		border-bottom: 1px solid $uni-color-primary;
		.left-image{
			min-width:200rpx;
			max-width:200rpx;
			height:150rpx;
		}
		.right{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin-left:15rpx;
			
			.title{
				font-size: 30rpx;
			}
			.info{
				font-size:24rpx;
				.view-count{
					margin-left:100rpx;
				}
			}
		}
	}
</style>
