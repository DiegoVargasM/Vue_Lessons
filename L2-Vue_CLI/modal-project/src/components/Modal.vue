<template>
	<div class="backdrop" ref="backdrop">
		<div class="modal" @click="closeModal" ref="modal">
			<p>Modal Content</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Modal',
	methods: {
		closeModal() {
			this.$refs.modal.style.display = 'none'
			this.$refs.backdrop.style.display = 'none'
		}
	}
}
</script>


<style>
	.modal {
		width: 400px;
		padding: 20px;
		background: white;
		margin: 100px auto;
		border-radius: 10px;
	}



	.backdrop {
		top: 0;
		left: 0;
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
	}
</style>