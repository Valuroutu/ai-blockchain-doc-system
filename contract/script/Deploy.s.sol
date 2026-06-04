// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/DocumentStorage.sol";

contract Deploy is Script {

    function run() external returns (DocumentStorage) {

        vm.startBroadcast();

        DocumentStorage documentStorage =
            new DocumentStorage();

        vm.stopBroadcast();

        return documentStorage;
    }
}