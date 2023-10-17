import NavTop from "../components/NavTop"
import Input from "../components/Input"
import Button from "../components/Button"

export default function Home(){
    return (
        <div>
            <NavTop title="Login"/>
            <Input name="name" placeholder="Masukan Email Anda"/>
            <Input name="name" placeholder="Masukan Passowrd Anda" type="password"/>
            <Button  placeholder={"Login"} mode="main"/>
        </div>
    )
}