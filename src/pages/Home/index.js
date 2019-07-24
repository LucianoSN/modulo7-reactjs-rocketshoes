import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
	return (
		<ProductList>
			<li>
				<img
					src="https://static.netshoes.com.br/produtos/tenis-nike-dart-12-msl-masculino/50/D12-2683-050/D12-2683-050_detalhe1.jpg?resize=280:280"
					alt="Tênis"
				/>
				<strong>Tênis muito legal</strong>
				<span>R$129,00</span>

				<button>
					<div>
						<MdShoppingCart size={16} color="#fff" /> 3
					</div>
					<span>ADICIONAR AO CARRINHO</span>
				</button>
			</li>
			<li>
				<img
					src="https://static.netshoes.com.br/produtos/tenis-nike-dart-12-msl-masculino/50/D12-2683-050/D12-2683-050_detalhe1.jpg?resize=280:280"
					alt="Tênis"
				/>
				<strong>Tênis muito legal</strong>
				<span>R$129,00</span>

				<button>
					<div>
						<MdShoppingCart size={16} color="#fff" /> 3
					</div>
					<span>ADICIONAR AO CARRINHO</span>
				</button>
			</li>
			<li>
				<img
					src="https://static.netshoes.com.br/produtos/tenis-nike-dart-12-msl-masculino/50/D12-2683-050/D12-2683-050_detalhe1.jpg?resize=280:280"
					alt="Tênis"
				/>
				<strong>Tênis muito legal</strong>
				<span>R$129,00</span>

				<button>
					<div>
						<MdShoppingCart size={16} color="#fff" /> 3
					</div>
					<span>ADICIONAR AO CARRINHO</span>
				</button>
			</li>
			<li>
				<img
					src="https://static.netshoes.com.br/produtos/tenis-nike-dart-12-msl-masculino/50/D12-2683-050/D12-2683-050_detalhe1.jpg?resize=280:280"
					alt="Tênis"
				/>
				<strong>Tênis muito legal</strong>
				<span>R$129,00</span>

				<button>
					<div>
						<MdShoppingCart size={16} color="#fff" /> 3
					</div>
					<span>ADICIONAR AO CARRINHO</span>
				</button>
			</li>
			<li>
				<img
					src="https://static.netshoes.com.br/produtos/tenis-nike-dart-12-msl-masculino/50/D12-2683-050/D12-2683-050_detalhe1.jpg?resize=280:280"
					alt="Tênis"
				/>
				<strong>Tênis muito legal</strong>
				<span>R$129,00</span>

				<button>
					<div>
						<MdShoppingCart size={16} color="#fff" /> 3
					</div>
					<span>ADICIONAR AO CARRINHO</span>
				</button>
			</li>
			<li>
				<img
					src="https://static.netshoes.com.br/produtos/tenis-nike-dart-12-msl-masculino/50/D12-2683-050/D12-2683-050_detalhe1.jpg?resize=280:280"
					alt="Tênis"
				/>
				<strong>Tênis muito legal</strong>
				<span>R$129,00</span>

				<button>
					<div>
						<MdShoppingCart size={16} color="#fff" /> 3
					</div>
					<span>ADICIONAR AO CARRINHO</span>
				</button>
			</li>
		</ProductList>
	);
}
