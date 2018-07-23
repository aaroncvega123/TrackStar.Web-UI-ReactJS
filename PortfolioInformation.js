import React from 'react';
import ReactDOM from 'react-dom';

class ParametricFormBox extends React.Component{
    render(){
        return(
            <div class="col-xs-6">
                <div>
                    Parametric
                </div>
                <div class="dropdown"  id="myDropdown">   
                    Short Name:      
                    <input type="text" placeholder="Search by Name.."/>
                    <button class="dropbtn">v </button>
                </div>
                <div >   
                    AccountID:      
                    <input type="text" placeholder="Search by Account #.."/>
                </div>
            </div>
        );
    }
}

class CustodianFormBox extends React.Component{
    render(){
        return(
            <div>
                Richard
            </div>
        );
    }
}

class BenchmarkFormBox extends React.Component{
    render(){
        return(
            <div>Gilfoyle</div>
        );
    }
}

class HistoryFormBox extends React.Component{
    render(){
        return(
                <div>Jian</div>
        );
    }
}


class PortfolioInformation extends React.Component{
    render(){
        return(
            <div class="container">
                <div class="col-xs-12 row object-border no-outter-padding">
                    Portfolio Information
                </div>
                <div class="col-xs-12 row object-border no-outter-padding">
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