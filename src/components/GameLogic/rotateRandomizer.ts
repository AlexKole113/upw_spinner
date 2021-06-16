const rotateRandomizer = (minAngle:number, maxAngle:number) :number => Math.floor( Math.random() * (maxAngle - minAngle)) + minAngle;

export default rotateRandomizer;
