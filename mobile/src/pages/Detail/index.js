import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

import styles from './styles'
import logoImg from '../../assets/logo.png'

export default function Detail(){

  const incident = useRoute().params.incident

  const navigation = useNavigation()
  const mensage = `Olá, ${incident.name}, gostaria de ajudar no caso${incident.title} com o valor de ${Intl.NumberFormat('pt-BR',{ style: 'currency', currency:'BRL'}).format(incident.value)}`

  function navigateBack(){
    navigation.goBack()
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject:`Heroi do caso: ${incident.title}`,
      recipients:[incident.email],
      body:mensage
    })
  }

  

  function sendWhatsapp(){
    Linking.openURL(`whatsapp:/send?phone=${incident.whatsapp}&text=${mensage}`)
  }

  return(
    <View style={styles.container}>
      <View style = {styles.header} >
      <Image source = {logoImg} />
        <TouchableOpacity onPress={goBack}>
          <Feather name='arrow-left' size={28} color="#e02041"/>
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, {marginTop:0}]}>ONG:</Text>
        <Text style={styles.incidentValue}>
          {incident.name} de {incident.city}-{incident.uf}
        </Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>
          {Intl.NumberFormat('pt-BR',
          { style: 'currency', currency:'BRL'})
          .format(incident.value)}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o Dia!</Text>
        <Text style={styles.heroTitle}>Seja o Herói desse caso!</Text>

        <Text style={styles.heroDescription}>Entre em Contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity>
            <Text style={styles.action} onPress={sendWhatsapp}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.action} onPress={sendMail}>E-Mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}