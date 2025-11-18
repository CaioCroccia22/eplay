import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { InputGroup, Row, TabButton } from './styles'

import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'

const CheckOut = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  return (
    <div className="container">
      <Card title="Dados de Cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome Completo</label>
              <input type="text" id="fullName"></input>
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">Email</label>
              <input type="text" id="email"></input>
            </InputGroup>
            <InputGroup>
              <label htmlFor="CPF">CPF</label>
              <input type="text" id="CPF"></input>
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de Entrega - Conteúdo Digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">Confirme o e-mail</label>
              <input type="email" id="deliveryEmail" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="deliveryEmail">Confirme o e-mail</label>
              <input type="email" id="deliveryEmail" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <div>
          <TabButton
            onClick={() => setPayWithCard(false)}
            isActive={!payWithCard}
          >
            <img src={boleto} alt="Boleto" />
            Boleto Bancário
          </TabButton>
          <TabButton
            onClick={() => setPayWithCard(true)}
            isActive={payWithCard}
          >
            <img src={cartao} alt="Cartão de crédito" />
            Cartão de crédito
          </TabButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardOwner">
                      {' '}
                      Nome do titular do cartão:{' '}
                    </label>
                    <input type="text" id="cardOwner" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfcardOwner">
                      CPF do titular do cartão:{' '}
                    </label>
                    <input type="text" id="cpfcardOwner" />
                  </InputGroup>
                </Row>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Nome do cartão: </label>
                    <input type="text" id="cardDisplayName" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão: </label>
                    <input type="text" id="cardNumber" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresMonth">Mês do vencimento: </label>
                    <input type="text" id="expiresMonth" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresYear">Ano do vencimento: </label>
                    <input type="text" id="expiresYear" />
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cardCode">CVV: </label>
                    <input type="text" id="cardCode" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="116px">
                    <select>
                      <option>1x de 200,00</option>
                      <option>2x de 200,00</option>
                      <option>3x de 200,00</option>
                    </select>
                  </InputGroup>
                </Row>
              </>
            ) : (
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt a
                excepturi laudantium labore quisquam exercitationem veritatis?
                Aut veritatis similique fuga pariatur debitis vitae dolores
                impedit sunt perferendis, inventore ipsam quibusdam!
              </p>
            )}
          </div>
        </div>
      </Card>
      <Button
        type="button"
        title="Clique aqui para finalizar a compra"
        variant={'primary'}
      >
        Finalizar a compra
      </Button>
    </div>
  )
}

export default CheckOut
