import React, { Component } from "react";
import { Collapse, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import SubSig from "../../scripts/EosSubSig";
import scatter from "../../scripts/Scatter";
import Aws from "../../scripts/Aws";
import ecc from 'eosjs-ecc';
// redux
import { connect } from "react-redux";
import { setAuthority } from "../../redux/actions";

import Airdrop from "./Airdrop"

class Password extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        };

        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.refreshKey = this.refreshKey.bind(this);
        this.resetReduxAuthority = this.resetReduxAuthority.bind(this);
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    refreshtoken(){
        this.setState({symbol:this.state.symbol,nftId:this.state.nftId});
    }

    // パスワードを変更する
    async refreshKey() {
        const symbol = this.state.symbol;
        const subsig = new SubSig(symbol);

        // トークンIDを用いてEOSからトークンの所有者及び、subsig公開鍵を取得する
        const nftId = this.state.nftId;
        const newPassWord = this.state.passWord;
        const indexhash = this.state.hash;

        if(!nftId||!symbol||!newPassWord){return window.alert("入力が足りません")}

        const { account, subkey } = await subsig.getEOSAuth(nftId);
        const { privateKey, publicKey } = await subsig.genKeyPair(nftId, newPassWord); 

        // パスワードから生成したsubkeyが一致した場合、つまり正しいパスワードの場合はパスワードを復元する
        if (publicKey === subkey) {
            const authority = {
                id: nftId,
                privateKey: privateKey
            };
            localStorage.setItem(symbol, JSON.stringify(authority));

            this.setState({
                symbol:symbol,
                nftId:nftId,
                collapse: false,
                passWord: ""
            });

            this.resetReduxAuthority();
            window.alert("認証に成功しました。");
            if(!indexhash){return window.alert("上の赤い通知ボタンを押して下さい")}

        }else{ return window.alert("認証に失敗しました。");}


        // 旧：アカウント名が代理人のアカウント名と等しい時
        try {
                const oldAuthority = subsig.getLocalAuth();
                const oneday = 24 * 60 * 60 * 1000;
                const message = String(Math.floor(Number(new Date()) / oneday) * oneday);

                // デジタル署名
                //const old_signature = ecc.sign(message, oldAuthority.privateKey);
                const new_signature = ecc.sign(message, privateKey);
                alert(message);
                const apiObj = {
                    "name": "PROXY",
                    "contract":process.env.REACT_APP_CONTRACT_ACCOUNT,
                    "symbol": symbol,
                    "sig": new_signature,
                    "tokenId": nftId,
                    "hash":indexhash
                };

                const response = await Aws.getRedirectPermission(apiObj);

            } catch (error) {
                console.error(error);
                return window.alert("認証に失敗しました。");
        }
    }

    // 前の認証情報を消すためreduxの認証情報を初期化する
    resetReduxAuthority() {
        const authority = {
            symbol: null,
            nftId: null,
            accountName: null,
            isManager: false
        }
        this.props.dispatch(setAuthority(authority));
    }


    render() {
        return (
            <Col xs="12" className="p-3 mb-3 normal-shadow border-special">
                <h5>紹介リンクへジャンプ/　</h5 ><Airdrop refreshtoken={() => { this.refreshtoken(); }} symbol={this.state.symbol} nftId={this.state.nftId}/>
                <br/>

                <Button onClick={this.toggle} style={{ marginBottom: '1rem' }} className="my-2">行き先とパスワードを入力します</Button>

                <Collapse isOpen={this.state.collapse}>
                    <Form>
                        <FormGroup>
                            <Label for="symbol">コミュニティ名</Label>
                            <Input type="text" name="symbol" onChange={this.handleChange} value={this.state.symbol} placeholder="３文字くらい英字大文字" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="nftId">トークンID</Label>
                            <Input type="number" name="nftId" onChange={this.handleChange} value={this.state.nftId} placeholder="トークンID" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="passWord">パスワード</Label>
                            <Input type="password" name="passWord" onChange={this.handleChange} value={this.state.passWord} placeholder="パスワード" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="hash">アクセスしたいID</Label>
                            <Input type="text" name="hash" onChange={this.handleChange} value={this.state.hash} placeholder="紹介されたID" />
                        </FormGroup>

                        <Button onClick={this.refreshKey}>アクセス</Button>
                    </Form>
                </Collapse>
            </Col>
        );
    }
}

export default connect()(Password);
