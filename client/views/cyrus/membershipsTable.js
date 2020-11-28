import React from 'react';

const divstyle = {

}

const tablesytle = {
    margin: "auto",
    width: "50%",
    overflow: "hidden",
    borderRadius: "8px",
    color: "white"
};

const rowOn = {
    backgroundColor: "#333",
    textAlign: "center"
}

const rowOff = {
    backgroundColor: "#666",
    textAlign: "center"
}


function membershipsTable() {    

    return (<div style={divstyle}>
        <br/><br/><br/><br/>
        <table style={tablesytle}>
        <tr>
        <td style={rowOn}>&nbsp;</td>
        <td style={rowOn}>Basic</td>
        <td style={rowOn}>Supporter</td>
        <td style={rowOn}>Premium</td>
        <td style={rowOn}>Enterprise</td>
        </tr>
        <tr>
        <td style={rowOff}>&nbsp;</td>
        <td style={rowOff}>&nbsp;</td>
        <td style={rowOff}>&nbsp;</td>
        <td style={rowOff}>&nbsp;</td>
        <td style={rowOff}>&nbsp;</td>
        </tr>
        <tr>
        <td style={rowOn}>&nbsp;</td>
        <td style={rowOn}>&nbsp;</td>
        <td style={rowOn}>&nbsp;</td>
        <td style={rowOn}>&nbsp;</td>
        <td style={rowOn}>&nbsp;</td>
        </tr>
        <tr>
        <td style={rowOff}>&nbsp;</td>
        <td style={rowOff}>&nbsp;</td>
        <td style={rowOff}>&nbsp;</td>
        <td style={rowOff}>&nbsp;</td>
        <td style={rowOff}>&nbsp;</td>
        </tr>
        </table>
    </div>)
}

export default membershipsTable;