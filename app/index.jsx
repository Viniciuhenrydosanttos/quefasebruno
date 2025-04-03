import { useEffect, useState } from "react";
import styled from "styled-components/native";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import InputTexto from "../components/input/input";
import Titulo from "../components/titulo/titulo";

export default function App() {
  const [email, setEmail] = useState("");
  const [hasEmailError, setHasEmailError] = useState(false);
  const [senha, setSenha] = useState("");
  const [hasSenhaError, setHasSenhaError] = useState(false);
  const [secureText, setSecureText] = useState(true);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setHasEmailError(email.length > 0 && !emailRegex.test(email));
  }, [email]);

  useEffect(() => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    setHasSenhaError(senha.length > 0 && !passwordRegex.test(senha));
  }, [senha]);

  return (
    <Tela>
      <IconContainer>
        <Ionicons name="person-circle-outline" size={80} color="#333" />
      </IconContainer>
      <Titulo texto="Login" flag={true} />

      <ContainerCampoTexto>
        <InputContainer>
          <Ionicons name="mail-outline" size={22} color="#333" />
          <InputTexto
            erro={hasEmailError}
            placeholder="exemplo@gmail.com.br"
            value={email}
            onChangeText={setEmail}
          />
        </InputContainer>
        {hasEmailError && <TextErrorHint>E-mail inválido</TextErrorHint>}

        <InputContainer>
          <Ionicons name="lock-closed-outline" size={22} color="#333" />
          <InputTexto
            secureTextEntry={secureText}
            erro={hasSenhaError}
            placeholder="**********"
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <Ionicons name={secureText ? "eye-off" : "eye"} size={22} color="#333" />
          </TouchableOpacity>
        </InputContainer>
        {hasSenhaError && <TextErrorHint>Senha inválida</TextErrorHint>}
      </ContainerCampoTexto>

      <IconRow>
        <TouchableOpacity>
          <FontAwesome name="envelope" size={28} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="linkedin-square" size={28} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="github" size={28} color="#333" />
        </TouchableOpacity>
      </IconRow>

      <BotaoEntrar>
        <AntDesign name="check" size={24} color="#fff" />
      </BotaoEntrar>

      <EsqueceuSenha>Esqueceu a Senha</EsqueceuSenha>
    </Tela>
  );
}

const Tela = styled.View`
  flex: 1;
  background-color: #f0f4ff;
  padding: 30px;
  align-items: center;
`;

const IconContainer = styled.View`
  margin-bottom: 10px;
`;

const ContainerCampoTexto = styled.View`
  gap: 15px;
  width: 85%;
`;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #cde5ff;
  padding: 12px;
  border-radius: 10px;
  width: 100%;
`;

const TextErrorHint = styled.Text`
  font-size: 14px;
  color: #e63946;
  text-align: left;
  width: 100%;
`;

const IconRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  margin-top: 20px;
`;

const BotaoEntrar = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: #4CAF50;
  padding: 12px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
`;

const EsqueceuSenha = styled.Text`
  margin-top: 15px;
  font-size: 14px;
  color: #555;
  text-decoration: underline; 
`;
