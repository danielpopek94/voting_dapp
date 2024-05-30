// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Option {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(uint => Option) public options;
    mapping(address => bool) public voters;
    uint public optionsCount;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function addOption(string memory _name) public {
        require(msg.sender == owner, "Only owner can add options");
        optionsCount ++;
        options[optionsCount] = Option(optionsCount, _name, 0);
    }

    function vote(uint _optionId) public {
        require(!voters[msg.sender], "You have already voted");
        require(_optionId > 0 && _optionId <= optionsCount, "Invalid option");

        voters[msg.sender] = true;
        options[_optionId].voteCount++;
    }

    function getOption(uint _optionId) public view returns (Option memory) {
        require(_optionId > 0 && _optionId <= optionsCount, "Invalid option");
        return options[_optionId];
    }
}
