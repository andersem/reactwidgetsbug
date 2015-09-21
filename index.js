var React = require('react');
var DateTimePicker = require('react-widgets').DateTimePicker;

var Hello = React.createClass({
    getInitialState () {
        return {
            myDate: new Date()
        }
    },
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.myDate);
    },
    handleDateTimeChange(dt, dtstring) {
        console.log("Should change");
        this.setState({myDate: dt});
    },

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <DateTimePicker value={this.state.myDate} onChange={this.handleDateTimeChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );

    }
});

React.render(<Hello />, document.getElementById('reactwidgetsapp'));

