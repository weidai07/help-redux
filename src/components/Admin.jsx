import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import { connect } from 'react-redux';



function Admin(props) {

    let background = {
        backgroundColor: '#679dff'
    };

    let footerAdmin = {
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
        backgroundColor: '#e0d647',
        textAlign: 'center',
        marginBottom: '0'
    };

    let optionalSelectedTicketContent = null;
    if (props.selectedTicket.length > 0) {
        optionalSelectedTicketContent = <TicketDetail
            selectedTicket={props.ticketList[props.selectedTicket]} />;
    }

    return (
        <div style={background}>

            <h2 style={footerAdmin}>Admin</h2>

            {optionalSelectedTicketContent}

            <TicketList
                ticketList={props.ticketList}
                currentRouterPath={props.currentRouterPath} />
        </div>
    );
}


Admin.propTypes = {
    ticketList: PropTypes.array,
    currentRouterPath: PropTypes.string.isRequired,
    selectedTicket: PropTypes.string
};


const mapStateToProps = state => {
    return {
        selectedTicket: state.selectedTicket,
        ticketList: state.masterTicketList
    };
};


export default connect(mapStateToProps)(Admin);