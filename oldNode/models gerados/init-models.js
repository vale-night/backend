var DataTypes = require("sequelize").DataTypes;
var _arquivo = require("./arquivo");
var _carrinho = require("./carrinho");
var _carrinho_has_promocaocarrinho = require("./carrinho_has_promocaocarrinho");
var _categoriaproduto = require("./categoriaproduto");
var _cliente = require("./cliente");
var _endereco = require("./endereco");
var _evento = require("./evento");
var _evento_has_orientacaosexual = require("./evento_has_orientacaosexual");
var _generomusical = require("./generomusical");
var _generomusical_has_evento = require("./generomusical_has_evento");
var _organizador = require("./organizador");
var _orientacaosexual = require("./orientacaosexual");
var _pagamento = require("./pagamento");
var _pedido = require("./pedido");
var _preco = require("./preco");
var _preco_has_evento = require("./preco_has_evento");
var _produto = require("./produto");
var _produto_has_carrinho = require("./produto_has_carrinho");
var _produto_has_categoriaproduto = require("./produto_has_categoriaproduto");
var _promocaocarrinho = require("./promocaocarrinho");
var _tipodeevento = require("./tipodeevento");
var _tipodeevento_has_evento = require("./tipodeevento_has_evento");
var _tipodeproduto = require("./tipodeproduto");

