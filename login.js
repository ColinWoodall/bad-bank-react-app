function Login(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);

    function validate(field, label){
    if (!field){
      setStatus('Error: No account found')
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function logInAcct(){
    console.log(name,email,password);
    if(!validate(name,'name'))return;
    if(!validate(email,'email'))return;
    if(!validate(password,'password'))return;
    ctx.users.push({name,email,password,balance:1000});
    setShow(false);
  }

    return(
    <Card
    bgcolor="primary"
    header="Create an Account"
    status={status}
    body={(
      <>
      Email<br/>
      <input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
      Password<br/>
      <input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
      <button type="submit" className="btn btn-light" onClick={logInAcct}>Log In</button>
      </>
    )}
    />
    )}
