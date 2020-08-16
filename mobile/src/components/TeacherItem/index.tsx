import React from 'react'
import { View, Text, Image } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

function TeacherItem(){
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{uri:'https://github.com/brunovivaldodev.png'}}
                />
            <View style={styles.profileInfo}>
                <Text style={styles.name}>Bruno Vivaldo</Text>
                <Text style={styles.subject}>Programação</Text>               
            </View>
            </View>

            <Text style={styles.bio}>
            Eu sou o Bruno Vivaldo.{'\n'}Actualmente Desenvolvedor (Web & Mobile), apaixonado por (UI & Ux Design) e Ensinar 💻👨🏾‍💻.
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora : {'  '}
                    <Text style={styles.priceValue}>7000 kz</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style={styles.favoriteButton}>
                        <Image source={heartOutlineIcon} />
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contacto</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;