// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.6.12;

interface OptionChef {
    function isDelegated(uint _tokenId) external returns (bool);
}
