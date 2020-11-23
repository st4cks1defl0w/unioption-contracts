// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.6.12;

// Main collectible contract, wrapping NFT-compatible options

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./interfaces/IChef.sol";

contract UniOption is ERC721, Ownable  {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;


    //storage
    //chef aka owner, we wouldn't want check NFT ownership against owner though
    OptionChef public optionChef;
    string public METADATA_BASE = "https://options.district0x.io/meta/";

    constructor(OptionChef _optionChef) ERC721("UniOption", "UOPT") public {
        optionChef = _optionChef;
        transferOwnership(address(_optionChef));
        _setBaseURI(METADATA_BASE);
    }

    /**
     * @notice Mint shiny UniOption, Chef only
     * @param _to Beneficiary
     */
    function mintUniOption(address _to) public onlyOwner returns (uint256)
    {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(_to, newItemId);
        //meta will be automatically set to BASE_URL/newItemId
        // _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }

    /**

     * @notice Burn option shell, Chef only
     * @notice Might be removed in favour of off-chain metadata-based deprecation
     * @param _id Token ID
     */
    function burnUniOption(uint _id) public onlyOwner {
        _burn(_id);
    }

    // TODO pick a more convenient function to override transfer
    /**
     * @notice Overcoming Hegic absence of approval mechanism to mint in one tx
     */
    // function _isApprovedOrOwner(address spender, uint256 tokenId)
    //     public
    //     override
    //     returns (bool) {
    //     return (_isApprovedOrOwner(spender, tokenId) && optionChef.isDelegated(tokenId));
    // }

}
