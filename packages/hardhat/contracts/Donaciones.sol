// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.7.0 <0.9.0;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
contract Donations {
    address public owner;
    mapping(address => uint256) public donorBalances;

    event DonationReceived(address indexed donor, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, 'Usted no permisos para retirar');
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function donate() external payable {
        require(msg.value > 0, 'Deberia enviar una cantidad mayor a 0');
        donorBalances[msg.sender] += msg.value;
        emit DonationReceived(msg.sender, msg.value);
    }

    function withdraw() external onlyOwner {
        require(address(this).balance > 0, 'No hay fondos para retirar');
        payable(owner).transfer(address(this).balance);
    }
}
