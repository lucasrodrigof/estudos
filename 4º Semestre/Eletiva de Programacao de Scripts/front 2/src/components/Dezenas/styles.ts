import styled from 'styled-components';

export const SorteioSld = styled.div`
    font-size:20px;
    color:  ${props => props.theme.sorteio};
`

export const DezenaSld = styled.div`
        height: 40px;
        width: 40px;
        background: ${props => props.theme.dezena};
        border-radius: 50%;
        align-items: center;
        display: inline-flex;
        justify-content: center;
        margin: 5px;
`