import InputMask from "./InputMask";

function LoginForm() {
  return (
    <div>
      <h1>Login</h1>
      <InputMask
        name="username"
        placeholder="Juan"
        label="Ingresa tu nombre (sin caracters especiales ni nums)"
        mask="1234567890-*/`+'¡ç´:_;"
      />
      <InputMask
        name="idnumber"
        placeholder="123456"
        label="Ingresa tu numero de identidad"
        mask="qazwsxedcrfvtgbyhnujmikolp"
      />
    </div>
  );
}

export default LoginForm;
