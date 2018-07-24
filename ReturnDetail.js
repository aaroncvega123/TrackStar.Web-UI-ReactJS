import React from 'react';
import ReactDOM from 'react-dom';

class PeriodEndMarketValues extends React.Component {
    render(){
        return(
            <div>
                <div>
                    Period End Market Values
                </div>
                <table >
	<tbody>
		<tr>
			<td>Equity:</td>
			<td><input type="text" readOnly/></td>
		</tr>
		<tr>
			<td> </td>
			<td> </td>
		</tr>
		<tr>
			<td> </td>
			<td> </td>
		</tr>
		<tr>
			<td> </td>
			<td> </td>
		</tr>
		<tr>
			<td> </td>
			<td> </td>
		</tr>
	</tbody>
</table>
            </div>
        
        );
    }
}





class ReturnDetailTable extends React.Component{
    render(){
        return(
            <table class="table">
                <thead>
                    <th class="col-xs-1">
                        <button>PT Port</button>
                    </th>
                    <th class="col-xs-1">
                        <button> PT Bench</button>
                    </th>
                    <th class="col-xs-1">
                        <button>PT Diff</button>
                    </th>
                    <th class="col-xs-1">
                        <button>AT Port</button>
                    </th>
                    <th class="col-xs-1">
                        <button>AT Bench</button>
                    </th>
                    <th class="col-xs-1">
                        <button>AT Diff</button>
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

class ReturnDetail extends React.Component{
    render(){
        return(
            <div class="container">
                <div class="col-xs-12 row object-border no-outter-padding module-header-gradient-1">
                    <div class="module-header-1">    
                        Return Detail
                    </div>
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