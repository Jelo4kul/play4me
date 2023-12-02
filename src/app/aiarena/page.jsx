import Table from '@/components/ui-components/table/table';
import React from 'react';
import styles from './page.module.css';

const AiArenaHomepage = () => {

    const tableData = (subData) => (
        {
            title: ["Amount", "Receipient", "Transaction"],
            stylesTh: {   
                "0": {
                    paddingLeft: "28px",
                }
            },
            stylesTd: {   
                "0": {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "20px",
                    paddingLeft: "30px",
                },
            },
            rows: createRows(subData)
        }
    )

  const createRows = (subData) => {
        subData = subData.slice().reverse();
        if(subData.length == 0){
            return <p>Loading</p> 
        } else {
            return subData?.map(({ receipient, amount, transaction }) => (  
                [   
                   <span key={amount}>{formatEther(amount)}</span>,
                    <span key={receipient}>{receipient}</span>,
                    <Link key={transaction} href={`https://sepolia.etherscan.io/tx/${transaction}`}>view transaction</Link>,
                ]
           ))
        }
     
     };

  return (
    <section className={styles.AiArenaHomepage}>
        <section>
            <div>
                <p>Total games played</p>
                <p>4,561</p>
            </div>
            <div>
                <p>Total number of players</p>
                <p>650</p>
            </div>
            <dv>
                <p>Average playing time</p>
                <p>16,000 hrs</p>
            </dv>
        </section>
        <section>
            <div>Total NRN staked by players</div>
            <div>16, 000 NRN</div>
        </section>
        <section>
            <section>
                <div>
                    <p>Players</p>
                    <p>View All</p>
                </div>
                <Table tableData={tableData(transactions)} />  
            </section>
            <section></section>
        </section>
    </section>
  )
}

export default AiArenaHomepage