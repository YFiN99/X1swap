// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract X1Factory {
    address public owner = msg.sender;
    event PairCreated(address indexed token0, address indexed token1, address pair);

    function createPair(address, address) external pure returns (address) {
        return address(0x123); // dummy
    }
}
