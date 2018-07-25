import React from 'react';
import ReactDOM from 'react-dom';

class ParametricFormBox extends React.Component {
    render() {
        return (
            <div>
                <div class="row object-border module-header-gradient-2">
                    <div class="module-header-2 ">
                        Parametric
                    </div>
                </div>
                <div class="row portfolio-information-module">
                    <div class="col-xs-6">
                        Short Name:
                        <input type="text" />
                    </div>
                    <div class="col-xs-6">
                        AccountID:
                        <input type="text" readOnly />
                    </div>
                </div>

            </div>

        );
    }
}

class CustodianFormBox extends React.Component {
    render() {
        return (
            <div>
                <div class="row object-border module-header-gradient-2">
                    <div class="module-header-2 ">
                        Custodian
                    </div>
                </div>
                <div class="row portfolio-information-module">
                    <div class="col-xs-6">
                        Name:
                        <input type="text" readOnly />
                    </div>
                    <div class="col-xs-6">
                        Acct No:
                        <input type="text" readOnly />
                    </div>
                </div>

            </div>
        );
    }
}

class BenchmarkFormBox extends React.Component {
    render() {
        return (
            <div>
                <div class="row object-border module-header-gradient-2">
                    <div class="module-header-2 ">
                        Benchmark
                    </div>
                </div>
                <div class="row portfolio-information-module">
                    <div class="col-xs-6">
                        Name:
                        <input type="text" readOnly />
                    </div>
                    <div class="col-xs-6">
                        Code:
                        <input type="text" readOnly />
                    </div>
                </div>
            </div>
        );
    }
}

class HistoryFormBox extends React.Component {

    render() {
        var inputBoxWidth = {
            width: '50px'
        };

        return (
            <div>
                <div class="row object-border module-header-gradient-2">
                    <div class="module-header-2 ">
                        History
                    </div>
                </div>
                <div class="row portfolio-information-module">
                    <div class="col-xs-4">
                        Incept:
                        <input style={inputBoxWidth} readOnly />
                    </div>
                    <div class="col-xs-4">
                        Report:
                        <input type="text" style={inputBoxWidth} readOnly />
                    </div>
                    <div class="col-xs-4">
                        Close:
                        <input type="text" style={inputBoxWidth} readOnly />
                    </div>
                </div>

            </div>
        );
    }
}


class PortfolioInformation extends React.Component {
    render() {
        return (
            <div class="container no-padding-right">
                <div class="col-xs-12 row object-border no-outter-padding module-header-gradient-1">
                    <div class="module-header-1">
                        Portfolio Information
                    </div>
                </div>
                <div class="col-xs-12 row no-outter-padding">
                    <div class="col-xs-6 object-border">
                        <ParametricFormBox />
                    </div>
                    <div class="col-xs-6 object-border">
                        <CustodianFormBox />
                    </div>
                </div>
                <div class="col-xs-12 row no-outter-padding">
                    <div class="col-xs-6 object-border">
                        <BenchmarkFormBox />
                    </div>
                    <div class="col-xs-6 object-border">
                        <HistoryFormBox />
                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioInformation;