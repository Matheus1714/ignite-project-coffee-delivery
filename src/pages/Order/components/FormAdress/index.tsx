import * as S from './styles'
import * as Icon from '@phosphor-icons/react'

export function FormAdress() {
  return (
    <S.AdressInformation>
      <S.HeaderAdress>
        <Icon.MapPinLine size={22} />
        <div>
          <p>Endereço de Entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </S.HeaderAdress>
      <S.GridContainer>
        <S.GridItem>
          <S.Input type="text" id="cep" name="cep" placeholder="CEP" />
        </S.GridItem>
        <S.FullWidthItem>
          <S.Input type="text" id="rua" name="rua" placeholder="Rua" />
        </S.FullWidthItem>
        <S.GridItem>
          <S.Input type="text" id="numero" name="numero" placeholder="Número" />
        </S.GridItem>
        <S.DoubleWidthItem>
          <S.InputContainer>
            <S.Input
              type="text"
              id="complemento"
              name="complemento"
              placeholder="Complemento (opcional)"
            />
            <S.OptionalText>Opcional</S.OptionalText>
          </S.InputContainer>
        </S.DoubleWidthItem>
        <S.GridItem>
          <S.Input type="text" id="bairro" name="bairro" placeholder="Bairro" />
        </S.GridItem>
        <S.GridItem>
          <S.Input type="text" id="cidade" name="cidade" placeholder="Cidade" />
        </S.GridItem>
        <S.GridItem>
          <S.Input type="text" id="uf" name="uf" placeholder="UF" />
        </S.GridItem>
      </S.GridContainer>
    </S.AdressInformation>
  )
}
