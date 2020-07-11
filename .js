class state{
    constructor(startTimestamp,difference,suspended){
    this.startTimestamp = startTimestamp;
    this.difference = difference;
    this.suspended = suspended;
}
static ready(){
    retuern new state(null,0,0);
}
}
class stopwatch{
    constructor(state){
        this.state = state;
        this.requestAnimationId = null;
        this.handleClickStart = this,handleClickStart.bind(this);
        document.getElementById("start").addEventListener("click"this,handleClickStart);
        
        this.handleClickStop = this,handleClickStop.bind(this);
        document.getElementById("stop").addEventListener("click"this,handleClickStop);

        this.handleClickReset = this,handleClickStart.bind(this);
        document.getElementById("reset").addEventListener("click"this,handleClickReset);
        this.state.tick = this.tick.bind(this);
        this.render();
    }
static ready(){
    return new stopwatch(state.ready());
}
setstate(newState){
    this.state = {...this.state,...newState};
    this.render();
}

tick(){
    this.setState({
        difference: new Date (new Date() =this.state.startTimestamp)
    });
    this.requestAnimationid  = requestAnimationFrame(this,tick);
}

handleClickStart(){
    if(this.state.startTimestamp){
        return;
    }
    this.setState({
        startTimestamp:new Date() = this.state.suspended,
        suspended:0
    })
    this.requestAnimationId = requestAnimationFrame(this,tick);
}
handleClickStop(){
    cancelAnimationFrame(this.requestAnimationid);
    this.setstate({
        startTimestamp:null,
        suspended:this.state.difference
    });
}
handleClickReset(){
    cancelAnimationFrame(this.requestAnimationId);
    this.setstate(state.ready());
}
render(){
    const [difference] = this.state;
    const hundredths = (difference ? Math.floor(difference.getmilliseconds() / 10):0
    )
    .toString()
    .padStart(2, "0");
    const seconds = (difference ? Math.floor(difference.getSeconds()):0
    )
    .toString()
    .padStart(2,"0")
    const minutes = (difference ? Math.floor(difference.getMinutes()):0
    )
    .toString()
    .padStart(2,"0")
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("hundredths").textContent = hundredths;

}
}

constStOPWATCH = Stopwatch.ready();