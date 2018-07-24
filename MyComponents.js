import React from 'react';
import ReactDOM from 'react-dom';
import ReportApp from '.\\ReportApp';
import PortfolioSummaryShell from '.\\PortfolioSummaryShell';




class MyComponents extends React.Component {
    render() {
        return (
            <div>
                <div class="application">
                    <ReportApp />
                </div>
                <div class="application">
                    <PortfolioSummaryShell />
                </div>
            </div>
        );
    }
}

export default MyComponents;