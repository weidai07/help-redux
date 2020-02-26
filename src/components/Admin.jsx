import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';

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
    if (props.selectedTicket != null) {
        optionalSelectedTicketContent = <TicketDetail
            selectedTicket={props.ticketList[props.selectedTicket]} />;
    }

    return (
        <div style={background}>

            <h2 style={footerAdmin}>Admin</h2>
            {optionalSelectedTicketContent}
            <TicketList
                ticketList={props.ticketList}
                currentRouterPath={props.currentRouterPath}
                onTicketSelection={props.onTicketSelection} />
        </div>
    );
}

Admin.propTypes = {
    ticketList: PropTypes.array,
    currentRouterPath: PropTypes.string.isRequired,
    onTicketSelection: PropTypes.func.isRequired,
    selectedTicket: PropTypes.string
};

export default Admin;