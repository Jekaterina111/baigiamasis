import styled from "styled-components";
import Card from "../Card/Card";

export const CardList = styled.div`
display: flex;
flex-wrap: wrap;
`;

export const CardItem = styled(Card)`
    width: calc(33.33% - 1rem);
    box-sizing: border-box;
    box-shadow: 0.05rem 0.05rem 0.125rem rgba(0, 0, 0, 0.1);
    margin-left: 1rem;
    margin-bottom:1rem;
`;