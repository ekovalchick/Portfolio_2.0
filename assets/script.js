// lava code start
const app = {
data() {
    return {
      circle1: { x: 400, y: 200, xSpeed: 0.2, ySpeed: 0.34 },
      circle2: { x: 600, y: 400, xSpeed: -0.5, ySpeed: 0.5 },
      circle3: { x: 800, y: 600, xSpeed: 0.3, ySpeed: 0.6 },
      circle4: { x: 1000, y: 500, xSpeed: -0.1, ySpeed: 0.6 },
      circle5: { x: 900, y: 300, xSpeed: -0.2, ySpeed: 0.3 },
      bounds: {
        minX: -150,
        minY: -150,
        maxX: window.innerWidth + 100,
        maxY: window.innerHeight + 100,
      },
    };
  },
  mounted() {
    setInterval(() => {
      this.updateCirclePosition(this.circle1);
      this.updateCirclePosition(this.circle2);
      this.updateCirclePosition(this.circle3);
      this.updateCirclePosition(this.circle4);
      this.updateCirclePosition(this.circle5);
    }, 10);
  },
  methods: {
    updateCirclePosition(circle) {
      circle.x += circle.xSpeed;
      circle.y += circle.ySpeed;
      if (circle.x < this.bounds.minX) {
        circle.x = this.bounds.minX + Math.random() * 10;
        circle.xSpeed = Math.abs(circle.xSpeed);
      } else if (circle.x > this.bounds.maxX) {
        circle.x = this.bounds.maxX - Math.random() * 10;
        circle.xSpeed = -Math.abs(circle.xSpeed);
      }
      if (circle.y < this.bounds.minY) {
        circle.y = this.bounds.minY + Math.random() * 10;
        circle.ySpeed = Math.abs(circle.ySpeed);
      } else if (circle.y > this.bounds.maxY) {
        circle.y = this.bounds.maxY - Math.random() * 10;
        circle.ySpeed = -Math.abs(circle.ySpeed);
      }
    },
  }


};

Vue.createApp(app).mount('#app')

//lava code end