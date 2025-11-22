import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import { InputGroup, Row, TabButton } from './styles'

import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'
import { useFormik } from 'formik'
import * as yup from 'yup'

const CheckOut = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: yup.object({
      fullName: yup
        .string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      email: yup
        .string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      cpf: yup
        .string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(15, 'O campo precisa ter 14 caracteres')
        .required('O campo é obrigatório'),
      deliveryEmail: yup
        .string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      confirmDeliveryEmail: yup
        .string()
        .oneOf([yup.ref('deliveryEmail')], 'Os email são diferentes')
        .required('O campo é obrigatório'),

      cardOwner: yup
        .string()
        .when((payWithCard, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        ),
      cpfCardOwner: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        ),
      cardDisplayName: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        ),
      cardNumber: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        ),
      expiresMonth: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        ),
      expiresYear: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        ),
      cardCode: yup
        .string()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        ),
      installments: yup
        .number()
        .when((values, schema) =>
          payWithCard ? schema.required('O campo é obrigatório') : schema
        )
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    // verificar se a propriedade esta no objeto
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  console.log(form)
  return (
    <form onSubmit={form.handleSubmit} className="container">
      <Card title="Dados de Cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullName">Nome Completo</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              ></input>
              <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
              ></input>
              <small>{getErrorMessage('email', form.errors.email)}</small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="CPF">CPF</label>
              <input
                type="text"
                id="CPF"
                name="cpf"
                value={form.values.cpf}
                onChange={form.handleChange}
              ></input>
              <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de Entrega - Conteúdo Digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">Confirme o e-mail</label>
              <input
                type="email"
                id="deliveryEmail"
                name="deliveryEmail"
                value={form.values.deliveryEmail}
                onChange={form.handleChange}
              />
              <small>
                {getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}
              </small>
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input
                type="email"
                id="confirmDeliveryEmail"
                name="confirmDeliveryEmail"
                value={form.values.confirmDeliveryEmail}
                onChange={form.handleChange}
              />
              <small>
                {getErrorMessage('cpf', form.errors.confirmDeliveryEmail)}
              </small>
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
                    <input
                      type="text"
                      id="cardOwner"
                      value={form.values.cardOwner}
                      onChange={form.handleChange}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfcardOwner">
                      CPF do titular do cartão:{' '}
                    </label>
                    <input
                      type="text"
                      id="cpfcardOwner"
                      value={form.values.cpfCardOwner}
                      onChange={form.handleChange}
                    />
                  </InputGroup>
                </Row>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Nome do cartão: </label>
                    <input
                      type="text"
                      id="cardDisplayName"
                      value={form.values.cardDisplayName}
                      onChange={form.handleChange}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Número do cartão: </label>
                    <input
                      type="text"
                      id="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                    />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresMonth">Mês do vencimento: </label>
                    <input
                      type="text"
                      id="expiresMonth"
                      value={form.values.expiresMonth}
                      onChange={form.handleChange}
                    />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresYear">Ano do vencimento: </label>
                    <input
                      type="text"
                      id="expiresYear"
                      value={form.values.expiresYear}
                      onChange={form.handleChange}
                    />
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cardCode">CVV: </label>
                    <input
                      type="text"
                      id="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                    />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="116px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select
                      id="installments"
                      name="installments"
                      value={form.values.installments}
                      onChange={form.handleChange}
                    >
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
    </form>
  )
}

export default CheckOut
