<template>
	<view class="shequ">
		<scroll-view class="left" scroll-y>
			<view v-for="item in menus" :key="item.id" class="menu-item" :class="active===item.id?'active':''" @click="getPictures(item.id)" >{{item.title}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="(item,index) in pictures" :key="index"  @click="preViewImage(index)">
				<image :src="item.url">
				<text>{{item.desc}}</text>
			</view>
			<view v-if="pictures.length===0" class="empty">暂无数据</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active:'',
				menus:[],
				pictures:[]
			};
		},
		async created() {
			const result=await this.$request({
				url:'picture/getCateGorys'
			});
			this.menus=result;
			if(result.length>0){
				await this.getPictures(result[0].id);
			}
		},
		methods:{
			async getPictures(id){
				this.active=id;
				const result=await this.$request({
					url:`picture/getPictures?id=${id}`
				})
				this.pictures=result;
			},
			preViewImage(current){
				const urls=this.pictures.map(item=>item.url);
				uni.previewImage({
					urls,
					current,
					indicator:'number',
					loop:true
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		height:100%;
	}
	.shequ {
		height: 100%;
		display: flex;
		.left{
			height: 100%;
			width:180rpx;
			border-right:1px solid $uni-border-color;
			
			.menu-item{
				height:45px;
				line-height: 45px;
				color:#333333;
				text-align: center;
				font-size: 30rpx;
				border-top:1px solid $uni-border-color;
			}
			
			.menu-item.active{
				background-color: $uni-color-primary;
				color: $uni-bg-color;
			}
		}
		.right{
			height:100%;
			width:540rpx;
			margin:10rpx auto;
			.item{
				image{
					width:540rpx;
					height:540rpx;
					border-radius:5px;
				}
				text{
					font-size: 30rpx;
					line-height: 30px;
				}
			}
			.empty{
				height: 50rpx;
				line-height: 50rpx;
				text-align: center;
				padding:6rpx 0;
			}
		}
	}
</style>
