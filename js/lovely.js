new Vue({
	el : "#main",
	data : {
		msg : "春水初生，春林初盛，春风十里，不如你。",
		intervaTimer: null
	},
	methods : {
		textMove(){
			if(this.intervaTimer != null){
				return;
			}
			this.intervaTimer = setInterval(() => {
				var start = this.msg.substring(0, 1);
				var end = this.msg.substring(1);
				this.msg = end + start;
			},400)
		},
		stop(){
			clearInterval(this.intervaTimer);
			this.intervaTimer = null;
		}
	}
})
























































































































