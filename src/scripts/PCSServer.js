'use strict'

import ecc from 'eosjs-ecc';
import { NEW_AWS_API_URL, AWS_SECURITY_API_URL, AWS_AGENT_API_URL,CONTRACT_ACCOUNT } from "./config";

export default class PCSServer {

    static async checkByPCSSecurity(symbol, tokenId, sig, message) {
        const apiUrl = AWS_SECURITY_API_URL + "/pcssecurity";

        const payload = {
            "name": "checkSig",
            "symbol": symbol,
            "tokenId": tokenId,
            "contract": CONTRACT_ACCOUNT,
            "sig": sig,
            "message": message
        };

        const req = {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify(payload)
        };

        const res = await (await fetch(apiUrl, req)).json();
        return res;
    }

    static async requestSignTx(query) {
        const apiUrl = AWS_AGENT_API_URL
        const options = {
            method: "POST",
            body: JSON.stringify(query)
        };
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        console.log(data) 
        if (data.errorMessage) {
            console.error(JSON.parse(data.errorMessage));
            throw new Error(`the request to ${apiUrl} is failed`);
        }
        return data
    }

    static async genSalt(password, symbol, nftId) {
        const seedHash = ecc.sha256(password);

        const apiUrl = NEW_AWS_API_URL + `?tokenId=${nftId}&hash=${seedHash}&symbol=${symbol}`;
        const response = await (await fetch(apiUrl, { method: "GET", mode: "cors" })).json();
        const salt = response.body;
        return salt;
    }
}
