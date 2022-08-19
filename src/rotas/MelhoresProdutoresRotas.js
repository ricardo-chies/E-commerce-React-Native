import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../telas/home';
import ProdutorRotas from "./ProdutorRotas";
import MelhoresProdutores from "../telas/melhoresProdutores"

const Stack = createNativeStackNavigator();

export default function MelhoresProdutoresRotas() {
    return <ProdutorRotas ComponentePrincipal={MelhoresProdutores} />
}