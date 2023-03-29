function Balance() {
  const ctx = React.useContext(UserContext);
  return (
    <Card
      bgcolor="primary"
      txtcolor="light"
      header="Balance"
      body={
        <>
          <h5>Current Balance = {bankAmount}</h5>
        </>
      }
    />
  );
}
