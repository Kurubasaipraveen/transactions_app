// src/styles.js
import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    max-width: 1200px;
    margin: auto;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const Select = styled.select`
    padding: 10px;
    margin-right: 10px;
`;

export const Input = styled.input`
    padding: 10px;
    margin-right: 10px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
`;

export const Th = styled.th`
    background-color: #f4f4f4;
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
`;

export const Td = styled.td`
    padding: 10px;
    border-bottom: 1px solid #ddd;
`;

export const Pagination = styled.div`
    display: flex;
    justify-content: space-between;
`;
