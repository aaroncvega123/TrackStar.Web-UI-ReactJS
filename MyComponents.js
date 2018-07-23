import React from 'react';
import ReactDOM from 'react-dom';
import ReportApp from '.\\ReportApp';
import PortfolioSummaryShell from '.\\PortfolioSummaryShell';




class MyComponents extends React.Component {
    render() {
        return (
            <div>
                <ReportApp />
                <PortfolioSummaryShell />
            </div>
        );
    }
}

export default MyComponents;