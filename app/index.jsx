import React from "react";
import styled from "styled-components/native";
import { Ionicons, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <Tela>
      <BarraSuperior>
        <Ionicons name="settings" size={24} color="#000" />
        <BotaoPerfil>
          <Ionicons name="person-circle" size={24} color="#000" />
        </BotaoPerfil>
      </BarraSuperior>

      <Titulo>Login</Titulo>

      <Texto>
        <Ionicons name="person" size={24} color="#000" />
        <Input placeholder="exemple@gmail.com.br" />
      </Texto>

      <Texto>
        <Ionicons name="lock-closed" size={24} color="#000" />
        <InputSenha placeholder="***********"  />
        <Ionicons name="eye-off" size={24} color="#000" />
        </Texto>

      <IconesSociais>
        <MaterialCommunityIcons name="gmail" size={24} color="#000" />
        <Ionicons name="logo-linkedin" size={24} color="#000" />
        <FontAwesome name="github" size={24} color="#000" />
      </IconesSociais>

      <Botao>
        <Ionicons name="checkmark" size={24} color="#000" />
      </Botao>

      <TextoLink>Esqueceu a senha?</TextoLink>

      {/* Barra inferior */}
      <BarraInferior>
        <Ionicons name="arrow-back" size={24} color="#000" />
        <Ionicons name="home" size={24} color="#000" />
        <Ionicons name="arrow-forward" size={24} color="#000" />
      </BarraInferior>
    </Tela>
  );
}

// Styled Components
const Tela = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #eaf6ff;
  padding: 20px;
`;

const BarraSuperior = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BotaoPerfil = styled.View`
  background-color: #caf0f8;
  padding: 8px;
  border-radius: 20px;
`;

const Titulo = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
  margin-top: 50px;
`;

const Texto = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #caf0f8;
  border-radius: 20px;
  width: 80%;
  padding: 10px;
  margin: 10px;
`;

const Input = styled.TextInput`
  flex: 1;
  padding: 12px;
  margin-left: 10px;
`;

const InputSenha = styled.TextInput`
  flex: 1;
  padding: 12px;
  margin-left: 10px;
`;

const Botao = styled.Pressable`
  background-color: #bee7ff;
  padding: 15px;
  border-radius: 20px;
  align-items: center;
  width: 60px;
  margin: 10px;
`;

const IconesSociais = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
  margin: 10px;
`;

const TextoLink = styled.Text`
  margin-top: 10px;
  color: #000;
  text-decoration-line: underline;
`;

const BarraInferior = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
