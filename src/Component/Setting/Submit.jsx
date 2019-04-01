import React, { Component } from "react";
import { Collapse, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Aws from "../../scripts/Aws";
// redux
import { connect } from "react-redux";
import { setAuthority } from "../../redux/actions";

class Submitlink extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            collapse: false,
            symbol: "",
            lownumber:0,
            highnumber:1000000,
            list: "",
            url:""
        };

        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitLink = this.submitLink.bind(this);
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // パスワードを変更する
    async submitLink() {

        // トークンIDを用いてEOSからトークンの所有者及び、subsig公開鍵を取得する
        const morethan = this.state.lownumber;
        const lessthan = this.state.highnumber;
        const list = this.state.list;
        const url = this.state.link;
        const symbol = this.state.symbol
        
        if(morethan>lessthan){return window.alert("ID範囲の入力に誤りがあります。この範囲に数は存在しません。");}

        const apiObj = {
            "morethan":morethan,
            "lessthan":lessthan,
            "list":list,
            "url":url,
            "symbol":symbol
        };
        const response = await Aws.sendPermissionLink(apiObj);
    }


    render() {
        return (
            <Col xs="12" className="p-3 mb-3 normal-shadow border-special">
                <h5>リンクえあどろっぷ</h5>
                きまった人たちだけが知れるリンクを作ります
                <br/>
                IPは記録しています。違法行為・迷惑行為はおやめ下さい。
                <Button onClick={this.toggle} style={{ marginBottom: '1rem' }} className="my-2">どろっぷ</Button>

                <Collapse isOpen={this.state.collapse}>
                    <Form>
                        <FormGroup>
                            <Label for="symbol">コミュニティ名</Label>
                            <Input type="text" name="symbol" onChange={this.handleChange} value={this.state.symbol} placeholder="(三文字くらいの英字大文字)" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="link">紹介したいURL</Label>
                            <Input type="text" name="link" onChange={this.handleChange} value={this.state.link} placeholder="http://" />
                        </FormGroup>
                        <h5>ここから下は任意です。</h5>
                        <FormGroup>
                            <Label for="lownumber">条件1 X (任意)</Label>
                            <Input type="number" name="lownumber" onChange={this.handleChange}  placeholder="会員ID > X " />
                        </FormGroup>

                        <FormGroup>
                            <Label for="highnumber">条件2 Y (任意)</Label>
                            <Input type="number" name="highnumber" onChange={this.handleChange}  placeholder="会員ID < Y" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="list">条件３：複数ID指定 (任意)</Label>
                            <Input type="number" name="list" onChange={this.handleChange}  placeholder="例: 1,4,12 " />
                        </FormGroup>

                        <Button onClick={this.submitLink}>送る</Button>
                    </Form>
                </Collapse>
            </Col>
        );
    }
}

export default connect()(Submitlink);
