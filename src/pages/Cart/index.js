import React from 'react';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
	return (
		<Container>
			<ProductTable>
				<thead>
					<tr>
						<th />
						<th>PRODUTO</th>
						<th>QTD</th>
						<th>SUBTOTAL</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<img
								src="https://static.netshoes.com.br/produtos/tenis-nike-dart-12-msl-masculino/50/D12-2683-050/D12-2683-050_detalhe1.jpg?resize=280:280"
								alt="Tênis"
							/>
						</td>
						<td>
							<strong>Tênis muito bonito</strong>
							<span>R$129,90</span>
						</td>
					</tr>
				</tbody>
			</ProductTable>

			<footer>
				<button type="button">Finalizar Pedido</button>
				<Total>
					<span>TOTAL</span>
					<strong>R$1920,28</strong>
				</Total>
			</footer>
		</Container>
	);
}
