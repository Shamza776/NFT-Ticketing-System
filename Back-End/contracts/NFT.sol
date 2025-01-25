// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
//functions: event creation
//minting of the tickets
//transfer of the tickets
//burning of the tickets
//getting the balance of the tickets
//getting the total supply of the tickets
//getting the tokenURI of the tickets -- metadata of the ticket

import "@openzeppelin/contracts/token/ERC721/ERC721.sol"; //importing the ERC721 contract
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"; //
import "@openzeppelin/contracts/access/Ownable.sol"; //importing the Ownable contract

contract NFTTicketing is ERC721URIStorage, Ownable { //inheriting the ERC721URIStorage contract
    uint256 public eventId; 
    struct Event { ///creating a struct for the event
        uint256 tokenId;
        uint256 price;
        address owner;
        bool isSold;
        uint256 totalSupply;
    }

    mapping(uint256 => Event) public events; //mapping the eventId to the event

    constructor() ERC721("NFTTicketing", "Token") {}

    //mint function
    function mint(uint256 _eventId, uint256 _price) public payable {
    
    }


    }