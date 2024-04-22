const roomDimensions = {
    width: 50,
    length: 100,
    getArea() {
        return this.width * this.length;
    },
    bindGetArea() {
        return this.getArea.bind(this);
    }
};

const boundGetArea = roomDimensions.bindGetArea();
