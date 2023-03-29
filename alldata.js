function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <Card
      bgcolor="primary"
      txtcolor="light"
      header="All Data"
      body={
        <>
          <h5>All Data</h5>
        </>
      }
    />
  );
}
