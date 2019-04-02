import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import { connect } from "react-redux";
import Password from "./Password";

class Setting extends Component {
    render() {
        const symbol = this.props.symbol ? this.props.symbol : "";
        const nftId = this.props.nftId ? this.props.nftId : "";

        return (
            <div className="setting">
                <Container className="py-4">
                    <Row>
                        <div>
                            <h2>{"解答フォーム"}</h2>
                        </div>

                        <Password symbol={symbol} id={nftId} />

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
