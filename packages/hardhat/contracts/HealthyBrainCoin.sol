// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract HealthyBrainCoin is ERC20 {
    address public owner;

    struct Jugador {
        address wallet;
        uint16 avance;
    }

    mapping(address => Jugador) public jugadores;

    constructor() ERC20('Healthy Brain Coin', 'HBC') {
        owner = msg.sender;
        _mint(msg.sender, 10000);
    }

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            'Solo el propietario puede llamar a esta funcion'
        );
        _;
    }

    function transfer(
        address recipient,
        uint256 amount
    ) public virtual override returns (bool) {
        super.transfer(recipient, amount);
        return true;
    }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) public virtual override returns (bool) {
        super.transferFrom(sender, recipient, amount);
        return true;
    }

    function mint(address account, uint256 amount) public onlyOwner {
        _mint(account, amount);
    }

    function burn(uint256 amount) public onlyOwner {
        _burn(msg.sender, amount);
    }

    function agregarJugador(address wallet, uint16 avance) public onlyOwner {
        Jugador storage nuevoJugador = jugadores[wallet];
        nuevoJugador.wallet = wallet;
        nuevoJugador.avance = avance;
    }

    function reclamarRecompensa(address wallet) public {
        Jugador storage jugador = jugadores[wallet];

        // Verificar que el jugador tenga un avance múltiplo de 10 y no haya reclamado la recompensa
        require(
            jugador.avance % 10 == 0,
            'Tu nivel de avance no es un multiplo de 10 o ya has reclamado la recompensa'
        );

        // Calcular la cantidad de tokens a transferir
        uint256 cantidadTokens = jugador.avance;

        // Limitar la cantidad de tokens a un máximo de 40
        if (cantidadTokens > 40) {
            cantidadTokens = 40;
        }

        // Transferir los tokens al jugador
        transfer(wallet, cantidadTokens);
    }
}
