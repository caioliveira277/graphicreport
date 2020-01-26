import ToastMessage from "../toastMessage/toastfy";
export default async function Validation(data) {
  try {
    const { username, password } = data;

    if (!username) throw new Error("Informe o seu nome da usuário!");
    if (!password) throw new Error("Informe a sua senha!");

    //post api ...
    
    return true;
  } catch (error) {
    return ToastMessage(error.message, "error");
  }
}