function initModels(sequelize) {
  var arquivo = _arquivo(sequelize, DataTypes);
  var carrinho = _carrinho(sequelize, DataTypes);
  var carrinho_has_promocaocarrinho = _carrinho_has_promocaocarrinho(sequelize, DataTypes);
  var categoriaproduto = _categoriaproduto(sequelize, DataTypes);
  var cliente = _cliente(sequelize, DataTypes);
  var endereco = _endereco(sequelize, DataTypes);
  var evento = _evento(sequelize, DataTypes);
  var evento_has_orientacaosexual = _evento_has_orientacaosexual(sequelize, DataTypes);
  var generomusical = _generomusical(sequelize, DataTypes);
  var generomusical_has_evento = _generomusical_has_evento(sequelize, DataTypes);
  var organizador = _organizador(sequelize, DataTypes);
  var orientacaosexual = _orientacaosexual(sequelize, DataTypes);
  var pagamento = _pagamento(sequelize, DataTypes);
  var pedido = _pedido(sequelize, DataTypes);
  var preco = _preco(sequelize, DataTypes);
  var preco_has_evento = _preco_has_evento(sequelize, DataTypes);
  var produto = _produto(sequelize, DataTypes);
  var produto_has_carrinho = _produto_has_carrinho(sequelize, DataTypes);
  var produto_has_categoriaproduto = _produto_has_categoriaproduto(sequelize, DataTypes);
  var promocaocarrinho = _promocaocarrinho(sequelize, DataTypes);
  var tipodeevento = _tipodeevento(sequelize, DataTypes);
  var tipodeevento_has_evento = _tipodeevento_has_evento(sequelize, DataTypes);
  var tipodeproduto = _tipodeproduto(sequelize, DataTypes);

  carrinho.belongsToMany(produto, { as: 'Produto_idProduto_produtos', through: produto_has_carrinho, foreignKey: "Carrinho_idCarrinho", otherKey: "Produto_idProduto" });
  carrinho.belongsToMany(promocaocarrinho, { as: 'PromocaoCarrinho_idPromocaoCarrinho_promocaocarrinhos', through: carrinho_has_promocaocarrinho, foreignKey: "Carrinho_idCarrinho", otherKey: "PromocaoCarrinho_idPromocaoCarrinho" });
  categoriaproduto.belongsToMany(produto, { as: 'Produto_idProduto_produtos', through: produto_has_categoriaproduto, foreignKey: "CategoriaProduto_idCategoriaProduto", otherKey: "Produto_idProduto" });
  evento.belongsToMany(generomusical, { as: 'GeneroMusical_idGeneroMusical_generomusicals', through: generomusical_has_evento, foreignKey: "Evento_idEvento", otherKey: "GeneroMusical_idGeneroMusical" });
  evento.belongsToMany(orientacaosexual, { as: 'OrientacaoSexual_idOrientacaoSexual_orientacaosexuals', through: evento_has_orientacaosexual, foreignKey: "Evento_idEvento", otherKey: "OrientacaoSexual_idOrientacaoSexual" });
  evento.belongsToMany(preco, { as: 'Preco_idPreco_precos', through: preco_has_evento, foreignKey: "Evento_idEvento", otherKey: "Preco_idPreco" });
  evento.belongsToMany(tipodeevento, { as: 'TipoDeEvento_idTipoDeEvento_tipodeeventos', through: tipodeevento_has_evento, foreignKey: "Evento_idEvento", otherKey: "TipoDeEvento_idTipoDeEvento" });
  generomusical.belongsToMany(evento, { as: 'Evento_idEvento_eventos', through: generomusical_has_evento, foreignKey: "GeneroMusical_idGeneroMusical", otherKey: "Evento_idEvento" });
  orientacaosexual.belongsToMany(evento, { as: 'Evento_idEvento_eventos', through: evento_has_orientacaosexual, foreignKey: "OrientacaoSexual_idOrientacaoSexual", otherKey: "Evento_idEvento" });
  preco.belongsToMany(evento, { as: 'Evento_idEvento_eventos', through: preco_has_evento, foreignKey: "Preco_idPreco", otherKey: "Evento_idEvento" });
  produto.belongsToMany(carrinho, { as: 'Carrinho_idCarrinho_carrinhos', through: produto_has_carrinho, foreignKey: "Produto_idProduto", otherKey: "Carrinho_idCarrinho" });
  produto.belongsToMany(categoriaproduto, { as: 'CategoriaProduto_idCategoriaProduto_categoriaprodutos', through: produto_has_categoriaproduto, foreignKey: "Produto_idProduto", otherKey: "CategoriaProduto_idCategoriaProduto" });
  promocaocarrinho.belongsToMany(carrinho, { as: 'Carrinho_idCarrinho_carrinhos', through: carrinho_has_promocaocarrinho, foreignKey: "PromocaoCarrinho_idPromocaoCarrinho", otherKey: "Carrinho_idCarrinho" });
  tipodeevento.belongsToMany(evento, { as: 'Evento_idEvento_eventos', through: tipodeevento_has_evento, foreignKey: "TipoDeEvento_idTipoDeEvento", otherKey: "Evento_idEvento" });
  carrinho_has_promocaocarrinho.belongsTo(carrinho, { as: "Carrinho_idCarrinho_carrinho", foreignKey: "Carrinho_idCarrinho"});
  carrinho.hasMany(carrinho_has_promocaocarrinho, { as: "carrinho_has_promocaocarrinhos", foreignKey: "Carrinho_idCarrinho"});
  produto_has_carrinho.belongsTo(carrinho, { as: "Carrinho_idCarrinho_carrinho", foreignKey: "Carrinho_idCarrinho"});
  carrinho.hasMany(produto_has_carrinho, { as: "produto_has_carrinhos", foreignKey: "Carrinho_idCarrinho"});
  categoriaproduto.belongsTo(categoriaproduto, { as: "categoriaPai_idCategoria_categoriaproduto", foreignKey: "categoriaPai_idCategoria"});
  categoriaproduto.hasMany(categoriaproduto, { as: "categoriaprodutos", foreignKey: "categoriaPai_idCategoria"});
  produto_has_categoriaproduto.belongsTo(categoriaproduto, { as: "CategoriaProduto_idCategoriaProduto_categoriaproduto", foreignKey: "CategoriaProduto_idCategoriaProduto"});
  categoriaproduto.hasMany(produto_has_categoriaproduto, { as: "produto_has_categoriaprodutos", foreignKey: "CategoriaProduto_idCategoriaProduto"});
  arquivo.belongsTo(cliente, { as: "Cliente_idCliente_cliente", foreignKey: "Cliente_idCliente"});
  cliente.hasMany(arquivo, { as: "arquivos", foreignKey: "Cliente_idCliente"});
  endereco.belongsTo(cliente, { as: "Cliente_idCliente_cliente", foreignKey: "Cliente_idCliente"});
  cliente.hasMany(endereco, { as: "enderecos", foreignKey: "Cliente_idCliente"});
  evento.belongsTo(endereco, { as: "Endereco_idEndereco_endereco", foreignKey: "Endereco_idEndereco"});
  endereco.hasMany(evento, { as: "eventos", foreignKey: "Endereco_idEndereco"});
  pedido.belongsTo(endereco, { as: "Endereco_idEndereco_endereco", foreignKey: "Endereco_idEndereco"});
  endereco.hasMany(pedido, { as: "pedidos", foreignKey: "Endereco_idEndereco"});
  arquivo.belongsTo(evento, { as: "Evento_idEvento_evento", foreignKey: "Evento_idEvento"});
  evento.hasMany(arquivo, { as: "arquivos", foreignKey: "Evento_idEvento"});
  evento_has_orientacaosexual.belongsTo(evento, { as: "Evento_idEvento_evento", foreignKey: "Evento_idEvento"});
  evento.hasMany(evento_has_orientacaosexual, { as: "evento_has_orientacaosexuals", foreignKey: "Evento_idEvento"});
  generomusical_has_evento.belongsTo(evento, { as: "Evento_idEvento_evento", foreignKey: "Evento_idEvento"});
  evento.hasMany(generomusical_has_evento, { as: "generomusical_has_eventos", foreignKey: "Evento_idEvento"});
  preco_has_evento.belongsTo(evento, { as: "Evento_idEvento_evento", foreignKey: "Evento_idEvento"});
  evento.hasMany(preco_has_evento, { as: "preco_has_eventos", foreignKey: "Evento_idEvento"});
  produto.belongsTo(evento, { as: "Evento_idEvento_evento", foreignKey: "Evento_idEvento"});
  evento.hasMany(produto, { as: "produtos", foreignKey: "Evento_idEvento"});
  tipodeevento_has_evento.belongsTo(evento, { as: "Evento_idEvento_evento", foreignKey: "Evento_idEvento"});
  evento.hasMany(tipodeevento_has_evento, { as: "tipodeevento_has_eventos", foreignKey: "Evento_idEvento"});
  generomusical_has_evento.belongsTo(generomusical, { as: "GeneroMusical_idGeneroMusical_generomusical", foreignKey: "GeneroMusical_idGeneroMusical"});
  generomusical.hasMany(generomusical_has_evento, { as: "generomusical_has_eventos", foreignKey: "GeneroMusical_idGeneroMusical"});
  arquivo.belongsTo(organizador, { as: "Organizador_idOrganizador_organizador", foreignKey: "Organizador_idOrganizador"});
  organizador.hasMany(arquivo, { as: "arquivos", foreignKey: "Organizador_idOrganizador"});
  endereco.belongsTo(organizador, { as: "Organizador_idOrganizador_organizador", foreignKey: "Organizador_idOrganizador"});
  organizador.hasMany(endereco, { as: "enderecos", foreignKey: "Organizador_idOrganizador"});
  evento_has_orientacaosexual.belongsTo(orientacaosexual, { as: "OrientacaoSexual_idOrientacaoSexual_orientacaosexual", foreignKey: "OrientacaoSexual_idOrientacaoSexual"});
  orientacaosexual.hasMany(evento_has_orientacaosexual, { as: "evento_has_orientacaosexuals", foreignKey: "OrientacaoSexual_idOrientacaoSexual"});
  carrinho.belongsTo(pedido, { as: "Pedido_idPedido_pedido", foreignKey: "Pedido_idPedido"});
  pedido.hasMany(carrinho, { as: "carrinhos", foreignKey: "Pedido_idPedido"});
  pagamento.belongsTo(pedido, { as: "Pedido_idPedido_pedido", foreignKey: "Pedido_idPedido"});
  pedido.hasMany(pagamento, { as: "pagamentos", foreignKey: "Pedido_idPedido"});
  preco_has_evento.belongsTo(preco, { as: "Preco_idPreco_preco", foreignKey: "Preco_idPreco"});
  preco.hasMany(preco_has_evento, { as: "preco_has_eventos", foreignKey: "Preco_idPreco"});
  produto_has_carrinho.belongsTo(produto, { as: "Produto_idProduto_produto", foreignKey: "Produto_idProduto"});
  produto.hasMany(produto_has_carrinho, { as: "produto_has_carrinhos", foreignKey: "Produto_idProduto"});
  produto_has_categoriaproduto.belongsTo(produto, { as: "Produto_idProduto_produto", foreignKey: "Produto_idProduto"});
  produto.hasMany(produto_has_categoriaproduto, { as: "produto_has_categoriaprodutos", foreignKey: "Produto_idProduto"});
  carrinho_has_promocaocarrinho.belongsTo(promocaocarrinho, { as: "PromocaoCarrinho_idPromocaoCarrinho_promocaocarrinho", foreignKey: "PromocaoCarrinho_idPromocaoCarrinho"});
  promocaocarrinho.hasMany(carrinho_has_promocaocarrinho, { as: "carrinho_has_promocaocarrinhos", foreignKey: "PromocaoCarrinho_idPromocaoCarrinho"});
  tipodeevento_has_evento.belongsTo(tipodeevento, { as: "TipoDeEvento_idTipoDeEvento_tipodeevento", foreignKey: "TipoDeEvento_idTipoDeEvento"});
  tipodeevento.hasMany(tipodeevento_has_evento, { as: "tipodeevento_has_eventos", foreignKey: "TipoDeEvento_idTipoDeEvento"});
  produto.belongsTo(tipodeproduto, { as: "TipoDeProduto_idTipoDeProduto_tipodeproduto", foreignKey: "TipoDeProduto_idTipoDeProduto"});
  tipodeproduto.hasMany(produto, { as: "produtos", foreignKey: "TipoDeProduto_idTipoDeProduto"});

  return {
    arquivo,
    carrinho,
    carrinho_has_promocaocarrinho,
    categoriaproduto,
    cliente,
    endereco,
    evento,
    evento_has_orientacaosexual,
    generomusical,
    generomusical_has_evento,
    organizador,
    orientacaosexual,
    pagamento,
    pedido,
    preco,
    preco_has_evento,
    produto,
    produto_has_carrinho,
    produto_has_categoriaproduto,
    promocaocarrinho,
    tipodeevento,
    tipodeevento_has_evento,
    tipodeproduto,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
