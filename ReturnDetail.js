import React from 'react';
import ReactDOM from 'react-dom';

class PeriodEndMarketValues extends React.Component {
    render(){
        return(
            <div>
                <div>
                    Period End Market Values
                </div>
                <ul>
                    <li>Equity: 100</li>
                    <li>Cash: 100</li>
                    <li>Total: 100</li>
                    <li>Previous: 100</li>
                </ul>
            </div>
        
        );
    }
}

class ReturnDetailTable extends React.Component{
    render(){
        return(
            <table class="table">
                <thead>
                    <th class="col-xs-1">PT Port</th>
                    <th class="col-xs-1">PT Bench</th>
                    <th class="col-xs-1">PT Diff</th>
                    <th class="col-xs-1">AT Port</th>
                    <th class="col-xs-1">AT Bench</th>
                    <th class="col-xs-1">AT Diff</th> 
                </thead>
                <tbody>
                    <tr>
                    <td class="col-xs-3">John</td>
                    <td class="col-xs-3">Doe</td>
                    <td class="col-xs-6">johndoe@email.com</td>
                    </tr>
            
                    <tr>
                    <td class="col-xs-3">John</td>
                    <td class="col-xs-3">Doe</td>
                    <td class="col-xs-6">johndoe@email.com</td>
                    </tr>
                    <tr>
                    <td class="col-xs-3">John</td>
                    <td class="col-xs-3">Doe</td>
                    <td class="col-xs-6">johndoe@email.com</td>
                    </tr>
                    <tr>
                    <td class="col-xs-3">John</td>
                    <td class="col-xs-3">Doe</td>
                    <td class="col-xs-6">johndoe@email.com</td>
                    </tr>
                    <tr>
                    <td class="col-xs-3">John</td>
                    <td class="col-xs-3">Doe</td>
                    <td class="col-xs-6">johndoe@email.com</td>
                    </tr>
                    <tr>
                    <td class="col-xs-3">John</td>
                    <td class="col-xs-3">Doe</td>
                    <td class="col-xs-6">johndoe@email.com</td>
                    </tr>
                    <tr>
                    <td class="col-xs-3">John</td>
                    <td class="col-xs-3">Doe</td>
                    <td class="col-xs-6">johndoe@email.com</td>
                    </tr>
                    <tr>
                    <td class="col-xs-3">John</td>
                    <td class="col-xs-3">Doe</td>
                    <td class="col-xs-6">johndoe@email.com</td>
                    </tr>
                    <tr>
                    <td class="col-xs-3">John</td>
                    <td class="col-xs-3">Doe</td>
                    <td class="col-xs-6">johndoe@email.com</td>
                    </tr>
                    <tr>
                    <td class="col-xs-3">John</td>
                    <td class="col-xs-3">Doe</td>
                    <td class="col-xs-6">johndoe@email.com</td>
                    </tr>
                    <tr>
                    <td class="col-xs-3">John</td>
                    <td class="col-xs-3">Doe</td>
                    <td class="col-xs-6">johndoe@email.com</td>
                    </tr>
                    <tr>
                    <td class="col-xs-3">John</td>
                    <td class="col-xs-3">Doe</td>
                    <td class="col-xs-6">johndoe@email.com</td>
                    </tr>
                    <tr>
                    <td class="col-xs-3">John</td>
                    <td class="col-xs-3">Doe</td>
                    <td class="col-xs-6">johndoe@email.com</td>
                    </tr>
                    <tr>
                    <td class="col-xs-3">John</td>
                    <td class="col-xs-3">Doe</td>
                    <td class="col-xs-6">johndoe@email.com</td>
                    </tr>
                    <tr>
                    <td class="col-xs-3">John</td>
                    <td class="col-xs-3">Doe</td>
                    <td class="col-xs-6">johndoe@email.com</td>
                    </tr>
                    <tr>
                    <td class="col-xs-3">John</td>
                    <td class="col-xs-3">Doe</td>
                    <td class="col-xs-6">johndoe@email.com</td>
                    </tr>
                    <tr>
                    <td class="col-xs-3">John</td>
                    <td class="col-xs-3">Doe</td>
                    <td class="col-xs-6">johndoe@email.com</td>
                    </tr>
                    <tr>
                    <td class="col-xs-3">John</td>
                    <td class="col-xs-3">Doe</td>
                    <td class="col-xs-6">johndoe@email.com</td>
                    </tr>
                    <tr>
                    <td class="col-xs-3">John</td>
                    <td class="col-xs-3">Doe</td>
                    <td class="col-xs-6">johndoe@email.com</td>
                    </tr>
                    <tr>
                    <td class="col-xs-3">John</td>
                    <td class="col-xs-3">Doe</td>
                    <td class="col-xs-6">johndoe@email.com</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

class ReturnDetail extends React.Component{
    render(){
        return(
            <div class="col-xs-12 row">
                <div >
                    Return Detail
                </div>
                <div class="col-xs-12 row ">
                    <div class="col-xs-3">
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