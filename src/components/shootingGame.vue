<template>
	<div class="shooting-game" >
		<canvas ref="screen" class="screen"></canvas>
		<p>{{ w }}</p><p>{{ a }}</p><p>{{ s }}</p><p>{{ d }}</p>
	</div>
</template>

<script>
import Img from '../assets/logo.png'
/*import eventHub from './eventHub.js'*/
var img = new Image()
img.src = Img

export default {
	name: 'shootingGame',
	data(){
		return {
			w:0, s:0, a:0, d:0, x:0, y:0,
			player: {
				image: img,
				x: 0,
				y: 0,
				canvas: null,
				context: null,
			}
		}
	},
	mounted() {
		this.player.canvas = this.$refs.screen
		this.player.context = this.player.canvas.getContext('2d')
		window.addEventListener('keydown', this.keyDownEvent)
		window.addEventListener('keyup', this.keyUpEvent)
	},
	beforeDestroyed() {
		window.removeEventListener('keydown', this.keyDownEvent)
	},
	methods: {
		update() {
			this.x = -this.a + this.d
			this.y = -this.w + this.s
			this.player.x = this.x			
			this.player.y = this.y
			this.player.context.drawImage(this.player.image, this.player.x, this.player.y, 15, 20)
		},
		keyDownEvent(event) {
			if (event.key == 'w') {
				this.w = 1
			}
			if (event.key == 'a') {
				this.a = 1	
			}	
			if (event.key == 's') {
				this.s = 1		
			}
			if (event.key == 'd') {
				this.d = 1
			}
			console.log(this.w, this.a, this.s, this.d)
			this.update()
		},
		keyUpEvent(event) {
			if (event.key == 'w') {
				this.w = 0
			}
			if (event.key == 'a') {
				this.a = 0	
			}	
			if (event.key == 's') {
				this.s = 0		
			}
			if (event.key == 'd') {
				this.d = 0
			}
			console.log(this.w, this.a, this.s, this.d)
			this.update()
		},
	},
	computed: {
		
	},
}

</script>

<style scoped>
canvas.screen{
	display: inline-block;
	flex-wrap: wrap;
	margin: 20px;
	border: 1px solid black;
	width: 300px;
	height: 300px;
}
</style>