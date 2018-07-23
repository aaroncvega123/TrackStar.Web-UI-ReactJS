import React from 'react';
import ReactDOM from 'react-dom';

class ReportApp extends React.Component {
    render() {
        return createPanel(<Content/>);
    }
}

class SideBar extends React.Component {

    render() {
        var borderStyle = {
            borderRight: '1px solid lightgrey',
            height: '50vh',
        }
        var listItems = ['Blah', 'Blah', 'Blah', 'Blah', 'Blah']
        return (
            <div id="side-bar" class="col-xs-3" style={borderStyle}>
                <ul class="list-group">
                    {
                        listItems.map(function (item, index)
                            {
                            return <li class="list-group-item" key={index}> {item} </li>;
                            })
                    }
                </ul>
            </div>
        );
    }
}

class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = null;
    }

    getParentState() {
        return this.props.state;
    }

    updateParentState(event) {
        this.props.callback(this.state);
    }

    renderMainViewItem(i) {
        return (
            <li class="list-group-item">
                Hello world
            </li>
        );
    }

    renderMainViewWithLoop()
    {
        var contentLength = 100;

        var items = [];
        for (var i = 0; i < contentLength; i++) {
            items.push(this.renderMainViewItem(i));
        }
        return items;
    }

    onItemClick(i)
    {
        this.state = getParentState();
        if (!event.ctrlKey) {

        }

        toggleItem(i);
    }

    toggleItem(i)
    {
        const bootstrapClass = state.bootstrapClass.slice();
        const active = state.active.slice();

        if (!active[i]) {
            bootstrapClass[i] = "list-group-item active";
        } else {
            bootstrapClass[i] = "list-group-item";
        }

        active[i] = !active[i];

        this.state = {
            boostrapClass: bootstrapClass,
            active: active
        }


    }


    render()
    {

        var scrollableDivStyle = {
            height: '50vh',
            overflowY: 'scroll',
        }
        
        return (
            <div onClick={this.updateParentState.bind(this)} class="col-xs-9">
                <div style={scrollableDivStyle}>
                    <ul class="list-group">
                        {this.renderMainViewWithLoop()}
                    </ul>
                </div>
            </div>
        );
    }
}

class Footer extends React.Component {
    updateParentState(event) {
        this.props.callback("Footer state");
    }

    render() {
        return (
            <div onClick={this.updateParentState.bind(this)} class="col-xs-12">
                Content
            </div>
        );
    }
}

class Content extends React.Component {
    constructor() {
        super();
        this.ARRAY_SIZE = 10;
        this.state = {
            bootstrapClass: Array(this.ARRAY_SIZE).fill("list-group-item"),
            active: Array(this.ARRAY_SIZE).fill(false),
        }
    }

    callbackFunc(state) {
        this.state = {
            bootstrapClass: state.bootstrapClass,
            active: state.active
        };
    }

    render() {
        var upperSectionStyle = {
            borderBottom: '1px solid lightgrey',
        }

        return (
            <div>
                <div class="row" style={upperSectionStyle}>
                    <SideBar />
                    <MainView callback={this.callbackFunc.bind(this)} parentState={this.state}/>
                </div>
                <div class="row">
                    <Footer parentState={this.state}/>
                </div>
            </div>
        );
    }
}

function createPanel(component){
    return(
        <div class = "panel-group" >
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" href="#collapse1">
                            Sample App
                        </a>
                    </h4>
                </div>
                <div id="collapse1" class="panel-collapse collapse">
                    {component}
                </div>
            </div>
        </div>
    );
}



export default ReportApp;