// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract X1Router {
    address public factory;
    constructor(address _factory) { factory = _factory; }

    function swapExactTokensForTokens(uint,uint,address[] calldata,address,uint) external pure returns (uint[] memory) {
        uint[] memory amounts = new uint[](2);
        amounts[1] = 1000;
        return amounts;
    }
}
