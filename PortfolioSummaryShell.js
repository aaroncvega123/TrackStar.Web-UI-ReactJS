import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioInformation from '.\\PortfolioInformation';
import HistoricalPortfolio_BenchmarkReturns from '.\\HistoricalPortfolio_BenchmarkReturns';
import ReturnDetail from '.\\ReturnDetail';

class PortfolioSummaryShell extends React.Component {
    render() {
        return createPanel(<Content/>);
    }
}


class Content extends React.Component {
    render() {
        return (
            <div class="no-outter-padding">
                <PortfolioInformation />
                <HistoricalPortfolio_BenchmarkReturns />
                <ReturnDetail />
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
                        <a data-toggle="collapse" href="#collapse2">
                            Portfolio Summary
                        </a>
                    </h4>
                </div>
                <div id="collapse2" class="panel-collapse collapse">
                    {component}
                </div>
            </div>
        </div>
    );
}



export default PortfolioSummaryShell;