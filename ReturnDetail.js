import React from 'react';
import ReactDOM from 'react-dom';

class PeriodEndMarketValues extends React.Component {
    render() {
        return (
            <div>
                <div class="row module-header-gradient-2">
                    <div class="module-header-2 ">
                        Period End Market Values
                    </div>
                </div>
                <div>
                    Equity:<br />
                    <input type="text" readOnly />
                </div>
                <div>
                    Cash:<br />
                    <input type="text" readOnly />
                </div>
                <div>
                    Total:<br />
                    <input type="text" readOnly />
                </div>
                <div>
                    Previous:<br />
                    <input type="text" readOnly />
                </div>
                <br />
            </div>

        );
    }
}





class ReturnDetailTable extends React.Component {
    render() {
        return (
            <table class="table">
                <thead>
                    <th class="th-sm">PT Port
                                    <i class="fa fa-sort float-left" aria-hidden="true"></i>
                    </th>
                    <th class="th-sm">PT Bench
                                    <i class="fa fa-sort float-left" aria-hidden="true"></i>
                    </th>
                    <th class="th-sm">PT Diff
                                    <i class="fa fa-sort float-left" aria-hidden="true"></i>
                    </th>
                    <th class="th-sm">AT Port
                                    <i class="fa fa-sort float-left" aria-hidden="true"></i>
                    </th>
                    <th class="th-sm">AT Bench
                                    <i class="fa fa-sort float-left" aria-hidden="true"></i>
                    </th>
                    <th class="th-sm">AT Diff
                                    <i class="fa fa-sort float-left" aria-hidden="true"></i>
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td class="col-xs-1">1.7 m</td>
                        <td class="col-xs-1">1.8 m</td>
                        <td class="col-xs-1">0.1 m</td>
                        <td class="col-xs-1">2.1 m m</td>
                        <td class="col-xs-1">2.2 m</td>
                        <td class="col-xs-1">0.1 m</td>
                    </tr>
                    <tr>
                        <td class="col-xs-1">1.7 m</td>
                        <td class="col-xs-1">1.8 m</td>
                        <td class="col-xs-1">0.1 m</td>
                        <td class="col-xs-1">2.1 m m</td>
                        <td class="col-xs-1">2.2 m</td>
                        <td class="col-xs-1">0.1 m</td>
                    </tr>
                    <tr>
                        <td class="col-xs-1">1.7 m</td>
                        <td class="col-xs-1">1.8 m</td>
                        <td class="col-xs-1">0.1 m</td>
                        <td class="col-xs-1">2.1 m m</td>
                        <td class="col-xs-1">2.2 m</td>
                        <td class="col-xs-1">0.1 m</td>
                    </tr>
                    <tr>
                        <td class="col-xs-1">1.7 m</td>
                        <td class="col-xs-1">1.8 m</td>
                        <td class="col-xs-1">0.1 m</td>
                        <td class="col-xs-1">2.1 m m</td>
                        <td class="col-xs-1">2.2 m</td>
                        <td class="col-xs-1">0.1 m</td>
                    </tr>
                    <tr>
                        <td class="col-xs-1">1.7 m</td>
                        <td class="col-xs-1">1.8 m</td>
                        <td class="col-xs-1">0.1 m</td>
                        <td class="col-xs-1">2.1 m m</td>
                        <td class="col-xs-1">2.2 m</td>
                        <td class="col-xs-1">0.1 m</td>
                    </tr>
                    <tr>
                        <td class="col-xs-1">1.7 m</td>
                        <td class="col-xs-1">1.8 m</td>
                        <td class="col-xs-1">0.1 m</td>
                        <td class="col-xs-1">2.1 m m</td>
                        <td class="col-xs-1">2.2 m</td>
                        <td class="col-xs-1">0.1 m</td>
                    </tr>
                    <tr>
                        <td class="col-xs-1">1.7 m</td>
                        <td class="col-xs-1">1.8 m</td>
                        <td class="col-xs-1">0.1 m</td>
                        <td class="col-xs-1">2.1 m m</td>
                        <td class="col-xs-1">2.2 m</td>
                        <td class="col-xs-1">0.1 m</td>
                    </tr>
                    <tr>
                        <td class="col-xs-1">1.7 m</td>
                        <td class="col-xs-1">1.8 m</td>
                        <td class="col-xs-1">0.1 m</td>
                        <td class="col-xs-1">2.1 m m</td>
                        <td class="col-xs-1">2.2 m</td>
                        <td class="col-xs-1">0.1 m</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

class ReturnDetail extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="col-xs-12 row object-border no-outter-padding module-header-gradient-1">
                    <div class="module-header-1">
                        Return Detail
                    </div>
                </div>
                <div class="col-xs-12 row no-outter-padding">
                    <div class="col-xs-3 object-border">
                        <PeriodEndMarketValues />
                    </div>
                    <div class="col-xs-9">
                        <ReturnDetailTable />
                    </div>
                </div>
            </div>
        );
    }
}

export default ReturnDetail;