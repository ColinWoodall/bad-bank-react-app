function Withdraw() {
  const ctx = React.useContext(UserContext);
  const [amount, setAmount] = React.useState("");
  const [status, setStatus] = React.useState("");
  let bankAmount = 500;

  function changeAmount() {
    if (amount <= 0) {
      let newBankAmount = amount - bankAmount;
      let bankAmount = newBankAmount;
      return;
    }
  }

  return (
    <Card
      bgcolor="primary"
      txtcolor="light"
      header="Withdraw"
      body={
        <>
          <h5 className="currentBankAmount">Current Amount: {bankAmount}</h5>
          <input
            type="number"
            className="form-control"
            id="amount"
            placeholder="Enter Withdraw Amount"
            value={amount}
            onChange={(e) => setAmount(e.currentTarget.value)}
          />
          <br></br>
          <button
            type="submit"
            className="btn btn-light"
            onClick={changeAmount}
          >
            Deposit
          </button>
        </>
      }
    />
  );
}
