// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Option {
        uint id;
        string name;
				string slogan;
        uint voteCount;
    }

    mapping(uint => Option) public options;
    mapping(address => bool) public voters;
    address public owner;

    constructor() {
        owner = msg.sender;
        options[1] = Option(1, "Mr Kitty", "Choose me as your next board member. Purr.", 0);
        options[2] = Option(2, "Mr Doggo", "I'm a good boy. If you choose me, we'll be ruff!", 0);
    }

    function vote(uint _optionId) public {
        require(!voters[msg.sender], "You have already voted");
        require(_optionId == 1 || _optionId == 2, "Invalid option");

        voters[msg.sender] = true;
        options[_optionId].voteCount++;
    }

    function getOption(uint _optionId) public view returns (Option memory) {
        require(_optionId == 1 || _optionId == 2, "Invalid option");
        return options[_optionId];
    }
}
