import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable';
import Statistics from './components/Statistics';
import { Container, Header, Select, Input, Button } from './components/styles';
// import BarChart from './components/BarChart';

const App = () => {
    const [month, setMonth] = useState(3); // Default to March
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    const handleMonthChange = (e) => {
        setMonth(parseInt(e.target.value));
    };

    return (
        <Container>
            <Header>
                <div>
                    <Select id="month" value={month} onChange={handleMonthChange}>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </Select>

                    <Input
                        type="text"
                        id="search-box"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <Button onClick={() => setPage(1)}>Search</Button>
                </div>
            </Header>

            <TransactionTable month={month} search={search} page={page} setPage={setPage} />
            <Statistics month={month} />
            {/* <BarChart month={month}/> */}
        </Container>
    );
};

export default App;
