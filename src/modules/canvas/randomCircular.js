/**
 * Created by fws on 2017/11/11.
 */
export default class Circle{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = Math.random() * 10;
        this._mx = Math.random();
        this._my = Math.random();
        this.circleColor = "rgba(63,180,125,.3)";
        this.lineColor = "rgba(63,180,125,.3)";
    }
    drawCircle(ctx){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.circleColor;
        ctx.fill();
    }
    drawLine(ctx,_circle){
        let dx = this.x - _circle.x;
        let dy = this.y - _circle.y;
        let d = Math.sqrt(dx * dx + dy * dy);
        if(d < 150){
            ctx.beginPath();
            ctx.moveTo(this.x,this.y);
            ctx.lineTo(_circle.x,_circle.y);
            ctx.closePath();
            ctx.strokeStyle = this.lineColor;
            ctx.stroke();
        }
    }
    move(w,h){
        this._mx = (this.x < w && this.x > 0) ? this._mx : -(this._mx);
        this._my = (this.y < h && this.y > 0) ? this._my : -(this._my);
        this.x += this._mx;
        this.y += this._my;
    }
};