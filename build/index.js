
class PomodoroTimer extends React.Component {
    constructor() {
        super();
        this.state = { timeElapsed: 0 };
    }
    totalTime(timea, timeb) {
        return timea + timeb;
    }

    componentDidMount() {
        this.interval = setInterval(this.elapsedTime.bind(this), 1000);
        this.setState({ start: new Date() });
    }
    elapsedTime() {
        //how much time has elapsed
        // let timeElapsed = Curenttime- Starttime

        let timeElapsed = Math.floor((new Date() - this.state.start) / 1000);
        this.setState({ timeElapsed: timeElapsed });

        if (this.state.timeElapsed >= this.props.workingTime * 60) {
            clearInterval(this.interval);
            alert("Time for a break!");
        }
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h2",
                null,
                "This timer runs for ",
                this.props.workingTime,
                " minutes followed by a rest of ",
                this.props.restingTime,
                " minutes. For a total time of ",
                this.totalTime(this.props.restingTime, this.props.workingTime),
                " minutes."
            ),
            React.createElement("br", null),
            " ",
            React.createElement(
                "p",
                null,
                "Here are ",
                this.state.timeElapsed,
                " seconds elapsed"
            )
        );
    }
}
ReactDOM.render(React.createElement(PomodoroTimer, { workingTime: 1, restingTime: 6 }), document.getElementById('app'));