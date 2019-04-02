import React, { Component } from "react";
import { Collapse, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import SubSig from "../../scripts/EosSubSig";
import scatter from "../../scripts/Scatter";
import Aws from "../../scripts/Aws";
import PCSServer from "../../scripts/PCSServer";
import ecc from 'eosjs-ecc';
import format from 'eosjs';
import Base58 from "bs58";
import BigInteger from "bigi";
// redux
import { connect } from "react-redux";
import { setAuthority } from "../../redux/actions";

import Airdrop from "./Airdrop"

const bin = (num) => Array.from(uint64ToBuffer(num));

console.log(format)

class Password extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            symbol:"PTSD"
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
        const subsig2 = new SubSig(symbol);

        // トークンIDを用いてEOSからトークンの所有者及び、subsig公開鍵を取得する
        const nftId = this.state.nftId;
        const oldPassWord = this.state.passWord;
        const newPassWord = this.state.newpassWord;
        alert(nftId+"/"+oldPassWord+"/"+newPassWord+"/"+symbol)
        if(!nftId||!symbol||!oldPassWord){return window.alert("入力が足りません")}

        const { account, subkey } = await subsig.getEOSAuth(nftId);
        const { privateKey, publicKey } = await subsig.genKeyPair(nftId, oldPassWord); 

        // パスワードから生成したsubkeyが一致した場合、つまり正しいパスワードの場合はパスワードを復元する
        if (publicKey === subkey) {
            const authority = {
                id: nftId,
                privateKey: privateKey
            };

            this.setState({
                symbol:symbol,
                nftId:nftId,
                collapse: false,
                passWord: ""
            });

            this.resetReduxAuthority();
            window.alert("認証に成功しました。正解です！！");
            if(!newPassWord){return window.alert("新しい自分だけのパスワードをセットして下さい")}

        }else{ return window.alert("認証に失敗しました。");}

        const resp = await subsig.genKeyPair(nftId, newPassWord); 
        const new_subkey =resp["publicKey"];
        const new_subprivkey =resp["privateKey"];
        alert("nani?")
        alert(newPassWord)
        alert(nftId)
        alert(new_subkey)
        // 旧：アカウント名が代理人のアカウント名と等しい時
        try {
                console.log(scatter.eosJS)
                console.log(scatter.eosJS.target)
                console.log(scatter.eosJS.modules.format.encodeName)
		const act_bin = bin(scatter.eosJS.modules.format.encodeName("refreshkey2",false));
		const sym_bin = bin(getSymbolCodeRaw(symbol));
		const id_bin = bin(new BigInteger(String(nftId)));
		const sk_bin = publicKeyToBuffer(new_subkey);
		const ts_bin = bin(getTimestamp());
		const message_bin = [...act_bin, ...sym_bin, ...id_bin, ...sk_bin, ...ts_bin];
		const message = Buffer(message_bin);
                console.log(message)
                // デジタル署名
                const new_signature = ecc.sign(message, privateKey);
                

                const apiObj = {
                    AgentEvent: "REFRESH",
                    symbolCode: symbol,
                    tokenId: nftId,
                    signature: new_signature,
                    newSubKey: new_subkey,
                    broadcast:"lambda"
                };

                const signedTx = await PCSServer.requestSignTx(apiObj);
                
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

                <Button onClick={this.toggle} style={{ marginBottom: '1rem' }} className="my-2">問題番号と解答と新しいパスワードを入力します</Button>

                <Collapse isOpen={this.state.collapse}>
                    <Form>
                        <FormGroup>
                            <Label for="symbol">コミュニティ名</Label>
                            <Input type="text" name="symbol" onChange={this.handleChange} value={this.state.symbol} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="nftId">トークンID</Label>
                            <Input type="number" name="nftId" onChange={this.handleChange} value={this.state.nftId} placeholder="トークンID" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="passWord">パスワード（解答）</Label>
                            <Input type="password" name="passWord" onChange={this.handleChange}  placeholder="パスワード" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="newpassWord">あなたの新しいパスワード（任意）</Label>
                            <Input type="password" name="newpassWord" onChange={this.handleChange}  placeholder="新しいパスワード" />
                        </FormGroup>
                        <Button onClick={this.refreshKey}>確認/変更</Button>
                    </Form>
                </Collapse>
            </Col>
        );
    }
}

// convert publicKey to a format suitable for use as an action argument
function publicKeyToBuffer(public_key) {
    alert(public_key)
    const pk_prefix = "EOS";
    const pk_body = public_key.slice(pk_prefix.length);
    const raw_pk = Base58.decode(pk_body);
    return Buffer([0, ...Array.from(raw_pk).slice(0, -4).map(v => +v)]);
}

// convert uint64 value to a format suitable for use as an action argument
function uint64ToBuffer(num) {
    const bn = BigInteger.isBigInteger(num) ? num : new BigInteger(num);
    const two = new BigInteger("2");
    const a_byte = two.pow(8);
    const bytearray = Array.from({ length: 8 }, (v, i) => Number(bn.divide(two.pow(8 * i)).remainder(a_byte)));
    console.log("bytearray:", bytearray);
    return Buffer(bytearray);
}

// convert symbol_code value to a format suitable for use as an action argument
function getSymbolCodeRaw(symbol_code) {
    if (typeof (symbol_code) !== "string") {
        throw new Error("the first argument should be string type");
    }

    if (symbol_code.length > 7) {
        throw new Error("string is too long to be a valid symbol_code");
    }

    let raw = new BigInteger("0");
    const a_byte = new BigInteger("256");
    for (let i = symbol_code.length - 1; i >= 0; i--) {
        const c = symbol_code[i];
        if (c < 'A' || 'Z' < c) {
            throw new Error("only uppercase letters allowed in symbol_code string");
        }

        raw = raw.multiply(a_byte);
        raw = raw.add(new BigInteger(c.charCodeAt().toString()));
    }

    return raw;
}

// get timestamp for action data
function getTimestamp() {
    const duration = 15 * 1000;
    const now = Number(new Date());
    const timestamp = Math.floor(now / duration) * duration;
    const timestamp_bn = new BigInteger(timestamp.toString());
    const timstamp_micro = timestamp_bn.multiply(new BigInteger("1000"));
    console.log("timestamp:", timstamp_micro.toString());
    return timstamp_micro;
}


export default connect()(Password);
