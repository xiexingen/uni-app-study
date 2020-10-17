<template>
	<view>
		<swiper indicator-dots autoplay circular>
			<swiper-item v-for="item in swapers" :key="item.serial_no">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swapers:[]
			}
		},
		created() {
				this.getSwapers();
		},
		methods: {
			async getSwapers(){
				const result=await this.$request({
					url:'home/getSwapers'
				})
				this.swapers=result;
			}
		}
	}
</script>

<style lang="scss">
	swiper{
		width:750rpx;
		height:375rpx;
		image{
			width:100%;
			height:100%;
		}
	}
</style>
