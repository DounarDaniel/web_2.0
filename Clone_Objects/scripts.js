const rectangle = {
    width: 4,
    height: 5,
    getArea() {
      return this.width * this.height;
    },
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  };
  
  console.log(rectangle.getArea());
  console.log(rectangle.getPerimeter());