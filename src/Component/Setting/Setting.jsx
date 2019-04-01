import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import { connect } from "react-redux";
import Token from "./Token";
import Password from "./Password";
import Submitlink from "./Submit";

class Setting extends Component {
    render() {
        const symbol = this.props.symbol ? this.props.symbol : "";
        const nftId = this.props.nftId ? this.props.nftId : "";

        return (
            <div className="setting">
                <Container className="py-4">
                    <Row>
                        <div>
                            <h2>{"CONTROL PANEL"}</h2>
                        </div>

                        <Password symbol={symbol} id={nftId} />
                        <Submitlink symbol={symbol} id={nftId} />
                        <Token />

                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        symbol: state.authority.symbol,
        nftId: state.authority.nftId
    };
};

export default connect(mapStateToProps)(Setting);
